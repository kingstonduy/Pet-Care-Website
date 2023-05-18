import { useEffect, useState } from 'react'
import { getOrderedProduct } from '../../apiClient/UserApi'
import { useAuth } from '../../security/AuthContext'
import cs from './Account.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Account = () => {
    const authContext = useAuth()
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    function handleLogout() {
        authContext.logout()
        navigate('/login')
    }

    useEffect(() => {
        retrieveOrderHistory()
    }, []) // Run once on component mount


    async function retrieveOrderHistory() {
        try {
            const response = await getOrderedProduct(authContext.username)
            setProducts(response.data)
        } catch (error) {
            console.error('Failed to retrieve order history:', error)
        }
    }

    function handleRatting() {
        alert('clicked rating')
    }

    function handleSearching() {
        alert('clicked searching')
    }

    function handleBuyAgain(id) {
        navigate(`/Product/Detail/${id}`)
    
    }

    function handleChangeInformation() {
        alert('clicked change information')
    }

    return(
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
                        products.length > 0 &&
                        products.map(
                            (item, index) => {
                                return(
                                    <>
                                        <div className={cs["table-row"]}>
                                            <div className={cs["product-main-group"]}>
                                                <div className={cs["avatar-img"]}>
                                                    <img src={item.orderedProductDTOImageUrl} alt=""  />
                                                </div>

                                                <div className={cs["product-name"]}>
                                                    {item.orderedProductDTOProductName}
                                                </div>

                                                <div className={cs["product-type"]}>
                                                    {item.orderedProductDTOCategory}
                                                </div>
                                            </div>

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-price"]}>
                                                    {item.orderedProductDTOPrice}
                                                </div>

                                                <div className={cs["btn-div"]}>
                                                <button onClick={handleRatting}>
                                                    RATING
                                                </button>
                                            </div>
                                                
                                            </div>

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-quantity"]}>
                                                    {item.orderedProductDTOQuantity}
                                                </div>
                                                
                                            </div>
                                            

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-price"]}>
                                                    {item.orderedProductDTOPrice * item.orderedProductDTOQuantity}
                                                </div>

                                                <div className={cs["btn-div"]}>
                                                    <button onClick={() => {handleBuyAgain(item.productId)}}>
                                                        BUY AGAIN
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        )
                    }
                </div>

            </div>
        </div>
    )
}

//sth
export default Account