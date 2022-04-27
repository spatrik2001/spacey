<template>
  <div class="app">
    <nav class="navbar navbar-light navbar-expand-lg bg-faded justify-content-center shadow">
      <div class="container">
        <a href="/" class="navbar-brand">
          <img class="d-inline-block align-text-top" src="./assets/img/logo.png" alt="" width="85">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="nav navbar-nav w-100">
              <li class="nav-item">
                <a href="/products" class="nav-link <%= path === '/products' ? 'active' : '' %>">Termékek</a>
              </li>
              <li class="nav-item">
                <a href="/about" class="nav-link <%= path === '/about' ? 'active' : '' %>">Rólunk</a>
              </li>
              <li class="nav-item">
                <a href="/contact" class="nav-link <%= path === '/contact' ? 'active' : '' %>">Kapcsolat</a>
              </li>
            </ul>
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
              <!-- <% if (isAuthenticated) { %> -->
              <li class="nav-item">
                <a href="/cart" class="nav-link <%= path === '/cart' ? 'active': '' %>">
                  <i class="fas fa-rocket icon"></i>
                </a> 
              </li>
              <!-- <% } %> -->
              <li class="nav-item dropdown">
                <a href="#" class="nav-link" id="navbarSupportedContent" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-id-card-alt icon"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarSupportedContent">
                  <!-- <% if (isAuthenticated) { %> -->
                  <li class="nav-item">
                    <a href="/orders" class="nav-link <%= path === '/orders' ? 'active' : '' %>">Rendelések</a> 
                  </li>
                  <li class="nav-item">
                    <a href="/admin/products" class="nav-link <%= path === '/admin/products' ? 'active' : '' %>">Admin</a>
                  </li>
                  <li class="nav-item">
                      <button class="gomb" @click="logout">Kijelentkezés</button>
                  </li>
                <!-- <% } %>
                <% if (!isAuthenticated) { %> -->
                <li class="nav-item">
                  <a href="/login" class="nav-link <%= path === '/login' ? 'active' : '' %>">Bejelentkezés</a> 
                </li>
                <li class="nav-item">
                  <a href="/signup" class="nav-link <%= path === '/signup' ? 'active' : '' %>">Regisztráció</a>
                </li>
                <!-- <% } %>     -->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
    <footer-component class="mt-auto"/>
</template>

<style>
  html, body {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>

<script>
import FooterComponent from './components/FooterComponent.vue';
export default {
  components: {
    FooterComponent
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  }
}
</script>