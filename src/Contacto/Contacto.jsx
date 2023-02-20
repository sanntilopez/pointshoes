import React from "react";
import "./contacto.css"

const Contacto = () => {


    return(
        <section className="section contacto">
            <div className="contacto__box">
                <div className="mapa">
                    <img src="/img/logo.png" alt="logo" />
                </div>
                <div className="informacion">
                    <h2>CONTACTATE CON NOSOTROS</h2>
                    <div className="info">
                        <div><i class="uil uil-map-marker"></i>Terrada 3245, Capital Federal</div>
                        <div><i class="uil uil-envelope"></i>pointshoes@gmail.com</div>
                        <div><i class="uil uil-phone"></i>11 5573-7269</div>
                    </div>
                    <div className="form">
                        <form action="">
                            <input type="email" placeholder="Email"/>
                            <input type="Asunto" placeholder="Asunto"/>
                            <textarea name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contacto;