import React from 'react';
import { useEffect } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import OrderCard from '../OrderCard/OrderCard.jsx';
import style from './OrderCardContainer.module.css'

import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from '../../../../redux/actions/actionsOrder.js';

const OrderCardContainer = () => {


    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getAllOrders());
    },[dispatch])

    return (
        <CardGroup className={style.cardContainer}>
            {orders?.map((elem, index) => (
                        <OrderCard
                            key={elem.id}
                            id={elem.id}
                            index={index}
                            foodOrder={elem.foodOrder}
                            totalAmount={elem.totalAmount}
                        />
                    ))
            }
        </CardGroup>
    )
};

export default OrderCardContainer;


<CardGroup className={style.cardContainer}>
                <OrderCard/>
</CardGroup>