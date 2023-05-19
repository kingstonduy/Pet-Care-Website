import cs from './BookingForm.module.css'
import { useState, useEffect } from 'react'
import { Validator } from '../Validator/Validator'
import { useAuth } from '../security/AuthContext'
import { postBooking } from '../apiClient/Booking';
export default function({handleOpenBookingFalse}){
    const AuthContext = useAuth();
    const [fullName,setFullname] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [date,setDate] = useState('')
    const [typePet,setTypePet] = useState('')

    useEffect(() => {
        Validator({
            form: '#form_booking',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                
                Validator.isRequired('#phone-number', 'It can not be empty'),
                Validator.isRequired('#booking-date', 'It can not be empty'),
                Validator.isRequired('#type-pet', 'It can not be empty'),
                
            ],
            onSubmit:  function (data) {
               const object = {	
                username: AuthContext.username,
                localDate : data.localDate,
                phoneNumber : data.phoneNumber,
                typePet : data.typePet
                
              }
            
               postBooking(object)
                .then(() => postSuccessfully())
                .catch(() => alert('please try again'))
               
         }
        });        
    },[])
   function postSuccessfully(){
        handleOpenBookingFalse() 
        alert('You have Booked Successfully')
   }
    function handleCloseBookingForm(e){
        e.preventDefault()
        handleOpenBookingFalse()
    }
   
        
    return(
        <div className={cs['hidden_wrap']}>
            <div className={cs['form_Comment']}>
                <h2>Booking Service</h2>
                <form   id='form_booking' className='form'>
                   
                    <div className='form-group form-group_fullWidth'>
                        <input onChange={(e) => setPhoneNumber(e.target.value)}  type="text" 
                        placeholder='Your Phone Number' name="phoneNumber" className='form-control' id="phone-number" />
                        <span className='form-message'></span>
                    </div>

                    <div className='form-group form-group_fullWidth'>
                        <input onChange={(e) => setDate(e.target.value)}  type="date"  
                        name="localDate" className='form-control' id="booking-date" />
                        <span className='form-message'></span>
                    </div>

                    <div className='form-group form-group_fullWidth'>
                        <select onChange={(e) => setTypePet(e.target.value)} className='form-control' name="typePet" id="type-pet">
                            <option value="">Select Your Pet Type</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Bird">Bird</option>
                        </select>
                        <span className='form-message'></span>
                    </div>        
                    
                    <div className={cs['btn_wrap']}>
                        <button onClick={handleCloseBookingForm}   className={cs['btn_cancel']}>Cancel</button>
                        <button type="submit" className={cs['btn_addCmt']} >Book</button>
                     </div>

                </form>
                

                

            </div>
        </div>
    )
}