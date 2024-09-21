import axios from "axios";

export const api = axios.create({
    baseURL: 'https://finance-server-dev.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
})