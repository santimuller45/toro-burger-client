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
            if (result) setOrder(result)
        } catch (error) {
            window.alert(error.message)
        }
    }

    useEffect(() => {
        order.id ? null : orderDetail()
    },[])
    return (
        <div className={style.container}>
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" onClick={() => navigate(-1)}>Volver</Button>
            </div>
            <OrderCard 
                id={order.id}
                index={order.id}
                userEmail={order.userEmail}
                foodOrder={order.foodOrder}
                totalAmount={order.totalAmount}
                orderStatus={order.orderStatus}
                updated={order.updated}
                paymenType={order.paymenType}
                comentary={order.comentary}
            />
        </div>
    )
};

export default OrderDetail;