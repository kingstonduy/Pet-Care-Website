import cs from './login.module.css'
import { Link } from 'react-router-dom'

import Dog from '../../../assests/loginpage/doglogo.png'
import DogBackGround from '../../../assests/loginpage/backgroundDog.png'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Validator } from '../../Validator/Validator';

export default function Login(){
    

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const [checkInput,setCheckInput]= useState('')
    useEffect(() => {
        Validator({
            form: '#form_login',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#username', 'It can not be empty'),
                Validator.isRequired('#password', 'It can not be empty'),
                Validator.minLength('#password',6),
            ],
            onSubmit: function (data) {
                // Call API
                console.log(data)
            }
        },setUsername,setPassword);

        
    },[])

    // useEffect(() => {
    //     const a = document.querySelector('#username')
    //     a.onblur = function(){
    //         a.classList.add('input-error')
    //     }
    // })

    function handleOnchangeUsername(e){
        setUsername(e.target.value)
        e.target.classList.remove('input-error')
        
    }
    function handleOnchangePassword(e){
        setPassword(e.target.value)
        e.target.classList.remove('input-error')
    }


    function handleLogin(){

    }

    function handleRegister(){

    }

    return (
        <div className={cs['body']}>
                <p id="lalala"></p>
               <div className="grid-1400">
                    <div className="row">
                        <div className="column3">
                            <div className={cs['home_item']}>
                                <h2>Taking care</h2>
                                <h2>for your Smart Dog !</h2>

                                <p className={cs['home_item_description']}>Human–canine bonding is the relationship between dogs and humans.</p>
                                
                                <Link to='/' className={cs['home_btn_Explore']}>{`EXPLORE MORE >`}</Link>
                                
                            </div>

                        </div>

                        <div className="column3">
                            <div className={cs['home_item']}>
                                <div className={cs['form_logo_wrap']}>
                                    <h1 className={cs['logo_petcare']}>Pet Care</h1>
                                </div>

                                

                                <form action="" id='form_login' className='form'>
                                    <div className='form-group'>
                                        <input value={username}  type="text" placeholder='USERNAME' name="username" className='form-control' id="username" 
                                        onChange={handleOnchangeUsername}/>
                                        <span className='form-message'></span>
                                    </div>
                                    <div className='form-group'>
                                        <input value={password}  type="password" placeholder='PASSWORD' name="password" className='form-control' id="password" 
                                         onChange={handleOnchangePassword}/>
                                        <span className='form-message'></span>
                                    </div>
                                    <Link className={cs['link_forgotPassword']}>Forgot password?</Link>
                                    
                

                                    <div className='form-group'>
                                        <button  type="submit" className='btn_form'>LOGIN</button>
                                    </div>

                                    <div className='form-group'>
                                        <Link to='/Register' className='btn_form' > REGISTER</Link>
                                    </div>

                                </form>
                            </div>                      
                        </div>

                        <div className="column3">
                            <div className={cs['home_item']}>
                                <div className={cs['dogImg_wrap']}>
                                    <div className={cs['dog_backGround']}></div>
                                    
                                    <img src={Dog} alt="" className={cs['dog_img']} />
                                </div>
                            </div>                      
                        </div>
                    </div>
               </div>
        </div>
    )
}