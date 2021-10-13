import axios from '@/http/interceptor'

export default {
    exampleGetData: () => axios.get('example/get'),
    exampleStore: data => axios.post('example/store', data),
    exampleUpdate: (data, code) => axios.post(`example/update/${code}`, data),
    exampleDelete: code => axios.post(`example/delete/${code}`),
}