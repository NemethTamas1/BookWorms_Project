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
        <div class="col-4 col-md-4 elso_col d-none d-lg-block">
          <div class="headerText">
            <!--  -->
          </div>
        </div>
        <!-- Második oszlop (szöveg, gombok) -->
        <div class="col-8 col-md-8 masodik_col">
          <div class="col jobbSzovegEgy">
            <h1>Üdvözöljük Könyvesboltunkban!</h1>
          </div>
          <div class="col jobbSzovegKetto">
            <p>
              Tegyen egy könnyed virtuális sétát különleges könyveink között és regisztráljon előre!
              A regisztrált és visszaigazolást nyert érdeklődőink mindegyike valós és szenvedélyes
              gyűjtöket jelent az aukcióinkon. A licitálásra ugyanis regisztráció szükséges nálunk
              az Ön által kiválasztott könyvre.
            </p>
          </div>
          <div class="col jobbSzovegHarom">
            <p>Kérjük regisztráljon vagy jelentkezzen be!</p>
          </div>
          <div class="row jobbGombok">
            <div class="col-6 my-1">
              <RouterLink to="/login" class="btn btn-outline-warning ketFoGomb"
                >Bejelentkezés</RouterLink
              >
            </div>
            <div class="col-6 my-1" >
              <RouterLink to="/registration" class="btn btn-outline-warning ketFoGomb"
                >Regisztráció</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!--Style-->
<style scoped>
section {
  border-top: 0.8rem solid rgba(0, 59, 34, 0.6);
  border-bottom: 0.8rem solid rgba(0, 59, 34, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100% - 145px);
  margin-left: 145px;
  color: aliceblue;
  background-image: 
    url('https://kephost.net/p/MTQxMDk2NA.png') , /* PNG kép a legfelső réteg */
    linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%); /* Színátmenet az alsó réteg */
  
  background-position: center; /* Igazítás középre */
  background-size: cover; /* Teljes méretben fedi a szülő elemet */
  background-repeat: no-repeat; /* Ne ismétlődjön */
  color: aliceblue;}


  #aliz::before {
  z-index: 1; /* A kép legyen a színátmenet fölött, de a tartalom mögött */
}


#fullContainer {
  border-radius: 2rem;
  background-color: rgba(34, 23, 3, 0.75);
  border: 10px double rgba(246, 212, 117, 0.6);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: auto;
  
}

.elso_col {
  background-image: url(https://kephost.net/p/MTQxMDkzNg.webp);
  border-radius: 1.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.row {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.masodik_col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.jobbSzovegEgy,
.jobbSzovegKetto,
.jobbSzovegHarom,
.jobbSzovegNegy {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
}

h1 {
  text-align: center;
}
p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
  padding: 1rem;
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

.btn {
  background-color: #f6d185;
  border: 3px solid #58490c;
  align-items: center;
  font-weight: bold;
  color: rgb(84, 62, 1);
}

.btn:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
}

@media (max-width: 992px) {
  section {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }

  #fullContainer {
    height: auto;
    padding: 1rem;
  }
  .masodik_col {
    width: auto;
    height: auto;
    padding: 3rem;
    border: none;
    box-shadow: none;
  }
}
</style>
