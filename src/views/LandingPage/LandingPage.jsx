import React from "react";
import styles from "./LandingPage.module.css"
import pic1 from "../../assets/pictures/image1.jpeg"
import pic2 from "../../assets/pictures/image2.jpeg"
import pic3 from "../../assets/pictures/image3.jpeg"


const LandingPage = () => {
    return (
        <div className={styles.main}>
            <div>
                <h1 className={styles.title}>BIENVENIDOS A HAMBURGUESERIA TORO</h1>
                <div className={styles.containerPicture}>
                    <div>
                        <img src={pic1} alt="image1" className={styles.picture}/>
                    </div>
                    <div>
                        <img src={pic2} alt="image2" className={styles.picture}/>
                    </div>
                    <div>
                        <img src={pic3} alt="image3" className={styles.picture}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;