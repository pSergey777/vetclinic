var swiper = new Swiper(".mySwiper", {
  // centeredSlides: true,
  initialSlide: 0, // устанавливаем второй слайд как начальный
  slidesPerView: 1,
  preloadSlides: 2, // предзагружаем два слайда до текущего
  spaceBetween: 15,
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
    initialSlide: 1, // устанавливаем вторую точку пагинации как начальную
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 8,
      // initialSlide: 0, // устанавливаем второй слайд как начальный
      // slidesOffsetBefore: 0, // сдвигаем первый слайд влево на 250px
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
      // slidesOffsetBefore: -250, // сдвигаем первый слайд влево на 250px
    },
  },

  on: {
    init: function () {
      if (window.innerWidth < 768) {
        this.params.slidesOffsetBefore = 1; // изменяем значение параметра для мобильной версии
        this.params.pagination.initialSlide = 0;
        this.update();
      } else {
        this.params.slidesOffsetBefore = -250; // возвращаем исходное значение для остальных разрешений экрана
        this.update();
      }
    },
  },
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
});





// var swiper = new Swiper('.swiper-container', {
//   // начальные настройки для слайдера


// });















