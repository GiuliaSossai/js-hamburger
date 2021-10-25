const hambIcon = document.querySelector(".fa-bars");
//al posto di fa-bars era meglio mettere ".header-right > a" perchè più specifico - idem per .fa-times - usare ".close" - c'è anche get element by class name ma mi restituisce una lista con le classi (anche se ce n'è solo una)

const closeIcon = document.querySelector(".fa-times");

hambIcon.addEventListener("click", function(){
  const hamburger = document.querySelector(".hamburger-menu");
  hamburger.classList.add('active');

  console.log('ho cliccato hamburger');
});

closeIcon.addEventListener("click", function(){
  const hamburger = document.querySelector(".hamburger-menu");
  //posso dichiarare una seconda volta la stessa costante solo dentro la funzione!! 
  hamburger.classList.remove('active');

  console.log('ho cliccato x');
});







