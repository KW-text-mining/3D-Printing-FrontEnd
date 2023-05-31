import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
// @mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Card, CardHeader, Box, CardProps } from '@mui/material';
// components
// import { CustomSmallSelect, SelectSmall } from '../../../../components/custom-input';
import Chart, { useChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

// -----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    categories?: string[];
    colors?: string[];
    series: {
      type: string;
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ApexOptions;
  };
}

export default function BankingBalanceStatistics({ title, subheader, chart, ...other }: Props) {
  const { categories, colors, series, options } = chart;

  const [seriesData, setSeriesData] = useState('Year');

  const chartOptions = useChart({
    colors,
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories,
    },
    tooltip: {
      y: {
        formatter: (value: number) => `$${value}`,
      },
    },
    ...options,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSeriesData(event.target.value);
  };

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Range</InputLabel>

              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={seriesData}
                label="Range"
                onChange={handleChange}
              >
                <MenuItem value="Year">Year</MenuItem>
                <MenuItem value="Month">Month</MenuItem>
                <MenuItem value="Week">Week</MenuItem>
              </Select>
            </FormControl>
          </>

          // <SelectSmall series={seriesData} >
          // {series.map((option) => (
          //   <option key={option.type} value={option.type}>
          //     {option.type}
          //   </option>
          // ))}
          // </SelectSmall>

          // <CustomSmallSelect
          //   value={seriesData}
          //   onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          //     setSeriesData(event.target.value)
          //   }
          // >
          // {series.map((option) => (
          //   <option key={option.type} value={option.type}>
          //     {option.type}
          //   </option>
          // ))}
          // </CustomSmallSelect>

        }
      />
<>
      {
        series.map((item)=> (console.log(item)) )
      }
      </>
      {series.map((item) => (
        <Box key={item.type} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.type === seriesData && (
            <Chart type="bar" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </Card>
  );
}
