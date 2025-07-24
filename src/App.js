// src/App.js
import React from 'react';
import './App.css'; 
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ObjetivoProfesional from './components/ObjetivoProfesional/ObjetivoProfesional'; 
import Education from './components/Education/Education'; 
import ExperienciaLaboral from './components/ExperienciaLaboral/ExperienciaLaboral'; 
import HabilidadesTecnicas from './components/HabilidadesTecnicas/HabilidadesTecnicas'; 
import Portafolio from './components/Portafolio/Portafolio'; 
import Contacto from './components/Contacto/Contacto'; // ¡Importa el nuevo componente!

function App() {
  return (
    <div className="App">
      {/* Aquí puedes tener tu barra de navegación u otros elementos globales */}

      <PersonalInfo />
      <ObjetivoProfesional /> 
      <Education /> 
      <ExperienciaLaboral /> 
      <HabilidadesTecnicas /> 
      <Portafolio /> 
      <Contacto /> {/* ¡Renderiza el componente de Contacto aquí! */}

      {/* Este es el final de tu hoja de vida */}
    </div>
  );
}

export default App;