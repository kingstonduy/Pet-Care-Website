import cs from './Account.module.css'

const Account= () => {

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


    function  handleRatting() {
        alert("clicked rating")
    }

    function handleSearching(){
        alert("clicked searching")
    }

    function handleBuyAgain(){
        alert("clicked buy again")
    }

    function handleChangeInformation(){
        alert("clicked change information")
    }

    return(
        <div className={cs['body']}>
            <div className={cs['grid-column-left']}>
                <div className={cs['avatar-image']}>
                    <img src="/static/media/ava_duy.aa652af44379c0bd251d.jpg" alt="" />
                </div>

                <div className={cs['avatar-name']}>
                    Duong Khanh Duy
                </div>

                <div className={cs['change-information-icon']}>
                    <button onClick={handleChangeInformation}>
                        <img src='https://www.svgrepo.com/show/512628/pen-1319.svg' alt=''/>
                    </button>
                </div>

                <div className={cs['change-information-label']}>
                    <button onClick={handleChangeInformation}>
                        Change information
                    </button>
                </div>
            </div>

            <div className={cs['grid-header']}>
                <h1>Online shopping history</h1>
            </div>

            <div className={cs['grid-column-right']}>
                <div className={cs["searching-bar"]}>
                    <div className={cs["input-searching"]}>
                        <input type="text" name="" id="" placeholder='search' />

                        <div className={cs["searching-icon"]}>
                            <button onClick={handleSearching}>
                                <span className={cs['magnifying-image']}>
                                    <img src="https://www.svgrepo.com/show/479452/magnifying-glass-for-search.svg" alt="" />
                                </span>
                                
                            </button>
                        </div>
                    </div>
                </div>



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

                                                <div className={cs["product-name"]}>
                                                    {item.productName}
                                                </div>

                                                <div className={cs["product-type"]}>
                                                    {item.productCategory}
                                                </div>
                                            </div>

                                            <div className={cs["table-col"]}>
                                                <div className={cs["product-price"]}>
                                                    {item.productPrice}
                                                </div>

                                                <div className={cs["btn-div"]}>
                                                <button onClick={handleRatting}>
                                                    RATING
                                                </button>
                                            </div>
                                                
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

                                                <div className={cs["btn-div"]}>
                                                <button onClick={handleBuyAgain}>
                                                    BUY AGAIN
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Account