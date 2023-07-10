import React from "react";
import styles from "./CardContainer.module.css"
import Card from "../Card/Card.jsx";
import { useSelector } from "react-redux";

const CardContainer = () => {

    const menuList = useSelector(state => state.menu);

    return (
        <div className={styles.container}>
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
        </div>
    )
};

export default CardContainer;