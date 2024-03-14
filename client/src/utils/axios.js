import axios from 'axios';

export const axiosReq = axios.create({
  baseURL: 'https://picasso-ai-fwks.vercel.app',
  // baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true
});

axiosReq.interceptors.response.use(res => res, async(error) => {
  if(error.response.status === 401){
    const res = await axiosReq.post('/refresh',{},{withCredentials: true});
    if(res.status === 200){
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`
      return axios(error.config)
    }
  }
})

