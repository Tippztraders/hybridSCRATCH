// Initialize Gallery Swiper
const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
  pagination: {
    el: '.gallery-swiper .swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  slidesPerView: 1,
});

// Video sources
const videoList = ['FGVIDS1.mp4']; // Add more if you want

// Insert videos into video swiper container
const videoContainer = document.getElementById('videos-container');
videoList.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<video src="${src}" controls muted playsinline></video>`;
  videoContainer.appendChild(slide);
});

// Initialize Video Swiper
const videoSwiper = new Swiper('.video-swiper', {
  loop: true,
  pagination: {
    el: '.video-swiper .swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  slidesPerView: 1,
});

// Initialize Hero Swiper (if you add a hero slider later)
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  pagination: {
    el: '.hero-swiper .swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});

// Enable fullscreen swipe gallery
const fullscreenWrapper = document.getElementById('fullscreenGallery');
const fullscreenSwiperContainer = document.querySelector('.fullscreen-swiper .swiper-wrapper');
const fullscreenSwiperPagination = document.querySelector('.fullscreen-swiper .swiper-pagination');

// Clear old slides if any
fullscreenSwiperContainer.innerHTML = '';

// Clone gallery slides into fullscreen swiper
document.querySelectorAll('.gallery-swiper .swiper-slide img').forEach((img, index) => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<img src="${img.src}" alt="Zoomed Image">`;
  fullscreenSwiperContainer.appendChild(slide);

  img.addEventListener('click', () => {
    fullscreenWrapper.style.display = 'flex';
    fullscreenSwiper.slideToLoop(index);
  });
});

// Initialize Fullscreen Swiper
const fullscreenSwiper = new Swiper('.fullscreen-swiper', {
  loop: true,
  pagination: {
    el: '.fullscreen-swiper .swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  slidesPerView: 1,
});

// Tap anywhere to exit fullscreen
fullscreenWrapper.addEventListener('click', () => {
  fullscreenWrapper.style.display = 'none';
});

// Wrap in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // your swiper and click initialization here
});

