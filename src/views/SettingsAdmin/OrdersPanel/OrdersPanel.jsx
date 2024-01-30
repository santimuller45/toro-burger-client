import React from "react";
import style from './OrdersPanel.module.css'

//COMPONENTES
import OrderCardContainer from "./OrderCardContainer/OrderCardContainer.jsx";
//>

const OrderPanel = () => {

    return (
        <div className={style.container}>
            <h3><strong>PEDIDOS</strong></h3>
            <OrderCardContainer/>
        </div>
    )
};

export default OrderPanel;