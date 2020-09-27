var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: '1',
  spaceBetween: 20,
  centeredSlides: true,
  centeredSlidesBounds: true,
  roundLengths: true,
  loop: true,
  loopedSlides: 7,

  autoplay: {
    delay: 4000,

  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows

  breakpoints: {
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 2,
      // spaceBetween: 50,
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    1440: {
      centeredSlides: false,
      slidesPerView: 2,
      // spaceBetween: 50,
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let corporate = document.getElementById('corporate'),
  production = document.getElementById('production'),
  work = document.getElementById('work'),
  help = document.getElementById('help');

$('#corporate').on('mouseenter', expandCorporate);
$('#corporate').on('mouseleave', shrinkCorporate);

$('#production').on('mouseenter', expandProduction);
$('#production').on('mouseleave', shrinkProduction);

$('#work').on('mouseenter', expandWork);
$('#work').on('mouseleave', shrinkWork);

$('#help').on('mouseenter', expandHelp);
$('#help').on('mouseleave', shrinkHelp);


function expandCorporate() {
  $('.types-img-wrapper-1').css('height', '400px');
  $('.types-img-wrapper-2').css('height', '100px');
}

function shrinkCorporate() {
  $('.types-img-wrapper-1').css('height', '250px');
  $('.types-img-wrapper-2').css('height', '250px');
}

function expandProduction() {
  $('#corporate-col').removeClass('col-md-8').addClass('col-md-4');
  $('#production-col').removeClass('col-md-4').addClass('col-md-8');
  $('.types-img-wrapper-1').css('height', '400px');
  $('.types-img-wrapper-2').css('height', '100px');
}

function shrinkProduction() {
  $('#corporate-col').addClass('col-md-8').removeClass('col-md-4');
  $('#production-col').addClass('col-md-4').removeClass('col-md-8');
  $('.types-img-wrapper-1').css('height', '250px');
  $('.types-img-wrapper-2').css('height', '250px');
}

function expandWork() {
  $('#work-col').removeClass('col-md-4').addClass('col-md-8');
  $('#help-col').removeClass('col-md-8').addClass('col-md-4');
  $('.types-img-wrapper-2').css('height', '300px');
  $('.types-img-wrapper-1').css('height', '200px');
}

function shrinkWork() {
  $('#work-col').addClass('col-md-4').removeClass('col-md-8');
  $('#help-col').addClass('col-md-8').removeClass('col-md-4');
  $('.types-img-wrapper-2').css('height', '250px');
  $('.types-img-wrapper-1').css('height', '250px');
}

function expandHelp() {
  $('.types-img-wrapper-2').css('height', '300px');
  $('.types-img-wrapper-1').css('height', '200px');
}

function shrinkHelp() {
  $('.types-img-wrapper-2').css('height', '250px');
  $('.types-img-wrapper-1').css('height', '250px');
}