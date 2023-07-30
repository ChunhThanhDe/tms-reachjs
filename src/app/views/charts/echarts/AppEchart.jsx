import { Box, useTheme } from '@mui/material';
import Breadcrumb from 'app/components/Breadcrumb';
import SimpleCard from 'app/components/Card/SimpleCard';
import AreaChart from './AreaChart';
import ComparisonChart from './ComparisonChart';
import DoughnutChart from './Doughnut';
import LineChart from './LineChart';

import { Container } from 'app/components/TagPage/CustomTag';

const AppEchart = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Charts' }, { name: 'Echarts' }]} />
      </Box>

      <SimpleCard title="Doughnut Chart">
        <DoughnutChart
          height="350px"
          color={[
            theme.palette.primary.dark,
            theme.palette.primary.main,
            theme.palette.primary.light,
          ]}
        />
      </SimpleCard>

      <Box sx={{ py: '12px' }} />

      <SimpleCard title="Line Chart">
        <LineChart
          height="350px"
          color={[theme.palette.primary.main, theme.palette.primary.light]}
        />
      </SimpleCard>

      <Box sx={{ py: '12px' }} />

      <SimpleCard title="Comparison Chart">
        <ComparisonChart
          height="350px"
          color={[theme.palette.primary.dark, theme.palette.primary.light]}
        />
      </SimpleCard>

      <Box sx={{ py: '12px' }} />

      <SimpleCard title="Area Chart">
        <AreaChart height="350px" color={[theme.palette.primary.main]} />
      </SimpleCard>
    </Container>
  );
};

export default AppEchart;
