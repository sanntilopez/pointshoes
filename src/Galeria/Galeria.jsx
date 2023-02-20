import React from "react";
import "./galeria.css"


const Galeria = () => {


    return(
        <section className="section galeria">
            <div className="galeria__box">
                <img src="/img/gallerypic1.jpg" alt="foto de galeria" />
                <img src="/img/gallerypic2.jpg" alt="foto de galeria" />
                <img src="/img/gallerypic3.jpg" alt="foto de galeria" />
            </div>            
        </section>
    )
}


export default Galeria;