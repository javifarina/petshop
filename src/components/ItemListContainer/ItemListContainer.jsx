import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Spinners from "../spinner/Spinners";
import "../container.css";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const productosCollection = collection(db, "Productos");

    getDocs(productosCollection)
      .then(({ docs }) => {
        setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row justify-content-center fixeContainer">
      <h3 className="d-flex justify-content-center">Catálogo de Productos</h3>
      {!products ? <Spinners /> : null}
      {products && <ItemList items={products} />}
    </div>
  );
};
export default ItemListContainer;
