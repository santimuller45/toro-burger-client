import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1">Contacto</h1>
            <h3><strong>Email:</strong></h3>
            <h4>hamburgueseria@toro.com.ar</h4>
            <h3><strong>Teléfono</strong></h3>
            <h4>+54 9 2317 51-6151</h4>
            <h3><strong>Dirección</strong></h3>
            <h4>Av. Colón 999</h4>
            <h3>Buenos Aires - 9 de Julio</h3>
        </div>
    )
};

export default Contact;