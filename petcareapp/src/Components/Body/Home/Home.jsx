import cs from './Home.module.css'
import meowpicture from '../../../assests/homepicture/meow.png'
import dogpicture from '../../../assests/homepicture/dog.png'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import avaDuy from '../../../assests/ava/ava_duy.jpg'
import avaNghia from '../../../assests/ava/ava_nghia.jpg'
import avaDinh from '../../../assests/ava/ava_dinh.jpg'
import avapetcare from '../../../assests/ava/doctorava.png'

import { useCookies } from 'react-cookie'
import { useAuth } from '../../security/AuthContext'

export default function Home(){

    const [cookies,setCookie,removeCookie] = useCookies(['username', 'password']);
    const authContext = useAuth()

    useEffect(() => {
        if (cookies.username && cookies.password) {
            authContext.setAuthenticated(true)
        }
    },[])

     function handleClickEmergencyCall(){
         window.scrollTo(0,100000);
        alert("Enter Phone Number In Our Contact Info")
    }

    
    return(
       <div className={cs['body']}>
            <div className="grid">
                <div className="row">
                    <div className={cs['body_intro']}>
                        <div className={cs['body_intro_img']}>
                            <img src={meowpicture} className={cs['body_intro_imgMeo']} alt="" />
                            <img src={dogpicture} className={cs['body_intro_imgDog']} alt="" />
                        </div>

                        <div className={cs['body_intro_title']}>
                            <h1 >We take care of your pet and help them to grow</h1>
                            <p>Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>

                            <div className={cs['body_intro_title_contact']} >
                                <a href="https://www.facebook.com/zetnguyen172/" className='btn-normal'>Contact us</a>
                                <div className={cs['intro-contact_ava_wrap']}>
                                    <a href="https://www.facebook.com/zetnguyen172/"><img src={avaNghia} alt="" className={cs['contact_ava']} /></a>
                                    <a href="https://www.facebook.com/kduyyy"><img src={avaDuy} alt="" className={cs['contact_ava']} /></a>
                                    <a href="https://www.facebook.com/YinLin04"><img src={avaDinh} alt="" className={cs['contact_ava']} /></a>
                                </div>
                            </div>
                            
                            <div className={cs['body_intro_title_slogun']}>
                                <h3> <FontAwesomeIcon icon={faPaw} className={cs['faPawicon']} /> How to take care</h3>
                                <p>perfect one you will like it. it's our promise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cs["body_statis"]}>
                <div className={cs["body_statis_wrap"]}>
                    <div className={cs['body_statis_item']}>
                        <p>Adopted</p>
                        <span>2500+</span>
                    </div>
                    <div className={cs['body_statis_item']}>
                        <p>Customer</p>
                        <span>1850+</span>
                    </div>
                    <div className={cs['body_statis_item']}>
                        <p>Testimonials</p>
                        <span>1300+</span>
                    </div>
                    <div className={cs['body_statis_item_profess']}>
                            <p>Dr. Zet Nguyen: A compassionate vet providing exceptional care to animals, 
                                building strong bonds with humans. </p>

                            <div className={cs['spacer_line']}></div>

                            <div className={cs['body_statis_item_profess_detail']}>
                                <span>Zet Nguyen</span>
                                <img src={avaNghia} alt="" />
                            </div>
                    </div>
                </div>
            </div>

            <div className={cs['body_contact']}>
                <div className={cs['body_contact_wrap']}>
                    <div className={cs['body_contact_wrap_left']}>
                        <h3>Lets book a call and stay connected</h3>
                        <div className={cs['body_contact_wrap_left_item1']}>
                            <span></span>
                            <p>Vaccination Service </p>
                            <span></span>
                            <p>Veterinary Service</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>

                        <div className={cs['body_contact_wrap_left_item2']} >
                        <Link to='/Service' className='btn-large' >Book Now</Link>
                            <div>
                                <FontAwesomeIcon icon={faPhone} className={cs['faPhone']} /> 
                            <Link onClick={handleClickEmergencyCall}>Emergency Call</Link>
                            
                            </div>
                        </div>
                    </div>
                    <div className={cs['body_contact_wrap_right']}>
                        <div className={cs['body_contact_right_avawrap']}>
                            <img src={avapetcare} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            
       </div>
        
    )
}   