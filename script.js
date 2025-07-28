<!-- Swiper CDN (include once in your project) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
  let myGallerySwiper;
  const thumbs = document.querySelectorAll('.thumb');
  const modal = document.getElementById('imageGalleryModal');

  thumbs.forEach((img, index) => {
    img.addEventListener('click', () => {
      modal.classList.remove('hidden');

      if (!myGallerySwiper) {
        myGallerySwiper = new Swiper('.safe-swiper', {
          initialSlide: index,
          zoom: true,
          loop: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      } else {
        myGallerySwiper.slideTo(index, 0);
      }
    });
  });

  function closeFullscreen() {
    modal.classList.add('hidden');
  }
</script>
