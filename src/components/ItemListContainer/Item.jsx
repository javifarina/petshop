import React from "react";

const Item = ({ key, title, description, pictureUrl, stock, price}) => {
   
  return (
    <>
    <div className="card card-block" style={{ width: "15rem" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Stock {stock}</p>
        <p className="card-text"><span>$ {price}</span></p>
      </div>
      <div className="d-grid gap-2 m-3">
        <button className="btn btn-info" size="lg">
          ver Detalle
        </button>
      </div>
    </div>
    </>
  )
    

   
  
};

export default Item;
