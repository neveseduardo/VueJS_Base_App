import axios from 'axios'
import { Notification } from 'element-ui';
import messages from '@/utils/messages'

let http = axios.create({ baseURL: process.env.VUE_APP_API, timeout: 180000 })

http.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json'
        config.headers['Accept'] = 'application/json'
        
        if (false) {
            const token = '#@jgj'.repeat(7)
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    error => {
        console.log(error)
        return Promise.reject(new Error(error));
    }
);

http.interceptors.response.use(
    res => {
        const { method } = res.config
        if (process.env.NODE_ENV !== 'production' && method === 'post') {
            console.log(res);
        }
        return res.data
    },
    error => {
        let errorMessage = messages.connectError
        console.log(error.response);

        if (error.response) {
            let { data } = error.response

            throwError(errorMessage = data.response
                ? data.response.message
                : data.message)
            return Promise.reject(new Error(errorMessage = data.response
                ? data.response.message
                : data.message));
        }

    }
)

const throwError = message => {
    Notification.error({
        title: 'Erro!',
        message: message,
        type: 'error',
        duration: 5 * 1000,
    })
}

export default http

