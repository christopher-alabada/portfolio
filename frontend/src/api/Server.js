import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_CHRIS_TOPHER_LA_URL
});