<template>
  <section id="section-3">
    <div class="container" id="fullContainer">
      <div class="row">
        <div class="col-12 feature-icon" id="elso">
          <h1>Ritka és különleges könyvre vágyik?</h1>
          <p class="mondateleje"><b>Mi elhoztuk Önnek!</b></p>
          <p>
            Álmai könyvének a birtoklása nem csupán egy gyűjtemény gyarapítását jelenti, hanem
            megtestesíti a Prémium életérzést. Minden egyes lapjukból árad az elegancia, a luxus
            érzése, amely révén otthona nemcsak otthon lesz, hanem maga a művészeti galéria is.
          </p>
          <div class="row" id="masodik">
            <div class="col-12">
              <p>
                Tegyen egy könnyed virtuális sétát különleges könyveink között és regisztráljon előre!
                A regisztrált és visszaigazolást nyert érdeklődőink mindegyike valós és szenvedélyes
                gyűjtöket jelent az aukcióinkon. A licitálásra ugyanis regisztráció szükséges nálunk
                az Ön által kiválasztott könyvre.
              </p>
              <button class="btn m-auto">Regisztráció</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Section3'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

section{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Minimum magasság biztosítása */
  width: calc(100% - 145px);
  margin-left: 145px;
  padding: 2rem; /* Extra padding */
  background-image: url(https://kephost.net/p/MTQxMDk2OA.png);
  background-size: cover;
  background-position: center;
}

#fullContainer {
  border-radius: 2rem;
  background-color: rgba(34, 23, 3, 0.85);
  border: 10px double rgba(246, 212, 117, 0.6);
  padding: 3rem;
  max-width: 1200px; /* Maximum szélesség nagyobb képernyőkön */
  width: 100%; /* A container szélessége mindig alkalmazkodik */
  box-sizing: border-box; /* A padding beleszámít a szélességbe */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#elso {
  color:  #f7f5f1cf;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  text-shadow: 5px 3px 3px rgba(105, 57, 2, 0.5);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: justify;
}

#masodik {
  margin-bottom: 1rem;
}

.mondateleje {
  text-shadow: 5px 3px 3px rgba(105, 57, 2, 0.5);
  font-size: 1.5rem;
  text-align: start;
}

button {
  display: block;
  margin: 20px auto;
}

h1 {
  text-align: center;
}
.btn {
  background-color: rgb(255, 238, 197);
  border: 3px solid #58490c;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(84, 62, 1);
  cursor: pointer;
  margin: 10px;
  border-radius: 2rem;
}

.btn:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
}

@media (max-width: 992px) {
  section {
    padding: 3rem 0; /* Mobilnézet padding */
    width: 100%;
    height: auto; /* A magasság automatikusan alakul */
    margin: 0;
  }

  #fullContainer {
    padding: 2rem;
    max-width: 80%; /* Mobilon a szélesség kisebb */
  }

  #elso, #masodik {
    width: auto;
    padding: 1.5rem;
  }
}
</style>