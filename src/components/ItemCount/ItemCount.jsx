import React from "react";
import { useState } from "react";


const ItemCount = ({ stock, inicial, onAdd }) => {
  const addCart = () => {
    onAdd(contador);
  };

  const [contador, setContador] = useState(inicial);

  const add = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const remove = () => {
    if (contador > 1) setContador(contador - 1);
  };
  return (
    <div className="card" style={{ width: "auto" }}>
      <div className="w-100 d-flex">
        <button
          onClick={() => remove()}
          className="btn col-xs-6 btn-danger mx-auto"
        >
          -
        </button>
        <span>{contador}</span>

        <button
          onClick={() => add()}
          className="btn col-xs-6 btn-success mx-auto"
          disabled={contador === stock ? true : null}
        >
          +
        </button>
      </div>
      <div className="d-grid gap-2 m-3">
        <button
          onClick={addCart}
          className="btn btn-info"
          size="lg"
          disabled={stock === 0 ? true : null}
        >
          Agregar al Carrito
        
        </button>
      </div>
      
    </div>
  );
};
export default ItemCount;
