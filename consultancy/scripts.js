document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');

    function nextSlide() {
        slides.style.transition = 'transform 1s ease-in-out';
        slides.style.transform = 'translateX(-100%)';
        setTimeout(() => {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        slides.appendChild(slides.firstElementChild);
        }, 1000);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
    });
    document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider1');
    const slides = document.querySelector('.slides1');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const slideWidth = document.querySelector('.slide').offsetWidth;

    function nextSlide() {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${slideWidth}px)`;
        setTimeout(() => {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        slides.appendChild(slides.firstElementChild);
        }, 500);
    }

    function prevSlide() {
        slides.style.transition = 'none';
        slides.insertBefore(slides.lastElementChild, slides.firstElementChild);
        slides.style.transform = `translateX(-${slideWidth}px)`;
        setTimeout(() => {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = 'translateX(0)';
        }, 50);
    }

    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);
    });

    function toggleAnswer(questionNumber) {
    const answer = document.getElementById(`answer${questionNumber}`);

    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}