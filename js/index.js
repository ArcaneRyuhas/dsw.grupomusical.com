let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function changeSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 5000);
}

autoSlide();
