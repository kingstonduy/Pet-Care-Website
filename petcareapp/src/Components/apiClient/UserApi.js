
import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)


export const checkLogin = (user) => apiClient.post('/login',user)
export const getUsers = () => apiClient.get('/jpa/users')