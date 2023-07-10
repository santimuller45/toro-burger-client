import React from "react";
import styles from "./Detail.module.css";
import axios from "axios";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {

    const { idProduct } = useParams();
    const [ productDetail , setProductDetail ] = useState({});

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
    },[])


    return (
        <div className={styles.container}>
            {productDetail.id 
                ?
                    <div className={styles.cardContainer}>
                        <img src={productDetail.image} alt={productDetail.id} className={styles.cardImage}/>
                        <h1 className={styles.cardName}>{productDetail.name}</h1>
                        <h6>{productDetail.description}</h6>
                        <h3>${productDetail.price}</h3>
                    </div>   
                // <Card
                //     key={productDetail.id}
                //     id={productDetail.id}
                //     name={productDetail.name}
                //     image={productDetail.image}
                //     description={productDetail.description}
                //     price={productDetail.price}
                // />
                : null
            }
        </div>
    )
};

export default Detail;