// src/components/Portafolio/Portafolio.jsx
import React from 'react';
import './Portafolio.css'; // Importa los estilos para este componente

function Portafolio() {
  return (
    <section id="portafolio" className="portfolio-container">
      <h2 className="portfolio-title">Portafolio / Proyectos</h2>
      <p className="portfolio-message">
        ¡Pronto verás mis proyectos más destacados aquí!
        <br />
        Estoy trabajando en nuevas creaciones para compartir mi trabajo y habilidades.
      </p>
    </section>
  );
}

export default Portafolio;