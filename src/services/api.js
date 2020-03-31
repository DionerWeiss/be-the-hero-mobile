import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.2.149:3333',
    baseURL: 'https://be-the-hero-1.herokuapp.com'
})

export default api;