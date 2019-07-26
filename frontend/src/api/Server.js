import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.chris.topher.la',
  withCredentials: true
});