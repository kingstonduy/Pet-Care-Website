import cs from './product.module.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'


export default function Product({data}){

    function handleAddToCart(e){

    }

    const{id,Name,Category,Price,url} = data;

    const linkStyle = {
        backgroundImage: `url(${url})`,
    
    };

    return(
        <div className="column4">
            <Link to ={`/Product/${data.id}`} className={cs['product_item']}>
                
                <div  className={cs['product_img_wrap']} >
                    <div style={linkStyle} className={cs['product_item_img']}></div>
                    <div onClick={handleAddToCart} className={cs['product_item_add_btn']} >Add To Cart</div>
                </div>
                <p className={cs['product_item_name']}> {Name.length > 20 ? `${Name.slice(0, 30)}...` : Name}</p>
                <p className={cs['product_item_description']}>{Category}</p>
                <p className={cs['product_item_price']}>{Price}$</p>

            </Link>
            
        
        </div>
    );
}