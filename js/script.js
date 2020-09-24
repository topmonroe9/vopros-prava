var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    centeredSlidesBounds: true,
    roundLengths: true,
    loop: true,

    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
      '@0.00': {
        slidesPerView: 2,

      },
      '@0.75': {
        slidesPerView: 2,
      },
      '@1.00': {
        slidesPerView: 2,

      },
      '@1.50': {
        slidesPerView: 2.5,
        spaceBetween: 50,
      },
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })