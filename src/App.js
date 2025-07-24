import './App.css';
// import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal'; // ¡ELIMINADA ESTA LÍNEA!
import Navegacion from './components/Navegacion/Navegacion';

// Importa todos tus componentes de sección
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ExperienciaLaboral from './components/ExperienciaLaboral/ExperienciaLaboral';
import HabilidadesTecnicas from './components/HabilidadesTecnicas/HabilidadesTecnicas';
import Portafolio from './components/Portafolio/Portafolio';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      {/* <TituloPrincipal /> ¡ELIMINADO ESTE COMPONENTE! */}
      <Navegacion />     {/* La barra de navegación se queda */}
      
      {/* Las secciones de tu CV en el orden deseado */}
      <PersonalInfo />
      {/* Si tienes un componente para Objetivo, agrégalo aquí, por ejemplo: <Objetivo /> */}
      {/* Si tienes un componente para Formación, agrégalo aquí, por ejemplo: <Formacion /> */}
      <ExperienciaLaboral />
      <HabilidadesTecnicas />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;