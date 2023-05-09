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
            <div className={cs['product_item']}>
                
                <div  className={cs['product_img_wrap']} >
                    <Link style={linkStyle} className={cs['product_item_img']}></Link>
                    <div onClick={handleAddToCart} className={cs['product_item_add_btn']} >Add To Cart</div>
                </div>
                <p className={cs['product_item_name']}>{Name} bllballbalblalballballbalalblabblbalblalablalbalbllalballbalal</p>
                <p className={cs['product_item_name']}>{Category}</p>
                <p className={cs['product_item_name']}>{Price}$</p>

            </div>
        </div>
    );
}