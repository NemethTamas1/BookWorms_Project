<script setup lang="ts">
import { useUpdateApplicationStatusById } from '@/composables/api/useApi';
import { useRoute } from 'vue-router';

const changeStatusInDatabase = async () => {
    const route = useRoute()
    const userId = parseInt(route.query['userId'] as string)
    const applicationId = parseInt(route.query['applicationId'] as string)
    const guestToken = route.query['token'] as string
    //const id = route.query['id'] as unknown as number
    await useUpdateApplicationStatusById(userId, applicationId, guestToken)
}

changeStatusInDatabase()
</script>

<template>
    <div class="container-fluid" id="email_megerosites">
      <div class="row">
        <div class="col koszono_div">
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
              <div class="row">
                <div class="col" id="gombok_div">
                  <RouterLink to="./books" class="btn btn-info" id="vissza">Vissza a Főoldalra </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style>
#email_megerosites {
    background-image: url(../../../src/assets/img/Banner.png);
    min-height: 100vh;
    background-size: cover;
    font-family: 'Libre Baskerville', serif;
    text-align: center;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .koszono_div {
    margin: auto;
    padding: 3rem 0; 
    background-color: cornsilk;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.3);
    /* text-transform: capitalize;  */
    border-radius: 1.5rem;
  }
  h2{
      font-size: 2.3rem;
  }
  .koszonto p {
    margin-bottom: 1rem; /* Alsó margó a szöveg elválasztásához */
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