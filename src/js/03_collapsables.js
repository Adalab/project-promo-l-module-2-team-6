'use strict';

const collapsableHeaders = document.querySelectorAll ('.js-collapsable-header');

for (const collapsableHeader of collapsableHeaders) {
  collapsableHeader.addEventListener ('click', switchCollapsable);
}

function switchCollapsable (ev) {
  const clickedHeader = ev.currentTarget;
  const clickedCollapsable = clickedHeader.parentNode;

  const allCollapsablesCont = document.querySelectorAll (
    '.js-collapsable-container'
  );

  for (const collapsable of allCollapsablesCont) {
    if (clickedCollapsable === collapsable) {
      collapsable.classList.toggle ('collapsable--close');
    } else {
      collapsable.classList.add ('collapsable--close');
    }
  }
}

const designCollapsableContainer = document.querySelectorAll (
  '.js-collapsable-container'
);

function handleCollapsable (ev) {
  designCollapsableContainer.classList.toggle ('collapsable--close');

  ev.currentTarget.parentNode.querySelector ('.js-container');
}
for (const collapsableElements of designCollapsableContainer) {
  collapsableElements.addEventListener ('click', handleCollapsable);
}
