<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// NINCS LIMITÁLVA A LEFUTÁSA
onMounted(() => {
  setTimeout(() => {
    const element = document.getElementById('welcome_container')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 3000)
})
// 'LEUGRÁS VÉGE' \\

// LAP TETEJÉRE GOMB \\
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Finom görgetés az oldal tetejére
  })
}

const handleScroll = () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn')
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn!.style.display = 'block'
  } else {
    scrollToTopBtn!.style.display = 'none'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
// LAP TETEJÉRE GOMB \\
</script>

<template>
  <section id="aliz">
    <div class="container" id="fullContainer">
      <div class="row">
        <!-- elso -->
        <div class="col-12 col-l-6 col-xl-6 elso_col">
          <div class="headerText">
            <h1>BookWorms</h1>
            <h3>Ahol a motiváció és az irodalom kéz a kézben jár</h3>
          </div>
        </div>

        <!-- masodik -->
        <div class="col-12 col-l-6 col-xl-6 masodik_col">
          <div class="col jobbSzovegEgy">
            <h3>Üdvözöljük Könyvesboltunkban!</h3>
          </div>
          <div class="col jobbSzovegKetto">
            <h4>Licitálni szeretne könyveinkre?</h4>
          </div>
          <div class="col jobbSzovegHarom">
            <h6>Regisztráljon vagy jelentkezzen be!</h6>
          </div>
          <div class="col jobbGombok">
            <RouterLink to="/login" class="btn btn-outline-warning ketFoGomb"
              >Bejelentkezés</RouterLink
            >
            <RouterLink to="/registration" class="btn btn-outline-warning ketFoGomb"
              >Regisztráció</RouterLink
            >
          </div>
          <div class="col jobbSzovegNegy">
            <a href="/books">Lássuk egyből a könyveket!</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!--Style-->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

section{
  margin-left: 145px;
  height: 100vh;
  width: calc(100% - 145px);
  background-image: url(https://kephost.net/p/MTM5NDU2Mw.png);
  font-family: 'Playfair Display SC', serif;
  color: aliceblue;
}
#fullContainer {
  display: flex;
  background-color: #f5cd7e;

}

.elso_col {
  padding-top: 10vh;
  background: url(https://niche-canada.org/wp-content/uploads/2009/02/rey-seven-_nm_mZ4Cs2I-unsplash.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow:
    rgba(81, 50, 26, 0.728) 0px 1px 3px,
    rgba(75, 35, 2, 0.678) 0px 1px 2px;
}
.elso_col:hover {
  opacity: 1;
  text-shadow: none;
  box-shadow: none;
  filter: brightness(110%);
}
.row{
  margin:0;
  padding:0;
}

.headerText {
  font-style: italic;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 2px #191416;
}

.masodik_col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1rem solid whitesmoke;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.jobbSzovegEgy {
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 0;
}
.jobbSzovegKetto,
.jobbSzovegNegy {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.jobbSzovegHarom {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-style: italic;
}
.jobbSzovegNegy {
  font-size: 1rem;
}
.jobbSzovegNegy > a {
  text-decoration: none;
  font-style: italic;
  color: aliceblue;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(230, 192, 41);
}
.jobbSzovegNegy > a:hover {
  color: rgb(201, 161, 5);
  font-weight: bold;
}
.ketFoGomb {
  margin-bottom: 1.5rem;
  background-color: #f5cd7e;
  font-size: 1.3rem;
  height: 4rem;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-content: center;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
.ketFoGomb:hover {
  background-color: #f8d985;
  border: 2px solid #f6ba14;
}

.btn {
  align-items: center;
}

h2 {
  font-family: 'Playfair Display SC', serif;
  text-align: center;
  font-style: italic;
}

p {
  text-align: justify;
}

.btn {
  background-color: #dcb750cf;
  color: black;
}

@media only screen and (max-width: 768px) {
  .elso_col {
    height: 40vh;
  }
  .masodik_col {
    width: 100vh;
  }
  .headerText h1 {
    font-size: 2rem;
  }
  .headerText h3 {
    font-size: 1rem;
  }
  .jobbSzovegEgy h3 {
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-size: 1rem;
  }
  .jobbSzovegKetto h4 {
    font-size: 0.8rem;
    padding-bottom: 1rem;
  }
  .jobbSzovegHarom h6 {
    font-size: 0.6rem;
    padding-bottom: 1rem;
  }
  .jobbGombok .ketFoGomb {
    font-size: 1rem;
    height: 2.5rem;
  }
  .jobbSzovegNegy a {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
}
@media only screen and (min-width: 769px) {
  .elso_col {
    height: 75vh;
    background-size: cover;
  }
  .headerText h1 {
    font-size: 3rem;
  }
  .headerText h3 {
    font-size: 1rem;
  }
  .jobbSzovegEgy h3 {
    padding-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }
  .jobbSzovegKetto h4 {
    font-size: 1.3rem;
    padding-bottom: 1rem;
    text-align: center;
  }
}

@media only screen and (min-width: 993px) {
  .elso_col {
    height: 80vh;
  }
}
</style>
