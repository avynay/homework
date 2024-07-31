const burger = document.querySelector('.burger')
burger.addEventListener('click',function() {
  burger.classList.toggle('active');
  const nav = document.querySelector('.nav')
  nav.classList.toggle('open');
})