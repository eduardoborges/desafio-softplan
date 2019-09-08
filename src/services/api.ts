/* eslint-disable no-console */
import axios from 'axios';


const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://swapi.co/api',
});

// request interceptor
api.interceptors.request.use(req => req);

// Response interceptor
api.interceptors.response.use(resp => resp);

export default api;
