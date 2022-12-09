const mainSwiper = new Swiper('.main-swiper', { //SLIDERS START
  direction: 'horizontal',
  spaceBetween: 25,
  loop: true,

  autoplay: {
    delay: 3500,
  },

  speed: 800,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperSlider = new Swiper('.swiper-slider', {
  direction: 'horizontal',
  spaceBetween: 25,
  loop: true,

  autoplay: {
    delay: 4000,
  },

  speed: 900,

  effect: 'fade',

  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperChronology = new Swiper('.swiper-chronology', {
  direction: 'horizontal',
  spaceBetween: 25,
  parallax: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

    draggable: true,

  },


  breakpoints: {
    360: {
      slidesPerView: 'auto',
      spaceBetween: 8
    },
    768: {
      slidesPerView: 2.3,
    },

    992: {
      slidesPerView: 3.3,
      spaceBetween: 30
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiperBlog = new Swiper('.blog-swiper', {
  direction: 'horizontal',
  spaceBetween: 25,
  slidesPerView: 3,
  parallax: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

    draggable: true,

  },

  breakpoints: {
    360: {
      slidesPerView: '1',
      spaceBetween: 8
    },
    768: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const anchors = document.querySelectorAll('a[href*="#"]') //ANCHOR GO TOP - START

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behovior: "smooth",
      block: "start"
    })
  })
}