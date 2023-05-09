import './header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
export default function Header(){


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
                        <li className="nav_left_item"> <Link className='nav_left_link' to='/'>About</Link> </li>
                        <li className="nav_left_item"> <Link className='nav_left_link' to='/Service'>Services</Link> </li>
                        <li className="nav_left_item"> <Link className='nav_left_link' to='/Products'>Products</Link> </li>
                        <li className="nav_left_item nav_left_item-bridge">
                             <Link className='nav_left_link' to='/'>
                                Information
                                <FontAwesomeIcon icon={faCaretDown} className="faArrowDown"/>    
                            </Link> 
                            <ul class="nav__list-pet">
                               
                                
                                
                                
                                <li class="nav__item-pet"> <Link to='/Cat' class="nav__item-pet-link">Cat</Link> </li>
                                <li class="nav__item-pet"><Link to='/Dog' class="nav__item-pet-link">Dog</Link> </li>
                                <li class="nav__item-pet"><Link to='/Bird' class="nav__item-pet-link">Bird</Link> </li>
                                <li class="nav__item-pet"><Link to='/Hamster' class="nav__item-pet-link">Hamster</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>

                

                <div className="nav_wrap_right">
                    <ul className="nav_right_list">
                        <li className="nav_right_item">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav_logo_find"/>
                        </li>
                        <li className="nav_right_item">
                            <FontAwesomeIcon icon={faCartShopping} className="nav_logo_cart"/>
                        </li>
                        <li className="nav_right_item">
                            <div className="signUp_wrap">
                                <a href="" >Sign up</a>
                            </div>
                        </li>
                    </ul>
                    
                </div>
               
            </nav>
            
        </header>
    )
}