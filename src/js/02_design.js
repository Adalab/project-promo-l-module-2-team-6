'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cogercardText = document.querySelector('.card__preview--text');
const cogerBordeiconos = document.querySelector('.js-prueba1_3');
const cogerIconos = document.querySelector('.js-prueba1_1');
console.log(`iconos` + cogerIconos);
console.log(paletteElements);
console.log(`mi text`+ cogercardText.innerHTML);

function handlePalette(ev) {
    const paletteValue = ev.currentTarget.value;
    console.log(paletteValue);
    
    if (paletteValue === "1") {
        console.log(`Ha seleccionado en 1:`+ paletteValue);
        cogercardText.classList.remove ('js-prueba2', 'js-prueba3');
        //cogercariconos.classList.add ('js-prueba1_3');
        console.log(`ICONO`+ paletteValue);
        

      } else if (paletteValue === "2") {
        console.log(`Ha seleccionado otro` + paletteValue);
        cogercardText.classList.remove ('js-prueba1', 'js-prueba3');
        cogercardText.classList.add ('js-prueba2');
        cogerBordeiconos.classList.add ('js-prueba2_3');
        cogerIconos.classList.add ('js-prueba2_1');
       
      
    } else if (paletteValue === "3") {
        console.log(`Ha seleccionado otro` + paletteValue);
        cogercardText.classList.remove ('js-prueba1', 'js-prueba2');
        cogercardText.classList.add ('js-prueba3');
      }
}

for (const paletteElement of paletteElements) {
    paletteElement.addEventListener('change', handlePalette);
}