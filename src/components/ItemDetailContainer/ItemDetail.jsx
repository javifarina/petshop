import React, {useState}from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContexCart } from "../../context/CartContex";
import toast, { Toaster } from "react-hot-toast"
const ItemDetail = ({ item }) => {
  const [contador,setContador ] = useState (null)
  const { addToCart } = useContexCart()
  const onAdd=(contador)=>{
    addToCart(item,contador)
    setContador(contador)
    toast.success("El producto se Agrego al Carrito");

  }
  
  return (
    <div className="card mb-3" style={{ width: "48rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.pictureUrl}
            className="img-fluid rounded-start"
            alt={item.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">Stock {item.stock === 0 ?<span class="badge bg-danger">Por el momento sin Stock</span>:item.stock }</p>
            <h4 className="card-text">
              <span>$ {item.price}</span>
            </h4>
            <p className="card-text">
              <small className="text-muted">Ultima compra 3 minutos</small>
            </p>

            {!contador && <ItemCount stock={item.stock} inicial={item.inicial} onAdd={onAdd}/>}
            <div className="d-grid gap-2 m-3">
              {contador > 0 ?  <Link to="/cart" className="btn btn-success lg">
                Ir al Carrito..
              </Link>: null}
             
            </div>
          </div>
        </div>
        <Link to="/" className="btn btn-outline-warning lg">
                Seguir Comprando ...
        </Link>
      </div>
      <Toaster
         position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default ItemDetail;
