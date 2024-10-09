<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  new window.WOW().init()
})
</script>

<template>
  <section id="kimutatas">
    <div class="container" id="elso_resz_fodiv">
      <!-- Első sor: Cím -->
      <div class="row">
        <div class="col-12 text-center mb-2">
          <h1>Ahogy a könyveink, mi sem vagyunk egyformák.</h1>
        </div>
      </div>

      <!-- Második sor: Első kép és első bekezdés -->
      <div class="row">
        <!-- Szöveg a jobb oldalon -->
        <div class="col-12 col-xl-6">
          <p>
            Egy dolgoban viszont egészen biztos. A <strong>BookWorms</strong>-nál meggyőződésünk,
            hogy minden könyvnek megvan az ereje, hogy megváltoztassa az életét. Inspirálja az
            elmét, és új világokba repítse az olvasót eszmei értékén túl is. Legyen szó a régóta
            vágyott több száz éves könyvéről, vagy egy időtlen klasszikusról, akár valami teljesen
            egyedülállóról.
          </p>
        </div>
        <!-- Kép a bal oldalon -->
        <div class="col-12 col-xl-6" id="elsokep">
          <!--  -->
        </div>
      </div>

      <!-- Harmadik sor: Második kép, sárga hátteres szöveg és gomb -->
      <div class="row">
        <!-- Második kép a bal oldalon -->
        <div class="col-12 col-xl-6" id="masodikkep">
          <!--  -->
        </div>
        <!-- Sárga hátteres szöveg és bekezdés + gomb a jobb oldalon -->
        <div class="col-12 col-xl-6">
          <div style="background-color: #f6d475" id="idezet_behuzas">
            Gondosan válogatott és ellenőrzött kínálatunkban minden műgyűjtő megtalálhatja a számára
            megfelelő könyvet.
          </div>
          <p>
            Küldetésünk, hogy ezen ritka könyvek olyan gazdára lelhessenek, akik külső és belső
            értéküket is egyaránt becsülik. Mindemellé páratlan vásárlási élményt nyújtunk az Ön
            biztonságát és kényelmét előtérbe helyezve. Így nyújtunk otthonából egy olyan széles és
            elérhető könyvválasztékot, mely akár még Alexandriában sem volt megtalálható.
          </p>
          <div class="row">
            <a href="./" class="btn rounded-pill mx-auto py-3 px-5">Fedezze fel!</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'kimutatas'
}
</script>

<style scoped>
#elsokep {
  background-image: url(https://insideoutgroup.com.au/wp-content/uploads/2023/05/impediments-business-growth-harmonypsa-2.jpg);
}
#masodikkep {
  background-image: url(https://www.shutterstock.com/image-photo/businessman-analyzes-profitability-working-companies-600nw-2273999575.jpg);
}
#elsokep,
#masodikkep {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
}
section {
  border-bottom: 0.8rem solid rgba(0, 59, 34, 0.6);
  min-height: 100vh;
  width: calc(100% - 145px);
  margin-left: 145px;
  background-image: url('https://kephost.net/p/MTQxMDk2NA.png'),
    linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: aliceblue;
  padding: 2rem; 
}
.about-img img {
  width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 5px;
}
#idezet_behuzas {
  color: #58490c;
  font-size: 22px;
  background-color: rgba(255, 217, 0, 0.3);
  padding: 20px;
  border-left: 5px solid rgb(255, 174, 0);
  text-align: justify;
  margin-bottom: 1rem;
}

.container {
  width: 100%;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 2rem;
  text-align: justify;
}

#elso_resz_fodiv {
  color: whitesmoke;
  background-color: rgba(34, 23, 3, 0.7);
  border: 1rem double rgba(246, 212, 117, 0.6);
  border-radius: 2rem;
  padding: 2rem;
}

.btn.rounded-pill {
  background-color: #f6d185;
  border: 3px solid #58490c;
  font-weight: bold;
  color: rgb(84, 62, 1);
  align-items: center;
  width: fit-content;
}

.btn.rounded-pill:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
  transition: 0.35s ease;
}
p {
  font-size: 24px;
  line-height: 2;
}
h1 {
  font-size: 3rem;
  margin: auto;
  color: rgb(255, 238, 197);
  line-height: 1.5;
  text-shadow: 3px 3px 3px rgba(188, 102, 3, 0.6);
}

/* Média lekérdezések hozzáadása a reszponzív megjelenéshez */
@media (max-width: 2000px) {
  #elsokep,
  #masodikkep {
    height: auto;
    max-height: 500px;
  }
}

@media (max-width: 992px) {
  section {
    margin: 0;
    padding: 2rem; /* Padding minden méretben */
    width: 100%;
  }

  .about-img img {
    margin: 0;
    padding: 0;
    border-radius: 0;
  }

  #idezet_behuzas {
    font-size: 22px;
    margin-bottom: 20px;
    padding: 15px 20px;
  }
  .btn {
    padding: 0.5rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }
  p{
    margin: 0;
    padding: 0;
  }
}

@media (max-width: 768px) {
  section {
    flex-direction: column;
    padding: 2rem;
    margin-left: 0;
  }

  .about-img img {
    width: 100%;
    margin: 0;
  }
  #idezet_behuzas{
    font-size: 20px;
  }

  .btn {
    padding: 0.5rem 1.5rem;
  }
}

@media (max-width: 576px) {
  section {
    flex-direction: column-reverse;
    padding: 2rem;
  }

  /* Csak a második kép maradjon meg telefonos nézetben */
  .col-md-6 img:first-child {
    display: none;
  }

  #elso_resz_fodiv {
    order: 2;
  }
  h1 {
    font-size: 1.3rem;
  }
  #idezet_behuzas {
    margin: auto;
    font-size: 20px;
    font-size: medium;
  }

  .btn {
    width: 100%;
    padding: 0.5rem;
  }
}
</style>
