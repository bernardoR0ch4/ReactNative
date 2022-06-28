import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL:"http://192.168.76.127:8080/comercio-seguro"

});

export default AxiosInstance;