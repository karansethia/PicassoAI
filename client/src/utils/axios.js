import axios from 'axios';

export const axiosReq = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});