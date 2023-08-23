gsap.registerPlugin(ScrollTrigger);

gsap.from('.header', {
  y: -85,
  duration: 0.7
});

gsap.fromTo('.info__wrapper', { opacity: 0, y: 100 }, {
  scrollTrigger: {
    trigger: '.info__wrapper',
    start: 'top 90%',
  },
  duration: 0.7,
  opacity: 1,
  y: 0
});


gsap.fromTo('.skills__item', { opacity: 0, y: 100 }, {
  scrollTrigger: {
    trigger: '.skills__item',
    start: 'top 90%',
  },
  duration: 0.7,
  opacity: 1,
  y: 0
});

gsap.fromTo('.skills__item-secondary', { opacity: 0, y: 100 }, {
  scrollTrigger: {
    trigger: '.skills__item-secondary',
    start: 'top 90%',
  },
  duration: 0.7,
  opacity: 1,
  y: 0
});

gsap.fromTo('.portfolio__item', { opacity: 0, y: 100 }, {
  scrollTrigger: {
    trigger: '.portfolio__item',
    start: 'top 90%',
  },
  duration: 0.7,
  opacity: 1,
  y: 0
});

gsap.fromTo('.contacts__item', { opacity: 0, y: 100 }, {
  scrollTrigger: {
    trigger: '.contacts__item',
    start: 'top 90%',
  },
  duration: 0.7,
  opacity: 1,
  y: 0
});
