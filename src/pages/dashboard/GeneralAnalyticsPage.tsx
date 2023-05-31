import React, { useEffect, useState } from 'react';
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
// sections
// import {
//   AnalyticsTasks,
//   AnalyticsNewsUpdate,
//   AnalyticsOrderTimeline,
//   AnalyticsCurrentVisits,
//   AnalyticsWebsiteVisits,
//   AnalyticsTrafficBySite,
//   AnalyticsWidgetSummary,
//   AnalyticsCurrentSubject,
//   AnalyticsConversionRates,
// } from '../../sections/@dashboard/general/analytics';

import {AnalyticsTotal} from '../../sections/@dashboard/general/analytics';

// ----------------------------------------------------------------------

const TIME_LABELS = {
  week: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  year: ['2018', '2019', '2020', '2021', '2022'],
};

const Year_Data =[
  {"name":"3D Printing","data":[5445,4747,3865,3272,1814]},
  {"name":"Art","data":[3978,3434,2784,2881,2281]},
  {"name":"Fashion","data":[2745,2654,2012,2047,1576]},
  {"name":"Gadgets","data":[5832,5451,4923,4220,2316]},
  {"name":"Hobby","data":[5342,5115,3883,3060,2063]},
  {"name":"Household","data":[5604,5542,4464,4342,2808]},
  {"name":"Learning","data":[1663,1634,1675,1284,1113]},
  {"name":"Models","data":[3905,4227,3233,2799,2309]},
  {"name":"Tools","data":[3588,4133,3909,3273,2045]},
  {"name":"Toys & Games","data":[7338,8226,6625,5293,3881]}
];

const Week_Data = [
  {"name":"3D Printing","data":[34,17,11,18,25,12,11]},
  {"name":"Art","data":[12,14,15,16,14,13,36]},
  {"name":"Fashion","data":[19,12,12,11,10,11,13]},
  {"name":"Gadgets","data":[46,48,23,27,57,19,22]},
  {"name":"Hobby","data":[29,17,32,32,26,19,15]},
  {"name":"Household","data":[34,32,31,26,23,31,16]},
  {"name":"Learning","data":[8,9,11,10,9,6,8]},
  {"name":"Models","data":[11,26,13,12,10,8,14]},
  {"name":"Tools","data":[32,36,29,15,21,12,14]},
  {"name":"Toys & Games","data":[66,46,52,50,32,24,23]}
];

export default function GeneralAnalyticsPage() {
  const theme = useTheme();
  const [count, setCount] = useState(null);
  const { themeStretch } = useSettingsContext();

  useEffect(() => {
    const fetchDatas = async () => {
        const response = await axios.get(
          `http://35.73.182.58:8080/data/countall`
        );

        setCount(response.data);
    };
    fetchDatas();
  }, []);

  console.log(count);

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
          {/* <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="likes"
              total={714000}
              icon="ant-design:android-filled"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="makes"
              total={1352831}
              color="info"
              icon="ant-design:apple-filled"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Item Orders"
              total={1723315}
              color="warning"
              icon="ant-design:windows-filled"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Bug Reports"
              total={234}
              color="error"
              icon="ant-design:bug-filled"
            />
          </Grid> */}

          <Grid item xs={12} md={12}>
          
            <AnalyticsTotal
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
                    data: Week_Data,
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
                    data: Year_Data
                  },
                ],
              }}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AnalyticsWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chart={{
                labels: [
                  '01/01/2003',
                  '02/01/2003',
                  '03/01/2003',
                  '04/01/2003',
                  '05/01/2003',
                  '06/01/2003',
                  '07/01/2003',
                  '08/01/2003',
                  '09/01/2003',
                  '10/01/2003',
                  '11/01/2003',
                ],
                series: [
                  {
                    name: 'Team A',
                    type: 'column',
                    fill: 'solid',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                  },
                  {
                    name: 'Team B',
                    type: 'area',
                    fill: 'gradient',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                  {
                    name: 'Team C',
                    type: 'line',
                    fill: 'solid',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentVisits
              title="Current Visits"
              chart={{
                series: [
                  { label: 'America', value: 4344 },
                  { label: 'Asia', value: 5435 },
                  { label: 'Europe', value: 1443 },
                  { label: 'Africa', value: 4443 },
                ],
                colors: [
                  theme.palette.primary.main,
                  theme.palette.info.main,
                  theme.palette.error.main,
                  theme.palette.warning.main,
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chart={{
                series: [
                  { label: 'Italy', value: 400 },
                  { label: 'Japan', value: 430 },
                  { label: 'China', value: 448 },
                  { label: 'Canada', value: 470 },
                  { label: 'France', value: 540 },
                  { label: 'Germany', value: 580 },
                  { label: 'South Korea', value: 690 },
                  { label: 'Netherlands', value: 1100 },
                  { label: 'United States', value: 1200 },
                  { label: 'United Kingdom', value: 1380 },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentSubject
              title="Current Subject"
              chart={{
                categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
                series: [
                  { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                  { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                  { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsNewsUpdate title="News Update" list={_analyticPost} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsOrderTimeline title="Order Timeline" list={_analyticOrderTimeline} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsTrafficBySite title="Traffic by Site" list={_analyticTraffic} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
