import React, { useEffect, useState } from 'react';
import cs from './CartComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { deleteCartItem, getProductOnCart, updateQuantityCartItem } from '../../apiClient/CartApi';
import { useAuth } from '../../security/AuthContext';
import { useCart } from '../../CartControl/CartProvider';
import { Link } from 'react-router-dom';



const CartComponent = ({ isCartOpen, setIsCartOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);

    const cartContext= useCart();


    const toggleMenu = () => {
      setIsCartOpen(false);
      setIsOpen(isCartOpen);
      if (!isCartOpen) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    };

    useEffect(() => {
        setIsOpen(isCartOpen);
        cartContext.getProduct()
        setCart(cartContext.cart)
    }, [isCartOpen]);

    
    useEffect(() => {
        setCart(cartContext.cart)
    }, [cartContext.cart]);
    
    
  
  
    async function retriveProductOnCart() {
        cartContext.getProduct()
    }
  
    const handlePlusClick = async (product) => {
        await cartContext.updagePlusQuantityItemOnCart(product)
    };
  
    const handleMinusClick = async (product) => {
        await cartContext.updateMinusQuantityItemOnCart(product)

    };

    const  handleDelteClick = async (product) => {
        await cartContext.deleteItemOnCart(product)
    };


    return (
        
        <div className={cs.container}>
        <div className={`${cs['hidden-menu']} ${isOpen ? cs.open : ''}`}>
            <div className={cs['header']}>
                <button className={cs['menu-toggle']} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faXmark} className={cs['x-icon']}/>
                </button>
                <div className={cs['title']}>
                    <h3>Shopping cart</h3>
                </div>
            </div>

            <div className={cs['product-table']}>
                {
                    cart.length > 0 ?
                    cart.map(
                        v => {
                            if(v){
                                return (
                                    <>
                                        <div className={cs['table-row']} key={v.id}>
                                            <div className={cs['product-img']}>
                                                <img src={v.cartDTOImageUrl} alt=""  />
                                            </div>
    
                                            <div className={cs['product-main-group']}>
                                                <div className={cs['product-name']}>
                                                    { v.cartDTOName > 30 ? `${v.cartDTOName.slice(0,30)}...` : v.cartDTOName }
                                                </div>
    
                                                <div className={cs['product-action']}>
                                                    <div className={cs['add-minus-btn']}>

                                                        <button className={cs['hidden-menu-btn']} onClick={() => handleMinusClick(v)}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                        
    
                                                        <input  className={cs['input-quantity']} autocomplete="off"  value={v.cartDTOQuantity} type="number" inputmode="numeric" name="updates[]" data-line="1" size="2" aria-label="Change quantity"></input>    
    
                                                        <button className={cs['hidden-menu-btn']} onClick={() => handlePlusClick(v)}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </div>
                                                    <button className={cs['remove-btn']} onClick={() => handleDelteClick(v)}>
                                                        remove
                                                    </button>
                                                </div>
                                            </div>
    
                                            <div className={`${cs['product-price']}  ${cs['centered-text']}`}>
                                                {v.cartDTOPrice}$
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            else return null;
                            
                        }
                    )
                    :
                    <>

                    </>

                }
            </div>
            {  cart.length > 0 &&
                <div className={cs['checkout-div']}>
                    
                    <Link to='/Checkout'  className={cs['checkout-btn']} >
                        <span className={cs['check-out-link']}>
                            Check out
                        </span>
                    </Link>
                </div>
            }
        </div>
        </div>
    );
};

export default CartComponent;
