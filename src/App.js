//Librerías
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Componentes
import { NavBar } from './components/NavBar/NavBar';
import CartContex  from './context/CartContex'
//import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
//Páginas 
import Home from './Page/Home';
import Error from './Page/Error';
import Detail from './Page/Detail';
import Category from './Page/Category';
import Pets from './Page/Pets';
import Servicios from './Page/Servicios';
import Checkout from './Page/Checkout';

function App() {
  return (
    <CartContex>  
    <BrowserRouter>
       {/*Menú*/}
       <NavBar/>
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/pets" element={<Pets/>}/>
            <Route path ="/services" element={<Servicios/>}/>
            <Route path ="/cart" element={<Checkout/>}/>
            <Route path ="pet/:pet" element = {<Category/>}/>
            <Route path = "producto/:id" element = {<Detail/>}/>
            <Route path = "*" element = {<Error/>} />
        </Routes>
        
        {/*Footer */}
        <Footer/>
    </BrowserRouter>
       
    </CartContex>
    
  );
}

export default App;
