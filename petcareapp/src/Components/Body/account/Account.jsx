import { useEffect, useState } from 'react'
import { getOrderedProduct, getUserInformation } from '../../apiClient/UserApi'
import { useAuth } from '../../security/AuthContext'
import cs from './Account.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { CommentRating } from '../../HiddenWrapContainer/CommentRating'
import { OrderItem } from './OrderItem'


const count =3;
const Account = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const authContext = useAuth()
    const navigate = useNavigate()
    const [user, setUser] = useState('')

   

    function handleLogout() {
        authContext.logout()
        navigate('/login')
    }


    useEffect(() => {
        retrieveOrderHistory()
        retrieveUserInformation()
    }, []) // Run once on component mount


    async function retrieveUserInformation() {
        try {
            const response = await getUserInformation(authContext.username)
            setUser(response.data)
        } 
        catch (error) {
            console.error('Failed to retrieve user information:', error)
        }
    }

    async function retrieveOrderHistory() {
        try {
            const response = await getOrderedProduct(authContext.username)
            setInitLoading(false);
            setData(response.data);
            setList(response.data.slice(0, count)); // Initialize the list with the first three items
        } 
        catch (error) {
            console.error('Failed to retrieve order history:', error)
        }
    }



    function handleSearching() {
        alert('clicked searching')
    }

    

    function handleChangeInformation() {
        alert('clicked change information')
    }



        
    return(
        <div>

            <div className={cs['body']}>
                <div className={cs['grid-column-left']}>
                    <div className={cs['avatar-image']}>
                        <FontAwesomeIcon icon={faUser}  className={cs['user-icon']}/>
                    </div>

                    <div className={cs['avatar-name']}>
                        Duong Khanh Duy

                    </div>

                    <div className={cs['change-information-icon']}>
                        <button onClick={handleChangeInformation}>
                            <img src='https://www.svgrepo.com/show/512628/pen-1319.svg' alt=''/>
                        </button>
                    </div>

                    <div className={cs['change-information-label']}>
                        <button onClick={handleChangeInformation}>
                            Change information
                        </button>
                    </div>
                </div>

                <div className={cs['grid-header']}>
                    <h1>Online shopping history</h1>
                    <button onClick={handleLogout} className={cs['btn-logout']}>Logout</button>
                </div>

                <div className={cs['grid-column-right']}>
                    <div className={cs["searching-bar"]}>
                        <div className={cs["input-searching"]}>
                            <input type="text" name="" id="" placeholder='search' />

                            <div className={cs["searching-icon"]}>
                                <button onClick={handleSearching}>
                                    <span className={cs['magnifying-image']}>
                                        <img src="https://www.svgrepo.com/show/479452/magnifying-glass-for-search.svg" alt="" />
                                    </span>
                                    
                                </button>
                            </div>
                        </div>
                    </div>



                    <div className={cs["products-table"]}>
                        <div className={cs["table-header"]}>

                            <div className={`${cs["product-main-header"]} ${cs["centered-text"]}`}>
                                Product
                            </div>

                            <div className={`${cs["product-header-price"]} ${cs["centered-text"]}`}>
                                Price
                            </div>

                            <div className={`${cs["product-header-quantity"]} ${cs["centered-text"]}`}>
                                Quantity
                            </div>

                            <div className={`${cs["product-header-total"]} ${cs["centered-text"]}`}>
                                Total
                            </div>

                        </div>
                        
                        {
                            list.length > 0 &&
                            list.map(
                                (item, index) => {
                                    return(
                                       <OrderItem item={item} />
                                    )
                                }
                            )

                        }
                    </div>

                </div>

           
            </div>
           
           
        </div>

    )
}

//sth
export default Account