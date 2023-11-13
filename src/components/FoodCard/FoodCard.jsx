import React from "react";
import styles from "./FoodCard.module.css";
import { Link } from "react-router-dom";

//CUSTOM HOOKS
import { useCart } from "../../customHooks/useCart.js";
//>

//REACT-BOOSTRAP
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

//>

// ALERTAS
import swal from 'sweetalert';
//>

const FoodCard = ( product ) => {

    const { id , name , image , description , price } = product;

    const { addToCart } = useCart();

    const addCartAndSuccessAlert = (product) => {
        addToCart(product);
        swal("Agregado al carrito exitosamente!", product.name, "success");
    }

    return (
        <div className={styles.card}>
            { name 
                ?
                (<Card>
                    <Link to={`/detail/${id}`}>
                        <Card.Img variant="top" src={image}/>
                    </Link>
                    <Card.Body>
                        <Card.Title><strong>{name}</strong></Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><strong>$ {price}</strong></ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="success" onClick={() => addCartAndSuccessAlert(product)}>Agregar</Button>
                    </Card.Body>
                </Card>)
                : null }
    </div>
)};

export default FoodCard;