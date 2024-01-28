var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
    // slidesPerColumn: 1,
    // loop: true, 
    // effect: 'coverflow',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true, //включаем поддержку динамических буллетов
      dynamicMainBullets: 2, //максимальное количество отображаемых буллетов

      on: {
        slideChangeTransitionStart: function () {
          var activeSlide = this.slides[this.activeIndex];
          var blockLeftPosition = document.getElementById('target-block').getBoundingClientRect().left;
          
          if (activeSlide.getBoundingClientRect().left < blockLeftPosition) {
            activeSlide.style.backgroundColor = 'blue'; // изменяем цвет карточки, когда она проходит за блок слева
          } else {
            activeSlide.style.backgroundColor = 'initial'; // возвращаем исходный цвет карточки
          }
        },
      },
    },

});















