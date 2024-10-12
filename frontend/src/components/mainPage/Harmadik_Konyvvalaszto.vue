<template>
  <section id="section-3">
    <div class="container" id="foKontainer">
      <div class="row">
        <div class="col">
          <div class="row" id="cim">
            <div class="col">
              <h1 class="text-center">Hogyan Találhatod Meg Nálunk Álmaid Könyvét?</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="masodikTeljesBlokk">
        <div class="col-md-6" id="elso_oszlop">
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
  name: 'konyvvalaszto'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100% - 145px);
  margin-left: 145px;
  background-image: url('https://kephost.net/p/MTQxMDk2NA.png'),
    linear-gradient(0, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#foKontainer {
  border-radius: 2rem;
  padding: 2rem;
  background-color: rgba(34, 23, 3, 0.7);
  border: 10px double rgba(246, 212, 117, 0.6);
  margin: 2rem;
}
h1 {
  font-size: 3rem;
  margin: auto;
  padding: 1rem 0;
  color: rgb(255, 238, 197);
  text-shadow: 3px 3px 3px rgba(188, 102, 3, 0.6);
}
#masodikTeljesBlokk {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
#masodik_oszlop {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#masodik_oszlop img {
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
}
#elso_oszlop {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
#elso_oszlop li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 0.25rem;
  margin: 2rem 0;
  background-color: rgb(255, 238, 197);
  border-radius: 1.5rem;
  transition: box-shadow 0.3s ease;
}
li:hover {
  box-shadow: 0 0.7rem 0.7rem rgba(255, 167, 3, 0.5);
}
span {
  text-align: center;
  justify-content: center;
  align-items: center;
  display: block;
  text-align: center;
  font-size: 20px;
  white-space: normal;
  text-transform: capitalize;
  font-weight: 600;
  color: #58490c;
  background-color: rgb(255, 238, 197);
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
}

.tab-content {
  background-color: transparent;
  border: none;
  height: auto;
  padding: 0;
  object-fit: cover;
}
@media (max-width: 992px) {
  section {
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin-left: 0;
  }

  #masodikTeljesBlokk {
    display: flex;
    flex-direction: column;
    justify-content: ;
    align-items: center;
    max-width: 75%;

  }

  #elso_oszlop,
  #masodik_oszlop {
    width: 100%;
    margin: 0;
    padding: 0.5rem;
  }

  #elso_oszlop li {
    margin: 1rem 0;
    width: 100%;
  }

  #masodik_oszlop img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  a {
    font-size: 1rem;
    padding: 0.75rem;
  }

  a span {
    font-size: 1rem;
    text-align: left;
  }
}</style>
