import cs from './product.module.css'
import { useEffect, useState } from 'react';

import {Switch} from "antd"
import {Link} from 'react-router-dom'
import Product from './Product';
import { checkLogin, getUsers } from '../../apiClient/UserApi';
import { useAuth } from '../../security/AuthContext';
import { getProducts } from '../../apiClient/ProductApi';

export default function ProductShop(){

    

    const [products,setProducts] = useState([])


    const authContext = useAuth();

    
    useEffect(()=> retrieveProducts(),[])

    function retrieveProducts(){
        getProducts()
            .then(response => successfully(response))
            .catch(error => console.log(error))
    }
    
    function successfully(response){
        setProducts(response.data);
    }

    


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

