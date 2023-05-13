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
                const response = await checkLogin(user)
                console.log(response)
                if(response.status == 200){
                    setAuthenticated(true)
                    setUsername(user.name)
                    return true;
                }
            }catch(error){
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

    const Products =[
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
            Price: '300',
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

    function retrieveProduct(id){
        
        return Products.find(function(Product){
            console.log(Product)
            return Product.id = id
        })

    }

    return(
        <AuthContext.Provider value={{isAuthenticated, setAuthenticated,login,logout,username,Products,retrieveProduct}}>
            {children}
        </AuthContext.Provider>
    )
}