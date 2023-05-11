import React, { useState } from 'react';
import cs from './CartComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';



const CartComponent = ({isCartOpen}) => {
  const [isOpen, setIsOpen] = useState(isCartOpen);
  console.log(isCartOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    isCartOpen = !isCartOpen;
    if (!isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  };

  const products = [
    {
        productId: 1,
        productName: 'Iams Proactive Health Smart Puppy Large Breed Dry Puppy Foo',
        productQuantity: '10',
        productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
        productCategory: 'food',
        productPrice: '100',
        urlImageProduct: 'https://www.petproducts.com/static/upload/products/iams-proactive-health-smart-puppy-large-breed-dry-puppy-food-15-lbs/019014610945-2.jpg'
    },

    {
        productId: 2,
        productName: 'Vital Essentials Freeze Dried Vital Treats Bully Sticks',
        productQuantity: '10',
        productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
        productCategory: 'food',
        productPrice: '100',
        urlImageProduct: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
    },
    
    {
        productId: 3,
        productName: 'Elanco Seresto Flea and Tick Collar for Dogs Small Gray',
        productQuantity: '10',
        productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
        productCategory: 'food',
        productPrice: '100',
        urlImageProduct: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'

    },

    {
        productId: 3,
        productName: 'Elanco Seresto Flea and Tick Collar for Dogs Small Gray',
        productQuantity: '10',
        productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
        productCategory: 'food',
        productPrice: '100',
        urlImageProduct: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'

    },
    {
        productId: 1,
        productName: 'Iams Proactive Health Smart Puppy Large Breed Dry Puppy Foo',
        productQuantity: '10',
        productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
        productCategory: 'food',
        productPrice: '100',
        urlImageProduct: 'https://www.petproducts.com/static/upload/products/iams-proactive-health-smart-puppy-large-breed-dry-puppy-food-15-lbs/019014610945-2.jpg'

    },
    {
        productId: 1,
        productName: 'Iams Proactive Health Smart Puppy Large Breed Dry Puppy Foo',
        productQuantity: '10',
        productDescription: 'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.',
        productCategory: 'food',
        productPrice: '100',
        urlImageProduct: 'https://www.petproducts.com/static/upload/products/iams-proactive-health-smart-puppy-large-breed-dry-puppy-food-15-lbs/019014610945-2.jpg'

    }
]

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
                products.map(
                    (item, index) => {
                        return (
                            <>
                                <div className={cs['table-row']}>
                                    <div className={cs['product-img']}>
                                        <img src={item.urlImageProduct} alt=""  />
                                    </div>

                                    <div className={cs['product-main-group']}>
                                        <div className={cs['product-name']}>
                                            {item.productName}
                                        </div>

                                        <div className={cs['product-action']}>
                                            <div className={cs['add-minus-btn']}>
                                                <button className={cs['hidden-menu-btn']}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>

                                                <input  className={cs['input-quantity']} autocomplete="off" value='1' type="number" inputmode="numeric" name="updates[]" data-line="1" size="2" aria-label="Change quantity"></input>    
                                                <button className={cs['hidden-menu-btn']}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                            </div>
                                            <button className={cs['remove-btn']}>
                                                remove
                                            </button>
                                        </div>
                                    </div>

                                    <div className={`${cs['product-price']}  ${cs['centered-text']}`}>
                                        {item.productPrice}$
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
