const scrollTop = document.querySelector('.scroll__btn');
const header = document.querySelector('.header');

scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const element = document.querySelectorAll('.header__link');

element.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    const target = document.querySelector(id);

    if (window.matchMedia('(max-width: 962px) and (min-width: 320px)').matches) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    } else {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  })
});

const scrollDown = document.querySelector('.greeting__btn');

scrollDown.addEventListener('click', function () {
  const info = document.querySelector('.info');
  const offsetTop = info.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
});
