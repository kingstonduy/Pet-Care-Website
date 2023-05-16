import { apiClient } from "./Axios";



export const getCommentByProductId = (id) => apiClient.get(`/comments/product/${id}`)