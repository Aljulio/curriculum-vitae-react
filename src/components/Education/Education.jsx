// src/components/Education/Education.jsx
import React from 'react';
import './Education.css'; 

function Education() { 
  return (
    <section id="education" className="education-container">
      <h2 className="education-title">Estudios Realizados</h2> {/* Título actualizado */}

      <div className="education-item">
        <h3 className="degree">Nivel Primario</h3>
        <p className="institution">Escuela Oficial Rural Mixta Cantón el Milagro, Chiquimulilla Santa Rosa.</p>
        {/* No se especificó fecha para Primario, si la tienes, puedes agregarla aquí */}
      </div>

      <div className="education-item">
        <h3 className="degree">Nivel Básico</h3>
        <p className="institution">Instituto Federico de Jesús Morales Pivaral, Chiquimulilla Santa Rosa.</p>
        {/* No se especificó fecha para Básico, si la tienes, puedes agregarla aquí */}
      </div>

      <div className="education-item">
        <h3 className="degree">Bachiller en Ciencias y Letras con Orientación en Electricidad</h3>
        <p className="institution">Instituto Theodore Schultz, Chiquimulilla Santa Rosa.</p>
        {/* Si tienes fechas de inicio y fin para el bachillerato, puedes agregarlas aquí */}
      </div>

      <div className="education-item">
        <h3 className="degree">Ingeniería en Sistemas de Información y Ciencias de la Computación (Actual)</h3>
        <p className="institution">Universidad Mariano Gálvez de Guatemala</p>
        <p className="date">2022 - Presente</p>
      </div>
    </section>
  );
}

export default Education;