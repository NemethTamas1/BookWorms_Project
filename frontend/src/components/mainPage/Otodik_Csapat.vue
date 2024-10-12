<script lang="ts">
import { defineComponent } from 'vue'

export default {
  name: 'Team',
  data() {
    return {
      IkonokMegjelenitese: false,
      rotated: false
    }
  },
  methods: {
    kattintasfigyelo(event) {
      event.stopPropagation()
      this.IkonokMegjelenitese = !this.IkonokMegjelenitese
      this.rotated = !this.rotated
    },
    clickOutside(event) {
      const target = event.target
      // Ellenőrzi, hogy ha nem az ikonra vagy a social media részre kattintanak, akkor visszafordítja és bezárja az ikonokat
      if (!this.$el.contains(target)) {
        this.IkonokMegjelenitese = false
        this.rotated = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.clickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickOutside)
  }
}
</script>

<template>
  <section id="team">
    <div class="container" id="foKontainer">
      <!-- First row: Headings -->
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="my-2">A BookWorms Dedikált Csapatának Tagjai</h2>
        </div>
      </div>

      <!-- Kártyák konténere -->
      <div class="container" id="tartalom">
        <!-- 1st row: 2 cards -->
        <div class="row">
          <div class="card team-item rounded col-12 col-lg-4 mb-4 d-flex align-items-stretch">
            <div class="team-img position-relative">
              <img
                src="https://kephost.net/p/MTQyMDY2OQ.png"
                class="img-fluid w-100 rounded-top"
                alt="David Coffee Brock"
              />
              <div class="team-icon">
                <a
                  id="share"
                  class="btn btn-sm-square rounded-circle rounded-circle"
                  :class="{ 'rotate-icon': 'rotated' }"
                  @click="kattintasfigyelo"
                  style="border: 1px solid rgba(246, 212, 117)"
                >
                  <i class="fas fa-share"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom p-4">
              <h4 class="text-white">David Coffee Brock</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>

          <div
            id="szellemdiv"
            class="card team-item rounded col col-lg-4 d-none mb-4 d-flex align-items-stretch"
          >
            <!-- Szellem div - köztes hely miatt -->
          </div>

          <div class="card team-item rounded col-12 col-lg-4 mb-4 d-flex align-items-stretch">
            <div class="team-img position-relative">
              <img
                src="https://kephost.net/p/MTQyMDY2Nw.png"
                class="img-fluid w-100 rounded-top"
                alt="Thommas Brainful"
              />
              <div class="team-icon">
                <a
                  id="share"
                  class="btn btn-sm-square rounded-circle rounded-circle"
                  :class="{ 'rotate-icon': 'rotated' }"
                  @click="kattintasfigyelo"
                  style="border: 1px solid rgba(246, 212, 117)"
                >
                  <i class="fas fa-share"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom p-4">
              <h4 class="text-white">Thommas Brainful</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card team-item rounded col-12 col-lg-4 mb-4 d-flex align-items-stretch">
            <div class="team-img position-relative">
              <img
                src="https://kephost.net/p/MTQyMDY3MQ.png"
                class="img-fluid w-100 rounded-top"
                alt="Mark P. Napping"
              />
              <div class="team-icon">
                <a
                  id="share"
                  class="btn btn-sm-square rounded-circle rounded-circle"
                  :class="{ 'rotate-icon': 'rotated' }"
                  @click="kattintasfigyelo"
                  style="border: 1px solid rgba(246, 212, 117)"
                >
                  <i class="fas fa-share"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom p-4">
              <h4 class="text-white">Mark P. Napping</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>

          <div class="card team-item rounded col-12 col-lg-4 mb-4 d-flex align-items-stretch">
            <div class="team-img position-relative">
              <img
                src="https://kephost.net/p/MTQyMDY3MA.png"
                class="img-fluid w-100 rounded-top"
                alt="Alice W. Wonderful"
              />
              <div class="team-icon">
                <a
                  id="share"
                  class="btn btn-sm-square rounded-circle rounded-circle"
                  :class="{ 'rotate-icon': 'rotated' }"
                  @click="kattintasfigyelo"
                  style="border: 1px solid rgba(246, 212, 117)"
                >
                  <i class="fas fa-share"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom p-4">
              <h4 class="text-white">Alice W. Wonderful</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>
          <div class="card team-item rounded col-12 col-lg-4 mb-4 d-flex align-items-stretch">
            <div class="team-img position-relative">
              <img
                src="https://kephost.net/p/MTQyMDY2OA.png"
                class="img-fluid w-100 rounded-top"
                alt="Fabian S. Speci"
              />
              <div class="team-icon">
                <a
                  id="share"
                  class="btn btn-sm-square rounded-circle rounded-circle"
                  :class="{ 'rotate-icon': 'rotated' }"
                  @click="kattintasfigyelo"
                  style="border: 1px solid rgba(246, 212, 117)"
                >
                  <i class="fas fa-share"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-1" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-1" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom p-4">
              <h4 class="text-white">Fabian S. Speci</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 145px);
  margin-left: 145px;
  border-bottom: 0.8rem solid rgba(0, 59, 34, 0.6);
  background-image: url('https://kephost.net/p/MTQ1NjUxMg.png'),
  linear-gradient(0deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  font-family: Arial, Helvetica, sans-serif;
  background-position: center;
  background-size: cover;
  background-repeat: repeat-y;
}
#foKontainer {
  border: 1rem double rgba(246, 212, 117, 0.6);
  text-align: justify;
  background-color: rgba(34, 23, 3, 0.7);
  border-radius: 2rem;
  margin:5rem;
  padding: auto;
}
#tartalom {
  padding: 0;
}
#tartalom > .row:first-of-type {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.card {
  background-color: transparent;
  border: none;
}

