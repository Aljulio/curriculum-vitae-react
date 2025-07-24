import './App.css';
import Navegacion from './components/Navegacion/Navegacion';

// Importa todos tus componentes de sección
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ObjetivoProfesional from './components/ObjetivoProfesional/ObjetivoProfesional'; // ¡NUEVA LÍNEA: Importa el componente ObjetivoProfesional!
import ExperienciaLaboral from './components/ExperienciaLaboral/ExperienciaLaboral';
import HabilidadesTecnicas from './components/HabilidadesTecnicas/HabilidadesTecnicas';
import Portafolio from './components/Portafolio/Portafolio';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <Navegacion />     {/* La barra de navegación se queda */}

      {/* Las secciones de tu CV en el orden deseado */}
      <PersonalInfo />
      <ObjetivoProfesional /> {/* ¡NUEVA LÍNEA: Renderiza el componente ObjetivoProfesional! */}
      {/* Si tienes un componente para Formación, agrégalo aquí, por ejemplo: <Formacion /> */}
      <ExperienciaLaboral />
      <HabilidadesTecnicas />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;