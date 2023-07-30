import { Breadcrumb } from 'app/components';
import { Stack } from '@mui/material';
import { Container } from 'app/components/TagPage/CustomTag';
import AppTable from './AppTable/AppTable';
const ApplicationManage = () => {
  return (
    <Container>
      <Breadcrumb
        routeSegments={[
          { name: 'Application Manager', path: '/tms-application/application-management' },
          { name: 'Applications', path: '/tms-application/application-management' },
        ]}
      />
      <Stack spacing={3}>
        <AppTable />
      </Stack>
    </Container>
  );
};

export default ApplicationManage;
