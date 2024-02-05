let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " dot_active";
  slides[slideIndex - 1].className += " fade-in";

 
  setTimeout(showSlides, 2000);
}

// Каждый клик по кружку будет показывать соответствующий слайд
let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {
    slideIndex = i;
    showSlides();
  }
}



// setTimeout(() => {
//   const qwe = document.querySelectorAll("slide").forEach.classList.remove("fade-out");
//   console.log(qwe);
//   this.classList.add("fade-in");

// }, 900);

// setTimeout(() => {
//   document.getElementsByClassName("slide").classList.remove("fade-in");
//   document.getElementsByClassName("slide").classList.add("fade-out");
// }, 900);