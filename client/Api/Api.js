import axios from 'axios';



const web = 'http://localhost:5000';

const API = axios.create({ baseURL: web });


const APIWithToken = axios.create({ baseURL: web });


APIWithToken.interceptors.request.use((req) => {
    if (localStorage.getItem('User')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('User')).data.token}`;
    }
    // req.headers.adminkey = process.env.password;

    return req;
});

const SingUp = (data) => API.post('/users/sign_up', data);
const SingIn = (data) => API.post('/users/sign_in', data);



const AddSource = (data) => APIWithToken.post('/sources/add', data);
const UpdateSource = (data) => APIWithToken.put('/sources/update', data);

export { SingUp,SingIn ,AddSource,UpdateSource};




