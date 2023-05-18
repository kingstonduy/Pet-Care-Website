import cs from './product.module.css'
import { useEffect, useState } from 'react';

import {Switch} from "antd"
import {Link, useParams} from 'react-router-dom'
import Product from './Product';
import { checkLogin, getUsers } from '../../apiClient/UserApi';
import { useAuth } from '../../security/AuthContext';
import { getProductByConstraint, getProductByInStock, getProducts } from '../../apiClient/ProductApi';
import { useNavigate } from 'react-router-dom';
export default function ProductShop(){

    
    const {type} = useParams();
    const navigate = useNavigate();


    const [products,setProducts] = useState([])
    

    const authContext = useAuth();

    
    useEffect(()=> retrieveProducts()
    ,[type])

    function retrieveProducts(){
        getProductByConstraint(type)
            .then(response => successfully(response))
            .catch(error => console.log(error))
    }
    
    function successfully(response){
        
        setProducts(response.data);
    }

    


    function handleChangeSelect(e){
        navigate(`/Products/${e.target.value}`)
    }

    function handleSort(e){
        console.log(e.target.value)
           if(e.target.value == 'ascending'){
                const newProducts = products.sort((a,b) => a.productPrice - b.productPrice)
                
                setProducts([...newProducts]);
           }else if(e.target.value == 'descending'){
                const newProducts = products.sort((a,b) => b.productPrice - a.productPrice)
                
                setProducts([...newProducts]);
           }
       
    }
    
    

    async function handleChangeToggle(e){
        if(e == true){
           try{
               const response = await getProductByInStock()
               if(response.status == 200){
                    setProducts(response.data);
               }
           }catch(error){
                console.log(error)
           }
            
        }else{
            try{
                const response = await getProducts();
                if(response.status == 200){
                    setProducts(response.data)
                }
            }catch(error){
                console.log(error)
            }
            
        }
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
                            <select name="" id="selectSort" onChange={handleSort}>
                                
                                <option value="ascending">Ascendingly</option>
                                <option value="descending">Descendingly</option>
                            </select>
                        </div>
                    </div>

                    <div className={cs['body_sort_right']}>
                        <div className={cs['sortGroup']}>
                            <label htmlFor="selectSort">Filter By:</label>
                            <select name="" id="selectSort" onChange={handleChangeSelect} >
                                
                                <option value="all">All</option>
                                <option value="food">Food</option>
                                <option value="fashion">Fashion</option>
                                <option value="toy">Toy</option>
                            </select>
                        </div>

                        <div className={cs['sortGroup']}>
                            <label htmlFor="selectSort">In Stock</label>
                            <Switch  onChange={handleChangeToggle} className={cs['switchToggle']}/>
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

