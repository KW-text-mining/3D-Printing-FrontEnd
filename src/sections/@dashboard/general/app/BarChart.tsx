import axios from 'axios';
import { useEffect, useState } from 'react';
// @mui
import { Card, CardProps, CardHeader } from '@mui/material';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
// components
import Chart, { useChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const series = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];

interface Props extends CardProps {
  title?: string;
}

export default function ChartBar({title} : Props) {
  
  const [loading,setLoading] = useState(true);
  const [testcategories, setTestCategories] = useState<string[]>([]);
  const [testseries, setTestSeries] = useState(series);
  const [series2, setSeries] = useState({});

  const buttonTitle = useSelector((state:RootState) => state.bigcatebutton);
  const buttonWord = useSelector((state:RootState) => state.wordcloudbutton);
  const date = useSelector((state:RootState) => state.startenddate);
  const start = JSON.stringify(date).slice(1,11)
  const end = JSON.stringify(date).slice(11,21)

  useEffect(()=>{
    setLoading(true);
  },[buttonWord])

  // api 호출
  useEffect(() => {
    const fetchDatas = async () => {
        const response = await axios.get(
          `http://35.73.182.58:8080/data/test?startDate=${start}&endDate=${end}&category=${buttonTitle}`
        );
        setSeries(response.data.dtos);
        setLoading(false);
        const series3 = response.data.dtos;

        for (let i = 0; i < series3.length; i+=1 )
          if (series3[i].resultDTOList[0].topic === buttonWord) break
        
        const test1 = [];
        const test2 = [];

        for (let i = 0; i < series3.length; i+=1 ){
          test1.push(series3[i].resultDTOList[i].topic)
          test2.push(series3[i].resultDTOList[i].percent)
        }

        setTestCategories(test1);
        setTestSeries([{ data: test2}]);
      };
    fetchDatas();
  }, [buttonWord]);
  
  const chartOptions = useChart({
    stroke: { show: false },
    plotOptions: {
      bar: { horizontal: true, barHeight: '30%' },
    },
    xaxis: {
      categories: testcategories
    },
  });

  return (
    <Card>
      <CardHeader title={title} subheader={buttonWord}/>
        {loading ? <></> : <Chart type="bar" series={testseries} options={chartOptions} height={320} /> }
    </Card>
  )
}
