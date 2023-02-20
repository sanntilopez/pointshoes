import React from "react";
import "./navbar.css"


const Navbar = () => {
    // let menu = document.querySelector(".nav__icon")
    // let icon = document.querySelector(".nav__icon i")
    // let nav = document.querySelector(".nav")

    // menu.onclick = () => {
    //     icon.classList.toggle("uil-bars")
    //     icon.classList.toggle("uil-times")
    //     nav.classList.toggle("open")
    // }



    return(
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li><a href="#" className="active">HOME</a></li>
                    <li><a href="#">CATEGORIAS</a></li>
                    <li><a href="#">MARCAS</a></li>
                    <li><a href="#">CONTACTO</a></li>
                </ul>
            </nav>
            <div className="logo">
                <img src="/img/logo.png" alt="logo point" />
            </div>
            <div className="menu">
                <a href="#"><i className="uil uil-search"></i></a>
                <a href="#"><i className="uil uil-shopping-cart"></i></a>
                <div className="nav__icon"><i className="uil uil-bars"></i></div>
            </div>
            
        </header>
    )
}


export default Navbar;