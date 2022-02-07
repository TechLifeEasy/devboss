
import axios from 'axios';

const web1 = 'http://localhost:5000';

const API = axios.create({ baseURL: web1 });


export {API};