import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
const Detail = () => {
        let {id} =useParams() 
        
    return (
        <div className="container">
            <ItemDetailContainer id= {id}/>
        </div>
    )
}

export default Detail
