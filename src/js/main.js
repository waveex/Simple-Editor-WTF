"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const textarea = document.querySelector('.form__textarea--js') ;
 
const save = document.querySelector('.form__button--save-js') ;

save.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('textarea', textarea.value);
 });

const  loadButton = document.querySelector('.form__button--load-js'); 

loadButton.addEventListener ('click', (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem('textarea')
}
 )