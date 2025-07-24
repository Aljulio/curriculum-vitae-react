import React from 'react';
import './ExperienciaLaboral.css'; // Importa los estilos para este componente

function ExperienciaLaboral() {
  return (
    <section id="experiencia" className="experience-container"> {/* AÑADIDO: id="experiencia" */}
      <h2 className="experience-title">Experiencia Laboral</h2>
      <div className="experience-item">
        <h3 className="job-title">Técnico de Instalación Solar</h3>
        <p className="company">Orus Energy</p>
        <p className="description">Montaje de una pequeña planta solar.</p>
        <p className="date">2019</p>
      </div>
    </section>
  );
}

export default ExperienciaLaboral;