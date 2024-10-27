import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <header className="FirstHeader">
        <div className="imgHeader"></div>
        <h1 className="headerTitle">TeDigitalizo</h1>
        <nav className="navHeader">
          <ul>
            <li>DA EL SALTO</li>
            <li>Soporte Técnico</li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="image"></div>
        <div className="text">
          <h1>Emprende La Digitalización de tu empresa</h1>
          <div className="segundoEslogan"><h1>!En tan solo 2 pasos¡</h1></div>
        </div>
      </div>
      <div className="divQuiensoy">
        <div className="Quiensoy1"><p>Somos una empresa de servicios dedicados al mundo de la informatica y el marketing digital</p></div>
        <div className="Quiensoy2"><p>Con nosotros los problemas de  no saber como pasar un negocio tradicional a un negocio online se resolveran al instante</p></div>
        <div className="Quiensoy3"><p>Destacamos a nuestros trabajadores ya que ofrecen un servicio excelente, trabajadores qualificados encaantados de resolver cualquier inconveniencia</p></div>
      </div>

      <div><h1>Nuestros Planes</h1></div>

      <div className="PacksContainer">

        <div>
        <div className="PackCard">
        <div className="ImagePacks estandar"></div>
          <h2>ESTÁNDAR</h2>
          <ul>
            <li>Página Web</li>
            <li>Soporte Técnico</li>
          </ul>
        </div>
        </div>
        <div>
        <div className="PackCard">
        <div className="ImagePacks profesional"></div>
          <h2>PROFESIONAL</h2>
          <ul>
            <li>Página Web</li>
            <li>Soporte Técnico</li>
            <li>Marketing Digital</li>
          </ul>

        </div>
        </div>
        <div>
          <div className="PackCard">
          <div className="ImagePacks premium"></div>
          <h2>PREMIUM</h2>
          <ul>
          <li>Página Web</li>
            <li>Soporte Técnico</li>
            <li>Marketing Digital</li>
            <li>Aplicaciones Automatizadas</li>
            <li>Analisis de audiencia</li>
            <li>SEO</li>
          </ul>
          </div>
          </div>
      </div>
      <div className="divFooter">
        <footer>
          <h3>Redes Sociales </h3>
        </footer>
      </div>
      
    </>
  );
}

export default App;
