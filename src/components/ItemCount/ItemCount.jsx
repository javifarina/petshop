import React from 'react'
import { useState } from 'react'

const ItemCount = ({
    stock,
    inicial,
    addCart
}) => {
    //const [stock] =props.stock

    //variable de estado muesstra la de producto
   const [contador, setContador] = useState(inicial)
   

    //Funcion Para Agregar  productos al contador
    const add =()=>{
        if (contador < stock) setContador(contador +1)
    }
    //funcion para restar productos al contador
    const remove =()=>{
        if (contador >1) setContador(contador -1)
    }
    return(
        <div className="card" style={{width: "18rem"}}>
             
                
                    <div className='w-100 d-flex'>
                        {/*Boton para decrementar contador */}
                        <button
                            onClick={()=>remove()}
                            className='btn col-xs-6 btn-danger mx-auto'
                        >
                            -
                        </button>
                        <span>{contador}</span>
                        {/*Boton para Incrementar contador */}
                        <button
                            onClick={()=>add()}
                            className='btn col-xs-6 btn-success mx-auto'
                            disabled={contador === stock ? true: null}
                        >
                            +
                        </button>

                    </div>
                    <div className='d-grid gap-2 m-3'>
						<button
							onClick={() => addCart()}
							className="btn btn-info"
							size='lg'
                            disabled={stock===0 ? true:null}
						>
							Agregar al Carrito
						</button>
					</div>
                </div>
        
    )
        
    
}
export default ItemCount
