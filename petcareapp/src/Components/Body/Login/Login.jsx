import cs from './login.module.css'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Dog from '../../../assests/loginpage/doglogo.png'
import DogBackGround from '../../../assests/loginpage/backgroundDog.png'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Validator } from '../../Validator/Validator';
import { useAuth } from '../../security/AuthContext';

import {useCookies} from 'react-cookie'

export default function Login(){
    const navigate = useNavigate()
    
    const authContext = useAuth();

    const [username,setUsername] = useState('duy');
    const [password,setPassword] = useState('Duy03032002');

    const [checkInput,setCheckInput]= useState('')
    
    const [errorMessage, setErrorMessage] = useState(false)

    const [cookies,setCookie,removeCookie] = useCookies(['username', 'password']);

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
            onSubmit: async function (data) {
                const user={
                    'userUserName': data.username,
                    'userPassword': data.password
                }
                
                
                if(await authContext.login(user)){
                    setCookie('username', data.username);
                    setCookie('password', data.password);
                    navigate('/Home')
                }else{
                    setErrorMessage(true)
                }
        }
        });        
    },[])

    
    

    
   
    function handleOnchangeUsername(e){
        setUsername(e.target.value)
        e.target.classList.remove('input-error')
        
    }
    function handleOnchangePassword(e){
        setPassword(e.target.value)
        e.target.classList.remove('input-error')
    }



    function handleForgotPassword(){
        alert('good luck next time')
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

                                
                                {errorMessage && <span style={{
                                    color: 'red',
                                    'margin': '15px',
                                    'alignSelf': 'center'
                                }} className='form-message'>Your Username or Password is incorrect!</span>}
                                <form   id='form_login' className='form'>
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
                                    <Link className={cs['link_forgotPassword']} onClick={handleForgotPassword}>Forgot password?</Link>
                                    
                

                                    <div className='form-group'>
                                        <button type="submit" className='btn_form'>LOGIN</button>
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