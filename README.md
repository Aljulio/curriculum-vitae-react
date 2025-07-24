Mi Hoja de Vida Profesional - Julio Alberto Hernández Morales
Descripción del Proyecto
Este proyecto es una aplicación web personal diseñada para presentar mi hoja de vida (currículum vitae) de manera interactiva y responsiva. Fue desarrollada utilizando React.js para construir una interfaz de usuario dinámica y moderna, y Vite como herramienta de construcción rápida para el desarrollo.

El objetivo principal es mostrar mis datos personales, objetivo profesional, formación académica, experiencia laboral y habilidades técnicas de una forma clara y accesible desde cualquier dispositivo (móvil, tablet, escritorio).

Características Clave
Diseño Responsivo: Adaptable a diferentes tamaños de pantalla para una experiencia de usuario óptima en cualquier dispositivo.

Tecnologías Modernas: Construido con React (Vite) para un desarrollo eficiente y un rendimiento optimizado.

Navegación Intuitiva: Secciones claras (Personal, Objetivo, Formación, Experiencia, Habilidades, Portafolio, Contacto) con navegación fluida.

Contenido Detallado: Incluye información esencial para un perfil profesional completo.

Publicación en GitHub Pages: Acceso público y gratuito a través de un enlace web.

Tecnologías Utilizadas
Este proyecto fue desarrollado utilizando las siguientes tecnologías clave:

React (Vite): Un framework de JavaScript para construir interfaces de usuario interactivas. Vite se utilizó como el "bundler" y servidor de desarrollo, proporcionando una experiencia de desarrollo rápida y moderna.

HTML5: Lenguaje de marcado para la estructura fundamental del contenido web.

CSS3: Hoja de estilos en cascada para el diseño y la presentación visual de la aplicación, incluyendo la adaptabilidad (responsive design).

JavaScript (ES6+): Lenguaje de programación principal para la lógica interactiva del lado del cliente.

GH-Pages: Una librería de Node.js utilizada para simplificar el proceso de despliegue de proyectos web a GitHub Pages.

Instrucciones de Uso
Sigue estos pasos para obtener una copia local del proyecto, instalar sus dependencias, ejecutarlo en modo desarrollo y publicarlo en GitHub Pages.

1. Clonar el Repositorio
Para obtener el código fuente en tu máquina local, abre tu terminal (como la de Visual Studio Code) y ejecuta el siguiente comando:

git clone [https://github.com/Aljulio/curriculum-vitae-react.git](https://github.com/Aljulio/curriculum-vitae-react.git)

Una vez clonado, navega a la carpeta del proyecto:

cd curriculum-vitae-react

2. Instalación de Dependencias
Con la terminal dentro de la carpeta curriculum-vitae-react, instala todas las dependencias necesarias del proyecto. Asegúrate de tener Node.js y npm (o Yarn) instalados en tu sistema.

npm install
# o si usas yarn:
# yarn install

3. Ejecutar el Proyecto Localmente (Modo Desarrollo)
Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo para ver el proyecto en tu navegador local. Esto es útil para trabajar y probar cambios.

npm start

4. Construir el Proyecto para Producción
Para crear una versión optimizada del proyecto lista para ser desplegada (con el código JavaScript y CSS minificado y optimizado), ejecuta el siguiente comando:

npm run build

5. Desplegar el Proyecto a GitHub Pages
Para publicar tu hoja de vida en GitHub Pages, debes tener el repositorio correctamente configurado en GitHub (rama gh-pages como fuente de Pages). Luego, ejecuta el comando de despliegue desde la terminal de tu proyecto:

npm run deploy

Una vez que el despliegue esté completo (puede tardar unos minutos), tu CV estará accesible públicamente en la siguiente URL:

https://Aljulio.github.io/curriculum-vitae-react/

Estructura del Proyecto
[Aquí podrías añadir una lista de las carpetas y archivos principales de tu proyecto para dar una visión general de su estructura, por ejemplo:]

.
├── public/           # Archivos estáticos (como index.html, imágenes, favicon)
├── src/              # Código fuente de la aplicación React
│   ├── assets/       # Imágenes, iconos, etc.
│   ├── components/   # Componentes reutilizables de React (ej. MainHeader, PersonalInfo, etc.)
│   ├── styles/       # Archivos CSS globales o variables de estilo (si los tienes)
│   ├── App.jsx       # Componente principal de la aplicación
│   ├── index.css     # Estilos globales
│   └── main.jsx      # Punto de entrada de la aplicación (o index.js si usas Create React App)
├── .gitignore        # Archivos y carpetas ignorados por Git
├── package.json      # Metadatos del proyecto y dependencias
├── README.md         # Este archivo
└── vite.config.js    # Configuración de Vite (si usas Vite)

Autor
Julio Alberto Hernández Morales