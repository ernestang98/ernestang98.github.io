const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 15000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  updateDots(currentDot, nextDot);
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  updateDots2(currentDot, prevDot);
  setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})





const track = document.querySelector('.Slider');
const slides_gallery = Array.from(track.children);
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current');
  targetSlide.classList.add('current');
}

const updateDots = (currentDot, targetDot) => {
  if (targetDot === currentDot) {
    return 0;
  }  else {
    currentDot.classList.remove('current-slide');
    if (currentDot.nextElementSibling) {
      targetDot.classList.add('current-slide');
    } else {
      dots[0].classList.add('current-slide');
    }
  }
}

const updateDots2 = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  if (currentDot.previousElementSibling) {
    targetDot.classList.add('current-slide');
  } else {
    dots[dots.length - 1].classList.add('current-slide');
  }
}

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = track.querySelector('.current');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides_gallery[targetIndex];
  updateDots2(currentDot, targetDot);
  moveToSlide(track, currentSlide, targetSlide)
})

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
