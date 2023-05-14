import cs from './productDetail.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';
import { getProductDetail } from '../../apiClient/ProductApi';
import { getUserByUsername } from '../../apiClient/UserApi';

export default function ProductDetail(){

    const [quantityValue,setQuantityValue] = useState()
    const [product,setProduct] = useState({})
    const authContext = useAuth()

    const {id} = useParams();
    
    useEffect(() => retrieveDataProduct(),[])

    function retrieveDataProduct(){
        getProductDetail(id)
            .then(response => Successfully(response))
            .catch(error => console.log(error))
    }
    
    function Successfully(response){
        setProduct(response.data);
    }
    

    function handleOnchange(e){
        setQuantityValue(e.target.value)
    }


    const linkStyle = {
        backgroundImage: `url(${product.productImageUrl})`,
    
    };
    
    // function HanndleFetchAPi(){
    //     getUserByUsername(authContext.username)
    //         .then(response => getCartListSuccess(response))
    //         .catch(error => console.log(error))
    // }

    // function getCartListSuccess(response){
    //     console.log(authContext.username)
    //     console.log(response.data.cartList)
    //     // setCartItems(response.data.cartList)
    // }



    return(
        <div className={cs['body']}>
            <div className="grid">
                <p>kaka ~ lala ~ baba</p>
                <div className={cs['body_product']}>
                    <div className="row">
                        <div className="column2">
                           <div className={cs['img_justify']}>
                                <div className={cs['product_img_wrap']}>
                                        <div style={linkStyle} className={cs['product_img']}  ></div>
                                </div>
                           </div>
                        </div>

                        <div className="column2">
                            <div className={cs['top_wrap']}>
                                <h2 className={cs['product_name']}>{product.productName}</h2>    

                                <span className={cs['product_price']}>{product.productPrice}$</span>
                                <h3>Details</h3>
                                <p className={cs['product_description']}>The perfect kitchen companion 
                                    for any home cook.Our bestselling cooking combo that 
                                    covers the kitchen essentials for any cuisine. Whether it’s searing, 
                                    simmering, slow cooking, and everything in between — 
                                    this set has you covered from your stove to the sink.</p>
                            </div>
                            <div className={cs['bot_wrap']}>
                                <span>Quantity:</span>
                                <div className={cs['input_wrap']}>
                                    <button className={cs['btn-cal']}>-</button>
                                    <input type="number" id={cs['input-quantity']} onChange={handleOnchange} value={quantityValue} 
                                    
                                    />
                                    <button className={cs['btn-cal']}>+</button>
                                </div>
                                <span className={cs['currentQuantity']}>(235 left)</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <button onClick={HanndleFetchAPi}>Click me!</button> */}
        </div>
    )
}