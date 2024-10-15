<template>
  <section id="Konyvvalaszto">
    <div class="container" id="fullContainer">
      <div class="row">
        <div class="col-12">
          <h1>Legfrissebb könyv szerzeményeink</h1>
        </div>
        <div class="col-6 col-md-6" id="masodik_col">
          <div class="row">
            <p>Tekintse meg legújabb könyveinket:</p>
          </div>
          <div class="row">
            <div
              class="btn btn-info d-flex justify-content-between align-items-center"
              id="konyvek_gombok"
              @click="setBackground('https://kephost.net/p/MTQ1OTMxOQ.jpg')"
            >
              <span>Angol-Magyar szótár</span>
              <i class="fa-solid fa-right-long" id="gomban_nyilak"></i>
            </div>
          </div>
          <div class="row">
            <div
              class="btn btn-info d-flex justify-content-between align-items-center"
              id="konyvek_gombok"
              @click="setBackground('https://kephost.net/p/MTQ1OTMyMA.jpg')"
            >
              <span>Filozófia nagykönyve</span>
              <i class="fa-solid fa-right-long" id="gomban_nyilak"></i>
            </div>
          </div>
          <div class="row">
            <div
              class="btn btn-info d-flex justify-content-between align-items-center"
              id="konyvek_gombok"
              @click="setBackground('https://kephost.net/t/MTQ1OTMyMQ.jpg')"
            >
              <span>Fotókönyv</span>
              <i class="fa-solid fa-right-long" id="gomban_nyilak"></i>
            </div>
          </div>
          <p>
            <b>Szeretnéd látni a további kiváló szerzeményeinket?</b>
          </p>
          <div class="row jobbGombok">
            <div class="col">
              <div @click="goToBooks()" class="btn btn-info bejelentkezes_gomb">Mutasd a teljes kínálatot!</div>
            </div>
          </div>
        </div>

        <div
          class="col-6 col-md-6"
          id="elso_col"
          :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
        >
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  data() {
    return {
      backgroundImage:'https://kephost.net/p/MTQxMjIwNA.png'
    }
  },
  methods: {
    setBackground(imageUrl: string) {
      this.backgroundImage = imageUrl 
    },
    goToBooks(){
      this.$router.push('/books')
    }
  }
}
</script>
<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100% - 145px);
  margin-left: 145px;
  background-image: url('https://kephost.net/p/MTQxMDk2NA.png'),
    linear-gradient(0deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
}

#fullContainer {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 20px;
  color: whitesmoke;
  background-color: rgba(34, 23, 3, 0.7);
  border: 10px double rgba(246, 212, 117, 0.6);
  border-radius: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
}
#elso_col {
  margin: auto;
  padding: auto;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  transition:
    background-image 0.8s ease-in-out,
    opacity 0.8s ease-in-out; 
  opacity: 1;
}
#masodik_col {
    margin: auto;
    padding: auto;
  }
#elso_col.fade-out {
  opacity: 0.1;
}
h1 {
  text-align: center;
  margin-bottom: 1rem;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
  line-height: 1.6;
  text-align: center;
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
@media (min-width: 576px) and (max-width: 992px) {
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 1rem;
    margin: 0;
  }
  #fullContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 1rem;
    width: 100%;
    section {
      margin-left: 0;
      width: auto;
      height: auto;
      padding: 1.5rem;
    }
  }
  h1 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 0.8rem;
  }
  p:nth-of-type(1) {
    text-align: center;
    font-size: 20px;
    text-decoration: underline;
    text-decoration-color: rgba(207, 177, 27, 0.409);
  }
  p:nth-of-type(2) {
    margin: 1rem 0;
    text-align: center;
  }
  #masodik_col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  .row {
    width: 100%;
    margin-bottom: 0.8rem;
  }
  #konyvek_gombok span {
    text-align: center;
    margin: auto;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: rgb(99, 88, 1);
  }
  #konyvek_gombok:hover {
    border: 3px solid grey;
  }

  #konyvek_gombok {
    margin: auto;
    text-align: center;
    width: 250px;
    font-size: 16px;
    padding: 0.5rem 1rem;
    background-color: #f5cd7e;
    border-radius: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #gomban_nyilak {
    display: none;
  }

  #elso_col {
    background-size: cover;
    background-position: center;
    width: 90%;
    height: 300px;
    border-radius: 1rem;
    margin: auto;
  }

  .bejelentkezes_gomb {
    width: fit-content;
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    font-size: 18px;
    border-radius: 1rem;
    background-color: #f6d185;
  }
}
@media (max-width: 576px) {
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 1rem;
    margin: 0;
  }
  #fullContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 1rem;
    width: 100%;
    section {
      margin-left: 0; 
      width: auto;
      height: auto;
      padding: 1.5rem;
    }
  }
  h1 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 0.8rem;
  }
  p:nth-of-type(1) {
    text-align: center;
    font-size: 20px;
    text-decoration: underline;
    text-decoration-color: rgba(207, 177, 27, 0.409);
  }
  p:nth-of-type(2) {
    margin: 1rem 0;
    text-align: center;
  }
  #masodik_col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  .row {
    width: 100%;
    margin-bottom: 0.8rem;
  }
  #konyvek_gombok span {
    text-align: center;
    margin: auto;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: rgb(99, 88, 1);
  }
  #konyvek_gombok:hover {
    border: 3px solid grey;
  }

  #konyvek_gombok {
    margin: auto;
    text-align: center;
    width: 250px;
    font-size: 16px;
    padding: 0.5rem 1rem;
    background-color: #f5cd7e;
    border-radius: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #gomban_nyilak {
    display: none;
  }
  #elso_col {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 300px;
    border-radius: 1rem;
    margin: 1rem 0;
  }
  .bejelentkezes_gomb {
    width: fit-content;
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    font-size: 18px;
    border-radius: 1rem;
    background-color: #f6d185;
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
    linear-gradient(0deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
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
  border-radius: 2rem;
  margin: 2rem;
  padding: 2rem;
  height: auto;
}
  #elso_col {
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    min-height: 300px;
    transition:
      background-image 0.8s ease-in-out,
      opacity 0.8s ease-in-out;
    opacity: 1;
  }
  #gomban_nyilak {
    display: flex;
    justify-content: end;
    align-items: end;
  }
  #konyvek_gombok:hover {
    box-shadow: 0 0 2px 2px rgba(187, 141, 16, 0.7);
  }
  #konyvek_gombok {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0.6rem;
    margin: 0 0.5rem;
    background-color: #f5cd7e;
    border-radius: 1.2rem;
    font-size: 18px;
    text-transform: capitalize;
    color: #58490c;
    max-width: 280px;
    margin: 0.5rem auto;
    transition: box-shadow 0.3s ease;
    transition: box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  #konyvek_gombok span {
    flex-grow: 1;
    text-align: center;
  }
  #gomban_nyilak {
    margin-left: auto; 
  }
  h1{
    margin: 0;
    padding: 1rem 0;
  }
  #elso_col {
    display: flex;
    align-items: end;
    background-size: cover;
    background-position: center;
    justify-content: center;
    border-radius: 1rem;
    max-height: 400px;
    max-width: 400px;
  }
}
</style>
