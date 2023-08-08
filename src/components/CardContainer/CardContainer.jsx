import React from "react";
import styles from "./CardContainer.module.css"
import Card from "../Card/Card.jsx";
import { useSelector } from "react-redux";

//REACT-BOOSTRAP
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/esm/Button.js";

const CardContainer = () => {

    const menuList = useSelector(state => state.menu);

    return (
        <Container fluid >
            <section className="row">
                {menuList?.map(elem => (
                        <Card
                            key={elem.id}
                            id={elem.id}
                            name={elem.name}
                            image={elem.image}
                            description={elem.description}
                            price={elem.price}
                        />
                    ))
                }
            </section>
        </Container>
    )
};

export default CardContainer;