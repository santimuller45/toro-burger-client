import React from "react";
import { useCart } from "../../customHooks/useCart.js";

//REACT-BOOSTRAP
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';


function Cart () {

    const { cart , clearCart , removeFromCart } = useCart();

    return (
        <div>
            <div style={{display:"flex", justifyContent:"flex-end", margin:"10px"}}>
                <Button variant="danger" onClick={() => clearCart()}>Limpiar Carrito</Button>
            </div>
            <CardGroup>
                {
                    cart?.map(elem => (
                    <div className="col-8 offset-2 py-1 px-3 col-sm-6 offset-sm-0 py-sm-1 px-sm-3 col-md-6 offset-md-0 py-md-1 px-md-3 col-lg-4 offset-lg-0 py-lg-1 px-lg-3 col-xl-3 offset-xl-0 py-xl-1 px-xl-3 mt-1 mb-3 text-center">
                        <Card style={{ width: '18rem' }} key={elem.id}>
                            {/* <Card.Img variant="top" src={elem.image}/> */}
                            <Card.Body>
                                <Card.Title><strong>{elem.name}</strong></Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><strong>Cantidad: {elem.quantity}</strong></ListGroup.Item>
                                <ListGroup.Item><Button variant="danger" onClick={() => removeFromCart(elem)}>X</Button></ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                    </div>
                ))}
            </CardGroup>
        </div>
    )
};

export default Cart;