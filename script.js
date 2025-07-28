<!-- FIXED, NAMESPACED, AND ISOLATED GALLERY BLOCK -->
<section id="galeria">
  <h2><u>Galeria de Imagens</u></h2>
  <div class="site-container">
    <div id="image-gallery-placeholder" class="gallery-placeholder">

      <!-- Swiper container with namespaced class -->
      <div class="my-gallery-swiper swiper">
        <div class="swiper-wrapper">
          <!-- Example: Repeat from FG1 to FG38 -->
          <div class="swiper-slide"><img src="FG1.jpg" alt="FG1" /></div>
          <div class="swiper-slide"><img src="FG2.jpg" alt="FG2" /></div>
          <!-- ... up to FG38.jpg -->
          <div class="swiper-slide"><img src="FG38.jpg" alt="FG38" /></div>
        </div>
        <!-- Dots + Exit Area -->
        <div class="swiper-pagination" id="close-gallery-area"></div>
      </div>

      <p class="tap-hint">Toque para abrir</p>
    </div>
  </div>
</section>

<!-- CSS: Namespaced and Isolated Styles -->
<style>
  .gallery-placeholder {
    width: 850px;
    height: 567px;
    margin: 2em auto;
    position: relative;
    border: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: flex-end; /* Position slides at base */
    overflow: hidden;
  }

  .gallery-placeholder .swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .gallery-placeholder .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .gallery-placeholder img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .gallery-placeholder .swiper-pagination {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px;
    background-color: rgba(255,255,255,0.8);
    z-index: 10;
  }

  .tap-hint {
    text-align: center;
    font-size: 1em;
    margin-top: 0.5em;
  }
</style>

<!-- JS: Updated to match Swiper v11 and isolation -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  let swiper;

  const placeholder = document.getElementById('image-gallery-placeholder');
  const tapHint = document.querySelector('.tap-hint');
  const closeArea = document.getElementById('close-gallery-area');

  function initGallery() {
    swiper = new Swiper('.my-gallery-swiper', {
      direction: 'horizontal',
      loop: false,
      zoom: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      touchStartPreventDefault: false,
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
