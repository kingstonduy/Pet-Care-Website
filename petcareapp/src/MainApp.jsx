import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Body/Home/Home';
import Service from './Components/Body/Service/Service';
import Header from './Components/Header/Header';
import Cat from './Components/Body/petInformation/Cat'
import Dog from './Components/Body/petInformation/Dog'
import Bird from './Components/Body/petInformation/Bird'
import Hamster from './Components/Body/petInformation/Hamster'
import ProductShop from './Components/Body/Products/ProductShop';
import Login from './Components/Body/Login/Login';
export default function MainApp(){
    return (
        <div>
            
    
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Service' element={<Service/>}/>
                    <Route path='/Cat' element={<Cat/>}/>
                    <Route path='/Dog' element={<Dog/>}/>
                    <Route path='/Bird' element={<Bird/>}/>
                    <Route path='/Hamster' element={<Hamster/>}/>
                    <Route path='/Products' element={<ProductShop/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>    
    );
}