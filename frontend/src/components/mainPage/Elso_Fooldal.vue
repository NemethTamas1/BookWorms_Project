
<template>
  <section class="section-1">
    <div class="container-fluid">
      <div class="row">
        <div class="col" id="keret">
          <div class="row">
            <h1>BookWorms</h1>
          </div>
          <div class="row">
            <h2>Ahol a motiváció és az irodalom kéz a kézben jár</h2>
          </div>

          <div class="row" id="gombok-keret">
            <div class="col">
              <a class="btn btn-info" @click="scrollToSection('Konyvvalaszto')">Könyveink</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import Konyvvalaszto from './Harmadik_Konyvvalaszto.vue'

export default {
  name: 'fooldal',
  components: {
    Konyvvalaszto,
  },
  methods: {
    scrollToSection(sectionId: string) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      } 
    }
  }
}
</script>


<style scoped>
h2 {
  margin: 0;
}
.section-1 {
  margin-left: 145px;
  height: 100vh;
  width: calc(100% - 145px);
  background-attachment: fixed;
  background-position: top;
  background-image: url('https://kephost.net/p/MTM2MDI1Ng.jpg');
  background-size: cover;
  position: relative;
}

#keret {
  color: #fdf6db;
  text-shadow: 5px 3px 3px rgba(105, 57, 2, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 85vh; /* Azért, hogy ne legyen annyira lent (kb felső 2/3-ban) */
}
#gombok-keret {
  margin-top: 1rem;
}

.btn {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f6d185;
  border: 3px solid #58490c;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(84, 62, 1);
  cursor: pointer;
  margin: 10px;
  border-radius: 1rem;
}

.btn:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
}

/* Telefonos nézetekhez */
@media (max-width: 992px) {
  .section-1 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-size: cover;
  }

  #keret {
    height: 60vh;
  }
}
</style>

<!-- Kanapé linkje: https://kephost.net/p/MTM2MDI1Ng.jpg -->
