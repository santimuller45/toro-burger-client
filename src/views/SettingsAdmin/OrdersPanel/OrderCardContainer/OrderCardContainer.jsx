import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import OrderCard from '../OrderCard/OrderCard.jsx';
import style from './OrderCardContainer.module.css'

const OrderCardContainer = ( {orders} ) => {

    return (
        <CardGroup className={style.cardContainer}>
            {orders?.map((elem, index) => (
                        <OrderCard
                            key={elem.id}
                            id={elem.id}
                            index={index}
                            userEmail={elem?.users[0]?.email}
                            totalAmount={elem.totalAmount}
                            paymenType={elem.paymenType}
                            orderStatus={elem.orderStatus}
                            updated={elem.updated}
                        />
                    ))
            }
        </CardGroup>
    )
};

export default OrderCardContainer;