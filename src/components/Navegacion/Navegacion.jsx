import React from 'react';
import './Navegacion.css'; // Vamos a crear este archivo CSS también

const Navegacion = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><a href="#personal">Personal</a></li>
        {/* Si tienes una sección de Objetivo, asegúrate de que su componente tenga id="objetivo" */}
        <li><a href="#objetivo">Objetivo</a></li>
        {/* Si tienes una sección de Formación, asegúrate de que su componente tenga id="formacion" */}
        <li><a href="#education">Education</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navegacion;