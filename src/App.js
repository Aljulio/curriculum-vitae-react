import './App.css';
import MainHeader from './components/MainHeader/MainHeader'; // ¡NUEVA LÍNEA: Importa el MainHeader!

// Importa los componentes de tus secciones de contenido
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ObjetivoProfesional from './components/ObjetivoProfesional/ObjetivoProfesional'; 
import Education from './components/Education/Education'; 
import ExperienciaLaboral from './components/ExperienciaLaboral/ExperienciaLaboral';
import HabilidadesTecnicas from './components/HabilidadesTecnicas/HabilidadesTecnicas';
import Portafolio from './components/Portafolio/Portafolio';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <MainHeader />     {/* ¡NUEVO: Tu encabezado principal con foto, nombre, contacto y navegación! */}
      
      {/* Las secciones de tu CV que vienen después del encabezado */}
      <PersonalInfo />
      <ObjetivoProfesional /> 
      <Education /> 
      <ExperienciaLaboral />
      <HabilidadesTecnicas />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;