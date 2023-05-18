import cs from './product.module.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useAuth } from '../../security/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addProductOnCart } from '../../apiClient/CartApi';
import { useCart } from '../../CartControl/CartProvider';

export default function Product({data}){
    const navigate = useNavigate()

    const authContext = useAuth();
    const cartContext = useCart();
    const{id,productName,productQuantity,productCategory,productPrice,productImageUrl} = data;

   

    async function  handleAddToCart(e){
        e.preventDefault();
        if(authContext.isAuthenticated){
            cartContext.addFromProductToCart(id)

        }else{
            navigate('/login')
        }
    }


    const linkStyle = {
        backgroundImage: `url(${productImageUrl})`,
    
    };

    

    return(
        <div className="column4">
            <Link to={`/Product/Detail/${id}`}  className={cs['product_item']}>
                
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