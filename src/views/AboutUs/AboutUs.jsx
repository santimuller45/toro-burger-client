import React from "react";
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <h1>Hamburgueseria TORO</h1>
            <p>Somos la mejor hamburgueseria ubicada en la localidad de 9 de julio.</p>
            <p>Nos dedicamos especialmente en las hamburguesas que es lo que nos encanta y apasiona</p>
            <p>Aca encontrarás la mejor atención y el mejor precio que podes imaginar</p>
            <h3>Horarios de atención:</h3>
            <p>Miercoles a Domingos: 19 hs - 23 hs</p>
            <h3>Dirección:</h3>
            <p>Av. Colón 999</p>
            <h3>Buenos Aires - 9 de Julio</h3>
        </div>
    )
};

export default AboutUs;