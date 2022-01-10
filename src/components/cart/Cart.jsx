import React from 'react'
import { useContexCart } from '../../context/CartContex'


import {Link}  from 'react-router-dom'
import ItemCart from './ItemCart'
const Cart = () => {
    const { cart, deletAllProduct } = useContexCart()
    console.log(cart)
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
            {cart.length > 0 ? (
                cart.map((p) => (
                    <ItemCart
                        key={p.id}
                        id={p.id}
                        img={p.pictureUrl}
                        title={p.title}
                        price={p.price}
                        qty={p.qty}
                        description={p.description}
                    />
                ))
            ) : (
                <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <h2>Su carrito está vacío</h2>
                    <p>Agrege productos aqui...!</p>
                    <Link to="/" className="btn btn-outline-primary">
                        Seguir Comprando..
                    </Link>
                </div>
            )}
            
            {cart.length > 0 && (
                <div className="mb-3">
                   
                    <button
                        onClick={()=>deletAllProduct()}
                        className="btn btn-outline-danger ms-2"
                    >
                        Vaciar todo el carrito
                    </button>
                    <Link to="/" className="btn btn-outline-primary">
                        Seguir Comprando..
                    </Link>
                </div>
            )}


        </div>

    )
}

export default Cart
