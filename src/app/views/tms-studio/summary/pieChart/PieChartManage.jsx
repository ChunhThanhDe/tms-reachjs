import React, { useEffect, useState } from 'react';
import { getStudioOnlinePieChart } from 'app/Services/StudioServices';
import PieChart from '../../../../components/Chart/PieChart';
import { Card } from '@mui/material';
import { titleStyle, Title } from 'app/components/Chart/ChartTitle';

const PieChartManage = () => {
  const [Online, setOnline] = useState([]);
  const [resolution, setResolution] = useState([]);
  const [network, setNetwork] = useState([]);
  //   const [Summary, setSummary] = useState(false);

  const handleGetOnline = async () => {
    let response = await getStudioOnlinePieChart('online');
    console.log('history: ', response);
    if (response.status === 200) {
      setOnline(response.data);
      //   setSummary(true);
    }
  };

  const handleGetNetwork = async () => {
    let response = await getStudioOnlinePieChart('network');
    console.log('history: ', response);
    if (response.status === 200) {
      setNetwork(response.data);
      //   setSummary(true);
    }
  };

  const handleGetResolution = async () => {
    let response = await getStudioOnlinePieChart('hdmi');
    console.log('history: ', response);
    if (response.status === 200) {
      setResolution(response.data);
      //   setSummary(true);
    }
  };

  useEffect(() => {
    handleGetOnline(); // Call handleGetSummary once when component mounts
    handleGetResolution();
    handleGetNetwork();
    const intervalId = setInterval(() => {
      handleGetOnline(); // Call handleGetSummary every 3 minutes
      handleGetResolution();
      handleGetNetwork();
    }, 180000);
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);
  //   useEffect(() => {
  //     if (Summary) {
  //       console.log('Summary: ', Online);
  //       setSummary(false);
  //     }
  //   }, [Summary]);

  return (
    <>
      <Card sx={{ px: 1, py: 1, mb: 1 }}>
        <Title level={3} style={titleStyle}>
          Online
        </Title>
        <PieChart data={Online} />
      </Card>
      <Card sx={{ px: 1, py: 1, mb: 1 }}>
        <Title level={3} style={titleStyle} mt={2}>
          Resolution
        </Title>
        <PieChart data={resolution} />
      </Card>
      <Card sx={{ px: 1, py: 1, mb: 1 }}>
        <Title level={3} style={titleStyle} mt={2}>
          Network
        </Title>
        <PieChart data={network} />
      </Card>
    </>
  );
};

export default PieChartManage;
