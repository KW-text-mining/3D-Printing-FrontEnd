import axios from 'axios';
import { useEffect, useState } from 'react';
// @mui
import { Card, CardProps, CardHeader } from '@mui/material';
import ProgressBar from 'src/components/progress-bar/ProgressBar';
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
        setLoading(false);
        const APIseries = response.data.dtos;

        for (let i = 0; i < APIseries.length; i+=1 )
          if (APIseries[i].resultDTOList[0].topic === buttonWord) break
        
        const categoryData = [];
        const seriesData = [];

        for (let i = 0; i < APIseries.length; i+=1 ){
          categoryData.push(APIseries[i].resultDTOList[i].topic)
          seriesData.push(APIseries[i].resultDTOList[i].percent)
        }

        setTestCategories(categoryData);
        setTestSeries([{ data: seriesData}]);
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
        {loading ? <ProgressBar/> : <Chart type="bar" series={testseries} options={chartOptions} height={320} /> }
    </Card>
  )
}
