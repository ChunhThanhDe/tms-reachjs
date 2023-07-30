import { Breadcrumb } from 'app/components';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import {
  Card,
  // Card,
  Grid,
} from '@mui/material';
// import { titleStyle, Title } from 'app/components/Chart/ChartTitle';
import { ContentBox } from 'app/components/TagPage/CustomTag';
import ApplicationInfo from './AplicationInfo';
import DevicePerformance from './DevicePerformance';
import AppDeviceTable from './AppDeviceTable/AppDeviceTable';
import DevicePolicyTable from './DevicePolicyTable/DevicesPolicyTable';
const SingleApplication = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const appId = searchParams.get('id');
  const appName = searchParams.get('name');

  return (
    <Fragment>
      <Breadcrumb
        routeSegments={[
          { name: 'Applications Manager', path: '/tms-application/application-management' },
          { name: 'Aplications', path: '/tms-application/application-management' },
          {
            name: `${appName}`,
            path: `/tms-applications/application-management/application?id=${appId}&name=${appName}`,
          },
        ]}
      />
      <ContentBox className="analytics">
        <Grid container spacing={2} sx={{ mb: 2 }} alignItems="stretch">
          <Grid item lg={3} md={3} sm={3} xs={12}>
            <ApplicationInfo id={appId} />
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={12}>
            <AppDeviceTable id={appId} />
            {/* <Card style={{ height: '100%', overflow: 'auto' }}></Card> */}
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default SingleApplication;
