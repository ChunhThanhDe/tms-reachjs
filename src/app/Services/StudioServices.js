import axios from 'axios.js';

export const getSummaryforStudio = () => {
  return axios({
    method: 'get',
    url: `/TMS/api/terminalStudio/device`,
  }).catch(function (error) {
    if (error.response) {
      console.log(`error status`, error.response);
      return error.response;
    }
  });
};

export const getStudioHistoryOnlineBarChart = () => {
  return axios({
    method: 'get',
    url: `/TMS/api/chart/bar/device`,
  }).catch(function (error) {
    if (error.response) {
      console.log(`error status`, error.response);
      return error.response;
    }
  });
};

export const getStudioOnlinePieChart = (type) => {
  return axios({
    method: 'get',
    url: `/TMS/api/chart/pie/device`,
    params: {
      type: type,
    },
  }).catch(function (error) {
    if (error.response) {
      console.log(`error status`, error.response);
      return error.response;
    }
  });
};
