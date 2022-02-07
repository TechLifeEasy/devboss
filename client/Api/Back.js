
import axios from 'axios';

const web1 = process.env.WebLink ||process.env.NEXT_PUBLIC_WebLink ;

const API = axios.create({ baseURL: web1 });


export {API};