'use strict';

const twitterElement = document.querySelector('.js-twitter-btn');
const twitterLinkElement = document.querySelector('.js-twitter-link');

function handleTwitterShare() {
  // eslint-disable-next-line no-undef
  twitterLinkElement.href = `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${shareLink}`;
}
twitterElement.addEventListener('click', handleTwitterShare);