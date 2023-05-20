import { getBookingHistoryByUsername } from '../apiClient/Booking';
import { useAuth } from '../security/AuthContext'
import { useState, useEffect } from 'react';
import cs from './BookingHistory.module.css'
import { getUserByUsername } from '../apiClient/UserApi';
import Item from 'antd/es/list/Item';


export default function BookingHistory({handleOpenBookingFalse}){
    const AuthContext = useAuth();
    const [listBooking,setListBooking] = useState([])
    const [fullname,setFullname] = useState('')
    function handleCloseBookingHistory(){
        handleOpenBookingFalse()
    }

    useEffect(() => {
        getUserFullname()
        getBookingHistory()
       
    },[])

    async function getBookingHistory(){
        await getBookingHistoryByUsername(AuthContext.username)
            .then(response => {
                console.log(response.data)
                const newComments = response.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setListBooking(newComments)
            })
            .catch(error => console.log(error))
    }
    async function getUserFullname(){
       
        await getUserByUsername(AuthContext.username)
            .then(response => setFullname(response.data.userFullName))
            .catch(error => console.log(error))
    }

    

    
    return (
        <div className={cs['hidden_wrap']}>
           <div className={cs['form_Comment']}>
                <div className={cs['overFlow_wrap']} >
                    <h2>Booking History</h2>
                    <table>
                        <tr>
                            <th>FullName</th>
                            <th>PhoneNumber</th>
                            <th>Date</th>
                            <th>PetType</th>
                        </tr>
                        {
                        listBooking.length > 0 && fullname != '' ?
                        listBooking.map((bookingItem, index) => (
                            <tr key={index}>
                            <td>{fullname}</td>
                            <td>{bookingItem.phoneNumber}</td>
                            <td>{bookingItem.date.toString()}</td>
                            <td>{bookingItem.typePet}</td>
                            </tr>
                        ))
                        : <div></div>
                        }
                    </table>
                    
                    
                    
                </div>
                <div className={cs['btn_wrap']}>
                    <button onClick={handleCloseBookingHistory}   className={cs['btn_cancel']}>Cancel</button>

                </div>
           </div>
        </div>
    )
}