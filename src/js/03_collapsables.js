'use strict';

//Elemento HTML
const collapsableHeader=document.querySelector('.js-collapsable-header');
const collapsableContainer=document.querySelector('.js-collapsable-container');
const arrowButton=document.querySelector('.js-arrow-up');

// const designCollapsableHeader=document.querySelector('.js-collapsable-header');
// const designCollapsableCont=document.querySelector('.js-collapsable-container');
// const arrow = document.querySelector('.js-arrow-up');

// FUNCIÓN
function handleCollapsable(){
    collapsableContainer.classList.toggle('collapsable-container');
    arrowButton.classList.toggle('js-design-arrow');
    console.log('Hice click');
};

//EVENTO
collapsableHeader.addEventListener('click', handleCollapsable);

// function handleCollapsable() {
//     designCollapsableCont.classList.toggle('designCollapsableCont');
//     arrow.classList.toggle('js-design-arrow');
//     console.log('Click aquí')
// }



// designCollapsableHeader.addEventListener('click', handleCollapsable);

