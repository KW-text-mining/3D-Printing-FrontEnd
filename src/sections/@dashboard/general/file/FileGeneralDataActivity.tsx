import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
// @mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Card, CardHeader, Box, CardProps } from '@mui/material';
// utils
import { fData } from '../../../../utils/formatNumber';
// components
// import { CustomSmallSelect } from '../../../../components/custom-input';
import Chart, { useChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    labels: {
      [key: string]: string[];
    };
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

export default function FileGeneralDataActivity({ title, subheader, chart, ...other }: Props) {
  const { labels, colors, series, options } = chart;

  const [seriesData, setSeriesData] = useState('Week');

  const chartOptions = useChart({
    chart: {
      stacked: true,
    },
    colors,
    stroke: {
      width: 0,
    },
    xaxis: {
      categories:
        (seriesData === 'Week' && labels.week) ||
        (seriesData === 'Month' && labels.month) ||
        labels.year,
    },
    tooltip: {
      y: {
        formatter: (value: number) => fData(value),
      },
    },
    plotOptions: {
      bar: {
        borderRadius: (seriesData === 'Week' && 8) || (seriesData === 'Month' && 6) || 10,
        columnWidth: '20%',
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
