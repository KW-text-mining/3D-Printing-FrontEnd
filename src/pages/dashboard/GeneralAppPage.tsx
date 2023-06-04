import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack } from '@mui/material';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
// _mock_
import {
  _appFeatured,
  _appAuthors,
  _appInstalled,
  _appRelated,
  _appInvoices,
  _bankingContacts,
  _ecommerceLatestProducts,
  _bigcategory_ranks
} from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import Progressbar from './Progressbar';
// sections
import {
  CategoryOneGraph,
  AppDatePicker2,
  TagWordCloud,
  Ranks,
  BarChart,
} from '../../sections/@dashboard/general/app';

// ----------------------------------------------------------------------

export default function GeneralAppPage() {
  const theme = useTheme();
  const { themeStretch } = useSettingsContext();
  const [loading, setLoading] = useState(true);
  const [bigcategory, setBigCategory] = useState([]);

  const date = useSelector((state:RootState) => state.startenddate);
  const start = JSON.stringify(date).slice(1,11)
  const end = JSON.stringify(date).slice(11,21)

  // api 호출
  useEffect(() => {
    const fetchDatas = async () => {
        const response = await axios.get(
          `http://35.73.182.58:8080/data/period?startDate=${start}&endDate=${end}`
        );

        setBigCategory(response.data);
        setLoading(false);
    };
     fetchDatas();
  }, [start,end]);

  return (
    <>
      <Helmet>
        <title> 3D Printing Category Dashboard </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
            <AppDatePicker2 />
        </Grid>
        
          <Grid item xs={12} md={8}>
          {loading ? <Progressbar/> :
            <Stack spacing={2}>
            <CategoryOneGraph
              title="BigCategory Analytics"
              chart={{
                series: bigcategory,
                colors: [
                  theme.palette.error.dark,
                  theme.palette.warning.dark,
                  theme.palette.success.dark,
                  theme.palette.error.main,
                  theme.palette.info.dark,
                  theme.palette.info.darker,
                  theme.palette.success.light,
                  theme.palette.info.main,
                  theme.palette.warning.light,
                  theme.palette.primary.main
                ],
              }}
            />
            <TagWordCloud title="LDA WordCloud" />
            </Stack>
          }
          </Grid>
        
          <Grid item xs={12} md={4}>
            <Ranks title="BigCategory Ranks" list={_bigcategory_ranks} />
          </Grid>

          <Grid item xs={12} md={12}>
            <BarChart title="Bar Chart"/>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
