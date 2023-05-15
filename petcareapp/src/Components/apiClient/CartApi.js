
import { apiClient } from "./Axios";

export const getProductOnCart = (username) => apiClient.get(`/cart/getItemOnCart/${username}`)
export const updateQuantityCartItem = (cartDTO) => apiClient.put('/cart/update/quantity',cartDTO)
