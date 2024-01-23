import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

// import {axiosReq} from './axios'
import axios from 'axios'


//*GET request to fetch all the public images
export const getCommunityPosts = async({signal}) => {
  // const url = 'http://localhost:3000/api/v1/community';
  // const response = await fetch(url);
  // const resData = await response.json();
  const resData = await axios.get('/community');
  return resData.data;
}


//* POST request for login and auth
export const postRegister = async({ name, username, password}) => {
  const res = await axios.post("/register", {
      name,
      username,
      password,
    });
    
    return res;
}
export const postLogin = async({ username, password}) => {
  const res = await axios.post("/login", {
      username,
      password,
    },{withCredentials: true});
    console.log(res);
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`
    return res;
}

//* GET request to fetch user details for user info details
export const getUserDetails = async({signal,id}) => {
  // const url = `http://localhost:3000/api/v1/${id}/user`;
  // const response = await fetch(url,{signal});
  // const userDetails = response.json();
  const userDetailsRes = await axios.get(`/${id}/user`)
  return userDetailsRes.data;
}

//* GET request to fetch user generated images
export const getUserImage = async({signal,id}) => {
  // const url = `http://localhost:3000/api/v1/${id}/generatedImages`;
  // const response = await fetch(url,{signal});
  // const userImages = response.json();
  const userImageRes = await axios.get(`/${id}/generatedImages`,{signal})
  return userImageRes.data;
}

//* POST request to generate ai image
export const postGenerateImage = async({id, prompt}) => {
  const url = `https://picassoai-production.up.railway.app/api/v1/${id}/generate`;
  const response = await fetch(url,{
    method: 'POST',
    body: JSON.stringify(prompt),
    headers: {
      "Content-Type": 'application/json'
    }
  });
  const imageDetails = response.json();
  return imageDetails;
}

//*POST request to save the generated image
export const postSaveImage = async({id,imageDetails}) => {
  const url = `https://picassoai-production.up.railway.app/api/v1/${id}/save`;
  const response = await fetch(url,{
    method: 'POST',
    body: JSON.stringify(imageDetails),
    headers: {
      "Content-Type": 'application/json'
    }
  });
  const res = response.json();
  return res;
}


//* PATCH request to make the generated image public
export const patchShareImage = async({id, imageVisibility}) => {
  const url = `https://picassoai-production.up.railway.app/api/v1/${id}/share`;
  const response = await fetch(url,{
    method: 'PATCH',
    body: JSON.stringify({imageVisibility}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const res = response.json();
  return res;
}