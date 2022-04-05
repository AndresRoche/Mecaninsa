'use strict';


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


document.addEventListener('DOMContentLoaded', () => {

})

const productosTitulo = document.querySelector('.productos__titulo');
const serviceHeaderContent = document.querySelector('.serviceHeader__content');
const serviceTitulo = document.querySelector('.service__titulo');


let animationUser = [];
animationUser.push(productosTitulo);
animationUser.push(serviceHeaderContent);
animationUser.push(serviceTitulo);


const animacionFunction = (entries) => {
  const entry = entries[0];
  if(entry.isIntersecting){
    entry.target.classList.add('animateDown');
  }
}

let observer = new IntersectionObserver(animacionFunction,{
  rootMargin: '20px',
  threshold: 0
})

animationUser.forEach(anima => {
  observer.observe(anima);
});
