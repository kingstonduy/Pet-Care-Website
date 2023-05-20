import cs from './UserChangeInformation.module.css'
import { useState , useEffect} from 'react';
import { Validator } from '../Validator/Validator';
import { changeUserInformation, getUserByUsername, getUserChangeInformation } from '../apiClient/UserApi';
import { useAuth } from '../security/AuthContext';

export default function User({handleOpenChangeFalse,retrieveUserInformation}){

    const AuthContext = useAuth()
    
    const [currentPassword,setCurrentPassword] = useState('');
    const [email,setEmail] = useState('');
    const [fullname,setFullname] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [user,setUser] = useState({})
    const [errorMessage, setErrorMessage] = useState(false)


    useEffect(() => {
        Validator({
            form: '#form_changeInformation',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [

                Validator.isRequired('#currentPassword-Change', 'It can not be empty'),
                Validator.isRequired('#newPassword-Change', 'It can not be empty'),
                Validator.isRequired('#email-Change', 'It can not be empty'),
                Validator.isRequired('#fullname-Change', 'It can not be empty'),

                Validator.minLength('#newPassword-Change',6),
                Validator.minLength('#currentPassword-Change',6),
                Validator.isEmail('#email-Change', 'It should be email'),
    
            ],
            onSubmit: function (data) {
               const object = {
                "username": AuthContext.username,
                "password" : data.newPassword,
                "currentPassword" : data.currentPassword,
                "email" : data.email,
                "fullName" : data.fullName
               }
               changeUserInformation(object)
                .then(response => {
                    alert('You have changed your information successfully')
                    retrieveUserInformation()
                    handleOpenChangeFalse()
                    
                })
                .catch(error => {
                    setErrorMessage(true)
                })
            }
        });
        getUserDetailChangeInformation()
        
    },[])

    function getUserDetailChangeInformation(){
        getUserByUsername(AuthContext.username)
            .then(response => {
                setEmail(response.data.userEmail)
                setFullname(response.data.userFullName)
            
            
            })
            .catch(error => console.log(error))
    }

    function handleCloseBookingForm(e){
        e.preventDefault()
        handleOpenChangeFalse()
    }

    return(
        <div className={cs['hidden_wrap']}>
        <div className={cs['form_Comment']}>
           <center> <h2>Change Your Information</h2></center>
            <form action="" id='form_changeInformation' className='form'>
                <div className='form-group form-group_fullWidth '>
                    <label htmlFor="fullname-Change" className="form-label">Full Name</label>
                    <input type="text" placeholder='Ex: Nguyen Trong Nghia' name="fullName" className='form-control' 
                    id="fullname-Change"  value={fullname} onChange={(e) => {
                        e.target.classList.remove('input-error')
                        setFullname(e.target.value)}} />
                    <span className='form-message'></span>
                </div>

                <div className='form-group form-group_fullWidth'>
                    <label htmlFor="currentPassword-Change" className="form-label">Current Password</label>
                    <input type="password" placeholder='Ex: 123456' name="currentPassword" 
                    className='form-control' id="currentPassword-Change"  value={currentPassword} 
                    onChange={(e) => {
                        e.target.classList.remove('input-error')
                        setCurrentPassword(e.target.value)}}                      />
                    <span className='form-message'></span>
                   {errorMessage && <span style={{
                    color: 'red',
                    'margin-top': '15px'
                   }} className='form-message'>Your Password is incorrect!</span>}
                </div>    

                <div className='form-group form-group_fullWidth'>
                    <label htmlFor="newPassword-Change" className="form-label">New Password</label>
                    <input   type="password" placeholder='Ex: 123456' name="newPassword" 
                    className='form-control' id="newPassword-Change" value={newPassword} onChange={(e) => 
                    {
                        e.target.classList.remove('input-error')
                        setNewPassword(e.target.value)} }         />
                    <span className='form-message'></span>
                </div>

                <div className='form-group form-group_fullWidth'>
                    <label htmlFor="email-Change" className="form-label">Email</label>
                    <input   type="email" placeholder='EMAIL' name="email" 
                    className='form-control' id="email-Change" value={email} 
                    onChange={(e) => {
                        e.target.classList.remove('input-error')
                        setEmail(e.target.value)}}/>
                    <span className='form-message'></span>
                    
                </div> 
                
                <div className={cs['btn_wrap']}>
                        <button onClick={handleCloseBookingForm}   className={cs['btn_cancel']}>Cancel</button>
                        <button type="submit" className={cs['btn_addCmt']} >Change</button>
                </div>

            </form>


        </div>
    </div>
    )
}