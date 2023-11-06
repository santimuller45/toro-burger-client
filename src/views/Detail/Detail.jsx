import React from "react";
import styles from "./Detail.module.css";
import axios from "axios";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../customHooks/useCart.js";

// REACT-BOOSTRAP
import Button from "react-bootstrap/esm/Button";

// ALERTAS
import swal from 'sweetalert';

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

    const addCartAndSuccessAlert = (product) => {
        addToCart(product);
        swal("Agregado al carrito exitosamente!", product.name, "success");
    }


    return (
        <div className={styles.container}>
            {productDetail.id 
                ?
                    <div className={styles.cardContainer}>
                        <img src={productDetail.image} alt={productDetail.id} className={styles.cardImage}/>
                        <h1 className={styles.cardName}><strong>{productDetail.name}</strong></h1>
                        <h6>{productDetail.description}</h6>
                        <h3><strong>${productDetail.price}</strong></h3>
                        <Button variant="success" onClick={() => addCartAndSuccessAlert(productDetail)}>Agregar</Button>
                    </div>
                : null
            }
        </div>
    )
};

export default Detail;