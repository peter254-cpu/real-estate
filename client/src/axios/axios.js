// axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  // You can also add other configuration options here if needed
});

export default instance;
