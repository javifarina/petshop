import React from "react";
import { NavLink} from "react-router-dom";
import paw from './paw.svg'
import cat from '../../img/catsolid.svg'
import dog from '../../img/dogsolid.svg'
import fish from '../../img/fishsolid.svg'
import bird from '../../img/crowsolid.svg'
import { CartWidget } from "../CartWidget";
import { useContexCart } from "../../context/CartContex";
import "./NavBar.css";
export const NavBar = () => {
  const {allProducInCart} = useContexCart()
  let cant = allProducInCart()
  return (
    <nav className="navbar navbar-expand-lg navbar-color-custom fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" to="/">
            <img src={paw} alt="paw" className="logo-brand"/>
          </NavLink>
          <NavLink to ="/" className="navbar-brand logo-text" >
            Patitas
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            
            <li className="nav-item">
              <NavLink className="nav-link" to ={'pet/cat'}>
              <img src={cat} alt="cat" className="logo-brand"/>
              </NavLink >
            </li>   
            <li className="nav-item">
              <NavLink className="nav-link" to ={'pet/dog'}>
              <img src={dog} alt="dog" className="logo-brand"/>
              </NavLink>
            </li>   
            <li className="nav-item">
              <NavLink className="nav-link" to ={'pet/fish'}>
              <img src={fish} alt="fish" className="logo-brand"/>
              </NavLink>
            </li>   
            <li className="nav-item">
              <NavLink className="nav-link" to ={'pet/bird'}>
              <img src={bird} alt="bird" className="logo-brand"/>
              </NavLink>
            </li>   
          </ul>
          <div className="d-flex">
            <CartWidget cont={cant}/>
          </div>
        </div>  
      </div>
    </nav>
    
  );
};
