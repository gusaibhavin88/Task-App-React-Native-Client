import axios from 'axios';

const API = axios.create({
  baseURL: 'https://task-app-react-native.onrender.com'
});

export const Register = (formdata) => API.post('/api/v1/register', formdata);
export const LoginAcc = formdata => API.post('/api/v1/login', formdata);
export const Loaduser = () => API.get('/api/v1/me');
export const Otpverification = (formdata) => API.post('/api/v1/verify' , formdata);
export const Logout = () => API.get('/api/v1/logout');
