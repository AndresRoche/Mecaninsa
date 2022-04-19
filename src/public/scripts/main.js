'use strict';



// document.addEventListener('DOMContentLoaded', () => {
//
// })

const productosTitulo = document.querySelector('.productos__titulo') || null;
const serviceHeaderContent = document.querySelector('.serviceHeader__content') || null;
const serviceTitulo = document.querySelector('.service__titulo') || null;


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
  if(anima !== null) {
    observer.observe(anima);
  }
});
