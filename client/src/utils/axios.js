import axios from 'axios';

export const axiosReq = axios.create({
  baseURL: 'https://picassoai-production.up.railway.app/'
});