import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'  // Para desenvolvimento local
        : process.env.REACT_APP_PUBLIC_API // Para produção
});

export default api;