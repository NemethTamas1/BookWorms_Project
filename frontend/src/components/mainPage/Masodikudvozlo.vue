<template>
  <section id="Udvozlo">
    <div class="container" id="fullContainer">
      <div class="row">
        <div class="col-12">
          <h1>Üdvözöljük Könyvesboltunkban!</h1>
        </div>
        <div class="col-12 col-md-6" id="elso_col">
          <!-- a kép van itt -->
        </div>
        <!-- Második oszlop (szöveg, gombok) -->
        <div class="col-12 col-md-6" id="masodik_col">
          <div class="bekezdes">
            <p>
              Tegyen egy könnyed virtuális sétát különleges könyveink között és regisztráljon előre!
              A regisztrált és visszaigazolást nyert érdeklődőink mindegyike valós és szenvedélyes
              gyűjtöket jelent az aukcióinkon. A licitálásra ugyanis regisztráció szükséges nálunk
              az Ön által kiválasztott könyvre.
            </p>
          </div>
          <p>
            <b><i>Kérjük jelentkezzen be!</i> </b>
          </p>
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
<style scoped>
section {
  box-sizing: border-box;
  border-top: 0.8rem solid rgba(0, 59, 34, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
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
  border-radius: 2rem;
  padding: 2rem;
  background-color: rgba(34, 23, 3, 0.75);
  border: 10px double rgba(246, 212, 117, 0.6);
}

#elso_col {
  background-image: url(https://kephost.net/p/MTQxMDkzNg.webp);
  border-radius: 1rem;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
}

#masodik_col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
  line-height: 1.6;
  text-align: justify;
}

.bejelentkezes_gomb {
  margin: 0.5rem 0;
  background-color: #f5cd7e;
  font-size: 20px;
  padding: 0.8rem;
  width: 100%;
  border-radius: 1rem;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.btn {
  background-color: #f6d185;
  border: 3px solid #58490c;
  color: rgb(84, 62, 1);
}

.btn:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
}
@media (min-width: 992px) and (max-width: 2000px) {
  section {
    width: calc(100% - 145px);
    margin-left: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  #fullContainer {
    margin: 1.5rem;
  }
}
/* Tablet és kisebb eszközökre */
@media (max-width: 992px) {
  section {
    height: auto;
    padding: 1rem;
    width: 100%;
    margin: auto;
  }
  #fullContainer {
    padding: 1.5rem;
  }
  #elso_col,
  #masodik_col {
    margin: 1rem 0;
  }
  .bejelentkezes_gomb {
    font-size: 18px;
  }
}
@media (min-width: 1300px) {
  #fullContainer {
    max-width: 75%;
    height: auto;
  }
  #elso_col,
  #masodik_col {
    display: flex;
    flex: 1;
    margin: 0 1rem;
    height: 100%;
  }
  #masodik_col {
  display: block;
  justify-content: space-around;
  align-items: center;
  }
  #elso_col{
    height: 50vh;
  }
}
</style>
