<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  new window.WOW().init()
})
</script>

<template>
  <!-- Ikonoknak -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
  <!-- Ikonoknak -->

  <!-- About Start -->
  <section id="section-2">
    <div class="container" id="elso_resz_fodiv">
      <div class="row">
        <div class="col-lg-4">
          <div class="row about-img ">
            <div class="col-12">
              <img
                src="https://insideoutgroup.com.au/wp-content/uploads/2023/05/impediments-business-growth-harmonypsa-2.jpg"
                class="img-fluid w-100 rounded-top d-none d-lg-block"
                alt="Image"
              />
            </div>
          </div>
          <div class="row about-img">
            <div class="col-12">
              <img
                src="https://www.shutterstock.com/image-photo/businessman-analyzes-profitability-working-companies-600nw-2273999575.jpg"
                class="img-fluid w-100 rounded-bottom"
                alt="Image"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div>
            <div class="row">
              <div class="col-10 m-auto text-center">
                <h1>Ahogy a könyveink, mi sem vagyunk egyformák.</h1>
              </div>
            </div>
            <div class="row">
              <div class="col m-auto mx-3">
                <p>
                  Egy dolgoban viszont egészen biztos. A <strong>BookWorms</strong>-nál
                  meggyőződésünk, hogy minden könyvnek megvan az ereje, hogy megváltoztassa az
                  életét. Inspirálja az elmét, és új világokba repítse az olvasót eszmei értékén túl
                  is. Legyen szó a régóta vágyott több száz éves könyvéről, vagy egy időtlen
                  klasszikusról, akár valami teljesen egyedülállóról.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col mx-5" id="idezet_behuzas">
                Gondosan válogatott és ellenőrzött kínálatunkban minden műgyűjtő megtalálhatja a
                számára megfelelő könyvet.
              </div>
            </div>
            <div class="row">
              <div class="col m-auto mx-3">
                <p>
                  Küldetésünk, hogy ezen ritka könyvek olyan gazdára lelhessenek, akik külső és
                  belső értéküket is egyaránt becsülik. Mindemellé páratlan vásárlási élményt
                  nyújtunk az Ön biztonságát és kényelmét előtérbe helyezve. Így nyújtunk otthonából
                  egy olyan széles és elérhető könyvválasztékot, mely akár még
                  Alexandriában sem volt megtalálható.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <a href="./" class="btn rounded-pill py-3 px-5">Fedezze fel!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Section2'
}
</script>

<style scoped>
section {
  border-bottom: 0.8rem solid rgba(0, 59, 34, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: calc(100% - 145px);
  margin-left: 145px;
  background-image:
    url('https://kephost.net/p/MTQxMDk2NA.png'),
      linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  background-position: center;
  background-size: cover; 
  background-repeat: no-repeat; 
  color: aliceblue;
}

.about-img img {
  width: 100%;
  height: auto; /* Automatikus magasság a reszponzív megjelenéshez */
  margin: 1rem 0;
  border-radius: 5px;
}
#idezet_behuzas {
  background-color: rgba(255, 217, 0, 0.3);
  padding: 20px;
  border-left: 5px solid rgb(255, 174, 0);
  text-align: justify;
  font-size: larger;
  margin-bottom: 1rem;
}

.container {
  width: 70%;
  font-weight: 600;
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

.btn {
  background-color: #f6d185;
  border: 3px solid #58490c;
  font-weight: bold;
  color: rgb(84, 62, 1);
  align-items: center;
}

.btn:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
}

/* Média lekérdezések hozzáadása a reszponzív megjelenéshez */

@media (max-width: 992px) {
  section {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .about-img img {
    margin: 0;
    padding: 0;
    border-radius: 0;
  }

  #idezet_behuzas {
    margin-left: 10px;
    font-size: medium;
  }

  .btn {
    padding: 0.5rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  section {
    flex-direction: column;
    padding: 0;
    margin-left: 0;
  }

  .about-img img {
    width: 50%;
    margin: 0;
  }

  .btn {
    padding: 0.5rem 1.5rem;
  }
}

@media (max-width: 576px) {
  #idezet_behuzas {
    font-size: small;
    margin-left: 0;
  }

  h1 {
    font-size: 1.5rem;
  }

  .btn {
    width: 100%;
    padding: 0.5rem;
  }

  section {
    padding: 0;
  }
}
</style>
