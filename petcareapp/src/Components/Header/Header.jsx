import './header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import CartComponent from '../Body/sidebar.cart/CartComponent'
import { useState } from 'react'
import { useAuth } from '../security/AuthContext'
import { useCart } from '../CartControl/CartProvider'

export default function Header(){

    const authContext = useAuth()
    const cartContext = useCart()


    function handleCartClick() {
        cartContext.setIsCartOpen(true)
    }


   
    

    return(
        <header>
            <nav className='header_nav' >
                <div className="nav_wrap_left">
                    <div className="nav_wrap_left_logo">
                        <h2 className="nav_logo">
                            Pet Care
                        </h2>
                    </div>

                    
                    
                    <ul className="nav_left_list">
                        <li className="nav_left_item"> <Link className='nav_left_link' to='/'>Home</Link> </li>
                        <li className="nav_left_item"> <Link className='nav_left_link' to='/About'>About</Link> </li>
                        <li className="nav_left_item"> <Link className='nav_left_link' to='/Service'>Services</Link> </li>
                        <li className="nav_left_item"> <Link className='nav_left_link' to='Products/all'>Products</Link> </li>
                        <li className="nav_left_item nav_left_item-bridge">
                             <Link className='nav_left_link' to='/'>
                                Information
                                <FontAwesomeIcon icon={faCaretDown} className="faArrowDown"/>    
                            </Link> 
                            <ul class="nav__list-pet">                            
                                
                                
                                <li class="nav__item-pet"> <Link to='/Cat' class="nav__item-pet-link">Cat</Link> </li>
                                <li class="nav__item-pet"><Link to='/Dog' class="nav__item-pet-link">Dog</Link> </li>
                                <li class="nav__item-pet"><Link to='/Bird' class="nav__item-pet-link">Bird</Link> </li>
                             
                            </ul>
                        </li>
                    </ul>

                </div>

                

                <div className="nav_wrap_right">
                    <ul className="nav_right_list">
                        {authContext.isAuthenticated &&
                        <li className="nav_right_item">
                            <button className='btn-cart' onClick={handleCartClick}>
                                <FontAwesomeIcon icon={faCartShopping} className="nav_logo_cart"/>
                                <span className='cnt-item'>{cartContext.cart.length}</span>
                            </button>
                        </li>
                        }
                        <li className="nav_right_item">
                            <div className="signUp_wrap">
                               {
                                    authContext.isAuthenticated 
                                    ?   <Link to='/Account' className='avaUser'>
                                            <FontAwesomeIcon icon={faUser} className="faArrowDown"/>  
                                        </Link>
                                    : <Link to='/login' className='login_btn'>Sign up</Link>
                                }
                               
                            </div>
                        </li>
                    </ul>
                    
                </div>
               
            </nav>
            { authContext.isAuthenticated && <CartComponent/>}
          
        </header>
    )
}