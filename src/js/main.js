'use strict';

console.log('>> Ready :)');

const inputName = document.querySelector('.js-input-name');
const previewName = document.querySelector('.js-preview-name');

function pickUpInput () {
    previewName.innerHTML = event.currentTarget.value;
}
inputName.addEventListener('keyup', pickUpInput);
