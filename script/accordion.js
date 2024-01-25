const acc = document.getElementsByClassName("accordion");
const groo  =document.querySelectorAll('.grooming-accordion_panel')
console.log(groo);
let i;

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





