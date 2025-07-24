import React from 'react';
import './Navegacion.css';

function Navegacion() {
  return (
    <nav className="main-nav">
      <ul>
        <li><a href="#personal">Personal</a></li>
        <li><a href="#objetivo">Objetivo</a></li>
        <li><a href="#education">Educación</a></li> {/* Texto cambiado a "Educación" */}
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navegacion;