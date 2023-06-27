import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Card from '../pages/Card';
import NotFound from '../pages/NotFound';
import Detalle from '../pages/Detalle';


const AppRouters = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pizza/:id" element={<Detalle/>}/>
            <Route path="/card" element={<Card/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRouters;