import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-viva.herokuapp.com',
});

export default api;
