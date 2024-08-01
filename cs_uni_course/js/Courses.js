let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

const slides = document.querySelectorAll('.course');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    const slideContainer = document.querySelector('.carousel-slide');
    slideContainer.style.transform = `translateX(${offset}%)`;
}

// Initialize the carousel
updateCarousel();

document.addEventListener("DOMContentLoaded", function() {
  const fadeInSection = document.querySelector('.fade-in-section');

  function checkVisibility() {
    const rect = fadeInSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      fadeInSection.classList.add('visible');
    }
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  checkVisibility(); // Initial check in case the section is already in view
});

