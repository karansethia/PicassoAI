import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();


//*GET request to fetch all the public images
export const getCommunityPosts = async({signal}) => {
  const url = 'http://localhost:3000/api/v1/community';
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}


//* POST request for login and auth
export const signIn = async({ query, credentials}) => {
  const signintype = query.signintype;
  const url = `http://localhost:3000/api/v1/${signintype}`;
  const response = await fetch(url,{
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json'
    }
  });
    if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const res = await response.json();
  return res;
}

//* GET request to fetch user details for user info details
export const getUserDetails = async({signal,id}) => {
  const url = `http://localhost:3000/api/v1/${id}/user`;
  const response = await fetch(url,{signal});
  const userDetails = response.json();
  return userDetails;
}

//* GET request to fetch user generated images
export const getUserImage = async({signal,id}) => {
  const url = `http://localhost:3000/api/v1/${id}/generatedImages`;
  const response = await fetch(url,{signal});
  const userImages = response.json();
  return userImages;
}

//* POST request to generate ai image
export const postGenerateImage = async({id, prompt}) => {
  const url = `http://localhost:3000/api/v1/${id}/generate`;
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
  const url = `http://localhost:3000/api/v1/${id}/save`;
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
export const patchShareImage = async({id}) => {
  const url = `http://localhost:3000/api/v1/${id}/share`;
  const response = await fetch(url,{
    method: 'PATCH',
    headers: {
      "Content-Type": 'application/json'
    }
  });
  const res = response.json();
  return res;
}