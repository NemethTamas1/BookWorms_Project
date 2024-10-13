<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  new window.WOW().init()
})
</script>

<template>
  <section id="kimutatas">
    <div class="container" id="fullContainer">
      <div class="row">
        <div class="col-12 text-center">
          <h1>Ahogy a könyveink, mi sem vagyunk egyformák.</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xl-6">
          <p>
            Egy dolgoban viszont egészen biztos. A <strong>BookWorms</strong>-nál meggyőződésünk,
            hogy minden könyvnek megvan az ereje, hogy megváltoztassa az életét. Inspirálja az
            elmét, és új világokba repítse az olvasót eszmei értékén túl is. Legyen szó a régóta
            vágyott több száz éves könyvéről, vagy egy időtlen klasszikusról, akár valami teljesen
            egyedülállóról.
          </p>
        </div>
        <div class="col col-lg-6" id="elsokep">
          <!--  -->
        </div>
      </div>
      <div class="row">
        <div class="col col-lg-6" id="masodikkep">
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
  margin-bottom: 1rem;
}
#masodikkep {
  background-image: url(https://www.shutterstock.com/image-photo/businessman-analyzes-profitability-working-companies-600nw-2273999575.jpg);
}
#elsokep,
#masodikkep {
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100% - 145px);
  margin-left: 145px;
  background-image: url('https://kephost.net/p/MTQxMDk2NA.png'),
    linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
}

#fullContainer {
  margin: auto;
  font-size: 20px;
  text-align: justify;
  color: whitesmoke;
  background-color: rgba(34, 23, 3, 0.7);
  border: 10px double rgba(246, 212, 117, 0.6);
  border-radius: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
}
#idezet_behuzas {
  color: #58490c;
  font-weight: bold;
  font-style: italic;
  background-color: rgba(255, 217, 0, 0.3);
  border-left: 8px solid rgb(255, 174, 0);
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
  line-height: 2;
}
h1 {
  margin: auto;

  color: rgb(255, 238, 197);
  text-shadow: 3px 3px 3px rgba(188, 102, 3, 0.6);
}
@media (max-width: 2000px) {
  #elsokep,
  #masodikkep {
    height: auto;
    max-height: 500px;
  }
}
@media (min-width: 993px) and (max-width: 2920px) {
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100% - 145px);
    margin-left: 145px;
    background-image: url('https://kephost.net/p/MTQxMDk2NA.png'),
      linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: whitesmoke;
  }
  #fullContainer {
    margin: auto;
    height: auto;
    font-size: 20px;
    text-align: justify;
    color: whitesmoke;
    background-color: rgba(34, 23, 3, 0.7);
    border-radius: 2rem;
    margin: 2rem;
    padding: 1rem 2rem;
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
    margin: auto;
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }
  p {
    margin: 0;
    padding: 0;
  }
}

@media (min-width: 1px) and (max-width: 992px) {
  #fullContainer {
    margin: 0;
    padding: 10px 20px;
    width: 100%;
  }
  section {
    margin-left: 0;
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    margin: 0;
  }
  #idezet_behuzas {
    font-size: 20px;
    margin-bottom: 20px;
    padding: 12px;
    border-radius: .8rem;
  }
  h1{
    margin:14px 0;
  }
  .btn {
    padding: 0.5rem 0;
    margin: 0.5rem 0;
  }
}
</style>
