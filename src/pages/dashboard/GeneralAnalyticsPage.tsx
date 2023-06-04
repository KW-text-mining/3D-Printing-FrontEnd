import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// _mock_
import { _analyticPost, _analyticOrderTimeline, _analyticTraffic } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import { AppWidgetSummary } from '../../sections/@dashboard/general/app';
import {AnalyticsTotal} from '../../sections/@dashboard/general/analytics';
import Progressbar from './Progressbar';

// ----------------------------------------------------------------------

const TIME_LABELS = {
  week: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  year: ['2018', '2019', '2020', '2021', '2022'],
};

export default function GeneralAnalyticsPage() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [monthData, setMonthData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [weekData, setWeekData] = useState([]);
  const { themeStretch } = useSettingsContext();

  // api 호출
  useEffect(() => {
    const fetchDatas = async () => {
        const response = await axios.get(
          `http://35.73.182.58:8080/data/dataweek`
        );
        const response2 = await axios.get(
          `http://35.73.182.58:8080/data/datayears`
        );
        const response3 = await axios.get(
          `http://35.73.182.58:8080/data/periodmonth?year=2023&month=03`
        );

        setWeekData(response.data);
        setYearData(response2.data);
        setMonthData(response3.data);
        setLoading(false);
    };
    fetchDatas();
  }, []);

  return (
    <>
      <Helmet>
        <title> 3D Printing DashBoard </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Thingiverse Analytics
        </Typography>

        <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total models"
              percent={0}
              total={318722}
              chart={{
                colors: [theme.palette.primary.main],
                series: [36616, 30123, 19526, 40884, 35284, 39817, 13456, 31297, 25360, 50406],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total likes"
              percent={0}
              total={59292496}
              chart={{
                colors: [theme.palette.info.main],
                series: [8051261, 5638273, 2023354, 5762779, 5732899, 9488916, 1240346, 7950724, 4122634, 9281310],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total makes"
              percent={0}
              total={729793}
              chart={{
                colors: [theme.palette.warning.main],
                series: [140066, 95082, 21981, 76356, 49392, 89923, 10749, 115200, 26784, 104260
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
          
            {loading ? <Progressbar/> : <AnalyticsTotal
              title="Total Analytics"
              chart={{
                labels: TIME_LABELS,
                colors: [
                  theme.palette.error.light,
                  theme.palette.warning.light,
                  theme.palette.success.main,
                  theme.palette.error.main,
                  theme.palette.info.light,
                  theme.palette.info.darker,
                  theme.palette.success.light,
                  theme.palette.warning.main,
                  theme.palette.info.main,
                  theme.palette.primary.light
                ],
                series: [
                  {
                    type: 'Week',
                    data: weekData,
                  },
                  {
                    type: 'Month',
                    data: [
                      { name: '3D Printing', data: [20, 34, 48, 65, 37, 48, 32, 64, 87, 65, 23, 97] },
                      { name: 'Art', data: [10, 34, 13, 26, 27, 28, 2, 43, 64, 12, 76, 8 ] },
                      { name: 'Fashion', data: [10, 14, 13, 16, 17, 18, 12, 23 ,29, 19, 23, 21] },
                      { name: 'Gadgets', data: [5, 12, 6, 7, 8, 9, 2, 45, 9, 43, 7, 23] },
                      { name: 'Hobby', data: [5, 12, 6, 7, 8, 9, 13, 23, 28, 41, 4] },
                      { name: 'Household', data: [5, 53, 3, 4, 52, 4,12, 17, 19, 24, 31, 27] },
                      { name: 'Learning', data: [4, 2, 11, 65, 34, 2, 23, 52, 12, 29, 12, 17] },
                      { name: 'Models', data: [5, 17, 8, 43, 2, 2, 3, 2, 3, 5, 7, 23] },
                      { name: 'Tools', data: [7, 32, 23, 4, 0, 0, 12, 23, 39, 38, 35, 21] },
                      { name: 'Toys & Games', data: [8, 15, 23, 67, 2, 0, 12 ,43, 18, 14, 12, 19] },
                    ],
                  },
                  {
                    type: 'Year',
                    data: yearData
                  },
                ],
              }}
            />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
