<script setup lang="ts">
import { onMounted } from 'vue'

// NINCS LIMITÁLVA A LEFUTÁSA
onMounted(() => {
  setTimeout(() => {
    const element = document.getElementById('welcome_container')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 3000)
})
</script>

<template>
  <section id="Udvozlo">
    <div class="container" id="fullContainer">
      <div class="row">
        <div class="elso_col col-12 col-md-5 d-none d-lg-block">
          <!-- a kép van itt -->
        </div>
        <!-- Második oszlop (szöveg, gombok) -->
        <div class="masodik_col col-12 col-md-5">
          <div class="row udvozlo">
            <h1>Üdvözöljük Könyvesboltunkban!</h1>
          </div>
          <div class="row bekezdes">
            <p>
              Tegyen egy könnyed virtuális sétát különleges könyveink között és regisztráljon előre!
              A regisztrált és visszaigazolást nyert érdeklődőink mindegyike valós és szenvedélyes
              gyűjtöket jelent az aukcióinkon. A licitálásra ugyanis regisztráció szükséges nálunk
              az Ön által kiválasztott könyvre.
            </p>
          </div>
          <p class="mt-3"><b><i>Kérjük jelentkezzen be!</i> </b></p>
          <div class="row jobbGombok">
            <div class="col">
              <RouterLink to="/login" class="btn btn-outline-warning bejelentkezes_gomb"
                >Bejelentkezés</RouterLink
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100% - 145px);
  margin-left: 145px;
  background-image: url('https://kephost.net/p/MTQxMDk2NA.png'),
    linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%); /* Színátmenet az alsó réteg */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: aliceblue;
  font-size: 20px;
}

#fullContainer {
  border-radius: 2rem;
  padding: 4rem;
  background-color: rgba(34, 23, 3, 0.75);
  border: 10px double rgba(246, 212, 117, 0.6);
}

.elso_col {
  background-image: url(https://kephost.net/p/MTQxMDkzNg.webp);
  border-radius: 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  min-width: 50%;

}

.row {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.masodik_col {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  min-width: 45%;
  height: 100%;

}
h1 {
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.3;
}
p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
  line-height: 2;
  text-align: justify;
  margin: auto;
  padding: auto;
}
.bejelentkezes_gomb {
  margin: 0.5rem 0;
  background-color: #f5cd7e;
  font-size: 1.3rem;
  height: 4rem;
  width: fit-content;
  border-radius: 1rem;
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
    margin: 1rem;
    padding: 1rem;
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
    padding: 1.5rem;
    border: none;
    box-shadow: none;
  }
  .bekezdes{
    margin-bottom: 2rem;
  }
}
</style>
