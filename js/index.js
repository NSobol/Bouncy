"use strict"
const sliders = document.querySelectorAll(".blog-item");
const dots = document.querySelectorAll(".bullet2");
let dotsArray = Array.from(dots);
let slider = Array.from(sliders);
let slideIndex = slider.findIndex(elem => elem.classList.contains("blog-item-active"));
dotsArray[slideIndex].classList.toggle("bullet2-dot-active");

function getRotator(num) {
    slider[num].classList.toggle("blog-item-active");
    dotsArray[num].classList.toggle("bullet2-dot-active");
}

for (let i = 0; i < dotsArray.length; i++) {
    dotsArray[i].onclick = function () {
        getRotator(i);
        slideIndex = slider.findIndex(elem => elem.classList.contains("blog-item-active"));
        getRotator(slideIndex);
    }
}

function autoSlider() {
    getRotator(slideIndex);
    slideIndex = slideIndex === slider.length - 1 ? 0 : slideIndex + 1;
    getRotator(slideIndex);
}
setInterval(autoSlider, 3000);
