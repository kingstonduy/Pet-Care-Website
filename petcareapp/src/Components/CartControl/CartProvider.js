import { createContext, useContext, useEffect } from "react";
import { useState } from "react";import { useAuth } from "../security/AuthContext";
import { addProductOnCart, deleteCartItem, flushCartItemToOrderedProduct, getProductOnCart, updateQuantityCartItem } from "../apiClient/CartApi";


export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export default function CartProvider({children}){

    const [cart,setCart] = useState([]);
    const [action, setAction] = useState(1);
    const [isCartOpen, setIsCartOpen]= useState(false);


    const AuthContext  = useAuth();

    

    useEffect(() => {
        if(AuthContext.isAuthenticated == true){
            getProduct();
        }
        else{
            setCart([])
        }
    },[AuthContext.isAuthenticated, action, isCartOpen])
    
   
    async function getProduct() {
        try {
            const response = await getProductOnCart(AuthContext.username);
            console.log(response.data)
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
            alert('add to cart success')
            setIsCartOpen(false)
        }
        catch(error){
            console.log(error)
        }
        setAction(action+1)
    }

    async function addFromProductToCartInProductDetail(id,quantity){
        const addToCartRequest = {
            cartItemQuantity: quantity,
            productId: id,
            username: AuthContext.username
        }
        try{
            const  response =  await addProductOnCart(addToCartRequest)
            alert('add to cart success')
            setIsCartOpen(false)
        }
        catch(error){
            console.log(error)
        }
        setAction(action+1)
    }

    async function AddFromCartToOrderedProduct(){
        try{
            const response= await flushCartItemToOrderedProduct(cart)
        }
        catch(error)
        {
            console.log(error)
            console.log('Error when flush cart item to ordered product')
        }
        setIsCartOpen(false)
        setAction(action+1)
    }
    

    
    
    
   
    
    return(
        <CartContext.Provider value={{cart, setCart, isCartOpen, setIsCartOpen , 
        getProduct, updagePlusQuantityItemOnCart, updateMinusQuantityItemOnCart, 
        deleteItemOnCart, addFromProductToCart, AddFromCartToOrderedProduct,addFromProductToCartInProductDetail}}>
            {children}
        </CartContext.Provider>
    )
}