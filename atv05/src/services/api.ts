import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/',
});

export default api;
