import React, { useState, useEffect } from "react";
import ItemList from "../ItemListContainer/ItemList";
import Spinners from "../spinner/Spinners";
import { db } from "../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";
import "../container.css";
const ItemListCategory = ({ pet }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const productosCollection = collection(db, "Productos");

    const consulta = query(productosCollection, where("pet", "==", pet));
     getDocs(consulta)
      .then(({ docs }) => {
        setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pet]);

  return (
    <div className="row justify-content-center fixeContainer">
      <h3 className="d-flex justify-content-center">
        Producto Categoría - {pet}
      </h3>
      {!products ? <Spinners /> : null}
      {products && <ItemList items={products} />}
    </div>
  );
};

export default ItemListCategory;
