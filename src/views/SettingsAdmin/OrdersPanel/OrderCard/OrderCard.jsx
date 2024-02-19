import React from "react";
import { Link } from "react-router-dom";
import style from './OrderCard.module.css'

//REACT BOOSTRAP
import Card from 'react-bootstrap/Card';
//>

const OrderCard = ( order ) => {

    const { id ,index ,foodOrder ,totalAmount, orderStatus ,updated, paymenType, comentary , userEmail } = order;

    return ( 
    <div>
        <Card key={id} className={style.card}>
            <Card.Body>
                <Card.Title><strong>Pedido N° {index+1}</strong></Card.Title>
                <Card.Subtitle>{userEmail}</Card.Subtitle>
                <Card.Text>HORA:<strong>{updated}</strong></Card.Text>
                {foodOrder?.map((food, index) => <Card.Text key={index}><strong>{food}</strong></Card.Text>)}
                <Card.Text>TIPO DE PAGO:<strong>{paymenType}</strong></Card.Text>
                <Card.Text>MONTO <strong>${totalAmount}</strong></Card.Text>
                <Card.Text>ESTADO: <strong>{orderStatus}</strong></Card.Text>
                {comentary ? <Card.Text>COMENTARIOS:<strong>{comentary}</strong></Card.Text> : <Link to={`/orders/detail/${id}`}>aqui</Link> }
            </Card.Body>
        </Card>
    </div>)
};

export default OrderCard;