import axios from 'axios';



const web=process.env.REACT_APP_WebSite;
const token=JSON.parse(localStorage.getItem('User')).token;
const API = axios.create({
    baseURL:web,
    timeout: 10000000,
    headers: {'authorization': `Bearer ${token}`}
});


