import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import paw from './paw.svg'
import cat from '../../img/catsolid.svg'
import dog from '../../img/dogsolid.svg'
import fish from '../../img/fishsolid.svg'
import bird from '../../img/crowsolid.svg'
import { CartWidget } from "../CartWidget";
import { useContexCart } from "../../context/CartContex";
import "./NavBar.css";
const NavBar1 = () => {
    const { allProducInCart } = useContexCart()
    let cant = allProducInCart()
    return (
        <Navbar collapseOnSelect expand="lg" className=" navbar-color-custom fixed-top" variant="dark">
            <Container>
                <Navbar.Brand><NavLink className="navbar-brand" to="/">
                    <img src={paw} alt="paw" className="logo-brand" />
                </NavLink>Patitas </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
              
                        <Nav.Link href="#"><NavLink className="nav-link" to={'pet/cat'}>
                            <img src={cat} alt="cat" className="logo-brand" />
                        Cat </NavLink > </Nav.Link>
                        <Nav.Link href="#"><NavLink className="nav-link" to={'pet/dog'}>
                            <img src={dog} alt="dog" className="logo-brand" />
                            Dog</NavLink></Nav.Link>
                        <Nav.Link href="#"><NavLink className="nav-link" to={'pet/fish'}>
                            <img src={fish} alt="fish" className="logo-brand" />
                            Fish </NavLink></Nav.Link>
                        <Nav.Link href="#"> <NavLink className="nav-link" to={'pet/bird'}>
                            <img src={bird} alt="bird" className="logo-brand" />
                            Bird</NavLink></Nav.Link>
                    </Nav>
                    <Nav>
                        {cant > 0 ? <Nav.Link  href="#">
                            <CartWidget cont={cant} />
                        </Nav.Link>:null}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar1
