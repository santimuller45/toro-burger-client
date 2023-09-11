import React from "react";
// import pic1 from "../../assets/pictures/image1.jpeg"
// import pic2 from "../../assets/pictures/image2.jpeg"
// import pic3 from "../../assets/pictures/image3.jpeg"
// import { Link } from "react-router-dom";
import CardContainer from "../../components/CardContainer/CardContainer.jsx";

const LandingPage = () => {

    
    return (
        <div className="container-fluid">
            <div className="container-fluid">
                <h1 className="my-3 text-center">BIENVENIDOS A TORO</h1>
                {/* <div className="container-fluid">
                        <img src={pic1} alt="image1" className={styles.picture}/>
                        <img src={pic2} alt="image2" className={styles.picture}/>
                        <img src={pic3} alt="image3" className={styles.picture}/>
                </div> */}
                <div className="container-fluid">
                    <h2 className="my-3 text-center">MENÚ</h2>
                    <CardContainer />
                </div>
            </div>
        </div>
    )
};

export default LandingPage;