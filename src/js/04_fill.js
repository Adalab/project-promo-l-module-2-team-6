'use.strict';

console.log('>> Ready :)');

const inputName = document.querySelector('.js-input-name');
const previewName = document.querySelector('.js-preview-name');
const jobElement = document.querySelector('.js-input-job');
const jobPreviewElement = document.querySelector('.js-preview-job');

function pickUpInput () {
    previewName.innerHTML = event.currentTarget.value;
}
inputName.addEventListener('keyup', pickUpInput);


function handlerJob () {
    jobPreviewElement.innerHTML = event.currentTarget.value;
}
jobElement.addEventListener('keyup', handlerJob);