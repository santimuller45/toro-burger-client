import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom"

//REACT-BOOSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar className={styles.nav}>
             <Container>
                <Nav className="">
                    <Link to={'/'} className={styles.item}>Inicio</Link>
                    <Link to={'/products'} className={styles.item}>Menú</Link>
                    <Link to={'/aboutus'} className={styles.item}>Nosotros</Link>
                    <Link to={'/contact'} className={styles.item}>Contacto</Link>
                </Nav>
             </Container>
        </Navbar>
    )
};

export default NavBar;