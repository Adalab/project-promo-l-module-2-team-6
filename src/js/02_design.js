'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
console.log(paletteElements)

function handlePalette(ev) {
    const paletteValue = ev.currentTarget.value;
    console.log(paletteValue);
}

for (const paletteElement of paletteElements) {
    paletteElement.addEventListener('change', handlePalette);
}