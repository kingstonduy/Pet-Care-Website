import cs from './service.module.css'

import { Link } from 'react-router-dom'

import injector from '../../../assests/service/injector.png'
import cat from '../../../assests/service/cat.png'
import doctor from '../../../assests/service/doctor.png'
import gloves from '../../../assests/service/gloves.png'
import BookingForm from '../../HiddenWrapContainer/BookingForm'
import { useEffect, useState } from 'react'
import { useAuth } from '../../security/AuthContext'
import {useNavigate} from 'react-router-dom'
export default function Service(){
    const navigate = useNavigate()

    const background2 = cs['body_service_item_background'] + ' ' + 'background2'
    const background3 = cs['body_service_item_background'] + ' ' + 'background3'
    const background4 = cs['body_service_item_background'] + ' ' + 'background4'
    const [open,isOpen] = useState(false);
    const AuthContext = useAuth();

    useEffect(()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    },[])

    function handleOpenBookingTrue(e){
        if(AuthContext.isAuthenticated){
            
            isOpen(true);
        }else{
            navigate('/login')
        }
        
    }

    function handleOpenBookingFalse(){
        isOpen(false);
    }
    
    return(
        <div className={cs['body']}>
            <div  className={cs['body_title_wrap']} >
                <h1 className={cs['body_title']}>Our Services</h1>
                <p className={cs['body_description']}>Best pets are waiting for adoption. 
                Find out the the perfect one you will like it. It’s our promise.</p>
            </div>

            <div className={cs['body_service_wrap']}>
                <div className={cs['body_service_list']}>
                    <div  className={cs['body_service_item_odd']} >
                        <div className={cs['body_service_item_background']} >
                            <img   src={injector} alt="" className={cs['body_service_item_img']} />
                        </div>
                        <div className={cs['body_service_item_information']}>
                            <h3>Vaccination</h3>
                            <p>Perfect one you will like it. It’s our promise.</p>
                        </div>
                    </div>

                    <div className={cs['body_service_item_even_wrap']} >
                        <div  className={cs['body_service_item_even']} >
                            <div className={background2} >
                                <img   src={cat} alt="" className={cs['body_service_item_img']} />
                            </div>
                            <div className={cs['body_service_item_information']}>
                                <h3>Vaccination</h3>
                                <p>Perfect one you will like it. It’s our promise.</p>
                            </div>
                        </div>
                    </div>

                    

                    <div  className={cs['body_service_item_odd']} >
                        <div className={background3} >
                            <img   src={doctor} alt="" className={cs['body_service_item_img']} />
                        </div>
                        <div className={cs['body_service_item_information']}>
                            <h3>Vaccination</h3>
                            <p>Perfect one you will like it. It’s our promise.</p>
                        </div>
                    </div>

                    <div className={cs['body_service_item_even_wrap']} >
                        <div  className={cs['body_service_item_even']} >
                            <div className={background4} >
                                <img   src={gloves} alt="" className={cs['body_service_item_img']} />
                            </div>
                            <div className={cs['body_service_item_information']}>
                                <h3>Vaccination</h3>
                                <p>Perfect one you will like it. It’s our promise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cs['body_btn_book']}>
                <div  onClick={handleOpenBookingTrue} className='btn-normal'>Book Now</div>
                
            </div>

            {open && <BookingForm  handleOpenBookingFalse={handleOpenBookingFalse} />}
        </div>
    )
}