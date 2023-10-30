import React from "react";
import styles from "./Detail.module.css";
import axios from "axios";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../customHooks/useCart.js";

// REACT-BOOSTRAP
import Button from "react-bootstrap/esm/Button";

const Detail = () => {

    const { idProduct } = useParams();
    const [ productDetail , setProductDetail ] = useState({});
    const { addToCart } = useCart();

    const fooDetail = async () => {
        try {
            const info = (await axios(`/foods/${idProduct}`)).data;
            if (info) setProductDetail(info);
        } catch (error) {
            window.alert(error.message);
        } 
    };

    useEffect(() => {
        fooDetail();
    },[productDetail])


    return (
        <div className={styles.container}>
            {productDetail.id 
                ?
                    <div className={styles.cardContainer}>
                        <img src={productDetail.image} alt={productDetail.id} className={styles.cardImage}/>
                        <h1 className={styles.cardName}><strong>{productDetail.name}</strong></h1>
                        <h6>{productDetail.description}</h6>
                        <h3><strong>${productDetail.price}</strong></h3>
                        <Button variant="success" onClick={() => addToCart(productDetail)}>Agregar</Button>
                    </div>
                : null
            }
        </div>
    )
};

export default Detail;