import { useCart } from '../../CartControl/CartProvider';
import { useAuth } from '../../security/AuthContext';
import cs from './Checkout.module.css'


export default function  Checkout() {
    const CartContext= useCart();
    const products= CartContext.cart;
    
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
                                console.log(item)
                                return(
                                    <>
                                        <div className={cs["table-row"]}>
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
                </div>

                <div className={cs['checkout-div']}>
                    <button className={cs['checkout-btn']}>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}