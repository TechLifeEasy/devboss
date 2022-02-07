import axios from 'axios';



const web='http://localhost:5000';
const token=JSON.parse(localStorage.getItem('User')).token;
const API = axios.create({
    baseURL:web,
    timeout: 10000000,
    headers: {'authorization': `Bearer ${token}`}
});


