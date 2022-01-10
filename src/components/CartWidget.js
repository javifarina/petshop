import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export const CartWidget = ({cont}) => {
    return (
        <Link to = "/Cart" >
             <FontAwesomeIcon  icon={faShoppingCart } /> <strong>{cont} </strong> 
             
        </Link>
    )
}
