import React, { useEffect, useState } from 'react';
import cs from './CartComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { getProductOnCart, updateQuantityCartItem } from '../../apiClient/CartApi';
import { useAuth } from '../../security/AuthContext';



const CartComponent = ({ isCartOpen, setIsCartOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const authContext= useAuth();
  
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
        retriveProductOnCart();
        const interval = setInterval(retriveProductOnCart, 500);
        return () => {
            clearInterval(interval);
        };
    }, []);
  
    async function retriveProductOnCart() {
      try {
        const response = await getProductOnCart(authContext.username);
        console.log('success')
        setProducts(response.data);
      } 
      catch (error) {
        console.log(error);
      }
    }
  
    const handlePlusClick = (product) => {
    //   setCart((prev) => {
    //     const temp = prev.map((item) => {
    //       if (item.cartDTOId === product.cartDTOId) {
    //         return {
    //           ...item,
    //           cartDTOQuantity: item.cartDTOQuantity + 1,
    //         };
    //       }
    //       return item;
    //     });
    //     return temp;
    //   });
        try{
            const cartDTO = {
                'cartDTOId': product.cartDTOId,
                'cartDTOQuantity': product.cartDTOQuantity + 1,
            }
            const response = updateQuantityCartItem(cartDTO)
            if(response.status == 200){
                alert('Register successfully')
            }
        }
        catch(error){
            console.log(error)
            alert('error while update quantity')
        }
    };
  
    const handleMinusClick = (product) => {
    //   setCart((prev) => {
    //     const temp = prev.map((item) => {
    //       if (item.cartDTOId === product.cartDTOId) {
    //         return {
    //           ...item,
    //           cartDTOQuantity: Math.max(item.cartDTOQuantity - 1, 0),
    //         };
    //       }
    //       return item;
    //     });
    //     return temp;
    //   });
        try{
            const cartDTO = {
                'cartDTOId': product.cartDTOId,
                'cartDTOQuantity':Math.max(0, product.cartDTOQuantity -1) ,
            }
            const response = updateQuantityCartItem(cartDTO)
            if(response.status == 200){
                alert('Register successfully')
            }
        }
        catch(error){
            console.log(error)
            alert('error while update quantity')
        }
    };
  
    useEffect(() => {
      setIsOpen(isCartOpen);
    }, [isCartOpen]);
  
    useEffect(() => {
      setCart(products);
    }, [products]);

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
                                                        <button className={cs['hidden-menu-btn']} onClick={() => handlePlusClick(v)}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
    
                                                        <input  className={cs['input-quantity']} autocomplete="off"  value={v.cartDTOQuantity} type="number" inputmode="numeric" name="updates[]" data-line="1" size="2" aria-label="Change quantity"></input>    
    
                                                        <button className={cs['hidden-menu-btn']} onClick={() => handleMinusClick(v)}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                    </div>
                                                    <button className={cs['remove-btn']}>
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
            { cart.length > 0 &&
                <div className={cs['checkout-div']}>
                    <button className={cs['checkout-btn']}>
                        Check out
                    </button>
                </div>
            }
        </div>
        </div>
    );
};

export default CartComponent;
