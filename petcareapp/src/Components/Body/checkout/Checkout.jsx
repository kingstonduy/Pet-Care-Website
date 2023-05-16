import cs from './Checkout.module.css'


export default function  Checkout() {
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

        }
    ]
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
                        products.map(
                            (item, index) => {
                                return(
                                    <>
                                        <div className={cs["table-row"]}>
                                            <div className={cs["product-main-group"]}>
                                                <div className={cs["avatar-img"]}>
                                                    <img src={item.urlImageProduct} alt=""  />
                                                </div>

                                                <div className={cs['name-type']}>
                                                    <div className={cs["product-name"]}>
                                                        {item.productName}
                                                    </div>

                                                    <div className={cs["product-type"]}>
                                                        {item.productCategory}
                                                    </div>
                                                </div>
                                            
                                                
                                            </div>

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-price"]}>
                                                    {item.productPrice}
                                                </div>

                                                {/* <div className={cs["btn-div"]}>
                                                    <button >
                                                        RATING
                                                    </button>
                                                </div> */}
                                                
                                            </div>

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-quantity"]}>
                                                    {item.productQuantity}
                                                </div>
                                                
                                            </div>
                                            

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-price"]}>
                                                    {item.productPrice}
                                                </div>

                                                {/* <div className={cs["btn-div"]}>
                                                <button>
                                                    BUY AGAIN
                                                </button>
                                                </div> */}
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
    )
}