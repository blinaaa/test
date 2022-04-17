const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})

/////********************************************************************************************************************* */
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  const btn = document.getElementById('menu-btn')
  const nav = document.getElementById('menu')

  function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
  }

  btn.addEventListener('click', navToggle)

 // Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

  // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
 }