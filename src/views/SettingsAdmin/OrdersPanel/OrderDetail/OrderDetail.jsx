import React from "react";
import { useState , useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import axios from "axios";
import style from './OrderDetail.module.css'

//COMPONENTES
import OrderCard from "../OrderCard/OrderCard.jsx";
//>

//REACT-BOOSTRAP
import Button from 'react-bootstrap/Button';
//>

const OrderDetail = () => {

    const { orderID } = useParams();
    const navigate = useNavigate();
    const [ order , setOrder ] = useState({});

    const orderDetail = async () => {
        try {
            const result = (await axios.get(`/orders/${orderID}`)).data
            if (result) setOrder({
                ...result,
                userEmail: result.users[0].email,
                userFirstname: result.users[0].firstname,
                userLastname: result.users[0].lastname
            })
        } catch (error) {
            window.alert(error.message)
        }
    }

    const modifyOrder = async () => {
        try {
            await axios.put('/orders', { id: order.id , status:"FINALIZADO"})
            navigate(-1)
        } catch (error) {   
            window.alert(error.message)
        }
    }

    useEffect(() => {
        order.id ? null : orderDetail()
    },[order])
    return (
        <div className={style.container}>
            <h1>HACER TABLA</h1>
            <OrderCard
                key={order.id} 
                id={order.id}
                index={order.id}
                userEmail={order.userEmail}
                userFirstname={order.userFirstname}
                userLastname={order.userLastname}
                foodOrder={order.foodOrder}
                totalAmount={order.totalAmount}
                orderStatus={order.orderStatus}
                updated={order.updated}
                paymenType={order.paymenType}
                comentary={order.comentary}
            />
            <div className="d-grid gap-2">
                <Button variant="success" size="lg" onClick={() => modifyOrder()}>Finalizado</Button>
            </div>
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" onClick={() => navigate(-1)}>Volver</Button>
            </div>
        </div>
    )
};

export default OrderDetail;