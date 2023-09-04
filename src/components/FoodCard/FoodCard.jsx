import React from "react";
// import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../customHooks/useCart.js";

//REACT-BOOSTRAP
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const FoodCard = ( product ) => {

    const { id , name , image , description , price } = product;

    const { addToCart } = useCart();

    // const addToCart = (item) => {console.log(item)}

    return (
        <div className="col-8 offset-2 py-1 px-3 col-sm-6 offset-sm-0 py-sm-1 px-sm-3 col-md-6 offset-md-0 py-md-1 px-md-3 col-lg-4 offset-lg-0 py-lg-1 px-lg-3 col-xl-3 offset-xl-0 py-xl-1 px-xl-3 mt-1 mb-3 text-center">
            { name 
                ?
                (
                    <Card style={{ width: '23rem' }}>
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
                            <Button variant="success" onClick={() => addToCart(product)}>Agregar</Button>
                        </Card.Body>
                    </Card>
                    // <div className="card">
                    //     <div className="card-body">
                    //         <Link to={`/detail/${id}`}>
                    //             <img src={image} className="card-img-top img-fluid" alt={name} />
                    //         </Link>
                    //         <h5 className="card-title">{name}</h5>
                    //         <p className="card-text mb-0">{description}</p>
                    //         <div className="col mt-1">
                    //             <p className="col-6 offset-3" ><strong>$ {price}</strong></p>
                    //         </div>
                    //         <div className="row">
                    //             <Button variant="success" className="col-6 offset-3">Agregar</Button>
                    //         </div>
                    //     </div>
                    // </div>
                )
                : null }
        </div>
)};

export default FoodCard;