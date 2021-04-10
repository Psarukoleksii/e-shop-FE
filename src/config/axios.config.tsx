import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: "http://localhost:5005"
})

AXIOS.interceptors.request.use((req:any) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){
      req.headers = {
        "Content-type": "application/json",
        "Authorization": `${access_token}`
      }
    }
    return req;
});
