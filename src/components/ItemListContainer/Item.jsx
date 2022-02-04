import React from "react";
import { Link } from "react-router-dom";
const Item = ({ id, title, description, pictureUrl, price }) => {
  return (
    <div className="card card-block" style={{ width: "14rem" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <span>$ {price}</span>
        </p>
      </div>
      <div className="d-grid gap-2 m-3">
        <Link to={`/producto/${id}`} className="btn btn-outline-info btn-sm">
          + Info
        </Link>
      </div>
    </div>
  );
};

export default Item;
