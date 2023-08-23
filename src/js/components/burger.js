let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    burger.classList.toggle('is-closed');
    header.classList.toggle('is-opened')
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-active');
    burger.classList.remove('is-closed');
    header.classList.remove('is-opened')
  })
})
