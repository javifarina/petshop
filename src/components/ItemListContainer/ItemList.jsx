import React from 'react'

import Item  from './Item'
const ItemList = ({items}) => {
    
    return (
        <div key={items.id}>
            {items.map((elemento)=>(<Item
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            pictureUrl={elemento.pictureUrl}
            stock={elemento.stock}
            inicial={elemento.inicial}
            price={elemento.price}
            pet={elemento.pet}
            
            />))}
            
        </div>
    )
}
export default ItemList