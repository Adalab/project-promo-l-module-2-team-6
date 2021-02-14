![](https://github.com/Adalab/project-promo-l-module-2-team-6/blob/master/src/images/logo-treehuggers.png)

# Generador de Tarjetas Digitales Personalizables

## Descripción del proyecto 

Este proyecto consiste en realizar una aplicación web que nos permite crear una tarjeta de visita personalizada. En la página web podemos introducir nuestros datos profesionales y obtener una vista maquetada con esta información. 

## Para la realización de este proyecto se han seguido las siguientes fases:
- Desarrollo de la landing page
- Desarrollo del sitio completo con su estructura básica (mobile first y luego diseño responsive)
- Vista previa de la tarjeta con actualizaciones en tiempo real (al modificar un campo del formulario, tanto del diseño de la tarjeta como de los datos de usuario, se actualiza la vista previa)
- Creación de funcionalidad del botón de Reset: al clickar el LocalStorage debe limpiarse y el formulario debe volver a su estado inicial.
- Creación de la funcionalidad de LocalStorage para que el contenido se almacene en el navegador.
- Creación de la funcionalidad de compartir en Twitter, enviando primero los datos al servidor para obtener la URL para compartir.

### El proyecto consta de 2 páginas:
- Una página landing de bienvenida.
- Una página con la aplicación de crear tarjetas.  

1. **Landing page** 

![](https://github.com/Adalab/project-promo-l-module-2-team-6/blob/master/src/images/landing.png)

2. **Página de creación de tarjetas** 


![](https://github.com/Adalab/project-promo-l-module-2-team-6/blob/master/src/images/app-01.png)

![](https://github.com/Adalab/project-promo-l-module-2-team-6/blob/master/src/images/app-02.png)

![](https://github.com/Adalab/project-promo-l-module-2-team-6/blob/master/src/images/app-03.png)

![](https://github.com/Adalab/project-promo-l-module-2-team-6/blob/master/src/images/app-04.png)

## Composición del código
**- HTML: Dividido en partials, haciendo referencia a las secciones del código como sigue:**

- header.html: contiene el código referente al header. 
- footer.html: contiene el código referente al footer.
- main.html: Contiene el código referente a la sección principal de la página de landing.
- design.html: Contiene el código referente a la selección de paleta de colores.
- fill.html: Contiene el código referente al formulario de introducción de datos de usuario.
- share.html: Contiene el código referente a la tercera sección colapsable, de creación de tarjeta y botón de compartir en Twitter.
- card-preview.html: Contiene el código referente a la previsualización de la tarjeta y el formulario de selección de paletas.
- index.html: Contiene los includes de los partials anteriormente citados referentes a la página Landing.
- app.html: Contiene los includes de los partials anteriormente citados referentes a la página de creación de tarjeta.

**- CSS: Dividido en partials:**

- Core: Contiene los partials de la hoja de reset CSS y las variables utilizadas por tratarse de código repetido, además contiene los keyframes de las animaciones existentes y mixins para los breakpoints del sistema de responsive.
- Layout: Contiene los partials referentes al footer y el header.
- Pages: Contiene los estilos correspondientes a las páginas existentes: index (landing) y generator (página de creación de tarjeta).
- Main.scss: Contiene los imports de los partials anteriormente citados.

**- js: Dividido en partials:**

- 00-fill.js : Contiene el código referente a la funcionalidad para rellenar los datos del formulario.
- 01-collapsable.js: Contiene el código referente a la funcionalidad para colapsar y desplegar los menús de la página de creación de tarjeta.
- 02-design.js: Contiene el código referente a la selección de paleta de colores para la tarjeta.
- 03-photo.js: Contiene el código de la funcionalidad de añadir imagen en el formulario y mostrarla en la previsualización.
- 04-localstorage.js: Contiene el código referente a la funcionalidad de almacenamiento de la información introducida en el navegador.
- 05-reset.js: Contiene el código referente a la funcionalidad del botón de reset.
- 06-form.js: Para prevenir el envío del formulario por defecto.
- 07-fetch.js: Para obtener el link para compartir la tarjeta que ha sido creada.
- 08-share-button.js: Contiene el código referente al botón de compartir en Twitter.
- 09-main.js: Llama a ejecutar funciones de ficheros anteriores.




