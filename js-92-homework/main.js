const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body


const openModal = () =>{
  modal.classList.add('modal--open')
  body.classList.add('body--fixed')
  btn.classList.add('active')
}
const closeModal = () => {
  modal.classList.remove('modal--open')
  body.classList.remove('body--fixed')
  btn.classList.remove('active')
}

btn.addEventListener('click',(openModal))
modal.addEventListener('click',event => {
  const target = event.target
  if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
    closeModal()
  }
  })
  document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && modal.classList.contains('modal--open')) {
      modal.classList.toggle('modal--open'),
      btn.classList.toggle('active')
    }
  })