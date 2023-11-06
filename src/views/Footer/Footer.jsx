import React from "react";
// import styles from "./Footer.module.css";
// import logo from "../../assets/logo/logo-bull.png";

//REACT-BOOSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <Container>
                {/* <img src={logo} alt="logo" className={styles.logo}/> */}
                <Row>
                    <Col md={6}>
                        <h5><strong>Buenos Aires - 9 de Julio</strong></h5>
                    </Col>
                    <Col md={6}>
                        <h5> <strong>hamburgueseria@toro.com.ar</strong></h5>
                        <h6>Enlaces Rápidos</h6>
                            <ul>
                                <li><a href="/"><strong>Inicio</strong></a></li>
                                <li><a href="/aboutus"><strong>Acerca de Nosotros</strong></a></li>
                                <li><a href="/contact"><strong>Contacto</strong></a></li>
                            </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;