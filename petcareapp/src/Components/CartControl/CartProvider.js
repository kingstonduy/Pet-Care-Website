import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { getUser, getUserByUsername } from "../apiClient/UserApi";
import { useAuth } from "../security/AuthContext";
export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export default function CartProvider({children}){

    const [cartItems,setCartItems] = useState([]);
    const AuthContext  = useAuth();
    
   

    
    // useEffect(() =>getCartList(),AuthContext.username)

    
    // function getCartList(){
    //     getUserByUsername(AuthContext.username)
    //         .then(response => getCartListSuccess(response))
    //         .catch(error => console.log(error))
    // }

    // function getCartListSuccess(response){
    //     setCartItems(response.data.cartList)
    // }

   
    
    return(
        <CartContext.Provider value={{cartItems}}>
            {children}
        </CartContext.Provider>
    )
}