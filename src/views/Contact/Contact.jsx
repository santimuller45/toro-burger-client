import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1>Contacto</h1>
            <h3>Email:</h3>
            <p>hamburgueseria@toro.com.ar</p>
            <h3>Teléfono</h3>
            <p>+549999999</p>
            <h3>Dirección</h3>
            <p>Av. Colón 999</p>
            <h3>Buenos Aires - 9 de Julio</h3>
        </div>
    )
};

export default Contact;