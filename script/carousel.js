var swiper = new Swiper(".mySwiper", {
  // centeredSlides: true,
  initialSlide: 1, // устанавливаем второй слайд как начальный
  slidesPerView: 4.3,
  // preloadSlides: 2, // предзагружаем два слайда до текущего
  spaceBetween: 9,
  freeMode: true,
  // slidesPerColumn: 1,
  loop: true,
  // effect: 'coverflow',

  // slidesOffsetAfter: -500, // сдвигаем первый слайд влево на -500px
  slidesOffsetBefore: -250, // сдвигаем первый слайд влево на 250px

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true, //включаем поддержку динамических буллетов
    // dynamicMainBullets: 2, //максимальное количество отображаемых буллетов
    initialSlide: 0, // устанавливаем вторую точку пагинации как начальную
  },
  breakpoints: {
    199.98: {
      width: 370,
      initialSlide: 0, 
      slidesPerView: 1,
      spaceBetween: 8,
      slidesOffsetBefore: 8,
    },
    768: {
      initialSlide: 0, 
      slidesPerView: 1.5,
      spaceBetween: 8,
      slidesOffsetBefore: 8,
      slidesOffsetBefore: 0,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 8,
      slidesOffsetBefore: -320,
    },

    1500: {
      slidesPerView: 3,
      slidesOffsetBefore: -320,
    },
    2200: {
      slidesPerView: 4.3,
    }
  }
});


















// var swiper;

// function initSwiper() {
//   swiper = new Swiper(".mySwiper", {
//     initialSlide: 1,
//     slidesPerView: 4.3,
//     spaceBetween: 8,
//     freeMode: true,
//     loop: true,
//     slidesOffsetBefore: -250,
    
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       initialSlide: 0,
//     },
//   });
// }

// function checkScreenSize() {
//   if (window.innerWidth < 768) {
//     swiper.params.slidesPerView = 1;
//     swiper.params.slidesOffsetBefore = 0;
//     swiper.update();
//   } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
//     swiper.params.slidesPerView = 2;
//     swiper.params.slidesOffsetBefore = -250;
//     swiper.update();
//   } else if (window.innerWidth >= 1200 && window.innerWidth < 2200) {
//     swiper.params.slidesPerView = 3;
//     swiper.params.slidesOffsetBefore = -250;
//     swiper.update();
//   }
// }

// initSwiper();
// checkScreenSize();

// window.addEventListener("resize", function () {
//   checkScreenSize();
// });









// var swiper = new Swiper(".mySwiper", {
//   // centeredSlides: true,
//   initialSlide: 1, // устанавливаем второй слайд как начальный
//   slidesPerView: 4.3,
//   // preloadSlides: 2, // предзагружаем два слайда до текущего
//   spaceBetween: 8,
//   freeMode: true,


//   // slidesPerColumn: 1,
//   loop: true,
//   // effect: 'coverflow',


//   // slidesOffsetAfter: -500, // сдвигаем первый слайд влево на -500px
//   slidesOffsetBefore: -250, // сдвигаем первый слайд влево на 250px

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     // dynamicBullets: true, //включаем поддержку динамических буллетов
//     // dynamicMainBullets: 2, //максимальное количество отображаемых буллетов
//     initialSlide: 0, // устанавливаем вторую точку пагинации как начальную
//   },
// });



  // on: {
  //   init: function () {
  //     // ваш код из примера
  //     if (window.matchMedia("(max-width: 768px)").matches) {
  //       slidesOffsetBefore = 0;
  //       slidesOffsetAfter = 8;
  //       slidesPerView = 1.2;
  //       paginationInitialSlide = 0;
  //       spaceBetween = 8;
  //       loop = true;
  //     } else if (window.matchMedia("(max-width: 199.98px)").matches && window.matchMedia("(min-width: 768px)").matches) {
  //       slidesPerView = 1;
  //     } else if (window.matchMedia("(max-width: 2199.98px)").matches && window.matchMedia("(min-width: 1199.98px)").matches) {
  //       slidesPerView = 2;
  //     }
      
  //     this.params.slidesOffsetBefore = slidesOffsetBefore;
  //     this.params.slidesOffsetAfter = slidesOffsetAfter;
  //     this.params.slidesPerView = slidesPerView;
  //     this.params.pagination.initialSlide = paginationInitialSlide;
  //     this.params.spaceBetween = spaceBetween;
  //     this.params.loop = loop;
      
  //     this.update();
  //   },
  // },





// breakpoints: {
//   768: {
//     slidesPerView: 1,
//     spaceBetween: 8,
//     // initialSlide: 0, // устанавливаем второй слайд как начальный
//     // slidesOffsetBefore: 0, // сдвигаем первый слайд влево на 250px
//   },
//   1024: {
//     slidesPerView: 4,
//     spaceBetween: 8,
//     // slidesOffsetBefore: -250, // сдвигаем первый слайд влево на 250px
//   },
// },


// on: {
//   slideChangeTransitionStart: function () {
//     var activeSlide = this.slides[this.activeIndex];
//     var blockLeftPosition = document.getElementById('target-block').getBoundingClientRect().left;

//     if (activeSlide.getBoundingClientRect().left < blockLeftPosition) {
//       activeSlide.style.backgroundColor = 'blue'; // изменяем цвет карточки, когда она проходит за блок слева
//     } else {
//       activeSlide.style.backgroundColor = 'initial'; // возвращаем исходный цвет карточки
//     }
//   },
// },






// var swiper = new Swiper('.swiper-container', {
//   // начальные настройки для слайдера


// });















