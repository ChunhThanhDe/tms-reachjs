import { Breadcrumb } from 'app/components';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import PolicyAPKTable from './PolicyAPKTable/PolicyAPKTable';
// import { Container } from 'app/components/TagPage/CustomTag';
import {
  Card,
  // Card,
  Grid,
} from '@mui/material';
// import { titleStyle, Title } from 'app/components/Chart/ChartTitle';
import { ContentBox } from 'app/components/TagPage/CustomTag';
import PolicyInfo from './PolicyInfo';
import PolicDevicesTable from './PolicyDeviceTable/PolicydDeviceTable';
const SinglePolicy = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const policyId = searchParams.get('id');
  const policyName = searchParams.get('pn');

  return (
    <Fragment>
      <Breadcrumb
        routeSegments={[
          { name: 'Policy Manager', path: '/tms-policy/apk-management' },
          { name: 'Policy', path: '/tms-policy/policy-management' },
          {
            name: `${policyName}`,
            path: `/tms-policy/policy-management/policy?id=${policyId}&pn=${policyName}`,
          },
        ]}
      />
      <ContentBox className="analytics">
        <Grid container spacing={2} sx={{ mb: 2 }} alignItems="stretch">
          <Grid item lg={3} md={3} sm={3} xs={12} spacing={1}>
            <PolicyInfo id={policyId} />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <PolicDevicesTable id={policyId} />
          </Grid>
        </Grid>
        <Grid container spacing={2} flexDirection="row">
          <Grid item lg={3} md={3} sm={3} xs={12} spacing={1}>
            <PolicyAPKTable id={policyId} />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default SinglePolicy;
