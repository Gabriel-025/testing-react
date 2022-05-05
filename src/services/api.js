import axios from 'axios';

const api = axios.create({
  baseURL: 'secret_api',
});
export default api;
