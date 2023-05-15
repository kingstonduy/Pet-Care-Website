
import { apiClient } from "./Axios";


export const getProducts = () => apiClient.get('/products')

export const getProductDetail = (id) => apiClient.get(`/product/${id}`)

export const getProductByConstraint = (Constraint) => apiClient.get(`products/constraints/${Constraint}`)

export const getProductByInStock = (constraint) => apiClient.get('products/inStock')

