<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { user } from './composables/auth/auth';

const router = useRouter();

const navigateToLoginSite = () => {
  router.push('/login');
}

const logout = () => {
  if(user.value?.status == 3){
    localStorage.removeItem('userToken')
    user.value = undefined
  }
  else{
    localStorage.removeItem('adminToken')
    user.value = undefined
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./assets/img/kesz_resized.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Főoldal</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/books" class="nav-link">Könyvek</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Rólunk</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Kapcsolat</RouterLink>
          </li>
        </ul>
        <ul v-if="user == undefined" class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/login" class="btn btn-outline-warning">Bejelentkezés</RouterLink>
          </li>
        </ul>
        <ul v-if="user != undefined" class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/login" class="btn btn-outline-warning" v-on:click="logout()">Kijelentkezés</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.navbar {
  background-color: #191416;
  border-top: 2px solid #F5CD7E;
  border-bottom: 2px solid #F5CD7E;
  padding: 0;
}

.navbar-nav>li>a {
  color: #F5CD7E;
  font-family: "Playfair Display", serif;
}

.navbar-nav>li>a:hover {
  color: white;
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
</style>
