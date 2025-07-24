import React from 'react';
import './PersonalInfo.css'; // Importa los estilos para este componente
import myPhoto from '../../assets/mi-foto-perfil.jpg'; // Carga tu foto

function PersonalInfo() {
  return (
    <section id="personal" className="personal-info-container"> {/* AÑADIDO: id="personal" */}
      <h2>Información Personal</h2> 
      {/* Aquí se muestra tu foto */}
      <img src={myPhoto} alt="Tu Foto de Perfil" className="profile-picture" />

      {/* Aquí agrupamos los datos para que se muestren en columnas */}
      <div className="personal-details-grid">
        <div className="detail-item">
          <span className="detail-label">Nombre Completo:</span>
          <span className="detail-value">Julio Alberto Hernández Morales</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Nacionalidad:</span>
          <span className="detail-value">Guatemalteco</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Teléfono:</span>
          <span className="detail-value"> +502 59079563</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Estado Civil:</span>
          <span className="detail-value">Soltero</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Dirección:</span>
          <span className="detail-value"> Barrio el Milagro, Chiquimulilla Santa Rosa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Edad:</span>
          <span className="detail-value">23 años</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Fecha de nacimiento:</span> 
          <span className="detail-value">05 de Julio de 2002</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">DPI:</span>
          <span className="detail-value">3086940660608</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Lugar de nacimiento:</span>
          <span className="detail-value">Chiquimulilla, Santa Rosa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">NIT:</span>
          <span className="detail-value">112228771</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Email:</span>
          <span className="detail-value"> <a href="mailto:julioalbertoh79@gmail.com">julioalbertoh79@gmail.com</a></span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Profesión:</span>
          <span className="detail-value">Bachiller en Ciencias y Letras con Orientación en Electricidad</span>
        </div>
      </div>
      {/* Se eliminó el párrafo de descripción del perfil */}
    </section>
  );
}

export default PersonalInfo;