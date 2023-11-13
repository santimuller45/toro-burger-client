import React from "react";
import style from "./LandingPage.module.css"
import { Link } from "react-router-dom";

//COMPONENTES
import CarouselHero from "../../components/CarouselHero/CarouselHero.jsx";
//>

const LandingPage = () => {
    return (
        <div>
            <header className={style.text}>
                {/* <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1"><strong>Bienvenidos a</strong></h1> */}
                <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1"><strong>TORO BURGER & BEER</strong></h1>
            </header>
            <section className={style.text}>
                <h3><strong>HOLA! SEAN BIENVENIDOS A LA PÁGINA DE TORO</strong></h3>
                <h3><strong>LES OFRECEMOS LA MEJOR CARTA PARA SU PLACER</strong></h3>
                <h3><strong>SOMOS LOS MEJORES EN CALIDAD Y PRECIO</strong></h3>
                <h3><strong>DE LA LOCALIDAD DE 9 DE JULIO</strong></h3>
            </section>
            <CarouselHero/>
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