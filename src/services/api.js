import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.sprinta.com.br/event_service/event/findbyuser/1513940438cs6HGu7O',
});
export default api;
