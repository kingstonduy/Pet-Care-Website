import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Body/Home/Home';
import Service from './Components/Body/Service/Service';
import Header from './Components/Header/Header';
import Cat from './Components/Body/petInformation/Cat'
import Dog from './Components/Body/petInformation/Dog'
import Bird from './Components/Body/petInformation/Bird'
import Hamster from './Components/Body/petInformation/Hamster'

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
                </Routes>
            </BrowserRouter>
        </div>    
    );
}