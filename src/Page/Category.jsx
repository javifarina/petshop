import React from 'react'
import { useParams } from 'react-router'
import ItemListCategory from '../components/ItemListCategory/ItemListCategory'
const Category = () => {
    let {pet} = useParams()

    return (
        <div className="container">
            <ItemListCategory pet={pet}/>
        </div>
    )
}

export default Category
