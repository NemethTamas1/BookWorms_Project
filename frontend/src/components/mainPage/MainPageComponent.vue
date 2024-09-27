<script lang="ts">
import { defineComponent } from 'vue'
import Section1 from './section1.vue'
import Section2 from './section2.vue'
import Section3 from './section3.vue'
import Section4 from './section4.vue'
import Section5 from './section5.vue'
import Aliz from './aliz.vue'
import section6 from './section6.vue'

export default defineComponent({
  name: 'MainPageComponent',
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Aliz,
    section6
  },
  methods: {
    scrollToSection(sectionId: string) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
})
</script>

<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
  <div>
    <!-- Bootstrap Navbar for Mobile View -->
    <nav class="navbar navbar-expand-lg d-lg-none sticky-top">
      <div class="container-fluid">
        <img src="https://kephost.net/p/MTM0ODc2NA.png" alt="" />
        <a class="navbar-brand" id="logoszoveg" href="#">BookWorms</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item" @click="scrollToSection('section1')">
              <a class="nav-link" aria-current="page" href="#">Főoldal</a>
            </li>
            <li class="nav-item" @click="scrollToSection('section2')">
              <a class="nav-link" href="#">Könyvek</a>
            </li>
            <li class="nav-item" @click="scrollToSection('section3')">
              <a class="nav-link" href="#">Rólunk</a>
            </li>
            <li class="nav-item" @click="scrollToSection('section4')">
              <a class="nav-link" href="#">Kapcsolat</a>
            </li>
            <li class="nav-item" @click="scrollToSection('section5')">
              <a class="nav-link" href="#">Bejelentkezés</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Sidebar Navbar for Larger Screens -->
    <div class="nav d-none d-lg-flex">
      <div class="nav-item fooldal_gomb" @click="scrollToSection('section1')">
        <i class="fas fa-home"></i>
        <span>Főoldal</span>
      </div>
      <div class="nav-item fooldal_gomb" @click="scrollToSection('section2')">
        <i class="fas fa-book"></i>
        <span>Könyvek</span>
      </div>
      <div class="nav-item fooldal_gomb" @click="scrollToSection('section3')">
        <i class="fas fa-info-circle"></i>
        <span>Rólunk</span>
      </div>
      <div class="nav-item fooldal_gomb" @click="scrollToSection('section4')">
        <i class="fa-solid fa-address-book"></i>
        <span>Kapcsolat</span>
      </div>
      <div class="nav-item fooldal_gomb" id="bejelentkezes" @click="scrollToSection('section5')">
        <i class="fas fa-sign-in-alt"></i>
        <span>Bejelentkezés</span>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="content">
      <section1 id="section1" />
      <aliz id="aliz" />
      <section3 id="section3" />
      <section2 id="section2" />
      <section6 id="section6"/>
      <section4 id="section4" />
      <section5 id="section5" />
    </div>
  </div>
</template>

<style>
/* Telefonos nézet optimalizálása */
@media (max-width: 992px) {
  .navbar-toggler {
    background: #f8d985;
    border-color: #f6ba14;
    border-width: 2px;
  }
  .navbar {
    background: linear-gradient(
      180deg,
      rgba(3, 26, 38, 1) 0%,
      rgba(22, 58, 78, 1) 50%,
      rgba(4, 28, 41, 1) 100%
    );
    border-bottom: 2px solid grey;
  }
  #logoszoveg {
    color: #efcf83;
    font-size: 35px;
    font-weight: 600;
    text-shadow: 2px 2px 2px rgba(188, 102, 3, 0.6);
  }
  /* Csökkentett távolság a menüpontok között */
  .navbar-nav .nav-item {
    margin: 0px;
    padding: 0;
  }

  .nav-item .nav-link {
    margin: 0;
    padding: 0;
    color: #efcf83;
    /* font-weight: bold; */
  }
  .nav-item .nav-link:hover {
    text-shadow: 2px 2px 2px rgba(188, 102, 3, 0.3);
  }
}
</style>

<!--  CSAK EZEN AZ OLDALON! -->
<style scoped>
/* Sidebar Navbar Styles for Larger Screens */

/* A TELJES NAVBAR-KERET: */
.nav {
  position: fixed;
  background: rgb(40, 45, 48);
  background: rgb(36, 38, 40);
  background: linear-gradient(
    180deg,
    rgba(36, 38, 40, 1) 0%,
    rgba(60, 60, 59, 1) 40%,
    rgba(112, 97, 78, 1) 70%,
    rgba(159, 132, 42, 0.8995973389355743) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 5px solid #cc9966;
  justify-content: center;
  height: 100vh;
  width: 145px; /* +5px jobbra a border miatt */
  padding: 0;
}
.fooldal_gomb {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 1rem;
  border-radius: 20%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: rgb(252, 249, 239);
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}
.nav-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 10px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.nav-item i {
  font-size: 26px;
  margin-bottom: 10px;
}

.nav-item span {
  font-size: 16px;
}
@media (min-width: 993px) {
  .nav-item:hover {
    background-color: rgba(29, 30, 0, 0.75);
    color: #fff;
  }
}
</style>