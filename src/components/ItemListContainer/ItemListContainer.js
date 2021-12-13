import React from 'react'
import { ItemCount } from './ItemCount'
import toast, { Toaster } from 'react-hot-toast';
export const ItemListContainer = (props) => {
    const addCart=()=>
        toast ('El producto se Agrego al Carrito.')
  
      
    
    return (
        <div className="text-center">
            <h2>{props.greating} {props.user}</h2>
            <ItemCount
                stock={4}
                nombre="Purina Cat Chow"
                descripcion="Comida para gato"
                inicial={1}
                img="https://http2.mlstatic.com/D_NQ_NP_965631-MLA46933179213_072021-O.webp"
                addCart={addCart}
            
            />
            <Toaster />
        </div>
    )
}
