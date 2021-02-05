'use strict'

const resetButton = document.querySelector(".js-reset");

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

const resetName = () => {
  previewCardName.innerHTML = 'Greta Thunberg';
  userName.value = '';
};

    const resetJob = () => {
      previewCardJob.innerHTML = 'Activista';
  userJob.value = '';
};
  

const resetCard = () => {
  resetLocalStorage();
  resetColorPalette();
  resetFont();
  resetName();
  resetJob();
};

// EVENTO
resetButton.addEventListener('click', resetCard);
