import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './Contacto/Contacto';
import Destacados from './Destacados/Destacados';
import Footer from './Footer/Footer';
import Galeria from './Galeria/Galeria';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Nosotros from './Nosotros/Nostros';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destacados/>
      <Nosotros/>
      <Galeria/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
