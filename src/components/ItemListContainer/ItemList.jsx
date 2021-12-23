import React from 'react'
import Item  from './Item'
const ItemList = ({items}) => {
    
    return (
        <>
        { items.map((elemento)=>(<Item key ={elemento.id}
            id={elemento.id}
            title={elemento.title}
            description={elemento.description}
            pictureUrl={elemento.pictureUrl}
            stock={elemento.stock}
            inicial={elemento.inicial}
            price={elemento.price}
            pet={elemento.pet}
            
            />))}
        </>
            
            
        
    )
}
export default ItemList