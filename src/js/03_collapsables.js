'use strict';

//Elemento HTML
const designCollapsableHeader=document.querySelector('.js-collapsable-header');
const designCollapsableCont=document.querySelector('.js-collapsable-container');
const arrow = document.querySelector('.js-arrow-up');



function handleCollapsable() {
    designCollapsableCont.classList.toggle('designCollapsableCont');
    arrow.classList.toggle('js-design-arrow');
    console.log('Click aquí')
}



designCollapsableHeader.addEventListener('click', handleCollapsable);

