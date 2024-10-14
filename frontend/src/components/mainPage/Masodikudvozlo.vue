<template>
  <section id="Udvozlo">
    <div class="container" id="fullContainer">
      <div class="row">
        <div class="col-12">
          <h1>Üdvözöljük Könyvesboltunkban!</h1>
        </div>
        <div class="col-12 col-md-6" id="elso_col">
        </div>
        <div class="col-12 col-md-6" id="masodik_col">
          <div class="bekezdes">
            <p>
              Tegyen egy könnyed virtuális sétát különleges könyveink között és regisztráljon előre!
              A regisztrált és visszaigazolást nyert érdeklődőink mindegyike valós és szenvedélyes
              gyűjtöket jelent az aukcióinkon. A licitálásra ugyanis regisztráció szükséges nálunk
              az Ön által kiválasztott könyvre.
            </p>
          </div>
          <p class="text-center">
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

@media (min-width: 993px) and (max-width: 2920px) {
  section {
    box-sizing: border-box;
    border-top: 0.8rem solid rgba(0, 59, 34, 0.6);
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
    margin: 2rem 1rem;
    padding: auto;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }

  #elso_col {
    background-image: url('https://kephost.net/p/MTQxMDkzNg.png');
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
    margin:auto;
    padding: auto;
  }
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  p:nth-of-type(1) {
    font-size: larger;
    text-align: justify;
    line-height: 2.5;
  }
  .bejelentkezes_gomb {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5cd7e;
    font-size: 20px;
    padding: 0.8rem;
    margin: auto;
    max-width: 50%;
    max-height: 90%;
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
}
@media (max-width: 992px) {
  section {
    box-sizing: border-box;
    border-top: 0.8rem solid rgba(0, 59, 34, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
  #elso_col {
    background-image: url('https://kephost.net/p/MTQxMDkzNg.png');
  }
  .bejelentkezes_gomb {
    font-size: 18px;
  }
}
@media (min-width: 1300px) {
  section {
    box-sizing: border-box;
    border-top: 0.8rem solid rgba(0, 59, 34, 0.6);
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
  #masodik_col {
    display: block;
    justify-content: space-around;
    align-items: center;
  }
  #elso_col {
    height: 50vh;
  }
}
</style>
