import './App.css';
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal';
import Navegacion from './components/Navegacion/Navegacion';

// Asegúrate de que los nombres de los componentes y las rutas coincidan con tus archivos
import PersonalInfo from './components/PersonalInfo/PersonalInfo'; // Importa tu componente de Información Personal
import ExperienciaLaboral from './components/ExperienciaLaboral/ExperienciaLaboral';
import HabilidadesTecnicas from './components/HabilidadesTecnicas/HabilidadesTecnicas';
// ***********************************************************************************
// ¡IMPORTANTE! Aquí decide si tu componente se llama 'Portafolio' o 'PortafolioProyectos'
// Si tu archivo es src/components/Portafolio/Portafolio.jsx usa la primera línea:
import Portafolio from './components/Portafolio/Portafolio'; 
// Si tu archivo es src/components/PortafolioProyectos/PortafolioProyectos.jsx usa esta segunda línea:
// import PortafolioProyectos from './components/PortafolioProyectos/PortafolioProyectos';
// ***********************************************************************************
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <TituloPrincipal />
      <Navegacion />

      {/* Componentes de tu hoja de vida en el orden deseado */}
      <PersonalInfo /> 
      {/* Si tienes un componente para Objetivo, agrégalo aquí, por ejemplo: <Objetivo /> */}
      {/* Si tienes un componente para Formación, agrégalo aquí, por ejemplo: <Formacion /> */}
      <ExperienciaLaboral />
      <HabilidadesTecnicas />
      {/* ***********************************************************************************
      ¡IMPORTANTE! Aquí usa el componente que corresponda a tu importación de arriba
      Si importaste 'Portafolio', usa <Portafolio />
      Si importaste 'PortafolioProyectos', usa <PortafolioProyectos />
      *********************************************************************************** */}
      <Portafolio /> 
      <Contacto />
    </div>
  );
}

export default App;