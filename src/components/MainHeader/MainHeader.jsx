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
          <p className="main-contact-info">
            Correo: <a href="mailto:julioalbertoh79@gmail.com">julioalbertoh79@gmail.com</a> | Tel: +502 59079563
          </p>
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