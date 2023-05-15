import { createContext, useContext } from "react";
import { useState } from "react";
import { checkLogin } from "../apiClient/UserApi";



export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({children}){

    
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username,setUsername] = useState('')


    async function login(user){

            try{
                console.log(user)
                const response = await checkLogin(user)
                // console.log(response)
                if(response.status == 200){
                    setAuthenticated(true)
                    setUsername(user.userUserName)
                    return true;
                }
            }
            catch(error){
                console.log('error o day')
                console.log(error)
                return false;
            }
       
    }

    function logout(){
        setAuthenticated(false)
        // setToken(null)
        setUsername(null)
    }




    return(
        <AuthContext.Provider value={{isAuthenticated, setAuthenticated,login,logout,username}}>
            {children}
        </AuthContext.Provider>
    )
}