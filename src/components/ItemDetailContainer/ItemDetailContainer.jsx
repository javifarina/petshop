import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinners from "../spinner/Spinners";
import "../container.css";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productosCollection = collection(db, "Productos");
    const refDoc = doc(productosCollection, id);
    getDoc(refDoc)
      .then((resultado) => {
        setProduct({ id: id, ...resultado.data() });
      })
      .catch((error) => {});
  }, [id]);

  return (
    <>
      <h3 className="d-flex justify-content-center fixeContainer">
        Detalle de Producto
      </h3>
      {!product ? <Spinners /> : null}
      <div className="row justify-content-center">
        {product && <ItemDetail item={product} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;
