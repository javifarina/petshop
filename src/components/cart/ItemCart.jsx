import React from 'react'
import Button from "@restart/ui/esm/Button";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContexCart } from '../../context/CartContex';
const ItemCart = ({id, img, title, qty, price,description}) => {
  const { deletById } = useContexCart()
    return (
        <Card style={{ maxWidth: "600px" }} className=" mt-3">
      <Row>
        <Col
          xs={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Link to={`/producto/${id}`} title={title}>
            <Card.Img
              variant="top"
              src={img}
              style={{ height: "auto", objectFit: "contain" }}
            />
          </Link>
        </Col>

        <Col xs={6}>
          <Card.Body className="d-flex flex-column justify-content-between align-items-start">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/producto/${id}`}
              title="Ver producto"
            >
              <Card.Title>{title}</Card.Title>
            </Link>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              ${new Intl.NumberFormat().format(price)} x {qty} = $
              {new Intl.NumberFormat().format(price * qty)}
            </Card.Text>

            <Button
              onClick={() => deletById(id)}
              className="btn btn-warning"
            >
             <FontAwesomeIcon  icon={faTrash } />
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    )
   
}

export default ItemCart
