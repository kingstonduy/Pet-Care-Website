import { createContext, useContext, useEffect } from "react";
import { useState } from "react";import { useAuth } from "../security/AuthContext";
import { addProductOnCart, deleteCartItem, getProductOnCart, updateQuantityCartItem } from "../apiClient/CartApi";


export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export default function CartProvider({children}){

    const [cart,setCart] = useState([]);
    const [action, setAction] = useState(1);
    const AuthContext  = useAuth();

    console.log(cart)
    useEffect(
        () => {
            getProduct();
        }, [action]
    )

    useEffect(() => {
        if(AuthContext.isAuthenticated == true){
            getProduct();
        }
        else{
            setCart([])
        }
    },[AuthContext.isAuthenticated])
    
   
    async function getProduct() {
        try {
            const response = await getProductOnCart(AuthContext.username);
            console.log(getProduct)
            setCart(response.data);
        } 
        catch (error) {
            console.log(error);
        }
    }

    async function updagePlusQuantityItemOnCart(product) {
        
        try{
            const cartDTO = {
                'cartDTOId': product.cartDTOId,
                'cartDTOQuantity':Math.min(99999, product.cartDTOQuantity + 1) ,
            }
            const response = await updateQuantityCartItem(cartDTO)
        }
        catch(error){
            console.log(error)
            alert('error while update quantity')
        }
        setAction(action+1)
    }

    async function updateMinusQuantityItemOnCart(product) {
        setAction(action-1)
        try{
            const cartDTO = {
                'cartDTOId': product.cartDTOId,
                'cartDTOQuantity':Math.max(1, product.cartDTOQuantity -1) ,
            }
            const response = await updateQuantityCartItem(cartDTO)
        }
        catch(error){
            console.log(error)
            alert('error while update quantity')
        }
    }

    async function deleteItemOnCart(product) {
        console.log('click r ne')
        try{
            // console.log('id cua cart: ' + product.cartDTOId)
             const  response= await deleteCartItem(product.cartDTOId) // api
        }
        catch(error){
            console.log(error)
            alert('error while delete item on cart')
        }
        setAction(action+1)
    }

    async function addFromProductToCart(id){
        const addToCartRequest = {
            cartItemQuantity: 1,
            productId: id,
            username: AuthContext.username
        }
        try{
            const  response =  await addProductOnCart(addToCartRequest)
            alert('add to cart successfully')
        }
        catch(error){
            console.log(error)
        }
        setAction(action+1)
    }
    

    
    
    
   
    
    return(
        <CartContext.Provider value={{cart, setCart, getProduct, updagePlusQuantityItemOnCart, updateMinusQuantityItemOnCart, deleteItemOnCart, addFromProductToCart}}>
            {children}
        </CartContext.Provider>
    )
}