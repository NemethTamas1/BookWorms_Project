<template>
  <section id="section-3">
    <!-- Projects Start -->
    <div class="container" id="fullContainer">
      <div class="row">
        <!-- Első oszlop -->
        <div class="col-md-6" id="elso_oszlop">
          <div class="row">
            <h1 class="text-center">Hogyan Találhatod Meg Nálunk Álmaid Könyvét?</h1>
          </div>
          <div class="row">
            <ul class="nav flex-column">
              <li class="nav-item mb-4 w-100">
                <a
                  class="d-flex align-items-center h4 mb-0 p-3 active"
                  data-bs-toggle="pill"
                  href="#ProjectsTab-1"
                >
                  <div class="projects-icon me-4">
                    <span class="fa-solid fa-earth-americas small"></span>
                  </div>
                  <span>világszíntű keresést végzünk neked</span>
                </a>
              </li>
              <li class="nav-item mb-4 w-100">
                <a
                  class="d-flex align-items-center h4 mb-0 p-3"
                  data-bs-toggle="pill"
                  href="#ProjectsTab-2"
                >
                  <div class="projects-icon me-3">
                    <span class="fa-solid fa-user-lock small"></span>
                  </div>
                  <span>Biztonságod Az Első Nekünk </span>
                </a>
              </li>
              <li class="nav-item mb-4 w-100">
                <a
                  class="d-flex align-items-center h4 mb-0 p-3"
                  data-bs-toggle="pill"
                  href="#ProjectsTab-3"
                >
                  <div class="projects-icon me-3">
                    <span class="fas fa-bolt small"></span>
                  </div>
                  <span>Otthonodba varázsoljuk a licitálás izgalmát</span>
                </a>
              </li>
              <li class="nav-item mb-4 w-100">
                <a
                  class="d-flex align-items-center h4 mb-0 p-3"
                  data-bs-toggle="pill"
                  href="#ProjectsTab-4"
                >
                  <div class="projects-icon me-3">
                    <span class="fas fa-bolt small"></span>
                  </div>
                  <span>Szaktudásunk nyújtotta garancia</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Második oszlop - Képek megjelenítése -->
        <div class="col-md-6" id="masodik_oszlop">
          <div class="tab-content">
            <div id="ProjectsTab-1" class="tab-pane fade show active">
              <img
                src="https://kephost.net/p/MTQxMjIwNg.png"
                class="img-fluid"
                alt="Power Path Unveiling Our process"
              />
            </div>
            <div id="ProjectsTab-2" class="tab-pane fade">
              <img
                src="https://kephost.net/p/MTQxMjIwNQ.png"
                class="img-fluid"
                alt="Electro Flow Decoding Our method"
              />
            </div>
            <div id="ProjectsTab-3" class="tab-pane fade">
              <img
                src="https://kephost.net/p/MTQxMjIwMw.png"
                class="img-fluid"
                alt="Energetic Engine Behind Scenes"
              />
            </div>
            <div id="ProjectsTab-4" class="tab-pane fade">
              <img
                src="https://kephost.net/p/MTQxMjIwNA.png"
                class="img-fluid"
                alt="Watt Works Discover Operations"
              />
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

section {
  border-bottom: 0.8rem solid rgba(0, 59, 34, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100% - 145px);
  margin-left: 145px;
  color: rgb(5, 86, 156);
  background-image: linear-gradient(0deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#fullContainer {
  border-radius: 2rem;
  padding: 2rem;
  background-color: rgba(34, 23, 3, 0.7);
  border: 1rem double rgba(246, 212, 117, 0.6);
}
#elso_oszlop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* Az oszlop teljes magasságát használjuk */
}
#elso_oszlop h1 {
  align-self: flex-start;
  margin-bottom: 2rem;
  color: aliceblue;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
}

li {
  background-color: rgb(255, 238, 197);
  border-radius: 1.5rem;
  text-align: center;
  transition: box-shadow 0.3s ease;
  max-width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
}

li:hover {
  box-shadow: 0 0.7rem 0.7rem rgba(255, 167, 3, 0.5);
}
span {
  text-transform: capitalize;
  font-weight: 600;
  color: #58490c;
  background-color: rgb(255, 238, 197);
  text-align: center;
  justify-content: center;
  align-items: center;
}

a {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  display: block;
  color: #58490c;
}

a span {
  display: block;
  text-align: center;
  text-transform: capitalize;
  color: #58490c;
  background-color: rgb(255, 238, 197);
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

#masodik_oszlop {
  display: flex;
  justify-content: center;
  align-items: center;
}

#masodik_oszlop img {
  max-width: 100%;
  border-radius: 1rem;
}

.tab-content {
  background-color: transparent;
  border: none;
  padding: 0;
}

/* Média lekérdezések */
@media (max-width: 1200px) {
  section {
    margin-left: 145px;
    width: calc(100% - 145px);
    padding: 2rem;
    height: auto;
  }
  a span {
    text-wrap: wrap;
  }
  #elso_oszlop li {
    margin: 0;
    padding: 0;
  }

  #elso_oszlop {
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .container{
    width: 75%;

  }
  #masodik_oszlop {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80%;
  }
}
@media (max-width: 992px) {
  section {
    margin: 0;
    padding: 2rem;
    width: 100%;
    height: auto;
  }
  #elso_oszlop, #masodik_oszlop {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0;
    width: 90%;
  }
}

@media (max-width: 576px) {
  #elso_oszlop h1 {
    font-size: smaller;
  }
  a span {
    text-wrap: wrap;
  }
  #elso_oszlop ul li {
    font-size: smaller;
  }

  #elso_oszlop, #masodik_oszlop {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0;
    width: 100%;
  }
}
</style>
