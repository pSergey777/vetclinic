

let slideIndex = 0;
let timer;

showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Сбросить таймер, если он уже установлен
  clearTimeout(timer);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_active");
    dots[i].addEventListener("click", createClickHandler(i));
  }

  // Показать слайд и установить активную точку
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add("dot_active");
  slides[slideIndex - 1].classList.add("fade-in");

  // Установить таймер для следующего слайда
  timer = setTimeout(showSlides, 2000);
}

function createClickHandler(index) {
  return function () {
    // slideIndex = index + 1;
    slideIndex = index;
    showSlides();
  };
}



// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1 }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" dot_active", "");
//   }
//   slides[slideIndex - 1].style.display = "flex";
//   dots[slideIndex - 1].className += " dot_active";
//   slides[slideIndex - 1].className += " fade-in";


//   setTimeout(showSlides, 2000);
// }

// Каждый клик по кружку будет показывать соответствующий слайд
// let dots = document.getElementsByClassName("dot");
// for (let i = 0; i < dots.length; i++) {
//   dots[i].onclick = function () {
//     slideIndex = i;
//     showSlides();
//   }
// }

