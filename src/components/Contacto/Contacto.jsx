// src/components/Contacto/Contacto.jsx
import React from 'react';
import './Contacto.css'; // Importa los estilos para este componente

function Contacto() {
  return (
    <section id="contacto" className="contact-container">
      <h2 className="contact-title">Contacto</h2>
      <div className="contact-info">
        <p className="contact-item">
          <span className="contact-label">Email:</span> 
          <span className="contact-value"> <a href="mailto:julioalbertoh79@gmail.com">julioalbertoh79@gmail.com</a></span>
        </p>
        <p className="contact-item">
          <span className="contact-label">Teléfono:</span> 
          <span className="contact-value"> +502 59079563</span>
        </p>
      </div>
    </section>
  );
}

export default Contacto;