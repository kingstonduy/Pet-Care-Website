import { createContext, useContext } from "react";
import { useState } from "react";
import { checkLogin } from "../apiClient/UserApi";



export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({children}){

    
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username,setUsername] = useState('')

    
    // function login(username,password){
    //     if(username === "zet" && password === "123"){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true;
        
    //     }else{

    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false;
    //     }
    // }

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
        // // const baToken = 'Basic ' + window.btoa(username + ":" + password)
        // try{
        //     const response = await executeBasicAuthenticationService(baToken)
        //     console.log(response)
        //     if(response.status==200){
        //         setAuthenticated(true)
        //         setUsername(username)
        //         setToken(baToken)

        //         apiClient.interceptors.request.use(
        //             (config) => {
        //                 console.log("Intercepting and adding a token")
        //                 config.headers.Authorization = baToken
        //                 return config
        //             }
        //         )

        //         return true;
        //     }else{
        //         logout()
        //         return false;
        //     }
        // }catch(error){
        //         console.log(error)
        //         logout()
        //         return false;
        // }
       
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