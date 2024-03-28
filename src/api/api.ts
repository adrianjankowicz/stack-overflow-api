import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2/',
});