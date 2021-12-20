import React, {useState,useEffect}  from 'react'
import { getProductos } from '../Helpers/getProducts'
import ItemList from './ItemList'
import Spinners from '../spinner/Spinners'
//Mock de Productos para la tienda

const ItemListContainer = () => {
    //Estado para Arreglo de Producto
    const [products,setProducts] = useState(null)
    
   		useEffect(() => {
            getProductos(setProducts);
            console.log(products);
        },[products]);
    
   
     
    return (
        <div>
          <h3 className="d-flex justify-content-center">Catálogo de Productos</h3>
             {!products ? <Spinners /> : null}
            {products && <ItemList  items={products} />}
        </div>
    )
}
export default ItemListContainer