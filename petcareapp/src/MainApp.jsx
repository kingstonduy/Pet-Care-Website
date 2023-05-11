import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Body/Home/Home';
import Service from './Components/Body/Service/Service';
import Header from './Components/Header/Header';
import Cat from './Components/Body/petInformation/Cat'
import Dog from './Components/Body/petInformation/Dog'
import Bird from './Components/Body/petInformation/Bird'
import Hamster from './Components/Body/petInformation/Hamster'
import Account from './Components/Body/account/Account';
import ProductShop from './Components/Body/Products/ProductShop';
import Login from './Components/Body/Login/Login';
<<<<<<< HEAD
<<<<<<< HEAD
import Register from './Components/Body/Login/Register'
=======
import Footer from './Components/Footer/Footer';
import About from './Components/Body/about/About';
>>>>>>> 175b307b59951f89b70ca221747cbb374f0293c8
=======
import Register from './Components/Body/Login/Register'
import Footer from './Components/Footer/Footer';
import About from './Components/Body/about/About';
import HiddenMenu from './Components/HiddenMenu';

export default function MainApp(){
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Home' element={<Home/>}/>
                    <Route path='/Service' element={<Service/>}/>
                    <Route path='/Cat' element={<Cat/>}/>
                    <Route path='/Dog' element={<Dog/>}/>
                    <Route path='/Bird' element={<Bird/>}/>
                    <Route path='/Hamster' element={<Hamster/>}/>
                    <Route path='/Account' element={<Account/>}/>
                    <Route path='/Products' element={<ProductShop/>}/>
<<<<<<< HEAD
<<<<<<< HEAD
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Register' element={<Register/>}/>
=======
                    <Route path='/login' element={<Login/>}/>
                    <Route path='About' element={<About/>}/>
>>>>>>> 175b307b59951f89b70ca221747cbb374f0293c8
=======
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='About' element={<About/>}/>
>>>>>>> 025b20cd4fc0bfe65715ff394e9bfd27999a4a0c
                </Routes>
                <Footer/>



            </BrowserRouter>
        </div>    
    );
}