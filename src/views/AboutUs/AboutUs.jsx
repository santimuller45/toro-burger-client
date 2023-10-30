import React from "react";
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1"><strong>TORO BURGER & BEER</strong></h1>
            <section className={styles.text}>
                <p>
                    <strong> 
                        Somos la mejor hamburgueseria ubicada en la localidad de 9 de julio.
                    </strong>
                </p>
                <p>
                    <strong>
                        Nos dedicamos especialmente en las hamburguesas que es lo que nos encanta y apasiona
                    </strong>
                </p>
                <p>
                    <strong>
                        Aca encontrarás la mejor atención y el mejor precio que podes imaginar
                    </strong>
                </p>
            </section>
            <h3 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1"><strong>Horarios de atención:</strong></h3>
            <h4><strong>Miercoles a Domingos: 19 hs - 23 hs</strong></h4>
            <h3 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1"><strong>Dirección:</strong></h3>
            <h4><strong>Av. Colón 999</strong></h4>
            <h4><strong>Buenos Aires - 9 de Julio</strong></h4>
        </div>
    )
};

export default AboutUs;