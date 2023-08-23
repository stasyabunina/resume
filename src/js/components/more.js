const more = document.querySelector('.portfolio__btn');
const itemsLength = document.querySelectorAll('.portfolio__item').length;
let items;

if (window.matchMedia('(max-width: 1200px) and (min-width: 320px)').matches) {
  let items = 2;
  more.addEventListener('click', function () {
    items += 2;
    const array = Array.from(document.querySelector('.portfolio__list').children);
    const visItems = array.slice(0, items);
    visItems.forEach(function (el) {
      el.classList.add('is-visible')
    });
    if (visItems.length === itemsLength) {
      more.classList.add('is-hidden');
    }
  })
} else {
  let items = 3;
  more.addEventListener('click', function () {
    items += 3;
    const array = Array.from(document.querySelector('.portfolio__list').children);
    const visItems = array.slice(0, items);
    visItems.forEach(function (el) {
      el.classList.add('is-visible')
    });
    if (visItems.length === itemsLength) {
      more.classList.add('is-hidden');
    }
  })
};

function openLink(url) {
  window.open(url, 'blank')
}

