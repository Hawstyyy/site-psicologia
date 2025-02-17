const menu = document.getElementById('menu');
const nav_mobile = document.getElementById('nav_mobile');

menu.addEventListener('click', () => {
  if(nav_mobile.classList.contains('clicado')){
    nav_mobile.classList.add('fadeout');
    setTimeout(() => {
      nav_mobile.classList.remove('clicado');
    }, 400);
  }
  else {
    nav_mobile.classList.remove('fadeout');
    nav_mobile.classList.toggle('clicado');
  }
});