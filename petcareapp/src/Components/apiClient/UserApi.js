

import { apiClient } from "./Axios"



export const checkLogin = (user) => apiClient.post('/login',user)
export const getUsers = () => apiClient.get('/jpa/users')
export const getUserByUsername = (username) => apiClient.get(`/users/${username}`)
export const checkRegister = (user) => apiClient.post('/register',user)
export const getOrderedProduct = (username) => apiClient.get(`users/${username}/orederedProducts`)
export const getUserInformation = (username) => apiClient.get(`/users/${username}`)
export const getUserChangeInformation = (username) => apiClient.get(`/user/userChangeInformation/${username}`)
export const changeUserInformation = (user) => apiClient.put('user/userChangeInformation/update',user)