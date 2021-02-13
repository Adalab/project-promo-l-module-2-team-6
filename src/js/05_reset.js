/* eslint-disable no-undef */
'use strict';

const resetButton = document.querySelector('.js-reset');

const resetLocalStorage = () => {
  localStorage.clear('js-palette');
  localStorage.clear('js-preview-name');
  localStorage.clear('js-preview-job');
  localStorage.clear('image');
  localStorage.clear('phone');
  localStorage.clear('email');
  localStorage.clear('linkedin');
  localStorage.clear('github');
};


// const resetCard = () => {
//   let inputsTextConfig = [];
//   updateAllInputs();
//   resetLocalStorage();
// };

// EVENTO
// resetButton.addEventListener('click', resetCard);
