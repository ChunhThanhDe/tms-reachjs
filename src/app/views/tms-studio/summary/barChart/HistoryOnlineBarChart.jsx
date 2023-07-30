import React, { useEffect, useState } from 'react';
import BarChart from 'app/components/Chart/BarChart';
import { getStudioHistoryOnlineBarChart } from 'app/Services/StudioServices';

const HistoryOnlineBarChart = () => {
  const [historyOnline, setHistoryOnline] = useState([]);
  //   const [Summary, setSummary] = useState(false);

  const handleGetHistoryOnline = async () => {
    let response = await getStudioHistoryOnlineBarChart();
    console.log('history: ', response);
    if (response.status === 200) {
      let output = [...response.data.map(({ date, devicenumber }) => [date, devicenumber])];

      setHistoryOnline(output);
      //   setSummary(true);
    }
  };
  useEffect(() => {
    handleGetHistoryOnline(); // Call handleGetSummary once when component mounts
    const intervalId = setInterval(() => {
      handleGetHistoryOnline(); // Call handleGetSummary every 3 minutes
    }, 180000);
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);
  //   useEffect(() => {
  //     if (Summary) {
  //       console.log('Summary: ', historyOnline);
  //       setSummary(false);
  //     }
  //   }, [Summary]);

  return (
    // <Card sx={{ px: 1, py: 1, mb: 1 }}>
    //   <Title level={3} style={titleStyle}>
    //     Online
    //   </Title>
    <BarChart data={historyOnline} legend={'Devices number'} />
    // </Card>
  );
};

export default HistoryOnlineBarChart;
