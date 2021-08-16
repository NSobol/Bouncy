"use strict"
const sliders = document.querySelectorAll(".blog-item");
const dots = document.querySelectorAll(".bullet2");
let dotsArray = Array.from(dots);
let slider = Array.from(sliders);
let slideIndex = slider.findIndex(elem => elem.classList.contains("blog-item-active"));
dotsArray[slideIndex].classList.toggle("bullet2-dot-active");

function getRotator(slideIndex) {
    slider[slideIndex].classList.toggle("blog-item-active");
    dotsArray[slideIndex].classList.toggle("bullet2-dot-active");
}

function getSlider(slideIndex) {
    getRotator(index);
    index = index === arrayRorators.length - 1 ? 0 : index + 1;
    getRotator(index);
}

setInterval(getSlider, 2000);
