import React, { useEffect, useState}from 'react'
import { getItem } from '../Helpers/getProducts'
import ItemDetail from './ItemDetail';
import Spinners from '../spinner/Spinners';


const ItemDetailContainer = ({id}) => {
     //variable de estado cargar item
  const [product, setProduct] = useState(null);
  
  //LLamada a la funcion de Publicada dentro del Helper
  useEffect(() => {
    getItem(id, setProduct);
   
    console.log(product);
    
  },[id, product]);
  


  return <>
    <h3 className="d-flex justify-content-center">Detalle de Producto</h3>
    {!product ? <Spinners /> : null}
    <div className="row">{product && <ItemDetail item={product} />}</div>
    </>;
};


export default ItemDetailContainer
