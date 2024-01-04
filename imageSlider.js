let slideIndex = 0;
const slides = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const slideRight = () => {
    slideIndex++;
    if (slideIndex === slides.length) {
        slideIndex = 0;
    }
    document.querySelector(".container").style.backgroundImage = `url(${slides[slideIndex]})`;
}

const slideLeft = () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    document.querySelector(".container").style.backgroundImage = `url(${slides[slideIndex]})`;
}

document.querySelector(".btnRight").addEventListener("click", slideRight);
document.querySelector(".btnLeft").addEventListener("click", slideLeft);