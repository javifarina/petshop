import React from "react";
import paw from './paw.svg'
import { CartWidget } from "../CartWidget";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-color-custom">
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
          <a className="navbar-brand" href="/">
          <img src={paw} alt="paw" className="logo-brand"/>
          </a>
          <a className="navbar-brand logo-text" href="/">
            PetShop
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Mascotas">
                Mascotas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Marcas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Servicios
              </a>
            </li>   
          </ul>
          <div className="d-flex">
            <CartWidget/>
          </div>
        </div>
      </div>
    </nav>
  );
};
