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

// const productosTitulo = document.querySelector('.productos__titulo');
// const productosArct = document.querySelectorAll('.productos__arct');
// const serviceHeaderContent = document.querySelector('.serviceHeader__content');
// const serviceTitulo = document.querySelector('.service__titulo');
// const serviceItems = document.querySelectorAll('.service__items');
//
//
// let animationUser = [];
// animationUser.push(productosTitulo);
// for(let produc of productosArct){
//   animationUser.push(produc);
// }
// animationUser.push(serviceHeaderContent);
// animationUser.push(serviceTitulo);
// for(let service of serviceItems){
//   animationUser.push(service);
// }
//
// console.log(animationUser);