.team-item {
  margin: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
}

.team-img {
  position: relative;
}

.team-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  z-index: 1;
  padding: 0;
  margin: 0;
}

.team-icon a {
  width: 100%;
  height: 100%;
  font-size: 18px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: rgba(180, 140, 45);
}

.team-icon-share {
  top: 50px;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.3s ease;
}

.team-item:hover .team-icon-share {
  opacity: 1;
  transform: translateY(0);
}
/* LEGFELSŐ megosztási ikon */
.team-icon-share a {
  margin-top: 10px;
  color: rgb(255, 255, 255);
  border: 2px solid rgba(246, 212, 117, 0.8);
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: 0.6s ease all;
}

#share:hover{
  font-weight: bolder;
  color: rgb(128, 111, 1);
  background-color: rgb(246, 212, 117);
  transform: rotate(90deg);
}
.team-icon a:hover{
  background-color: #bd9441;
  border: 2px solid rgb(84, 62, 1);
}

.team-content {
  background-color: #000;
  transition: background-color 0.3s ease;
  padding: 20px;
  flex-grow: 1;
}

.team-item:hover .team-content {
  background-color: rgba(255, 238, 197, 0.65);
}

/* Facebook ikon */
.team-icon-share a:nth-child(1):hover {
  background-color: rgb(0, 101, 178, 0.7);
  color: rgb(255, 255, 255);
  border: 2px solid #58490c;
  font-size: larger;
}

/* Twitter ikon */
.team-icon-share a:nth-child(2):hover {
  background-color: rgb(234, 234, 234);
  color: rgb(0, 101, 178, 0.7);
  border: 2px solid #58490c;
  font-size: larger;
}

/* Instagram ikon */
.team-icon-share a:nth-child(3):hover {
  transition-delay: 0.3s;
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  font-size: larger;
}

h2:first-of-type {
  font-size: 3rem;
  margin: auto;
  color: rgb(255, 238, 197);
  line-height: 1.2;
  text-shadow: 3px 3px 3px rgba(188, 102, 3, 0.6);
}
#share {
  color: whitesmoke;
  cursor: pointer;
  transition: transform 0.5s ease;
}
.team-icon {
  width: 35px;
  height: 35px;
}
.team-icon a {
  font-size: 16px;
}

.team-icon-share a {
  margin-top: 5px;
  width: 35px;
  height: 35px;
  font-size: 16px;
}
@media (min-width: 992px) and (max-width: 1300px) {
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100% - 145px);
    margin-left: 145px;
  }
}
@media (max-width: 992px) {
  #szellemdiv {
    display: none;
  }
  section {
    margin-left: 0;
    width: auto;
    height: auto;
    padding: 1.5rem;
  }
  #foKontainer {
    padding: 0;
    width: 100%;
  }
  .row:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h4:first-of-type {
    font-size: 1rem;
    font-weight: bold;
  }
  h2:first-of-type {
    margin: 0.5rem 0;
    padding: 0;
  }

  p:first-of-type {
    font-size: 0.8rem;
  }

  .team-icon {
    width: 35px;
    height: 35px;
  }

  .team-icon-share a {
    margin-top: 5px;
    width: 35px;
    height: 35px;
  }
}
@media (max-width: 991px) {
  section {
    margin: 0;
    padding: 2rem;
    width: 100%;
  }
  #foKontainer {
    margin: auto;
    padding: 0;
    width: 100%;
  }
  .card.team-item {
    max-width: 50%;
    max-height: 50%;
  }
  #share {
    color: whitesmoke;
    cursor: pointer;
    transition: transform 0.7s ease;
  }
  .team-icon a {
    transition: transform 5s ease-in-out;
  }
  .rotate-icon {
    transform: rotate(90deg);
  }

  .team-icon-share {
    opacity: 0;
    transform: translateY(-20px);
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
  }

  .show-icons {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
  }
}
</style>
