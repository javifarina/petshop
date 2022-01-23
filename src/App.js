
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import CartContex from "./context/CartContex";
import Footer from "./components/Footer/Footer";
import Home from "./Page/Home";
import Error from "./Page/Error";
import Detail from "./Page/Detail";
import Category from "./Page/Category";
import Pets from "./Page/Pets";
import Servicios from "./Page/Servicios";
import Cartpage from "./Page/Cartpage";
import NavBar1 from "./components/NavBar/NavBar1";
import FormSale from "./components/Form/FormSale";

function App() {
  return (
    <CartContex>
      <BrowserRouter>
        <NavBar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/services" element={<Servicios />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="pet/:pet" element={<Category />} />
          <Route path="producto/:id" element={<Detail />} />
          <Route path="/checkout" element={<FormSale/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContex>
  );
}

export default App;
