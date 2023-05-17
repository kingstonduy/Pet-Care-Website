
import { apiClient } from "./Axios";

export const getProductOnCart = (username) => apiClient.get(`/cart/getItemOnCart/${username}`)
export const updateQuantityCartItem = (cartDTO) => apiClient.put('/cart/update/quantity',cartDTO)
export const deleteCartItem = (cartDTOId) => apiClient.delete(`/cart/${cartDTOId}`)
export const addProductOnCart = (addToCartRequest) => apiClient.post('/cart',addToCartRequest)
export const flushCartItemToOrderedProduct = (cartDTOList) => apiClient.patch('/orderedproduct/checkout', cartDTOList)

