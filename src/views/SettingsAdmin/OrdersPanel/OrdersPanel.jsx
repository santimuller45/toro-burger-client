import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import style from './OrdersPanel.module.css'

//COMPONENTES
import { getAllOrders } from "../../../redux/actions/actionsOrder.js";
import OrderCardContainer from "./OrderCardContainer/OrderCardContainer.jsx";
//>

const OrderPanel = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllOrders());
    },[dispatch])


    return (
        <div className="container-fluid col-8 mt-3">
            <h3><strong>PEDIDOS</strong></h3>
            <OrderCardContainer/>
        </div>
    )
};

export default OrderPanel;