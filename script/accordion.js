const accordionItems = document.querySelectorAll('.services-accordion');

accordionItems.forEach((item) => {
  const headerQ = item.querySelector('.accordion');
  const content = item.querySelector('.services-panel');
  const accArr = item.querySelector('.accordion-arrow')
  const accImg = item.querySelector('img')


  headerQ.addEventListener('click', () => {
    accordionItems.forEach((otherItem) => {

      if (otherItem !== item) {
        content.classList.remove('open');
        content.classList.add('collapsed');
        otherItem.classList.remove('accordion-active');
      }
    });
    headerQ.classList.toggle('accordion-active');
    accArr.classList.toggle("accordion-arrow_open");

    if (content.style.visibility === "visible") {
      content.style.visibility = "hidden";
      content.classList.add('collapsed');
      accImg.src = "/img/Arrow.svg";
    } else {
      content.classList.add('open');
      content.classList.remove('collapsed');
      content.style.visibility = "visible";
      accImg.src = "/img/Arrow_down.svg";
    }
  });

  document.addEventListener('click', (event) => {
    if (!item.contains(event.target)) {
      content.classList.remove('open');
      content.classList.add('collapsed');
      headerQ.classList.remove('accordion-active');
      accArr.classList.remove("accordion-arrow_open")
      content.style.visibility = "hidden";
      accImg.src = "/img/Arrow.svg"
    }
  });
});





// const accordionItems = document.querySelectorAll('.services-accordion');

// accordionItems.forEach((item) => {
//   const headerQ = item.querySelector('.accordion');
//   const content = item.querySelector('.services-panel');
//   const accArr = item.querySelector('.accordion-arrow')
//   const accImg = item.querySelector('img')


//   headerQ.addEventListener('click', () => {
//     accordionItems.forEach((otherItem) => {

//       if (otherItem !== item) {
//         content.classList.remove('open');
//         otherItem.classList.remove('accordion-active');
//       }
//     });
//     headerQ.classList.toggle('accordion-active');
//     accArr.classList.toggle("accordion-arrow_open")
//     if (content.style.display === "block") {
//       content.style.display = "none";
//       accImg.src = "/img/Arrow.svg"
//     } else {
//       content.classList.add('open');
//       content.style.display = "block";
//       accImg.src = "/img/Arrow_down.svg"
//     }
//   });

//   document.addEventListener('click', (event) => {
//     if (!item.contains(event.target)) {
//       content.classList.remove('open');
//       headerQ.classList.remove('accordion-active');
//       accArr.classList.remove("accordion-arrow_open")
//       content.style.display = "none";
//       accImg.src = "/img/Arrow.svg"
//     }
//   });
// });


// headerQ.addEventListener('click', () => {
//   accordionItems.forEach((otherItem) => {
//     if (otherItem !== item) {
//       otherItem.classList.remove('accordion-arrow');
//       otherItem.querySelector('.services-panel').classList.remove('open');
//     }
//   });

//   headerQ.classList.toggle('accordion-arrow');
//   accArr.classList.toggle("accordion-arrow_open")

//   const content = item.querySelector('.services-panel');
//   if (content.classList.contains('open')) {
//     content.classList.remove('open');
//     accImg.src = "/img/Arrow.svg";
//   } else {
//     content.classList.add('open');
//     accImg.src = "/img/Arrow_down.svg";
//   }

//   document.addEventListener('click', (event) => {
//     if (!item.contains(event.target)) {
//       headerQ.classList.remove('accordion-active');
//       accArr.classList.remove("accordion-arrow_open")
//       content.style.display = "none";
//       accImg.src = "/img/Arrow.svg"
//     }
//   });
// });
// });


// const acc = document.getElementsByClassName("accordion");
// const groo = document.querySelectorAll('.grooming-accordion_panel')
// // let i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("accordion-active");
//         const accArr = this.querySelector('.accordion-arrow')
//         accArr.classList.toggle("accordion-arrow_open")
//         const accImg = this.querySelector('img')
//         const panel = this.nextElementSibling;

//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//             accImg.src = "/img/Arrow.svg"
//         } else {
//             panel.style.display = "block";
//             accImg.src = "/img/Arrow_down.svg"
//         }
//     });
// }




// const accordionItems = document.querySelectorAll('.services-accordion');

// accordionItems.forEach((item) => {
//   const header = item.querySelector('.accordion');
//   const content = item.querySelector('.services-panel');

//   header.addEventListener('click', () => {
//     accordionItems.forEach((otherItem) => {
//       if (otherItem !== item) {
//         otherItem.classList.remove('accordion-active');
//       }
//     });

//     item.classList.toggle('accordion-active');
//   });

//   document.addEventListener('click', (event) => {
//     if (!item.contains(event.target)) {
//       item.classList.remove('accordion-active');
//     }
//   });
// });



















