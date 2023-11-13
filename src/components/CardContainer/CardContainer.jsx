import React from "react";
import FoodCard from "../FoodCard/FoodCard.jsx";
import { useSelector } from "react-redux";
import styles from './CardContainer.module.css'

//REACT-BOOSTRAP
import CardGroup from 'react-bootstrap/CardGroup';
// import Container from 'react-bootstrap/Container'
// import Button from "react-bootstrap/esm/Button.js";

const CardContainer = () => {

    const menuList = useSelector(state => state.menu);

    return (
        <CardGroup className={styles.container}>
                {menuList?.map(elem => (
                        <FoodCard
                            key={elem.id}
                            id={elem.id}
                            name={elem.name}
                            image={elem.image}
                            description={elem.description}
                            price={elem.price}
                        />
                    ))
                }
        </CardGroup>
    )
};

export default CardContainer;