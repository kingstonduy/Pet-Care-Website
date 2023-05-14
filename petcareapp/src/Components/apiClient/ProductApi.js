
import { apiClient } from "./Axios";


export const getProducts = () => apiClient.get('/products')

export const getProductDetail = (id) => apiClient.get(`/product/${id}`)