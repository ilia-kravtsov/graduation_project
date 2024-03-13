// ________________________________ sixth section swiper _____________________________
new Swiper('.main__fifth-quote', {
    // Optional parameter
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.main__fifth-buttons-container-arrow-right',
    prevEl: '.main__fifth-buttons-container-arrow-left',
  },

});
// ________________________________ eight section swiper _____________________________
// Initialize the second Swiper instance
new Swiper('.main__eight-our-blog-list-container', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15, // px
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.main__eight-next-button',
    prevEl: '.main__eight-prev-button',
  },

  breakpoints: { 
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    }
  }

});



