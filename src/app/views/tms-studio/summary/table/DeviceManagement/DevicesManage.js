import { Breadcrumb } from 'app/components';
import { Stack } from '@mui/material';
import DeviceManageTable from './TableDevices/DevicesManageTable';
import { Container } from 'app/components/TagPage/CustomTag';
const DevicesManage = () => {
  return (
    <Container>
      <Breadcrumb
        routeSegments={[
          { name: 'Devices Manager', path: '/tms-devices/devices-management' },
          { name: 'Devices', path: '/tms-devices/devices-management' },
        ]}
      />
      <Stack spacing={3}>
        <DeviceManageTable />
      </Stack>
    </Container>
  );
};

export default DevicesManage;
