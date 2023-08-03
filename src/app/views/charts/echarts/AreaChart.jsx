import ReactEcharts from 'echarts-for-react';

const option = {
  grid: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  xAxis: {
    show: true,
    type: 'category',
    showGrid: true,
    boundaryGap: true,
  },
  yAxis: {
    show: true,
    type: 'value',
    splitLine: { show: true },
  },
  series: [
    {
      data: [100, 18, 20, 30, 40, 43],
      type: 'line',
      areaStyle: {},
      smooth: true,
    },
  ],
};

const AreaChart = ({ height, color }) => {
  return <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
};

export default AreaChart;
