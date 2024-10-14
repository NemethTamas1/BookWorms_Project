<script lang="ts">
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
      <div class="row">
        <div class="col-12">
          <h2>A BookWorms Dedikált Csapatának Tagjai</h2>
        </div>
      </div>
      <div class="container" id="tartalom">
        <div class="row">
          <div class="card team-item rounded col-12 col-lg-4 d-flex align-items-stretch">
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
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom">
              <h4 class="text-white">David Coffee Brock</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>

          <div
            id="szellemdiv"
            class="card team-item rounded col d-none col-lg-4 d-flex align-items-stretch"
          >
          </div>

          <div class="card team-item rounded col-12 col-lg-4 d-flex align-items-stretch">
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
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom">
              <h4 class="text-white">Thommas Brainful</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card team-item rounded col-12 col-lg-4 d-flex align-items-stretch">
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
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom">
              <h4 class="text-white">Mark P. Napping</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>

          <div class="card team-item rounded col-12 col-lg-4 d-flex align-items-stretch">
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
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom">
              <h4 class="text-white">Alice W. Wonderful</h4>
              <p class="text-white">CEO & Founder</p>
            </div>
          </div>
          <div class="card team-item rounded col-12 col-lg-4 d-flex align-items-stretch">
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
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-sm-square rounded-circle">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content text-center rounded-bottom">
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
  background-image: url('https://kephost.net/p/MTQ1NjUxMg.png'),
    linear-gradient(0deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  font-family: Arial, Helvetica, sans-serif;
  background-position: center;
  background-size: cover;
  background-repeat: repeat-y;
}
.card {
  background-color: transparent;
  border: none;
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
#share:hover {
  font-weight: bolder;
  color: rgb(128, 111, 1);
  background-color: rgb(246, 212, 117);
  transform: rotate(90deg);
}
.team-icon a:hover {
  background-color: #bd9441;
  border: 2px solid rgb(84, 62, 1);
}
.team-content {
  background-color: #000;
  transition: background-color 0.3s ease;
  padding: 20px;
}
.team-item:hover .team-content {
  background-color: rgba(255, 238, 197, 0.65);
}
.team-icon-share a:nth-child(1):hover {
  background-color: rgb(0, 101, 178, 0.7);
  color: rgb(255, 255, 255);
  border: 2px solid #58490c;
  font-size: larger;
}
.team-icon-share a:nth-child(2):hover {
  background-color: rgb(234, 234, 234);
  color: rgb(0, 101, 178, 0.7);
  border: 2px solid #58490c;
  font-size: larger;
}
.team-icon-share a:nth-child(3):hover {
  transition-delay: 0.3s;
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  font-size: larger;
}
h2:first-of-type {
  font-size: 2rem;
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
@media (min-width: 1201px) and (max-width: 2900px) {
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vh;
    width: calc(100% - 145px);
    margin-left: 145px;
    background-color: linear-gradient(
      0deg,
      #031a26 0%,
      #163a4eb5 40%,
      #21485e9b 60%,
      #041c2965 100%
    );
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: whitesmoke;
  }
  #foKontainer {
    border: 1rem double rgba(246, 212, 117, 0.6);
    text-align: justify;
    background-color: rgba(34, 23, 3, 0.7);
    border-radius: 2rem;
    height: auto;
    margin-bottom: 2rem;
    margin-top: 2rem;

    padding: 0;
    width: auto;
  }
  #tartalom > .row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
  }
  #szellemdiv {
    width: auto;
    height: auto;
    padding: auto;
    margin: auto;
  }
  .team-item {
    margin: 0;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 45%;
  }
  h2:first-of-type {
    font-size: 2rem;
    margin:10px 0;
    text-align: center;
    color: rgb(255, 238, 197);
    text-shadow: 3px 3px 3px rgba(188, 102, 3, 0.6);
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  section {
    height: 100vh;
    width: calc(100% - 145px);
    margin-left: 145px;
    background-position: center;
    background-size: cover;
  }
  #foKontainer {
    border: 1rem double rgba(246, 212, 117, 0.6);
    background-color: rgba(34, 23, 3, 0.7);
    border-radius: 2rem;
    height: 100%;
    width: 100%;
    margin: 0;
  }
  #tartalom > .row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
  }
  .team-item {
    margin: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-direction: space-evenly;
    position: relative;
    max-width: 35%;
    margin: 0;
    padding: 10px;
  }
  h2:first-of-type {
    font-size: 2rem;
    margin-top:10px;
    text-align: center;
    color: rgb(255, 238, 197);
    line-height: 1.2;
    text-shadow: 3px 3px 3px rgba(188, 102, 3, 0.6);
  }
}

@media (max-width: 992px) {
  section {
    width: 100%;
    margin: auto;
    padding: auto;
    background-image: url('https://kephost.net/p/MTQ1NjUxMg.png'),
      linear-gradient(0deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
  }
  #foKontainer {
    border: 1rem double rgba(246, 212, 117, 0.6);
    text-align: justify;
    background-color: rgba(34, 23, 3, 0.7);
    border-radius: 2rem;
    margin: 1rem 0;
    padding: auto;
    height: fit-content;
    width: fit-content;
  }
  #szellemdiv {
    display: none;
  }
  h4:first-of-type {
    font-size: 20px;
    font-weight: bold;
  }
  p:first-of-type {
    font-size: 20px;
    padding: 0;
    margin: 0;
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
  .card.team-item {
    width: 75%;
    padding: 1rem;
  }
  h4 {
    letter-spacing: 3px;
  }
  p {
    letter-spacing: 2px;
  }
  h2 {
    text-align: center;
    padding: 1.2rem 0;
    font-size: 10px;
  }
  #tartalom > .row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 567px) {
    .team-icon {
      width: 25px;
      height: 25px;
    }
    .team-icon a {
      font-size: 12px;
    }

    .team-icon-share a {
      margin-top: 5px;
      width: 25px;
      height: 25px;
      font-size: 12px;
    }
  }
}
</style>
