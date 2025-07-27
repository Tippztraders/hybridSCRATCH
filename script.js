<!-- Include Swiper libraries -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
  let swiper;

  const placeholder = document.getElementById('image-gallery-placeholder');
  const tapHint = document.querySelector('.tap-hint');
  const closeArea = document.getElementById('close-gallery-area');

  function initGallery() {
    swiper = new Swiper('.gallery-swiper', {
      direction: 'horizontal',
      loop: false,
      zoom: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      touchStartPreventDefault: false
    });
  }

  // Open gallery on tap
  placeholder.addEventListener('click', function (e) {
    if (!swiper) {
      initGallery();
      placeholder.classList.add('active');
      tapHint.style.display = 'none';
    }
  });

  // Exit gallery when tapping on pagination area
  closeArea.addEventListener('click', function () {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
      tapHint.style.display = 'block';
    }
  });
</script>
