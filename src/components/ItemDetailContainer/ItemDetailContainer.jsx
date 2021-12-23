import React, { useEffect, useState}from 'react'
import { getItem } from '../Helpers/getProducts'
import ItemDetail from './ItemDetail';
import Spinners from '../spinner/Spinners';
import '../container.css'

const ItemDetailContainer = ({id}) => {
     //variable de estado cargar item
  const [product, setProduct] = useState(null);
  
  //LLamada a la funcion de Publicada dentro del Helper
  useEffect(() => {
    getItem(id, setProduct);
   
     },[id, product]);
  
  return <>
    <h3 className="d-flex justify-content-center fixeContainer">Detalle de Producto</h3>
    {!product ? <Spinners /> : null}
    <div className="row justify-content-center">{product && <ItemDetail item={product} />}</div>
    </>;
};


export default ItemDetailContainer
