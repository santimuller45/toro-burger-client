import React from "react";
import styles from "./Footer.module.css";
// import logo from "../../assets/logo/logo-bull.png";

const Footer = () => {
    return (
        <div className={styles.container}>
            {/* <img src={logo} alt="logo" className={styles.logo}/> */}
            <article className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <h4 className='text-warning-emphasis p-4 text-center'>TORO</h4>
            </article>
            <article className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <h4 className='text-warning-emphasis p-4 text-center'>Buenos Aires - 9 de Julio</h4>
            </article>
            <article className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <h4 className='text-warning-emphasis p-4 text-center'>hamburgueseria@toro.com.ar</h4>
            </article>
            
        </div>
    )
};

export default Footer;