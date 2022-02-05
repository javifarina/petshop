import React from 'react'
import error from '../img/error.png'
import "../components/container.css"
import {Link} from 'react-router-dom'
const Error = () => {
    return (
        <div className="container">
            <div className='d-flex justify-content-center fixeContainer'>
                <h3>Ups... parece que tenemos un problema !!!</h3>
            </div>
            <div className='d-flex justify-content-center'>
            <Link to="/" className="btn btn-outline-primary btn-sm">
            Home..
          </Link>
            </div>
            <div>
            <img src={error} alt="error" className='img-fluid' />
            </div>

            
        </div>
    )
}

export default Error
