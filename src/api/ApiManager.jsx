import axios from "axios";

const ApiManager = axios.create({
    baseURL: 'https://iholda.ew.r.appspot.com/api/',
    responseType: 'json',
    withCredentials: true
})

export default ApiManager;