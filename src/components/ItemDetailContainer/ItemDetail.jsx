import React from 'react'

const ItemDetail = ({item}) => {

    return (
        <div className="card card-block" style={{ width: "15rem" }}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Stock {item.stock}</p>
        <p className="card-text"><span>$ {item.price}</span></p>
      </div>
      <div className="d-grid gap-2 m-3">
        <button className="btn btn-success" size="lg">
          Comprar Ahora 
        </button>
      </div>
    </div>
    )
}

export default ItemDetail
