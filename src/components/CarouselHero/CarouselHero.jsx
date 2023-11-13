import React from "react";
import styles from './CarouselHero.module.css'
import { useState } from "react";

//REACT-BOOSTRAP
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../../assets/pictures/image1.jpeg'
import ExampleCarouselImage2 from "../../assets/pictures/image2.jpeg";

const CarouselHero = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel}>
            <Carousel.Item>
                <img
                    className={styles.carouselImage}
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
                    className={styles.carouselImage}
                    src={ExampleCarouselImage2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>BURGER BIG-BANG</h3>
                    <p>DOBLE CARNE - CHEDDAR - PEPINOS - CEBOLLA MORADA - LECHUGA - SALSA MC</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default CarouselHero;