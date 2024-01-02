import axios from 'axios';

export const axiosReq = axios.create({
  baseURL: 'https://picasso-ai-two.vercel.app/api/v1'
});