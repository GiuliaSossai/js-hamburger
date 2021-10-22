const menu = document.querySelector(".header.right");
const hamburger = document.querySelector(".hamburger-menu");
const hambIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");

hambIcon.addEventListener("click", function(){
  hamburger.classList.add('active')

  console.log('ho cliccato')
});

closeIcon.addEventListener("click", function(){
  hamburger.classList.remove('active')

  console.log('ho cliccato')
});







