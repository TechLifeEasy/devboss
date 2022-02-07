
import axios from 'axios';

const web1 = process.env.WebLink;

const API = axios.create({ baseURL: web1 });


export {API};