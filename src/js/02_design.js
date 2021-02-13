'use strict';

const cardElement = document.querySelector(`.js-card`);

const paletteElements = document.querySelectorAll('.js-palette');
const cardPreviewText = document.querySelector('.card__preview--text');
const borderIcons = document.querySelectorAll('.js-border-palette1-color3');
const linkIcons = document.querySelectorAll('.js-icon-palette1-color2');
let checkedPalette = 1;

function handlePalette(ev) {
  const checkedPaletteElement = document.querySelector('.js-palette:checked');
  checkedPalette = checkedPaletteElement.value;
  cardElement.classList.add('palette' + checkedPalette);

  if (checkedPalette === '1') {
    cardPreviewText.classList.remove('js-palette2', 'js-palette3');
    cardPreviewText.classList.add('js-palette1');

    for (const borderIcon of borderIcons) {
      borderIcon.classList.remove('js-border-palette2-color3', 'js-border-palette3-color3');
      borderIcon.classList.add('js-border-palette1-color3');
    }
    
    for (const linkIcon of linkIcons) {
      linkIcon.classList.remove('js-icon-palette3-color2', 'js-icon-palette2-color2');
      linkIcon.classList.add('js-icon-palette1-color2');
    }

  } else if (checkedPalette === '2') {

    cardPreviewText.classList.remove('js-palette1', 'js-palette3');
    cardPreviewText.classList.add('js-palette2');

    for (const borderIcon of borderIcons) {
      borderIcon.classList.remove('js-border-palette3-color3', 'js-border-palette1-color3');
      borderIcon.classList.add('js-border-palette2-color3');
    }
    for (const linkIcon of linkIcons) {

      linkIcon.classList.remove('js-icon-palette3-color2', 'js-icon-palette1-color2');
      linkIcon.classList.add('js-icon-palette2-color2');
    }
  } else if (checkedPalette === '3') {

    cardPreviewText.classList.remove('js-palette1', 'js-palette2');
    cardPreviewText.classList.add('js-palette3');

    for (const borderIcon of borderIcons) {

      borderIcon.classList.remove('js-border-palette1-color3', 'js-border-palette2-color3');
      borderIcon.classList.add('js-border-palette3-color3');
    }
    for (const linkIcon of linkIcons) {

      linkIcon.classList.remove('js-icon-palette1-color2', 'js-icon-palette2-color2');
      linkIcon.classList.add('js-icon-palette3-color2');
    }
  }
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlePalette);
}
