const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
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
        }
    });
}




