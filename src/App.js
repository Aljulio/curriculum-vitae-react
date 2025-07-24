import './App.css';
import Navegacion from './components/Navegacion/Navegacion';

// Importa todos tus componentes de sección
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ObjetivoProfesional from './components/ObjetivoProfesional/ObjetivoProfesional'; 
import Education from './components/Education/Education'; // ¡NUEVA LÍNEA: Importa el componente Education!
import ExperienciaLaboral from './components/ExperienciaLaboral/ExperienciaLaboral';
import HabilidadesTecnicas from './components/HabilidadesTecnicas/HabilidadesTecnicas';
import Portafolio from './components/Portafolio/Portafolio';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <Navegacion />     

      {/* Las secciones de tu CV en el orden deseado */}
      <PersonalInfo />
      <ObjetivoProfesional /> 
      <Education /> {/* ¡NUEVA LÍNEA: Renderiza el componente Education! */}
      <ExperienciaLaboral />
      <HabilidadesTecnicas />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;