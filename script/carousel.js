var swiper = new Swiper(".mySwiper", {
  // centeredSlides: true,
  initialSlide: 0, // устанавливаем второй слайд как начальный
  slidesPerView: 1,
  spaceBetween: 15,
  freeMode: true,

  // slidesPerColumn: 1,
  loop: true,
  // effect: 'coverflow',


  // slidesOffsetAfter: 50, // сдвигаем первый слайд влево на 50px
  slidesOffsetBefore: -250, // сдвигаем первый слайд влево на 50px

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true, //включаем поддержку динамических буллетов
    // dynamicMainBullets: 2, //максимальное количество отображаемых буллетов
    initialSlide: 1, // устанавливаем вторую точку пагинации как начальную
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 0, // устанавливаем второй слайд как начальный
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
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















