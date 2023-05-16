import cs from './product.module.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useAuth } from '../../security/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addProductOnCart } from '../../apiClient/CartApi';

export default function Product({data}){
    const navigate = useNavigate()

    const authContext = useAuth();
    const{id,productName,productQuantity,productCategory,productPrice,productImageUrl} = data;

   

    function handleAddToCart(e){
        e.preventDefault();
        if(authContext.isAuthenticated){
            const addToCartRequest = {
                cartItemQuantity: 1,
                productId: id,
                username: authContext.username
            }
            try{
                const  response = addProductOnCart(addToCartRequest)
                alert('add to cart successfully')
            }
            catch(error){
                console.log(error)
            }

        }else{
            navigate('/login')
    
        }
        
      
    }


    const linkStyle = {
        backgroundImage: `url(${productImageUrl})`,
    
    };

    

    return(
        <div className="column4">
            <Link to={`/Product/${id}`}  className={cs['product_item']}>
                
                <div  className={cs['product_img_wrap']} >
                    <div style={linkStyle} className={cs['product_item_img']}></div>
                    <div onClick={handleAddToCart} className={cs['product_item_add_btn']} >Add To Cart</div>
                </div>
                <p className={cs['product_item_name']}> {productName.length > 20 ? `${productName.slice(0, 30)}...` : productName}</p>
                <p className={cs['product_item_description']}>{productCategory}</p>
                <p className={cs['product_item_price']}>{productPrice}$</p>

            </Link>
            

        </div>
    );
}