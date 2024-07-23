<script setup lang="ts">
import { RouterView } from 'vue-router'
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
            <a class="nav-link" aria-current="page" href="#">Main</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.navbar {
  background-color: #191416;
  border-top: 2px solid #F5CD7E;
  border-bottom: 2px solid #F5CD7E;
  padding: 0;
}

/* .navbar-brand>img {
  width: 25%;
} */

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
