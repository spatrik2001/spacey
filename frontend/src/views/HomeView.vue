<template>
  <div class="home">
    <div class="container pt-3">
      <div id="spaceyCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#spaceyCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#spaceyCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#spaceyCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner shadow">
          <div class="carousel-item active" data-bs-interval="5000">
            <img src="../assets/img/space.jpg" class="d-block kepsor w-100">
            <div class="carousel-caption d-none d-md-block">
              <h5>Megnyílt webáruházunk!</h5>
              <p>Megnyitottunk és akciókkal várjuk a vásárlókat!</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src="../assets/img/space.jpg" class="d-block kepsor w-100">
            <div class="carousel-caption d-none d-md-block">
              <h5>Instagram</h5>
              <p>Kövess minket Instagramon is!</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src="../assets/img/space.jpg" class="d-block kepsor w-100">
            <div class="carousel-caption d-none d-md-block">
              <h5>Facebook</h5>
              <p>Csípd el legújabb híreinket Facebook oldalunkon!</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#spaceyCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#spaceyCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <h2 class="text-center py-4">Új termékeink</h2>
    <new-products/>
  </div>
</template>

<script>
import NewProducts from '../components/NewProducts.vue';

export default {
  name: 'HomeView',
  components: { NewProducts },
  created() {
    document.title = 'SpaceY · Főoldal';
  }
}
</script>
