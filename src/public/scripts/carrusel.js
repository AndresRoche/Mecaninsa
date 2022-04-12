'use strict';

//Script para la animacion de carrusel

const desplaza = document.querySelectorAll('.carrusel__desplazamiento');
let elementoAnterior;
const headerNavigator = document.querySelectorAll('.carrusel__navigatorItem');

desplaza.forEach( itemDesplaza => {

  itemDesplaza.addEventListener('click', (event) => {

    let element = event.target;

    let haciaDonde = element.parentElement.getAttribute('href');
    let ani = document.querySelector(haciaDonde);
    ani.classList.add('anima');
    elementoAnterior = element.parentElement
    .parentElement
    .parentElement;
    elementoAnterior.classList.remove('anima');

  })
})
