import cs from './productDetail.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';
import { getProductDetail } from '../../apiClient/ProductApi';
import { getUserByUsername } from '../../apiClient/UserApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { useCart } from '../../CartControl/CartProvider';


export default function ProductDetail(){

    const [quantityValue,setQuantityValue] = useState(1)
    const [product,setProduct] = useState({})
    const authContext = useAuth()
    const {id} = useParams();

    const CartContext = useCart();
    
    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        retrieveDataProduct()
        
    },[])


    

    function retrieveDataProduct(){

        getProductDetail(id)
            .then(response => Successfully(response))
            .catch(error => console.log(error))
    }
    
    function Successfully(response){
        setProduct(response.data);
    }
    


    

    function handlePlusAddToCart(){
        setQuantityValue(Math.min(product.productQuantity , quantityValue+1))
    }

    function handleMinusAddToCart(){
        setQuantityValue(Math.max(1, quantityValue-1))
    }


    const linkStyle = {
        backgroundImage: `url(${product.productImageUrl})`,
    
    };
    
    function handleAddToCart(){
        CartContext.addFromProductToCartInProductDetail(id,quantityValue)
    }


    return(
        <div className={cs['body']}>
            <div className="grid">
                <div >
                   <Link className={cs['Link_Product_Category']} to="/Products/all">Product</Link> /
                   <Link className={cs['Link_Product_Category']} to={`/Products/${product.productCategory}`}>{product.productCategory}</Link> /
                   <Link className={cs['Link_Product_Category']} to={`/Product/Detail/${id}`}>current</Link>
                </div>
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
                                <p className={cs['product_description']}>{product.productDescription}</p>
                            </div>
                            <div className={cs['bot_wrap']}>
                                <span>Quantity:</span>
                                <div className={cs['input_wrap']}>
                                    <button className={cs['btn-cal']} onClick={handleMinusAddToCart}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <input type="text" id={cs['input-quantity']}  value={quantityValue} 
                                    
                                    />
                                    <button className={cs['btn-cal']} onClick={handlePlusAddToCart}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                                <span className={cs['currentQuantity']}>({product.productQuantity} left)</span>
                            </div>
                            <div className={cs['checkout-div']}>
                                <button onClick={handleAddToCart} className={cs['checkout-btn']}>
                                    Add to cart
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


               

                
                <CommentForm id={id} />

            </div>

           

        </div>
    )
}