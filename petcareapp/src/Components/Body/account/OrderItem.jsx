import cs from './Account.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { CommentRating } from '../../HiddenWrapContainer/CommentRating';


export function OrderItem({item}){
    const navigate = useNavigate()
    const [open,isOpen] = useState(false);
    
    function handleOpenRatingTrue(){
        isOpen(true);
    }

    function handleOpenRatingFalse(){
        isOpen(false);
    }
    function handleRatting() {
        handleOpenRatingTrue()
    }

    function handleBuyAgain(id) {
        navigate(`/Product/Detail/${id}`)
        
    }

    return(
        <>
            <div className={cs["table-row"]}>
                <div className={cs["product-main-group"]}>
                    <div className={cs["avatar-img"]}>
                        <img src={item.orderedProductDTOImageUrl} alt=""  />
                    </div>

                    <div className={cs["product-name"]}>
                        {item.orderedProductDTOProductName}
                    </div>

                    <div className={cs["product-type"]}>
                        {item.orderedProductDTOCategory}
                    </div>
                </div>

                <div className={cs["table-col"]}>
                    <div className={cs["product-price"]}>
                        {item.orderedProductDTOPrice}
                    </div>

                    <div className={cs["btn-div"]}>
                    <button onClick={handleRatting}>
                        RATING
                    </button>
                </div>
                    
                </div>

                <div className={cs["table-col"]}>
                    <div className={cs["product-quantity"]}>
                        {item.orderedProductDTOQuantity}
                    </div>
                    
                </div>
                

                <div className={cs["table-col"]}>
                    <div className={cs["product-price"]}>
                        {item.orderedProductDTOPrice * item.orderedProductDTOQuantity}
                    </div>

                    <div className={cs["btn-div"]}>
                        <button onClick={() => {handleBuyAgain(item.productId)}}>
                            BUY AGAIN
                        </button>
                    </div>
                </div>
            </div>
            {open && <CommentRating  id={item.productId} handleOpenRatingFalse={handleOpenRatingFalse} />}
    </>
    )
}