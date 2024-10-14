<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useLoggedInUserStore, useLogOutUser } from '@/stores/userStore';
import { computed, ref } from 'vue'

const userStore = useLoggedInUserStore()
const router = useRouter()

let userId = computed(() => userStore.getLoggedInUser.id)
let userStatus = computed(() => userStore.getLoggedInUser.status)

const navigateToLoginSite = () => {
  router.push('/login')
}

//Navbar összenyomása, amikor kikattintunk belőle
//Navbar összenyomása, amikor root-ot váltunk
let navBar = null;

document.addEventListener('click', (event: MouseEvent) => {
  navBar = document.getElementById('navbarNav');
  if (!navBar?.contains(event.target as Node) && navBar?.classList.contains('show')) {
    navBar?.classList.remove('show');
  }
});

// const closeNavBar = () => {
//   navBar = document.getElementById('navbarNav');
//   if (navBar?.classList.contains("show")) {
//     navBar?.classList.remove("show");
//   }
// };

router.afterEach(() => {
  navBar = document.getElementById('navbarNav');
  if (navBar?.classList.contains('show')) {
    navBar?.classList.remove('show');
  }
});



const handleSelection = (event: any) => {
  const selectedValue = event.target.value
  console.log(selectedValue)
  if (selectedValue === 'logOut') {
    console.log('Első: ', userId.value)
    useLogOutUser()
    navigateToLoginSite()
    console.log('Második: ', userId.value)
  } else if (selectedValue === 'myDashboard') {
    router.push('/dashboard')
  }
  else if (selectedValue === 'admin') {
    router.push('/admin')
  }
  else if (selectedValue === 'account') {
    router.push('/account')
  }
  else if (selectedValue === 'modifyBooks') {
    router.push('/modifyBooks')
  }
}
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg">
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
            <a href="/./#kapcsolat" class="nav-link">Kapcsolat</a>
          </li>
        </ul>
        <ul v-if="userId == 0" class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/login" class="btn btn-outline-warning">Bejelentkezés</RouterLink>
          </li>
        </ul>
        <ul v-if="userId != 0" class="navbar-nav ms-auto">
          <select class="form-select" name="" id="" @change="handleSelection">
            <option selected value="valasszon">Válasszon a lehetőségek közül...</option>
            <option v-if="userStatus == 3" value="admin">Admin oldal</option>
            <option v-if="userStatus == 3" value="modifyBooks">Könyvek módosítása</option>
            <option value="myDashboard">Jelentkezéseim</option>
            <option value="account">Fiókom</option>
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

<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;}


.navbar {
  background-color: #191416;
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