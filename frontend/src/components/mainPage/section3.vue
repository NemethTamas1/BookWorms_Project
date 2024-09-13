<template>
  <section class="section-3">
    <div class="container">
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
                Tegyen egy könnyed virtuális sétát különleges könyveink között és regisztráljon
                előre! A regisztrált és visszaigazolást nyert érdeklődőink mindegyike valós és
                szenvedélyes gyűjtöket jelent az aukcióinkon. A licitálásra ugyanis regisztráció
                szükséges nálunk az Ön által kiválasztott könyvre.
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

.section-3 {
  margin-left: 125px;
  background-image: url(https://static.vecteezy.com/system/resources/previews/042/691/752/non_2x/dark-green-background-with-gold-mandala-ornament-vector.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center; /* Függőleges középre igazítás */
}

.container {
  color: rgb(50, 34, 141);
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
#elso {
  color:  #f7f5f1cf;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  text-shadow: 5px 3px 3px rgba(105, 57, 2, 0.5);
  background: linear-gradient(
    90deg,
    rgba(131, 95, 28, .9) 0%,
    rgba(85, 65, 26, .9) 30%,
    rgba(77, 67, 53, .9) 90%,
    rgba(139, 108, 6, .9) 100%
  );
  border: 10px double rgba(248, 217, 133, 0.4);
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
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
  background-color: #f6d185;
  border: 3px solid #58490c;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(84, 62, 1);
  cursor: pointer;
  margin: 10px;
}

.btn:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
}
@media (max-width: 992px) {
    .section-3 {
        padding-left: 0;
        margin-left: 0;
    }
    #elso {
        padding: 1rem;
        font-size: 18px;
    }
}
</style>
