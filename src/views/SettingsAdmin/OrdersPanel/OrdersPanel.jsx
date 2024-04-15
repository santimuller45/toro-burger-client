import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from './OrdersPanel.module.css'

//COMPONENTES
import ListPendingOrders from "./OrdersList/OrdersPending/OrdersPending.jsx";
import ListInProcessOrders from "./OrdersList/OrdersInProcess/OrdersInProcess.jsx";
import ListCompletedOrders from "./OrdersList/OrdersCompleted/OrdersCompleted.jsx";
//>
// Redux
import { getAllOrders } from "../../../redux/actions/actionsOrder.js";
//>

const OrderPanel = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllOrders());
    },[dispatch])


    return (
        <div className={style.container}>
            <ListPendingOrders/>
            <ListInProcessOrders/>
            <ListCompletedOrders/>
        </div>
    )};

export default OrderPanel;