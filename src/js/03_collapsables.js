'use strict';

 //ELEMENTO HTML
const designCollapsableHeader=document.querySelector('.js-collapsable-header');
const designCollapsableCont=document.querySelector('.js-collapsable-container');
const designArrow = document.querySelector('.js-arrow-up');

const fillCollapsableHeader=document.querySelector('.js-fill-collapsable-header');
const fillCollapsableCont=document.querySelector('.js-fill-collapsable-container');
const fillArrow = document.querySelector('.js-fill-arrow');



//FUNCIONES
function handleCollapsable() {
    designCollapsableCont.classList.toggle('designCollapsableCont');
    designArrow.classList.toggle('js-design-arrow');
    console.log('Click aquí')
}

function handleFillCollapsable() {
    fillCollapsableCont.classList.toggle('fillCollapsableCont');
    designArrow.classList.toggle('js-fill-arrow');
    console.log('Click fill')
}


//EVENTO
designCollapsableHeader.addEventListener('click', handleCollapsable);

fillCollapsableHeader.addEventListener('click', handleFillCollapsable);

