(function() {
  document.addEventListener('click',burgerInit)
  function burgerInit(e){
  const burgerIcon = e.target.closest('.burger__icon')
  const burgerNavLink = e.target.closest('.nav__link')
  if(!burgerIcon && !burgerNavLink) return
  if(document.documentElement.clientWidth > 900) return
  if(!document.body.classList.contains('body--opened-menu')) {
    document.body.classList.add('body--opened-menu')
  } else {
    document.body.classList.remove('body--opened-menu')
  }
  }
})()










// testimonials swiper
const swiper = new Swiper('.testimonials__slider', {
  autoplay: {
    enabled:true,
    delay: 0 ,
    pauseOnMouseEnter: true,
  },
  speed:2000,
  loop: true,
  initialSlide: 1,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    401:{
      slidesPerView:1.5,
      },
    601:{
      slidesPerView:2,
      },
    801:{
      slidesPerView:2.5,
      },
    1101:{
      slidesPerView:3,
      spaceBetween: 24,
      },
  1201:{
  slidesPerView:3.35,
  },
  }
});

// services swiper
new Swiper('.services__slider', {
  speed:500,
  slidesPerView:1,
  spaceBetween: 20,
  centeredSlides:true,
  scrollbar: {
    el: '.services__slider-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.services__slider-next',
    prevEl: '.services__slider-prev',
  },
  breakpoints: {
    801:{
      slidesPerView:1.4,
    },
  901:{
    slidesPerView:2,
    spaceBetween: 24,
  },
  }
});