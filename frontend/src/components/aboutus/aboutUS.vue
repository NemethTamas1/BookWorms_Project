<script setup lang="ts">
import { onMounted } from 'vue'

declare global {
  interface Window {
    WOW: any
  }
}

onMounted(() => {
  new window.WOW().init()
})
</script>

<template>
  <!-- Ikonoknak -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
  <!-- Ikonoknak -->

  <!-- About Start -->
  <div class="container-fluid about bg-light py-5">
    <div class="container py-5" id="elso_resz_fodiv">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
          <div class="about-img">
            <img
              src="https://insideoutgroup.com.au/wp-content/uploads/2023/05/impediments-business-growth-harmonypsa-2.jpg"
              class="img-fluid w-100 rounded-top bg-white"
              alt="Image"
              style="margin: 1rem"
            />
            <img
              src="https://www.shutterstock.com/image-photo/businessman-analyzes-profitability-working-companies-600nw-2273999575.jpg"
              class="img-fluid w-100 rounded-bottom"
              alt="Image"
              style="margin: 1rem"
            />
          </div>
        </div>
        <div class="col-lg-6 col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
          <h4 class="text-primary" id="aboutus">Rólunk</h4>
          <h1 class="display-5 mb-4">Ahogy a könyveink, mi sem vagyunk egyformák.</h1>
          <div class="text ps-4 mb-4">
            <p style="font-size: large; text-align: justify">
              Egy dolgoban viszont egészen biztos. A <strong>BookWorms</strong>-nál meggyőződésünk,
              hogy minden könyvnek megvan az ereje, hogy megváltoztassa az életét. Inspirálja az
              elmét, és új világokba repítse az olvasót eszmei értékén túl is. Legyen szó a régóta
              vágyott több száz éves könyvéről, vagy egy időtlen klasszikusról, akár valami teljesen
              egyedülállóról.
            </p>
            <div id="idezet_behuzas" style="font-size: large">
              Gondosan válogatott és ellenőrzött kínálatunkban minden műgyűjtő megtalálhatja a
              számára megfelelő könyvet.
            </div>
            <p style="font-size: large; text-align: justify">
              Küldetésünk, hogy ezen ritka könyvek olyan gazdára lelhessenek, akik külső és belső
              értéküket is egyaránt becsülik. Mindemellé páratlan vásárlási élményt nyújtunk az Ön
              biztonságát és kényelmét előtérbe helyezve. Így nyújtunk otthonából egy olyan széles
              és elérhető könyvválasztékot, mely akár még <strong>Alexandriában sem</strong> volt
              megtalálható.
            </p>
          </div>
          <div class="row g-4 justify-content-between mb-5">
            <div class="col-lg-6 col-xl-5 d-flex align-items-center justify-content-center">
              <div>
                <p class="text-dark">
                  <i class="fas fa-check-circle text-primary me-1"></i>
                  <strong>Startégia & Piackutatás</strong>
                </p>
                <p class="text-dark mb-0">
                  <i class="fas fa-check-circle text-primary me-1"></i>
                  <strong>Prémium Szolgáltatások</strong>
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-xl-7 d-flex align-items-center justify-content-center">
              <div>
                <p class="text-dark">
                  <i class="fas fa-check-circle text-primary me-1"></i>
                  <strong>Biztonság & Garancia</strong>
                </p>
                <p class="text-dark mb-0">
                  <i class="fas fa-check-circle text-primary me-1"></i>
                  <strong>Kifinomult elegancia</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="row g-4 justify-content-between mb-5">
            <div class="col-xl-5">
              <a href="./" class="btn btn-primary rounded-pill py-3 px-5">Fedezze fel!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <!-- Team Start -->
  <div class="container-fluid team py-5">
    <div class="container py-5" id="masodik_resz_fodiv">
      <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s">
        <h4 class="text-primary display-4">
          <p><strong>BookWorms - A mi történetünk</strong></p>
          <p>A BookWorms dedikált csapatának tagjai</p>
        </h4>
      </div>
      <div class="row g-4 justify-content-center">
        <!-- Első csapat tag -->
        <div class="col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-item rounded">
            <div class="team-img">
              <img
                src="https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg"
                class="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div class="team-icon">
                <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                  <i class="fas fa-share-alt"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content bg-dark text-center rounded-bottom p-4">
              <div class="team-content-inner rounded-bottom">
                <h4 class="text-white">David Coffe Brock</h4>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Második csapat tag -->
        <div class="col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
          <div class="team-item rounded">
            <div class="team-img">
              <img
                src="https://img.freepik.com/free-photo/businessman-with-blue-eyes-beard-standing-self-assured-formal-suit-holding-laptop-hand-gazing-pleased-assured-being-ambitious-successful_176420-22701.jpg"
                class="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div class="team-icon">
                <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                  <i class="fas fa-share-alt"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content bg-dark text-center rounded-bottom p-4">
              <div class="team-content-inner rounded-bottom">
                <h4 class="text-white">Thommas O'Brainful</h4>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Harmadik csapat tag -->
        <div class="col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div class="team-item rounded">
            <div class="team-img">
              <img
                src="https://clasebcn.com/wp-content/uploads/2020/04/harold-03.jpg"
                class="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div class="team-icon">
                <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                  <i class="fas fa-share-alt"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content bg-dark text-center rounded-bottom p-4">
              <div class="team-content-inner rounded-bottom">
                <h4 class="text-white">Mark B Powernapping</h4>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-4 justify-content-center">
        <!-- Negyedik csapat tag -->
        <div class="col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
          <div class="team-item rounded">
            <div class="team-img">
              <img
                src="https://www.shutterstock.com/image-photo/portrait-successful-business-woman-sui-600nw-2477779589.jpg"
                class="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div class="team-icon">
                <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                  <i class="fas fa-share-alt"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content bg-dark text-center rounded-bottom p-4">
              <div class="team-content-inner rounded-bottom">
                <h4 class="text-white">Alice W. Wonderful</h4>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Ötödik csapat tag -->
        <div class="col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.9s">
          <div class="team-item rounded">
            <div class="team-img">
              <img
                src="https://img.freepik.com/free-photo/serious-man-suit-with-crossed-arms_23-2147574140.jpg"
                class="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div class="team-icon">
                <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                  <i class="fas fa-share-alt"></i>
                </a>
                <div class="team-icon-share">
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-content bg-dark text-center rounded-bottom p-4">
              <div class="team-content-inner rounded-bottom">
                <h4 class="text-white">Fabian S. Specialized</h4>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#aboutus {
  color: rgb(255, 174, 0);
  padding: 20px;
  border-left: 5px solid rgb(255, 217, 0);
}
#idezet_behuzas {
  background-color: rgba(255, 217, 0, 0.3);
  margin-left: 50px;
  padding: 20px;
  border-left: 5px solid rgb(255, 174, 0);
  text-align: justify;
  font-size: larger;
  margin-bottom: 1rem;
}
.container-fluid {
  background-image: url('https://i.pinimg.com/736x/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
}
#elso_resz_fodiv,
#masodik_resz_fodiv {
  background-color: rgba(252, 242, 212, 0.75);
  border: 20px double rgb(161, 122, 70);
  border-radius: 5px;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.animated.infinite {
  animation-iteration-count: infinite;
}
.animated.hinge {
  animation-duration: 2s;
}
.animated.bounceIn,
.animated.bounceOut,
.animated.flipOutX,
.animated.flipOutY {
  animation-duration: 0.75s;
}
@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateZ(0);
  }
  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
.bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}
@keyframes flash {
  0%,
  50%,
  to {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
.flash {
  animation-name: flash;
}
@keyframes pulse {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    transform: scaleX(1);
  }
}
.pulse {
  animation-name: pulse;
}
@keyframes rubberBand {
  0% {
    transform: scaleX(1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  to {
    transform: scaleX(1);
  }
}
.rubberBand {
  animation-name: rubberBand;
}
@keyframes shake {
  0%,
  to {
    transform: translateZ(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
}
.shake {
  animation-name: shake;
}
@keyframes headShake {
  0% {
    transform: translateX(0);
  }
  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }
  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }
  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }
  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }
  50% {
    transform: translateX(0);
  }
}
.headShake {
  animation-timing-function: ease-in-out;
  animation-name: headShake;
}
@keyframes swing {
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.swing {
  transform-origin: top center;
  animation-name: swing;
}
@keyframes tada {
  0% {
    transform: scaleX(1);
  }
  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
  }
  to {
    transform: scaleX(1);
  }
}
.tada {
  animation-name: tada;
}
@keyframes wobble {
  0% {
    transform: none;
  }
  15% {
    transform: translate3d(-25%, 0, 0) rotate(-5deg);
  }
  30% {
    transform: translate3d(20%, 0, 0) rotate(3deg);
  }
  45% {
    transform: translate3d(-15%, 0, 0) rotate(-3deg);
  }
  60% {
    transform: translate3d(10%, 0, 0) rotate(2deg);
  }
  75% {
    transform: translate3d(-5%, 0, 0) rotate(-1deg);
  }
  to {
    transform: none;
  }
}
.wobble {
  animation-name: wobble;
}
@keyframes jello {
  0%,
  11.1%,
  to {
    transform: none;
  }
  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
.jello {
  animation-name: jello;
  transform-origin: center;
}
@keyframes bounceIn {
  0%,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
.bounceIn {
  animation-name: bounceIn;
}
@keyframes bounceInDown {
  0%,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}
.bounceInDown {
  animation-name: bounceInDown;
}
@keyframes bounceInLeft {
  0%,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}
.bounceInLeft {
  animation-name: bounceInLeft;
}
@keyframes bounceInRight {
  0%,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}
.bounceInRight {
  animation-name: bounceInRight;
}
@keyframes bounceInUp {
  0%,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translateZ(0);
  }
}
.bounceInUp {
  animation-name: bounceInUp;
}
@keyframes bounceOut {
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.bounceOut {
  animation-name: bounceOut;
}
@keyframes bounceOutDown {
  20% {
    transform: translate3d(0, 10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}
.bounceOutDown {
  animation-name: bounceOutDown;
}
@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
}
.bounceOutLeft {
  animation-name: bounceOutLeft;
}
@keyframes bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}
.bounceOutRight {
  animation-name: bounceOutRight;
}
@keyframes bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}
.bounceOutUp {
  animation-name: bounceOutUp;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeIn;
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInDown {
  animation-name: fadeInDown;
}
@keyframes fadeInDownBig {
  0% {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInDownBig {
  animation-name: fadeInDownBig;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInLeft {
  animation-name: fadeInLeft;
}
@keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInLeftBig {
  animation-name: fadeInLeftBig;
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInRight {
  animation-name: fadeInRight;
}
@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInRightBig {
  animation-name: fadeInRightBig;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInUpBig {
  animation-name: fadeInUpBig;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fadeOut {
  animation-name: fadeOut;
}
@keyframes fadeOutDown {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}
.fadeOutDown {
  animation-name: fadeOutDown;
}
@keyframes fadeOutDownBig {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}
.fadeOutDownBig {
  animation-name: fadeOutDownBig;
}
@keyframes fadeOutLeft {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
.fadeOutLeft {
  animation-name: fadeOutLeft;
}
@keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
}
.fadeOutLeftBig {
  animation-name: fadeOutLeftBig;
}
@keyframes fadeOutRight {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
.fadeOutRight {
  animation-name: fadeOutRight;
}
@keyframes fadeOutRightBig {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}
.fadeOutRightBig {
  animation-name: fadeOutRightBig;
}
@keyframes fadeOutUp {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.fadeOutUp {
  animation-name: fadeOutUp;
}
@keyframes fadeOutUpBig {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}
.fadeOutUpBig {
  animation-name: fadeOutUpBig;
}
@keyframes flip {
  0% {
    transform: perspective(400px) rotateY(-1turn);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(400px) translateZ(150px) rotateY(-190deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: perspective(400px) translateZ(150px) rotateY(-170deg);
    animation-timing-function: ease-in;
  }
  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    animation-timing-function: ease-in;
  }
  to {
    transform: perspective(400px);
    animation-timing-function: ease-in;
  }
}
.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  animation-name: flip;
}
@keyframes flipInX {
  0% {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotateX(10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotateX(-5deg);
  }
  to {
    transform: perspective(400px);
  }
}
.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipInX;
}
@keyframes flipInY {
  0% {
    transform: perspective(400px) rotateY(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateY(-20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotateY(10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotateY(-5deg);
  }
  to {
    transform: perspective(400px);
  }
}
.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipInY;
}
@keyframes flipOutX {
  0% {
    transform: perspective(400px);
  }
  30% {
    transform: perspective(400px) rotateX(-20deg);
    opacity: 1;
  }
  to {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}
.flipOutX {
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}
@keyframes flipOutY {
  0% {
    transform: perspective(400px);
  }
  30% {
    transform: perspective(400px) rotateY(-15deg);
    opacity: 1;
  }
  to {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}
.flipOutY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipOutY;
}
@keyframes lightSpeedIn {
  0% {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }
  to {
    transform: none;
    opacity: 1;
  }
}
.lightSpeedIn {
  animation-name: lightSpeedIn;
  animation-timing-function: ease-out;
}
@keyframes lightSpeedOut {
  0% {
    opacity: 1;
  }
  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
.lightSpeedOut {
  animation-name: lightSpeedOut;
  animation-timing-function: ease-in;
}
@keyframes rotateIn {
  0% {
    transform-origin: center;
    transform: rotate(-200deg);
    opacity: 0;
  }
  to {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
}
.rotateIn {
  animation-name: rotateIn;
}
@keyframes rotateInDownLeft {
  0% {
    transform-origin: left bottom;
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}
.rotateInDownLeft {
  animation-name: rotateInDownLeft;
}
@keyframes rotateInDownRight {
  0% {
    transform-origin: right bottom;
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}
.rotateInDownRight {
  animation-name: rotateInDownRight;
}
@keyframes rotateInUpLeft {
  0% {
    transform-origin: left bottom;
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}
.rotateInUpLeft {
  animation-name: rotateInUpLeft;
}
@keyframes rotateInUpRight {
  0% {
    transform-origin: right bottom;
    transform: rotate(-90deg);
    opacity: 0;
  }
  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}
.rotateInUpRight {
  animation-name: rotateInUpRight;
}
@keyframes rotateOut {
  0% {
    transform-origin: center;
    opacity: 1;
  }
  to {
    transform-origin: center;
    transform: rotate(200deg);
    opacity: 0;
  }
}
.rotateOut {
  animation-name: rotateOut;
}
@keyframes rotateOutDownLeft {
  0% {
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    transform-origin: left bottom;
    transform: rotate(45deg);
    opacity: 0;
  }
}
.rotateOutDownLeft {
  animation-name: rotateOutDownLeft;
}
@keyframes rotateOutDownRight {
  0% {
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    transform-origin: right bottom;
    transform: rotate(-45deg);
    opacity: 0;
  }
}
.rotateOutDownRight {
  animation-name: rotateOutDownRight;
}
@keyframes rotateOutUpLeft {
  0% {
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    transform-origin: left bottom;
    transform: rotate(-45deg);
    opacity: 0;
  }
}
.rotateOutUpLeft {
  animation-name: rotateOutUpLeft;
}
@keyframes rotateOutUpRight {
  0% {
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    transform-origin: right bottom;
    transform: rotate(90deg);
    opacity: 0;
  }
}
.rotateOutUpRight {
  animation-name: rotateOutUpRight;
}
@keyframes hinge {
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    transform: rotate(80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  40%,
  80% {
    transform: rotate(60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
.hinge {
  animation-name: hinge;
}
@keyframes jackInTheBox {
  0% {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }
  50% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(3deg);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.jackInTheBox {
  animation-name: jackInTheBox;
}
@keyframes rollIn {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate(-120deg);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.rollIn {
  animation-name: rollIn;
}
@keyframes rollOut {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate(120deg);
  }
}
.rollOut {
  animation-name: rollOut;
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
.zoomIn {
  animation-name: zoomIn;
}
@keyframes zoomInDown {
  0% {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInDown {
  animation-name: zoomInDown;
}
@keyframes zoomInLeft {
  0% {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInLeft {
  animation-name: zoomInLeft;
}
@keyframes zoomInRight {
  0% {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInRight {
  animation-name: zoomInRight;
}
@keyframes zoomInUp {
  0% {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInUp {
  animation-name: zoomInUp;
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
.zoomOut {
  animation-name: zoomOut;
}
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomOutDown {
  animation-name: zoomOutDown;
}
@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
}
.zoomOutLeft {
  animation-name: zoomOutLeft;
}
@keyframes zoomOutRight {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
    transform-origin: right center;
  }
}
.zoomOutRight {
  animation-name: zoomOutRight;
}
@keyframes zoomOutUp {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomOutUp {
  animation-name: zoomOutUp;
}
@keyframes slideInDown {
  0% {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}
.slideInDown {
  animation-name: slideInDown;
}
@keyframes slideInLeft {
  0% {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}
.slideInLeft {
  animation-name: slideInLeft;
}
@keyframes slideInRight {
  0% {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}
.slideInRight {
  animation-name: slideInRight;
}
@keyframes slideInUp {
  0% {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}
.slideInUp {
  animation-name: slideInUp;
}
@keyframes slideOutDown {
  0% {
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
}
.slideOutDown {
  animation-name: slideOutDown;
}
@keyframes slideOutLeft {
  0% {
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
}
.slideOutLeft {
  animation-name: slideOutLeft;
}
@keyframes slideOutRight {
  0% {
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}
.slideOutRight {
  animation-name: slideOutRight;
}
@keyframes slideOutUp {
  0% {
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
}
.slideOutUp {
  animation-name: slideOutUp;
}
.about {
  background-color: #f8f9fa;
  padding: 3rem 0;
}

.about-img {
  position: relative;
  z-index: 1;
}

.about-img img {
  width: 100%;
  border-radius: 5px;
}

.btn {
  font-weight: 600;
  transition: 0.5s;
}

.btn-primary {
  background: rgba(254, 180, 51, 0.2);
  color: #fff;
}

.btn-primary:hover {
  background: #f8c265;
  color: #fff;
}

.team-item {
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  background: #ffffff;
  position: relative;
}

.team-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 0 0 5px 5px;
}

.team-content h4 {
  color: #061569;
  margin-bottom: 5px;
}

.team-content p {
  color: #ffffff;
  margin-bottom: 0;
}

/*** Spinner Start ***/
/*** Spinner ***/
#spinner {
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.5s ease-out,
    visibility 0s linear 0.5s;
  z-index: 99999;
}

#spinner.show {
  transition:
    opacity 0.5s ease-out,
    visibility 0s linear 0s;
  visibility: visible;
  opacity: 1;
}
/*** Spinner End ***/

.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  z-index: 99;
}

/*** Button Start ***/
.btn {
  font-weight: 600;
  transition: 0.5s;
}

.btn-square {
  width: 32px;
  height: 32px;
}

.btn-sm-square {
  width: 34px;
  height: 34px;
}

.btn-md-square {
  width: 44px;
  height: 44px;
}

.btn-lg-square {
  width: 56px;
  height: 56px;
}

.btn-xl-square {
  width: 66px;
  height: 66px;
}

.btn-square,
.btn-sm-square,
.btn-md-square,
.btn-lg-square,
.btn-xl-square {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  border-radius: 50%;
}

.btn.btn-primary {
  background: #342100;
  color: rgb(227, 185, 69);
  font-family: 'Roboto', sans-serif;
  border: 3px solid rgb(227, 185, 69);
  font-weight: 700;
  transition: 0.5s;
}
.btn.btn-primary:hover {
  background: rgb(182, 133, 0);
  color: white;
}

.btn.btn-dark {
  background: var(--bs-dark) !important;
  color: var(--bs-white) !important;
  font-family: 'Roboto', sans-serif;
  border: none;
  font-weight: 400;
  transition: 0.5s;
}

.btn.btn-dark:hover {
  background: var(--bs-white) !important;
  color: var(--bs-dark) !important;
}

.btn.btn-light {
  background: var(--bs-primary) !important;
  color: var(--bs-white) !important;
  font-family: 'Roboto', sans-serif;
  border: none;
  font-weight: 400;
  transition: 0.5s;
}

.btn.btn-light:hover {
  background: var(--bs-white) !important;
  color: var(--bs-dark) !important;
}
/*** Topbar Start ***/
.topbar {
  padding: 2px 10px 2px 20px;
  background: var(--bs-dark) !important;
}

@media (max-width: 768px) {
  .topbar {
    display: none;
  }
}
/*** Topbar End ***/

/*** Navbar ***/
.sticky-top,
.sticky-top .container {
  transition: 0.5s !important;
}

.navbar .navbar-nav .nav-item.nav-link,
.navbar .navbar-nav .nav-link {
  color: var(--bs-dark) !important;
}

.navbar .navbar-nav .nav-item {
  position: relative;
  margin: 0 5px !important;
}

.navbar .navbar-nav .nav-item::before,
.navbar .navbar-nav .nav-item::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: 0px solid var(--bs-primary);
  transition: 0.5s;
}

.navbar .navbar-nav .nav-item::before {
  top: 0;
  left: 0;
}
.navbar .navbar-nav .nav-item::after {
  bottom: 0;
  right: 0;
}

.navbar .navbar-nav .nav-item:hover::after,
.navbar .navbar-nav .nav-item:hover::before,
.navbar .navbar-nav .nav-item.active::after,
.navbar .navbar-nav .nav-item.active::before {
  width: 100%;
  border-width: 1px;
}

.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .nav-link.active,
.sticky-top .navbar .navbar-nav .nav-link:hover,
.sticky-top .navbar .navbar-nav .nav-link.active {
  color: var(--bs-primary) !important;
}

.navbar .dropdown-toggle::after {
  border: none;
  content: '\f107' !important;
  font-family: 'Font Awesome 5 Free';
  font-weight: 600;
  vertical-align: middle;
}

@media (min-width: 1200px) {
  .navbar .nav-item .dropdown-menu {
    display: block;
    visibility: hidden;
    top: 100%;
    transform: rotateX(-75deg);
    transform-origin: 0% 0%;
    border: 0;
    border-radius: 10px;
    margin-top: 20px !important;
    transition: 0.5s;
    opacity: 0;
    z-index: 9;
  }
}

@media (max-width: 1200px) {
  .navbar .nav-item .dropdown-menu {
    margin-top: 15px !important;
    transition: 0.5s;
  }
}

@media (max-width: 991px) {
  .navbar .navbar-nav .nav-item.nav-link {
    margin: 15px 0 !important;
  }
}

.dropdown .dropdown-menu a:hover {
  background: var(--bs-primary) !important;
  color: var(--bs-white);
}

.navbar .nav-item:hover .dropdown-menu {
  transform: rotateX(0deg);
  visibility: visible;
  background: var(--bs-light) !important;
  margin-top: 20px !important;
  transition: 0.5s;
  opacity: 1;
}

.navbar .navbar-toggler {
  padding: 8px 15px;
  color: var(--bs-dark);
  background: var(--bs-primary);
}

#searchModal .modal-content {
  background: rgba(250, 250, 250, 0.6);
}
/*** Navbar End ***/

/*** Carousel Header Start ***/
.header-carousel .header-carousel-item {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.owl-prev,
.owl-next {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px 20px;
  border-radius: 40px;
  background: var(--bs-primary);
  color: var(--bs-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
}

.owl-prev {
  left: 30px;
}

.owl-next {
  right: 30px;
}

.owl-prev:hover,
.owl-next:hover {
  background: var(--bs-dark) !important;
  color: var(--bs-white) !important;
}

.header-carousel .header-carousel-item-img-1,
.header-carousel .header-carousel-item-img-2,
.header-carousel .header-carousel-item-img-3 {
  position: relative;
  overflow: hidden;
}

.header-carousel .header-carousel-item-img-1::before,
.header-carousel .header-carousel-item-img-2::before,
.header-carousel .header-carousel-item-img-3::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  top: -300px;
  right: -300px;
  border-radius: 300px;
  border: 100px solid rgba(68, 210, 246, 0.2);
  animation: RotateMoveCircle 10s linear infinite;
  background: transparent;
  z-index: 2 !important;
}

@keyframes RotateMoveCircle {
  0% {
    top: -400px;
  }
  50% {
    right: -200px;
  }
  75% {
    top: -200px;
  }
  100% {
    top: -400px;
  }
}

.header-carousel .header-carousel-item-img-1::after,
.header-carousel .header-carousel-item-img-2::after,
.header-carousel .header-carousel-item-img-3::after {
  content: '';
  position: absolute;
  width: 150px;
  height: 1200px;
  top: -150px;
  left: 70px;
  transform: rotate(-30deg);
  background: rgba(68, 210, 246, 0.2);
  animation: RotateMoveRight 5s linear infinite;
  z-index: 2 !important;
}

@keyframes RotateMoveRight {
  0% {
    left: 0px;
  }
  50% {
    left: 70px;
  }
  100% {
    left: 0px;
  }
}

.header-carousel .header-carousel-item::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 1200px;
  top: -150px;
  left: -265px;
  transform: rotate(-30deg);
  background: var(--bs-dark);
  animation: RotateMoveLeft 5s linear infinite;
  opacity: 0.7;
  z-index: 2 !important;
}

@keyframes RotateMoveLeft {
  0% {
    left: -240px;
  }
  50% {
    left: -300px;
  }
  100% {
    left: -240px;
  }
}

.header-carousel .header-carousel-item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2 !important;
}

.header-carousel .header-carousel-item .carousel-caption {
  position: absolute;
  width: 80%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9;
}

@media (max-width: 992px) {
  .header-carousel .header-carousel-item .carousel-caption {
    width: 100% !important;
    margin-left: 0 !important;
    padding: 0 10px;
  }
  .header-carousel-item img {
    height: 700px;
    object-fit: cover;
  }

  .owl-prev,
  .owl-next {
    top: 40px !important;
  }

  .owl-prev {
    left: 65%;
  }
}
/*** Header Carousel End ***/

/*** Single Page Hero Header Start ***/
.bg-breadcrumb {
  position: relative;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/carousel-1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 0 60px 0;
}

.bg-breadcrumb .breadcrumb-item a {
  color: var(--bs-white) !important;
}

.bg-breadcrumb .bg-breadcrumb-single {
  position: absolute;
  width: 500px;
  height: 1200px;
  top: 0px;
  left: 0;
  margin-left: 30px;
  transform: rotate(-30deg);
  background: var(--bs-dark);
  animation: RotateMoveLeft 5s linear infinite;
  opacity: 0.7;
  z-index: 2 !important;
}

.bg-breadcrumb::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  top: -150px;
  right: -150px;
  border-radius: 200px;
  border: 80px solid rgba(68, 210, 246, 0.2);
  animation: RotateMoveCircle 10s linear infinite;
  background: transparent;
  z-index: 2 !important;
}

@keyframes RotateMoveCircle {
  0% {
    top: -200px;
  }
  50% {
    right: -100px;
  }
  75% {
    top: -100px;
  }
  100% {
    top: -200px;
  }
}

.bg-breadcrumb::after {
  content: '';
  position: absolute;
  width: 150px;
  height: 1200px;
  top: -150px;
  left: 0;
  margin-left: 160px;
  transform: rotate(-30deg);
  background: rgba(68, 210, 246, 0.2);
  animation: RotateMoveRight 5s linear infinite;
  z-index: 2 !important;
}
/*** Single Page Hero Header End ***/

/*** About Start ***/
.about .text {
  position: relative;
  padding-left: 20px; /* Ez az érték állítja be a szöveg és a vonal közötti távolságot */
}

.about .text::before {
  content: ' ';
  width: 4px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
/*** About End ***/

/*** Service Start ***/
.service .service-item {
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.3);
}

.service .service-item .service-img {
  position: relative;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.service .service-item .service-img img {
  transition: 0.5s;
}

.service .service-item:hover .service-img img {
  transform: scale(1.2);
}

.service .service-item .service-img::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  right: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: rgba(246, 222, 68, 0.2);
  transition: 0.5s;
}

.service .service-item:hover .service-img::after {
  width: 100% !important;
  height: 100% !important;
}

.service .service-item .service-content {
  position: relative;
}

.service .service-item .service-content::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: var(--bs-dark);
  transition: 0.5s;
  z-index: 1;
}

.service .service-item:hover .service-content::after {
  width: 100% !important;
  height: 100% !important;
}

.service .service-item .service-content .service-content-inner {
  transition: 0.5s;
}

.service .service-item:hover .service-content .service-content-inner {
  position: relative;
  color: var(--bs-white) !important;
  transition: 0.5s;
  z-index: 2;
}

.service .service-item:hover .service-content .service-content-inner a.h4 {
  color: var(--bs-white) !important;
  transition: 0.5s;
}

.service .service-item:hover .service-content .service-content-inner a.h4:hover {
  color: var(--bs-primary) !important;
}
/*** Service End ***/

/*** Project Start ***/
.project .project-carousel.owl-carousel {
  height: 100%;
}

.project .project-carousel .project-item {
  position: relative;
  overflow: hidden;
}

.project .project-carousel .project-item .project-img {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.project .project-carousel .project-item .project-img::after {
  content: '';
  width: 100%;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: rgba(246, 222, 68, 0.2);
  transition: 0.5s;
}

.project .project-carousel .project-item:hover .project-img::after {
  height: 100%;
}

.project .project-carousel .project-item .project-img img {
  transition: 0.5s;
}

.project .project-carousel .project-item:hover .project-img img {
  transform: scale(1.2);
}

.project .project-carousel .project-item .project-content {
  position: relative;
  width: 75%;
  height: 100%;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
}

.project .project-carousel .project-item .project-content::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px !important;
  background: var(--bs-dark);
  transition: 0.5s;
}

.project .project-carousel .project-item .project-content .project-content-inner {
  position: relative;
  z-index: 2;
}

.project .project-carousel .project-item:hover .project-content .project-content-inner p,
.project .project-carousel .project-item:hover .project-content .project-content-inner a.h4,
.project
  .project-carousel
  .project-item:hover
  .project-content
  .project-content-inner
  .project-icon
  i {
  color: var(--bs-white) !important;
  transition: 0.5s;
}

.project .project-carousel .project-item:hover .project-content .project-content-inner a.h4:hover {
  color: var(--bs-primary) !important;
}

.project .project-carousel .project-item:hover .project-content::after {
  height: 100%;
}

.project-carousel .owl-dots {
  position: absolute;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -120px;
  transition: 0.5s;
}

.project-carousel .owl-dots .owl-dot {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 15px;
  background: var(--bs-dark);
  transition: 0.5s;
}

.project-carousel .owl-dots .owl-dot.active {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  border: 8px solid var(--bs-primary);
}
/*** Project End ***/

/*** Blog Start ***/
.blog .blog-item .project-img {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: 0.5s;
}

.blog .blog-item .project-img .blog-plus-icon {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(246, 222, 68, 0.2);
  transition: 0.5s;
  opacity: 0;
}

.blog .blog-item:hover .project-img .blog-plus-icon {
  opacity: 1;
}

.blog .blog-item .project-img img {
  transition: 0.5s;
}

.blog .blog-item:hover .project-img img {
  transform: scale(1.3);
}

/*** Blog End ***/

/*** Team Start ***/
.team .team-item {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(163, 111, 0, 0.5);
  transition: 0.5s;
}

.team .team-item:hover {
  border: none !important;
}

/* Mozgó keret színe */
.team .team-item::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  border: 1px solid;
  border-color: rgba(180, 87, 0, 0.5);
  z-index: 5;
  transition: 1s;
  opacity: 0;
}

.team .team-item::before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 10px;
  border: 1px solid;
  border-color: rgba(254, 180, 51, 0.5);
  z-index: 5;
  transition: 1s;
  opacity: 0;
}

.team .team-item:hover:after,
.team .team-item:hover::before {
  width: 100% !important;
  height: 100% !important;
  opacity: 1;
}

.team .team-item .team-img {
  position: relative;
  overflow: hidden;
}
/* Képre a függöny színe */
.team .team-item .team-img::after {
  content: '';
  width: 100%;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: rgba(251, 227, 163, 0.1);
  transition: 0.5s;
}

.team .team-item:hover .team-img::after {
  height: 100%;
}

.team .team-item .team-img .team-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 8;
  transition: 0.5s;
}

.team .team-item .team-img .team-icon .team-icon-share {
  position: relative;
  margin-top: -200px;
  transition: 0.5s;
  z-index: 9;
}

.team .team-item:hover .team-img .team-icon .team-icon-share {
  margin-top: 0 !important;
}

.team .team-item .team-content {
  position: relative;
}
/* Név felső sor div */
.team .team-item .team-content::after {
  color: wheat;
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 229, 97, 0.5);
  transition: 0.5s;
}

/* Név alsó sor div */
.team .team-item .team-content::before {
  color: wheat;
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgba(255, 229, 97, 0.5);
  transition: 0.5s;
}

.team .team-item:hover .team-content::after,
.team .team-item:hover .team-content::before {
  width: 100% !important;
  height: 50% !important;
}

.team .team-item:hover .team-content .team-content-inner {
  position: relative;
  z-index: 2;
}

.team .team-item .team-content .team-content-inner h4,
.team .team-item .team-content .team-content-inner p {
  transition: 0.5s;
}
h4 > p {
  color: rgba(163, 111, 0, 0.8);
}

/*** Team End ***/
</style>
