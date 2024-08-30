<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useLoggedInUserStore, useLogOutUser } from './stores/userStore'
import { computed, ref } from 'vue'

const userStore = useLoggedInUserStore()
const router = useRouter()

let userId = computed(() => userStore.getLoggedInUser.id)

const navigateToLoginSite = () => {
  router.push('/login')
}

const handleSelection = (event: any) => {
  const selectedValue = event.target.value
  if (selectedValue === 'logOut') {
    console.log('Első: ', userId.value)
    useLogOutUser()
    navigateToLoginSite()
    console.log('Második: ', userId.value)
  } else if (selectedValue === 'myDashboard') {
    router.push('/dashboard')
  }
}
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="./assets/img/kesz_resized.png" alt="" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
            <RouterLink to="/aboutus" class="nav-link">Rólunk</RouterLink>
          </li>
          <li class="nav-item">
            <a href="/contact" class="nav-link">Kapcsolat</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/login" class="btn btn-outline-warning">Bejelentkezés</RouterLink>
          </li>
        </ul>
        <ul v-if="userId != 0" class="navbar-nav ms-auto">
          <select class="form-select" name="" id="" @change="handleSelection">
            <option value="valasszon">Válasszon a lehetőségek közül...</option>
            <option value="myDashboard">Fiókom</option>
            <option value="logOut">Kijelentkezés</option>
          </select>
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
  background-color: #191814f9;
  border-top: 2px solid #f5cd7e;
  border-bottom: 2px solid #f5cd7e;
  padding: 0;
}

.navbar-nav > li > a {
  color: #f5cd7e;
  font-family: 'Playfair Display', serif;
}

.navbar-nav > li > a:hover {
  color: white;
}
.navbar-nav > li > .nav-link.router-link-active {
  color: #f5cd7e;
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
</style>
