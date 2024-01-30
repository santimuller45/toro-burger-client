import React from "react";
import style from './OrderCard.module.css'

// import { Link } from "react-router-dom";

//REACT BOOSTRAP
import Card from 'react-bootstrap/Card';
//>

const OrderCard = ( order ) => {

    const { id ,index ,foodOrder ,totalAmount } = order;
    return ( 
    <div>
        <Card key={index} className={style.card}>
            <Card.Body>
                <Card.Title>Pedido N° {index+1}</Card.Title>
                {foodOrder?.map((food, index) => <Card.Text key={index}>{food}</Card.Text>)}
                <Card.Text><strong>Monto ${totalAmount}</strong></Card.Text>
                {/* <Link to={`/detail/${id}`}>aqui</Link> */}
                {/* FALTA AGREGAR LA URL PARA ENTRAR AL PEDIDO */}
            </Card.Body>
        </Card>
    </div>)
};

export default OrderCard;