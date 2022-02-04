import React from "react";
import { useContexCart } from "../../context/CartContex";
//import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
//import { db } from '../firebase'
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
//import swal from 'sweetalert'

const Cart = () => {
  const { cart, deletAllProduct, totalPrice } = useContexCart();

  let total = totalPrice();

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
        <h2 className="my-1">
          Total: ${new Intl.NumberFormat().format(total)}
        </h2>
      )}
      {cart.length > 0 && (
        <div className="mb-3">
          <button
            onClick={() => deletAllProduct()}
            className="btn btn-outline-danger btn-sm "
          >
            Vaciar todo el carrito
          </button>
          <Link to="/" className="btn btn-outline-primary btn-sm">
            Seguir Comprando..
          </Link>

          <Link to="/checkout" className="btn btn-success btn-sm">
            Terminar Compra...
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
