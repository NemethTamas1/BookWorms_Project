<script setup lang="ts">
import { useUpdateApplicationStatusById } from '@/composables/api/useApi';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

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
  <div class="container" id="email_megerosites">
    <div class="row">
      <div v-if="applicationStatusChangedSuccessfully" class="col koszono_div">
        <h2 id="fooldal_nyitoszoveg" class="mb-4">Sikeres e-mail cím megerősítés!</h2>
        <hr />
        <div class="row mb-4">
          <div class="col-6 m-auto koszonto">
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
      <div v-if="applicationStatusChangedError" class="koszono_div">
        <p>Valami hiba történt, kérjük, próbálja meg újra! Amennyiben a hiba továbbra is fennáll, kérjük vegye fel
          velünk a kapcsolatot!</p>
      </div>
    </div>
    <div class="row">
      <div class="col" id="gombok_div">
        <RouterLink to="/" class="btn btn-info" id="vissza">Vissza a Főoldalra </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
#email_megerosites {
  margin-top: 40vh;
  background-image: url(../../../src/assets/img/Banner.png);
  background-size: cover;
  font-family: 'Libre Baskerville', serif;
  text-align: center;
  font-style: italic;
}

.koszono_div {
  margin: auto;
  padding: 3rem 0;
  background-color: cornsilk;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.3);
  /* text-transform: capitalize;  */
  border-radius: 1.5rem;
}

h2 {
  font-size: 2.3rem;
}

.koszonto p {
  margin-bottom: 1rem;
  /* Alsó margó a szöveg elválasztásához */
}

hr:first-of-type {
  border: 3px solid #bf7d02;
}

#vissza {
  margin-top: 1rem;
  font-family: 'Libre Baskerville', serif;
  font-size: 1rem;
  background-color: rgb(149, 101, 29);
  color: rgb(255, 234, 206);
  border: 3px solid #3f2e01cf;
  font-weight: bold;
  transition: 0.1s ease;

}

#vissza:hover {
  color: rgb(255, 245, 232);
  transform: scale(1.1);
}
</style>