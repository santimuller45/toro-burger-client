import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id , name , image , description , price }) => {
    return (
        <div className={styles.card}>
            <Link to={`/detail/${id}`}>
            {
                name
                ? <h2 className={styles.cardName}>{name}</h2>
                : null 
            }
            {
                image
                ? <img src={image} alt={id} className={styles.cardImage}/>
                : null
            }
            {
                description
                ? <div className={styles.carDescription}>{description}</div>
                : null
            }
            {
                price
                ? <div className={styles.carDescription}>${price}</div>
                : null
            }
            </Link>
            <button>
                Agregar al Carrito
            </button>
        </div>
    )
};

export default Card;