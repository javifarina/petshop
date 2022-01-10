import React, {useState}from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContexCart } from "../../context/CartContex";
const ItemDetail = ({ item }) => {
  const [contador,setContador ] = useState (null)
  const { addToCart } = useContexCart()
  const onAdd=(contador)=>{
    setContador(contador)
    console.log("Cantidad en itemDetail",contador)
    addToCart(item,contador)
    
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
            <p className="card-text">Stock {item.stock}</p>
            <h4 className="card-text">
              <span>$ {item.price}</span>
            </h4>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            {!contador && <ItemCount stock={item.stock} inicial={item.inicial} onAdd={onAdd}/>}
            <div className="d-grid gap-2 m-3">
              <Link to="/cart" className="btn btn-success lg">
                Ir al Carrito
              </Link>
            </div>
          </div>
        </div>
        <Link to="/" className="btn btn-outline-warning lg">
                Volver al Home
              </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
