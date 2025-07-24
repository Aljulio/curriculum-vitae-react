import React from 'react';
import './HabilidadesTecnicas.css'; // Importa los estilos para este componente

function HabilidadesTecnicas() {
  return (
    <section id="habilidades" className="skills-container"> {/* AÑADIDO: id="habilidades" */}
      <h2 className="skills-title">Habilidades Técnicas</h2>

      <div className="skill-category">
        <h3 className="category-title">Desarrollo Web Frontend</h3>
        <ul className="skill-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap (diseño responsivo)</li>
          <li>JavaScript (para interactividad)</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3 className="category-title">Control de Versiones</h3>
        <ul className="skill-list">
          <li>Git y GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default HabilidadesTecnicas;