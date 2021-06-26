

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
  console.log("im the issue!")
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  const currentDot = dotsNav.querySelector('.current-slide');
  if (currentDot.previousElementSibling) {
    prevDot = currentDot.previousElementSibling;
  }
  else {
    prevDot = dotsNav.lastElementChild;
  }
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
  // there is no currentDot
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
  // console.log("currentdot is: " + currentDot.outerHTML)
  // console.log("targetdot is: " + targetDot.outerHTML)
  var isFirst = false;
  if ($(".current-slide").is( ':first-child' )) {
      isFirst = true
  }
  currentDot.classList.remove('current-slide');
  if (currentDot.previousElementSibling || isFirst) {
    console.log('this logic is happening')
    targetDot.classList.add('current-slide');
  } else {
    console.log('second logic')
    dots[dots.length - 1].classList.add('current-slide');
  }
}

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  // if the dot and the currentslide is at 1, then if you click on any other dot, it goes to the zlide but it does not update the dot, updates it to the last dot
  const currentSlide = track.querySelector('.current');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  console.log(targetIndex)
  const targetSlide = slides_gallery[targetIndex];
  updateDots2(currentDot, targetDot);
  moveToSlide(track, currentSlide, targetSlide)
})

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
