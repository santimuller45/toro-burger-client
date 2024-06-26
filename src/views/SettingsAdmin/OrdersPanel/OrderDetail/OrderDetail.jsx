import React from "react";
import { useState , useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import style from './OrderDetail.module.css'
import { modifyOrderStatus } from "../../../../redux/actions/actionsOrder.js";

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
    const dispatch = useDispatch();

    const showOrderDetails = async () => {
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
    };

    // ESTADO DE REDUX

    const handleModifyOrder = async (status) => {
        await dispatch(modifyOrderStatus(order.id, status));
        navigate(-1)
    };

    //HARD CODE
    // const handleModifyOrder = async (status) => {
    //     try {
    //         await axios.put('/orders', { id: orderID , status });
    //         navigate(-1);
    //     } catch (error) {   
    //         return {error: error.message}
    //     }
    // };

    useEffect(() => {
        order.id 
        ? null 
        : showOrderDetails()
    },[order])
    return (
        <div className={style.container}>
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
                <Button variant="warning" size="lg" onClick={() => handleModifyOrder("EN PROCESO")}>En preparación</Button>
                <Button variant="success" size="lg" onClick={() => handleModifyOrder("COMPLETADO")}>Finalizado</Button>
                <Button variant="secondary" size="lg" onClick={() => navigate(-1)}>Volver</Button>
            </div>
        </div>
    )
};

export default OrderDetail;