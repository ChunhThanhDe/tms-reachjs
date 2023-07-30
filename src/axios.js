import axios from 'axios';

// const API_URL = 'http://localhost:8082';
// const API_URL = 'http://192.168.0.33:8082';
// const API_URL = 'http://192.168.68.22:8082';
const API_URL = 'http://54.251.0.2:8082';
// const API_URL = 'http://192.168.0.14:8082';
// const API_URL = 'http://192.168.0.6:8082';
// const API_URL = 'http://10.133.88.35:8082'
// const API_URL = 'http://192.168.1.90:8082';
const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.response.use((response) => {
  return response;
});

export default axiosInstance;
