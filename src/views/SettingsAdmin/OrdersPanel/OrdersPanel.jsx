import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './OrdersPanel.module.css'

//COMPONENTES
import { getAllOrders } from "../../../redux/actions/actionsOrder.js";
import OrderCardContainer from "./OrderCardContainer/OrderCardContainer.jsx";
//>

const OrderPanel = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders)
    const ordersProcess = useSelector(state => state.ordersInProcess)
    
    useEffect(() => {
        dispatch(getAllOrders());
    },[dispatch])


    return (
        <div className={style.container}>
            <h1>MODIFICAR LOS PENDIENTES Y NO PENDIENTES // HACER OTRO COMPONENTE A PARTE PARA MOSTRARLOS</h1>
                <h3><strong>PEDIDOS EN PREPARACIÓN</strong></h3>
                <OrderCardContainer orders={ordersProcess}/>
                <h3><strong>PEDIDOS PENDIENTES</strong></h3>
                <OrderCardContainer orders={orders}/>
        </div>
    )
};

export default OrderPanel;