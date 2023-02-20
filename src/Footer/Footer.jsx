import React from "react";
import "./footer.css"


const Footer = () => {


    return(
        <footer className="footer">
            <div className="footer__box">
                <img src="/img/logo.png" alt="logo point" />
                <div className="info">
                    <div><i class="uil uil-map-marker"></i>Terrada 3245, Capital Federal</div>
                    <div><i class="uil uil-envelope"></i>pointshoes@gmail.com</div>
                    <div><i class="uil uil-phone"></i>11 5573-7269</div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;