import cs from './product.module.css'
import { useState } from 'react';

import {Switch} from "antd"
import {Link} from 'react-router-dom'
import Product from './Product';

export default function ProductShop(){

    const products =[
        {
            id: 1,
            Name: 'Iams Proactive' ,
            Category: 'food',
            Price: '100',
            url: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
        },
        {
            id: 2,
            Name: 'Iams Proactive aaaaa boitjasdjk biaset asdasdv asdbasdqweasd dasdasdcasd' ,
            Category: 'food',
            Price: '100',
            url: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
        },
        {
            id: 3,
            Name: 'Iams Proactive' ,
            Category: 'food',
            Price: '100',
            url: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
        },
        {
            id: 4,
            Name: 'Iams Proactive' ,
            Category: 'food',
            Price: '100',
            url: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
        },
        {
            id: 5,
            Name: 'Iams Proactive' ,
            Category: 'food',
            Price: '100',
            url: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
        },
        {
            id: 6,
            Name: 'Iams Proactive' ,
            Category: 'food',
            Price: '100',
            url: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
        },
        {
            id: 7,
            Name: 'Iams Proactive' ,
            Category: 'food',
            Price: '100',
            url: 'https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'
        },
    ]

    function handleChangeSelect(e){

    }


    function handleChangeToggle(e){
        console.log(e)
    }

    return(
        <div className={cs['body']}>
            <div className={cs['body_title']}>
                <h2>Products</h2>
            </div>


            <div className="grid">
                <div className={cs['body_sort']}>
                    <div className={cs['body_sort_left']}>
                        <div className={cs['sortGroup']}>
                            <label htmlFor="selectSort">Sort By:</label>
                            <select name="" id="selectSort" onChange={handleChangeSelect}>
                                <option value="">Select</option>
                                <option value="Ascending">Ascendingly</option>
                                <option value="Descending">Descendingly</option>
                            </select>
                        </div>
                    </div>

                    <div className={cs['body_sort_right']}>
                        <div className={cs['sortGroup']}>
                            <label htmlFor="selectSort">Filter By:</label>
                            <select name="" id="selectSort" >
                                <option value="">Select</option>
                                
                                <option value="Ascending">Ascendingly</option>
                                <option value="Descending">Descendingly</option>
                            </select>
                        </div>

                        <div className={cs['sortGroup']}>
                            <label htmlFor="selectSort">In Stock</label>
                            <Switch onChange={handleChangeToggle} className={cs['switchToggle']}/>
                        </div>
                    </div>
                </div>

                <div className={cs['home-product']}>
                    <div className="row">
                        {
                            products.map(
                                product => (
                                    <Product key={product.id} data={product}/>
                                )
                            )
                        }
                    
                    </div>
                </div>
            </div>
            


        </div>
    )
}

