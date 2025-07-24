import React from 'react';
import './ObjetivoProfesional.css'; // Importa los estilos para este componente

function ObjetivoProfesional() {
  return (
    <section id="objetivo" className="objective-container"> {/* CAMBIADO: id="objetivo" */}
      <h2 className="objective-title">Objetivo Profesional / Perfil Personal</h2>
      <p className="objective-description">
        Bachiller en Ciencias y Letras con Orientación en Electricidad, con interés en ampliar conocimientos en áreas de desarrollo tecnológico y aplicar habilidades de resolución de problemas. Dispuesto a aprender y crecer profesionalmente en un entorno dinámico, aportando dedicación y proactividad.
      </p>
    </section>
  );
}

export default ObjetivoProfesional;