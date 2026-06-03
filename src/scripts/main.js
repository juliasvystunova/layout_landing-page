'use strict';

const iconMenu = document.querySelector('.icon--menu');
const iconClose = document.querySelector('.icon--close');

iconMenu.addEventListener('click', () => {
  document.body.classList.add('page__body--menu-open');
});

iconClose.addEventListener('click', () => {
  document.body.classList.remove('page__body--menu-open');
});
