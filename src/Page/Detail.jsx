import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
const Detail = () => {
        let {id} =useParams() 
        let inId =parseInt(id)
    return (
        <div className="container">
            <ItemDetailContainer id= {inId}/>
        </div>
    )
}

export default Detail
