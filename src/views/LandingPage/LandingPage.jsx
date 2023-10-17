import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"

//REACT-BOOSTRAP
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from "../../assets/pictures/image1.jpeg";
import ExampleCarouselImage2 from "../../assets/pictures/image2.jpeg";

const LandingPage = () => {

    return (
        <div className="container-fluid">
            <div className={style.text}>
                <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1"><strong>Bienvenidos a TORO</strong></h1>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="col-7 bg-black text-white text-center p-2"
                        src={ExampleCarouselImage1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>CHESSE BURGER</h3>
                        <p>CON MUCHO QUESO CHEDDAR</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="col-7 bg-black text-white text-center p-2"
                        src={ExampleCarouselImage2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>BURGER TORO</h3>
                        <p>CHEDDAR-PANCETA-SALSA MC-PEPINOS</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className={style.section}>
                <h4><strong>HOLA! SEAN BIENVENIDOS A LA PÁGINA DE TORO</strong></h4>
                <h4><strong>LES OFRECEMOS LA MEJOR CARTA PARA SU PLACER</strong></h4>
                <h4><strong>SOMOS LOS MEJORES EN CALIDAD Y PRECIO</strong></h4>
                <h4><strong>DE LA LOCALIDAD DE 9 DE JULIO</strong></h4>
            </section>
            <div className={style.text}>
                <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1">
                    <strong>Quieres hacernos tu pedido?</strong>
                    <Link to={'/products'}>
                        <h3><strong>Click Aqui!</strong></h3>
                    </Link>
                </h1>
            </div>       
        </div>
    )
};

export default LandingPage;