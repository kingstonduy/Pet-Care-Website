import React, { useEffect, useState } from 'react';
import cs from './CartComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';



const CartComponent = ({isCartOpen, setIsCartOpen}) => {
    const [isOpen, setIsOpen]= useState(false)
    const [quantity,setQuantity] = useState(1)
    const toggleMenu = () => {
        setIsCartOpen(false);
        setIsOpen(isCartOpen)
        if (!isCartOpen) {
            document.documentElement.style.overflow = 'hidden';
        } 
        else {
            document.documentElement.style.overflow = 'auto';
        }
        
    }

    const products = [
        {
            productId: 1,
            productName: 'Iams Proactive Health Smart Puppy Large Breed Dry Puppy Foo',
            productQuantity: 1,
            productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
            productCategory: 'food',
            productPrice: '100',
            urlImageProduct: 'https://www.petproducts.com/static/upload/products/iams-proactive-health-smart-puppy-large-breed-dry-puppy-food-15-lbs/019014610945-2.jpg'
        },
    
        {
            productId: 2,
            productName: 'Vital Essentials Freeze Dried Vital Treats Bully Sticks',
            productQuantity: 1,
            productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
            productCategory: 'food',
            productPrice: '100',
            urlImageProduct: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
        },
        
        {
            productId: 3,
            productName: 'Elanco Seresto Flea and Tick Collar for Dogs Small Gray',
            productQuantity: 1,
            productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
            productCategory: 'food',
            productPrice: '100',
            urlImageProduct: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
    
        },
    
        {
            productId: 4 ,
            productName: 'Elanco Seresto Flea and Tick Collar for Dogs Small Gray',
            productQuantity: 1,
            productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
            productCategory: 'food',
            productPrice: '100',
            urlImageProduct: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
    
        },
        {
            productId: 5,
            productName: 'Iams Proactive Health Smart Puppy Large Breed Dry Puppy Foo',
            productQuantity: 1,
            productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
            productCategory: 'food',
            productPrice: '100',
            urlImageProduct: 'https://www.petproducts.com/static/upload/products/iams-proactive-health-smart-puppy-large-breed-dry-puppy-food-15-lbs/019014610945-2.jpg'
    
        },
        {
            productId: 6,
            productName: 'Iams Proactive Health Smart Puppy Large Breed Dry Puppy Foo',
            productQuantity: 1,
            productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
            productCategory: 'food',
            productPrice: '100',
            urlImageProduct: 'https://www.petproducts.com/static/upload/products/iams-proactive-health-smart-puppy-large-breed-dry-puppy-food-15-lbs/019014610945-2.jpg'
    
        }
    ]

    const [cart, setCart]= useState(products)


    // function handleOnchangeQuantity(e){
    //     setQuantity(e.target.value)
    // }

    const handlePlusClick = (product) => {
        setCart(prev =>{
            const temp= cart.map(
                (item) => {
                    if(item.productId === product.productId){
                        return{
                            ...item,
                            productQuantity: item.productQuantity + 1
                        }
                    }
                    return item
                })
            return temp
        })
    }

    const handleMinusClick = (product) => {
        setCart(prev =>{
            const temp= cart.map(
                (item) => {
                    if(item.productId === product.productId){
                        return{
                            ...item,
                            productQuantity: Math.max(item.productQuantity - 1, 0)
                        }
                    }
                    return item
                })
            return temp
        })

    }

  

    useEffect(() => {
        setIsOpen(isCartOpen);
    }, [isCartOpen]);

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
                    cart.map(
                        product => {
                            return (
                                <>
                                    <div className={cs['table-row']} key={product.id}>
                                        <div className={cs['product-img']}>
                                            <img src={product.urlImageProduct} alt=""  />
                                        </div>

                                        <div className={cs['product-main-group']}>
                                            <div className={cs['product-name']}>
                                                { product.productName.length > 30 ? `${product.productName.slice(0,30)}...` : product.productName }
                                            </div>

                                            <div className={cs['product-action']}>
                                                <div className={cs['add-minus-btn']}>
                                                    <button className={cs['hidden-menu-btn']} onClick={() => handlePlusClick(product)}>
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>

                                                    <input  className={cs['input-quantity']} autocomplete="off"  value={product.productQuantity} type="number" inputmode="numeric" name="updates[]" data-line="1" size="2" aria-label="Change quantity"></input>    

                                                    <button className={cs['hidden-menu-btn']} onClick={() => handleMinusClick(product)}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </button>
                                                </div>
                                                <button className={cs['remove-btn']}>
                                                    remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className={`${cs['product-price']}  ${cs['centered-text']}`}>
                                            {product.productPrice}$
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    )
                }
            </div>

            <div className={cs['checkout-div']}>
                <button className={cs['checkout-btn']}>
                    Check out
                </button>
            </div>
        </div>
        </div>
    );
};

export default CartComponent;
