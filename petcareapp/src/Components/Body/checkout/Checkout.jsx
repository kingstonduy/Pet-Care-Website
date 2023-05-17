import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../CartControl/CartProvider';
import { useAuth } from '../../security/AuthContext';
import cs from './Checkout.module.css'
import { flushCartItemToOrderedProduct } from '../../apiClient/CartApi';


export default function  Checkout() {
    const CartContext= useCart();
    const products= CartContext.cart;

    const navigation= useNavigate()

    const CompleteBuy = () => {
        CartContext.AddFromCartToOrderedProduct()
        alert('Buy successfully. Thank you for your purchase')
        navigation('/Home')
    }
    
    return (
        <div className={cs['body']}>
            <div className={cs['header-checkout']}>
                <center>
                    <h1>Your Cart</h1>
                </center>
            </div>
            <div className="">
                <div className={cs["products-table"]}>
                    <div className={cs["table-header"]}>

                        <div className={`${cs["product-main-header"]} ${cs["centered-text"]}`}>
                            Product
                        </div>

                        <div className={`${cs["product-header-price"]} ${cs["centered-text"]}`}>
                            Price
                        </div>

                        <div className={`${cs["product-header-quantity"]} ${cs["centered-text"]}`}>
                            Quantity
                        </div>

                        <div className={`${cs["product-header-total"]} ${cs["centered-text"]}`}>
                            Total
                        </div>

                    </div>
                        
                    {
                        products.length > 0 && 
                        products.map(
                            (item, index) => {
                                return(
                                    <>
                                        <div className={`${cs["table-row"]} ${cs['black-line']}`}>
                                            <div className={cs["product-main-group"]}>
                                                <div className={cs["avatar-img"]}>
                                                    <img src={item.cartDTOImageUrl} alt=""  />
                                                </div>

                                                <div className={cs['name-type']}>
                                                    <div className={cs["product-name"]}>
                                                        {item.cartDTOName}
                                                    </div>

                                                    <div className={cs["product-type"]}>
                                                        {item.cartDTOCategory}
                                                    </div>
                                                </div>
                                            
                                                
                                            </div>

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-price"]}>
                                                    {item.cartDTOPrice}
                                                </div>
                                                
                                            </div>

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-quantity"]}>
                                                    {item.cartDTOQuantity}
                                                </div>
                                                
                                            </div>
                                            

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-price"]}>
                                                    {parseFloat(item.cartDTOPrice) * parseFloat(item.cartDTOQuantity)}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        )
                    }
                    <div className={cs["table-row"]}>
                        <div className={`${cs['col-3']}  ${cs['centered-text']}`}>
                            Total
                        </div>

                        <div className={`${cs['col-4']}  ${cs['centered-text']}`}>
                            {products.reduce((total, item) => total + parseFloat(item.cartDTOPrice) * parseFloat(item.cartDTOQuantity), 0)}
                        </div>
                    </div>
                </div>

                <div className={cs['checkout-div']}>
                    <button className={cs['checkout-btn']} onClick={CompleteBuy}>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}