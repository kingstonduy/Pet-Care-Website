import { apiClient } from "./Axios";



export const getCommentByProductId = (id) => apiClient.get(`/comments/product/${id}`)
export const postComment = (comment) => apiClient.post(`/comment/user/product`,comment)