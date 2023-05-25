import cs from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'

import Dog from '../../../assests/loginpage/doglogo.png'
import DogBackGround from '../../../assests/loginpage/backgroundDog.png'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Validator } from '../../Validator/Validator';
import { checkRegister } from '../../apiClient/UserApi';

export default function Login(){
    

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [fullname,setFullname] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const navigate= useNavigate();
    const [errorMessage, setErrorMessage] = useState(false)
    

    async function register(user){
        try{
            
            const response = await checkRegister(user)
            if(response.status == 200){
                console.log(response)
                alert('Register successfully')
                navigate('/login')
            }
        }
        catch(error){
            
           setErrorMessage(true)
        }
    }



    const [checkInput,setCheckInput]= useState('')
    useEffect(() => {
        Validator({
            form: '#form_register',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#username', 'It can not be empty'),
                Validator.isRequired('#password', 'It can not be empty'),
                Validator.isRequired('#confirmPassword', 'It can not be empty'),
                Validator.isRequired('#email', 'It can not be empty'),
                Validator.isRequired('#fullname', 'It can not be empty'),

                Validator.minLength('#password',6),
                Validator.isConfirmed('#confirmPassword', function(){
                    return document.querySelector('#form_register #confirmPassword').value
                },'Its incorrect'),
                Validator.isEmail('#email', 'It should be email'),
    
            ],
            onSubmit: function (data) {
                const user= {
                    'userUserName': data.username,
                    'userFullName': data.fullname,
                    'userPassword': data.password,
                    'userEmail': data.email,
                    'userRole': 'user'
                }
                
                register(user)
                
            }
        },setUsername,setPassword);

        
    },[])

    

    function handleOnchangeUsername(e){
        setUsername(e.target.value)
        e.target.classList.remove('input-error')
        
    }
    function handleOnchangePassword(e){
        setPassword(e.target.value)
        e.target.classList.remove('input-error')
    }

    function handleOnchangeConfirmPassword(e){
        setConfirmPassword(e.target.value)
        e.target.classList.remove('input-error')
    }

    function handleOnchangeFullname(e){
        setFullname(e.target.value)
        e.target.classList.remove('input-error')
    }

    function handleOnchangeEmail(e){
        setEmail(e.target.value)
        e.target.classList.remove('input-error')
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

                                

                                <form action="" id='form_register' className='form'>
                                    <div className='form-group'>
                                        <label htmlFor="fullname" className="form-label">Full Name</label>
                                        <input value={fullname}  type="text" placeholder='Ex: Nguyen Trong Nghia' name="fullname" className='form-control' id="fullname" 
                                        onChange={handleOnchangeFullname}/>
                                        <span className='form-message'></span>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input value={username}  type="text" placeholder='Ex: sakurahaha123' name="username" className='form-control' id="username" 
                                        onChange={handleOnchangeUsername}/>
                                        <span className='form-message'></span>
                                        {errorMessage && <span style={{
                                            color: 'red',
                                            'margin-top': '15px',
                                            'alignSelf': 'center'
                                        }} className='form-message'>Your username has already used!</span>}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input value={password}  type="password" placeholder='Ex: 123456' name="password" className='form-control' id="password" 
                                         onChange={handleOnchangePassword}/>
                                        <span className='form-message'></span>
                                    </div>    

                                    <div className='form-group'>
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input value={confirmPassword}  type="password" placeholder='Ex: 123456' name="confirmPassword" className='form-control' id="confirmPassword" 
                                        onChange={handleOnchangeConfirmPassword}/>
                                        <span className='form-message'></span>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input value={email}  type="email" placeholder='EMAIL' name="email" className='form-control' id="email" 
                                        onChange={handleOnchangeEmail}/>
                                        <span className='form-message'></span>
                                        
                                    </div> 
                                    <Link to='/login' className={cs['link_forgotPassword']}>Already have account?</Link>
                                    <div className='form-group'>
                                        <button type="submit" className='btn_form'>Submit</button>
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