import { apiClient } from "./Axios";


export const postBooking = (object) => apiClient.post('/bookingdate/post',object)

export const getBookingHistoryByUsername = (username) => apiClient.get(`bookingdate/all/user/${username}`)