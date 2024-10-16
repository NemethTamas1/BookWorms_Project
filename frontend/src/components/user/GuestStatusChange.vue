<script setup lang="ts">
import { useUpdateApplicationStatusById } from '@/composables/api/useApi';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';

let applicationStatusChangedSuccessfully = ref<boolean>(false)
let applicationStatusChangedError = ref<boolean>(false)

const changeStatusInDatabase = async () => {
  const route = useRoute()
  const userId = parseInt(route.query['userId'] as string)
  const applicationId = parseInt(route.query['applicationId'] as string)
  const guestToken = route.query['token'] as string
  const responseStatus = await useUpdateApplicationStatusById(userId, applicationId, guestToken)
  if (responseStatus == 200) {
    applicationStatusChangedSuccessfully.value = true
  }
  else {
    applicationStatusChangedError.value = true
  }
}

changeStatusInDatabase()
</script>

<template>
  <section>
    <div class="megerosites">
      <div>
        <h1>Megerősítés</h1>
      </div>
    </div>
    <div class="koszono_div mt-3">
      <div v-if="applicationStatusChangedSuccessfully">
        <h2 id="fooldal_nyitoszoveg" class="mb-4">Sikeres e-mail cím megerősítés!</h2>
        <hr />
        <div class="mb-4">
          <div class="koszonto">
            <p>
              Köszönjük! E-mail címének megerősítésével lehetőséget nyújtunk a regisztrációs folyamat elvégézéséhez.
            </p>
            <p>
              Kollégáink elkezdték motivációs levelének és szándékainak alapos átvizsgálását.
              <b>Az átvizsgálás maximum 24 órát vesz igénybe </b>, de addig is tekintse át antik könyveink tárházát!
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div v-if="applicationStatusChangedError" class="text-center mt-3">
        <p>Valami hiba történt, kérjük, próbálja meg újra! Amennyiben a hiba továbbra is fennáll, kérjük vegye fel
          velünk a kapcsolatot!</p>
      </div>
      <div class="gombok_div">
        <RouterLink to="/" class="btn btn-info" id="vissza">Vissza a Főoldalra </RouterLink>
      </div>
    </div>
  </section>
</template>

<style>
section {
  height: 100vh;
  width: 100%;
  margin-left: 145px;
  width: calc(100% - 145px);
  background-image: url('https://kephost.net/p/MTM2MDI1Ng.jpg'),
    linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
}

.megerosites {
  width: 100%;
  height: 23vh;
  overflow: hidden;
  /* Ha a tartalom kilógna a konténerből */
}

.megerosites h1 {
  display: flex;
  position: relative;
  z-index: 1;
  /* A szöveg a kép előtt lesz */
  color: #ecd577;
  justify-content: center;
  text-shadow: 2px 2px 5px #120d01;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 3rem;
  margin-top: 9vh;
  text-shadow: 2px 2px 2px #574d0cc4;
  background-color: #9f91343e;
  box-shadow: 0 0 50px 50px #9f91343e;
}

.koszono_div {
  width: 60%;
  margin: auto;
  background-color: rgb(25 24 20 /.8);
  padding: 30px;
  border-radius: 5px;
  border: 2px solid #F5CD7E;
  color: #F5CD7E;
}

h2 {
  font-size: 2.3rem;
}

.koszonto p {
  margin-bottom: 1rem;
}

hr:first-of-type {
  border: 3px solid #bf7d02;
}

.gombok_div{
  display: flex;
  justify-content: center;
}

#vissza {
  font-family: 'Libre Baskerville', serif;
  font-size: 1rem;
  background-color: rgb(149, 101, 29);
  color: rgb(255, 234, 206);
  border: 3px solid #3f2e01cf;
  font-weight: bold;
  transition: 0.1s ease;
  margin: auto;
}

#vissza:hover {
  color: rgb(255, 245, 232);
  transform: scale(1.1);
}

@media (max-width: 992px) {
  section {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-size: cover;
  }
}
</style>