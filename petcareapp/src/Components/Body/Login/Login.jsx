import cs from './login.module.css'
import { Link } from 'react-router-dom'

import Dog from '../../../assests/loginpage/doglogo.png'
import DogBackGround from '../../../assests/loginpage/backgroundDog.png'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


export default function Login(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const [checkInput,setCheckInput]= useState('')

    var a = document.querySelector('#username')
    a.onblur = function(e){
        console.log(e.target.value)
    }

    function handleOnchangeUsername(e){
        setUsername(e.target.value)
    }
    function handleOnchangePassword(e){
        setPassword(e.target.value)

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

                                

                                <form action="" id={cs['form_login']}>
                                    <div className={cs['form-group']}>
                                        <input value={username}  type="text" placeholder='USERNAME' name="username" id="username" 
                                        onChange={handleOnchangeUsername}/>
                                    </div>
                                    <div className={cs['form-group']}>
                                        <input value={password} type="password" placeholder='PASSWORD' name="password" id="password" 
                                        onChange={handleOnchangePassword}/>
                                        
                                    </div>
                                    <Link className={cs['link_forgotPassword']}>Forgot password?</Link>
                                    
                                    

                                    <div className={cs['form-group']}>
                                        <button onClick={handleLogin} type="button" className={cs['btn_form']}>LOGIN</button>
                                    </div>

                                    <div className={cs['form-group']}>
                                        <button onClick={handleRegister} type="button" className={cs['btn_form']}>REGISTER</button>
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