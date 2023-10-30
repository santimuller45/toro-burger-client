import React from "react";
import styles from "./Products.module.css"
import CardContainer from "../../components/CardContainer/CardContainer.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";


const Products = () => {
    return (
        <>
            <div className={styles.title}>
                <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1"><strong>MENÚ</strong></h1>
            </div>
            <SearchBox/>
            <CardContainer></CardContainer>
        </>
    )
}

export default Products;