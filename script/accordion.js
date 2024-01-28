const acc = document.getElementsByClassName("accordion");
const groo = document.querySelectorAll('.grooming-accordion_panel')
// let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion-active");
        const accArr = this.querySelector('.accordion-arrow')
        accArr.classList.toggle("accordion-arrow_open")
        const accImg = this.querySelector('img')
        const panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {
            panel.style.display = "none";
            accImg.src="/img/Arrow.svg"
        } else {
            panel.style.display = "block";
            accImg.src="/img/Arrow_down.svg"

            if (i+1 === parseInt(select.value)) {
                panel.style.display = "block";
            } else {
                panel.style.display = "none";
            }
            
        }
    });
}

// function toggleAccordion(select) {
//     var panels = document.querySelectorAll(".accordion");
//     panels.forEach(function(panel, i) {
//       if (i+1 === parseInt(select.value)) {
//         panel.style.display = "block";
//         panel.classList.add('open');
//       } else {
//         panel.style.display = "none";
//         panel.classList.remove('open');
//       }
//     });
//   }
  
//   document.addEventListener('click', function (event) {
//     var target = event.target;
//     if (!target.closest('.accordion')) {
//       var openPanels = document.querySelectorAll('.services-panel');
//       openPanels.forEach(function(panel) {
//         panel.style.display = "none";
//         panel.classList.remove('open');
//       });
//     }
//   });



