import React from 'react';
import './MainHeader.css'; // Importa los estilos para este componente
import myPhoto from '../../assets/mi-foto-perfil.jpg'; // Asegúrate de que esta ruta a tu foto sea correcta

function MainHeader() {
  return (
    <header className="main-header-container">
      <div className="main-header-content">
        <img src={myPhoto} alt="Tu Foto de Perfil" className="main-profile-picture" />
        <div className="main-info">
          <h1 className="main-name">Julio Alberto Hernandez Morales</h1>
          {/* ¡AÑADIDO AQUÍ! El subtítulo */}
          <h2 className="main-subtitle">Bachiller en Ciencias y Letras con Orientación en Electricidad</h2>
          {/* Información de contacto (correo y teléfono) - si la tuvieras, iría aquí */}
          {/* <p className="main-contact-info">
            <strong>Correo:</strong> <a href="mailto:julioalbertoh79@gmail.com">julioalbertoh79@gmail.com</a> <span className="separator">|</span> <strong>Teléfono:</strong> <span className="phone-number">+502 59079563</span>
          </p> */}
        </div>
      </div>
      {/* La barra de navegación ahora está dentro de este header */}
      <nav className="main-nav">
        <ul>
          <li><a href="#personal">Personal</a></li>
          <li><a href="#objetivo">Objetivo</a></li>
          <li><a href="#education">Educación</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;