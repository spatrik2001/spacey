<template>
  <div class="about">
    <div class="p-5 text-center bg-image">
      <div class="container h-100">
          <div class="d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-10 text-center text-white">
                  <h1>Rólunk</h1>
                  <hr class="divider my-4">
                  <p class="font-weight-light mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nobis laboriosam, mollitia accusantium quam excepturi culpa quo quia officiis eum necessitatibus asperiores voluptatem minus ipsa expedita! Molestiae suscipit ad quis?</p>
                  <button type="button" class="btn btn-primary btn-lg">Lorem Ipsum</button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {},
  created() {
    document.title = 'SpaceY · Rólunk';
  }
}
</script>
