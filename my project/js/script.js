// Change Navbar Background on Scroll
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.main-header');
  if (!header) return;                     

  const changePoint = 80;                 

  window.addEventListener('scroll', function () {
    if (window.scrollY > changePoint) {
      header.classList.add('main-header--scrolled');
    } else {
      header.classList.remove('main-header--scrolled');
    }
  });
});

// Hero Slider

const slides = document.querySelectorAll('.hero-slide');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
showSlide(current);
setInterval(nextSlide, 3000);

// Testimonial Slider
const tSlides = document.querySelectorAll('.testimonial-slide');
const tDots = document.querySelectorAll('.dot');
let tCurrent = 0;

function showTestimonial(index) {
  tSlides.forEach(slide => {
    slide.classList.remove('active');
    slide.style.animation = 'none';
    void slide.offsetWidth;
    slide.style.animation = '';
  });
  tDots.forEach(dot => dot.classList.remove('dot--active'));
  tSlides[index].classList.add('active');
  tDots[index].classList.add('dot--active');
}

function nextTestimonial() {
  tCurrent = (tCurrent + 1) % tSlides.length;
  showTestimonial(tCurrent);
}

showTestimonial(tCurrent);
setInterval(nextTestimonial, 3000);









