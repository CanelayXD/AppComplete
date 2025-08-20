import axios from 'axios';

const ApiApp = axios.create({
    baseURL: 'http://192.168.0.14:3000/api',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiApp }