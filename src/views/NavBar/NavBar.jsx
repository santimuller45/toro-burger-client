import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/products'}>Menú</Link>
            <Link to={'/aboutus'}>Nosotros</Link>
            <Link to={'/contact'}>Contacto</Link>
        </nav>
    )
};

export default NavBar;