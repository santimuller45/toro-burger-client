import React from "react";
import { useEffect, useState } from "react";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../../redux/actions/actionsOrder.js";
//>

const OrderPanel = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getAllOrders());
    },[dispatch])

    return (
        <div>
            <h1>ESTE ES EL PANEL</h1>
            {orders?.map(elem => (<div key={elem.id}>
                <h2>pedido:{elem.foodOrder}</h2>
                <h4>${elem.totalAmount}</h4>
                <p>comentarios:{elem.comentary}</p>
                <h6>orden:{elem.orderStatus}tipo de pago:{elem.paymenType}</h6>
                {/* <h6>{elem.userEmail}</h6> */}
            </div>))}
        </div>
    )
};

export default OrderPanel;