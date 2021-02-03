/* eslint-disable no-console */
'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cardPreviewText = document.querySelector('.card__preview--text');
const borderIcons = document.querySelectorAll('.js-border-palette1-color3');
const linkIcons = document.querySelectorAll('.js-icon-palette1-color2');
console.log(paletteElements);

function handlePalette(ev) {
  //constante que me sirve para saber la paleta seleccionada
  const paletteValue = ev.currentTarget.value;
  console.log(`Ha seleccionado la paleta:` +paletteValue);

  if (paletteValue === '1') {
    //cambio color texto y barra
    cardPreviewText.classList.remove('js-palette2', 'js-palette3');
    cardPreviewText.classList.add('js-palette1');
    //cogercariconos.classList.add ('js-prueba1_3');
    console.log(`ICONO` + paletteValue);

    //cambio los 4 bordes
    for (const borderIcon of borderIcons) {
      console.log('borde-icono' + borderIcon);
      borderIcon.classList.remove('js-border-palette2-color3', 'js-border-palette3-color3');
      borderIcon.classList.add('js-border-palette1-color3');
    }
    //cambio los 4 iconos
    for (const linkIcon of linkIcons) {
      linkIcon.classList.remove('js-icon-palette3-color2', 'js-icon-palette2-color2');
      linkIcon.classList.add('js-icon-palette1-color2');
    }

  } else if (paletteValue === '2') {
    console.log(`Ha seleccionado otro` + paletteValue);
    cardPreviewText.classList.remove('js-palette1', 'js-palette3');
    cardPreviewText.classList.add('js-palette2');

    for (const borderIcon of borderIcons) {
      console.log('borde-icono' + borderIcon);
      borderIcon.classList.remove('js-border-palette3-color3', 'js-border-palette1-color3');
      borderIcon.classList.add('js-border-palette2-color3');
    }
    for (const linkIcon of linkIcons) {
      console.log('lista-icono' + linkIcon);
      linkIcon.classList.remove('js-icon-palette3-color2', 'js-icon-palette1-color2');
      linkIcon.classList.add('js-icon-palette2-color2');
    }
  } else if (paletteValue === '3') {
    console.log(`Ha seleccionado otro` + paletteValue);
    cardPreviewText.classList.remove('js-palette1', 'js-palette2');
    cardPreviewText.classList.add('js-palette3');

    for (const borderIcon of borderIcons) {
      console.log('borde-icono' + borderIcon);
      borderIcon.classList.remove('js-border-palette1-color3', 'js-border-palette2-color3');
      borderIcon.classList.add('js-border-palette3-color3');
    }
    for (const linkIcon of linkIcons) {
      console.log('lista-icono' + linkIcon);
      linkIcon.classList.remove('js-icon-palette1-color2', 'js-icon-palette2-color2');
      linkIcon.classList.add('js-icon-palette3-color2');
    }
  }
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlePalette);
}
