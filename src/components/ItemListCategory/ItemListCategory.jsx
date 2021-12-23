import React, { useState, useEffect } from "react";
import ItemList from "../ItemListContainer/ItemList";
import Spinners from "../spinner/Spinners";
import { getProductByCategory } from '../Helpers/getProducts'
import '../container.css'
const ItemListCategory = ({pet}) => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        getProductByCategory(pet, setProducts);
       
      }, [pet]);
      return <div className="row justify-content-center fixeContainer">
        <h3 className="d-flex justify-content-center">Producro Categoría - {pet}</h3>
        {!products ? <Spinners /> : null}
        {products && <ItemList items={products} />}
        
        </div>
}

export default ItemListCategory
