

import { apiClient } from "./Axios"



export const checkLogin = (user) => apiClient.post('/login',user)
export const getUsers = () => apiClient.get('/jpa/users')
export const getUserByUsername = (username) => apiClient.get(`/users/user/${username}`)