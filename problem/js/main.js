(function() {
  document.addEventListener('click',burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if(!burgerIcon && !burgerNavLink) return

    if(document.documentElement.clientWidth > 900) return

    if(burgerIcon) {
      e.preventDefault()
    }

    if(!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else{
      document.body.classList.remove('body--opened-menu')
    }
  }
})()

const btn = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')
const body = document.body

const openModal = () =>{
  body.classList.add('body--modal-opened')
}
const closeModal = () => {
  body.classList.remove('body--modal-opened')
}

btn.addEventListener('click',(openModal))

modal.addEventListener('click',event => {
  const target = event.target
  if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
    closeModal()
    console.log('успешно')
  }
  })

  document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && body.classList.contains('body--modal-opened')) {
      body.classList.toggle('body--modal-opened')
    }
  })