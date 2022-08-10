window.sr = ScrollReveal({ reset: true });


sr.reveal('.banner', { duration: 1000});
sr.reveal('.sobre', {
  rotate: {x: 0, y: 80, z:0},
  duration: 1000
});
sr.reveal('.contato', {
  rotate: { x: 0, y: 80, z: 0 },
  duration: 1000,
});
sr.reveal(".localizacao", {
  rotate: { x: 0, y: 80, z: 0 },
  duration: 1000,
});

sr.reveal(".card-room", {
  rotate: { x: 0, y: 80, z: 0 },
  duration: 1000,
});



let btn = document.querySelector('button#back-to-top');

btn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});


window.addEventListener('scroll', () => {
  if (window.scrollY < 200.1509552001953) {
    btn.style.visibility = 'hidden';
  }else{
    btn.style.visibility = 'visible';
  }
});


//Menu hambúrguer 

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
  const navbar = document.getElementById('nav-bar');
  navbar.classList.toggle('active');

}

btnMobile.addEventListener('click', toggleMenu);
