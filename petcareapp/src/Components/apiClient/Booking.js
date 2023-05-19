import { apiClient } from "./Axios";


export const postBooking = (object) => apiClient.post('/bookingdate/post',object)