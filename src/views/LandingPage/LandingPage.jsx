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
            <div className={style.hero}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="bg-black text-white text-center p-2"
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
                            className="bg-black text-white text-center p-2"
                            src={ExampleCarouselImage2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>BURGER BIG-BANG</h3>
                            <p>DOBLE CARNE - CHEDDAR - PEPINOS - CEBOLLA MORADA - LECHUGA - SALSA MC</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <section>
                    <h5><strong>HOLA! SEAN BIENVENIDOS A LA PÁGINA DE TORO</strong></h5>
                    <h5><strong>LES OFRECEMOS LA MEJOR CARTA PARA SU PLACER</strong></h5>
                    <h5><strong>SOMOS LOS MEJORES EN CALIDAD Y PRECIO</strong></h5>
                    <h5><strong>DE LA LOCALIDAD DE 9 DE JULIO</strong></h5>
                </section>
            </div>
            <div className={style.text}>
                <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1">
                    <strong>Quieres hacernos tu pedido?</strong>
                    <Link to={'/menu'}>
                        <h3><strong>Click Aqui!</strong></h3>
                    </Link>
                </h1>
            </div>       
        </div>
    )
};

export default LandingPage;