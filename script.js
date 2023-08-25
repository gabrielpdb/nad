const menuIcon = document.querySelector('#menu-icon')
const overlay = document.querySelector('.overlay')

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active')
  overlay.classList.toggle('active')
})

document.addEventListener('click', event => {
  if (event.target === overlay) {
    menuIcon.classList.toggle('active')
    overlay.classList.toggle('active')
  }
})
