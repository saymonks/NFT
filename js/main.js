const heroSwiper = new Swiper('.hero-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.hero-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
  },
});

const trendingSwiper = new Swiper('.trending-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});