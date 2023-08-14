import React from "react";
import styles from "./Products.module.css"
import CardContainer from "../../components/CardContainer/CardContainer.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";


const Products = () => {
    return (
        <>
            <h1 className={styles.title}>Menú</h1>
            <div>
                <SearchBox/>
            </div>
            <div>
                <CardContainer></CardContainer>
            </div>
        </>
    )
}

export default Products;