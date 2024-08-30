<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// NINCS LIMITÁLVA A LEFUTÁSA
onMounted(() => {
  setTimeout(() => {
    const element = document.getElementById('welcome_container')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 3000)
})
// 'LEUGRÁS VÉGE' \\

// LAP TETEJÉRE GOMB \\
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Finom görgetés az oldal tetejére
  })
}

const handleScroll = () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn')
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn!.style.display = 'block'
  } else {
    scrollToTopBtn!.style.display = 'none'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
// LAP TETEJÉRE GOMB \\
</script>

<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />

  <!-- Oldal tetejére gomb -->
  <button id="scrollToTopBtn" @click="scrollToTop" title="Ugrás az oldal tetejére">
    <i class="fas fa-circle-up"></i>
  </button>
  <!-- Oldal tetejére gomb -->

  <div class="container-fluid topLabel mb-5">
    <div class="topLabelText">
      <a href="#fooldal_nyitoszoveg" id="anchor_foOldalon">
        <h1>BookWorms</h1>
        <h3>Ahol a motiváció és az irodalom kéz a kézben jár</h3>
      </a>
    </div>
  </div>
  <div class="container-fluid" id="welcome_container">
    <div class="row">
      <div class="col-12">
        <div class="welcome">
          <h2 id="fooldal_nyitoszoveg" class="mb-4">Üdvözöljük Könyvesboltunkban!</h2>
          <div class="row mb-4">
            <div class="col koszonto">
              <h4>
                <hr />
                <div class="row">
                  <div class="col">
                    Örömmel köszöntjük a <b><i>Prémium Könyvek Webáruházában</i></b
                    >, ahol olyan könyvritkaságokat tárunk Ön elé, melyekről a legelszántabb gyűjtök
                    is csak álmodoznak.
                  </div>
                </div>
                <hr />
              </h4>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-xl-6">
              <div class="row">
                <div class="col" id="premium_eleterzes">
                  Prémium életérzés otthonában!
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col elso_szoveg">
                  Képzelje el, ahogy egy ritka és gyönyörű könyv díszíti otthonának központi helyét,
                  egy olyan műalkotás mely után régóta álmodozik. Ennek a könyvnek a birtoklása nem
                  csupán egy gyűjtemény gyarapítását jelenti, hanem megtestesíti a Prémium
                  életérzést. Minden egyes lapjukból árad az elegancia, a luxus érzése, amely révén
                  otthona nemcsak otthon lesz, hanem maga a művészeti galéria is.
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-6">
              <div class="col book">
                <div class="card lap1"></div>
                <div class="card lap2"></div>
                <div class="card lap3"></div>
                <div class="card kartyan_szovegek_DIVJE">
                  <ul class="kartyakon_szovegek">
                    <li>Szenvedélyes könyvgyűjtőnek érzi magát?</li>
                    <li>Értékeli a kultúra és az irodalom legjavát?</li>
                    <li>
                      Olyan különlegesen és egyedi könyvet keres, amire a szomszédai is
                      irigykednének?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <!-- 2. sor || KÉPEK OSZLOP -->
          <div class="row">
            <div class="col col-xl-6" id="konyvespolc">
              <div class="row">
                <div class="col col-xl-4" id="book1">
                  <img src="https://kephost.net/p/MTM0ODc2MA.png" />
                </div>
                <div class="col col-xl-4" id="book2">
                  <img src="https://kephost.net/p/MTM0ODc1NA.png" />
                </div>
                <div class="col col-xl-4" id="book3">
                  <img src="https://kephost.net/p/MTM0ODc1NQ.png" />
                </div>
              </div>
            </div>

            <!-- 2. sor || SZÖVEG OSZLOP -->
            <div class="col col-xl-6" id="masodiksor_szoveg">
              <div class="row">
                <div class="col" id="premium_eleterzes">
                  Ahol a kultúra kincsei újra életre kelnek
                </div>
              </div>
              <hr />

              Az általunk kínált könyvek valódi ritkaságok, olyan műalkotások, amelyeknek minden
              darabja egyedi és megismételhetetlen. Ezek a könyvek nemcsak hogy ritkák, de egyenesen
              pótolhatatlanok, hiszen minden példány egy különleges történetet hordoz magában. Ez
              nem csupán egy könyv megvásárlása, hanem egy örökség megszerzése, amely generációkon
              átívelően megőrzi értékét.
              <div class="row">
                <div class="col mt-3" id="gombok_div">
                  <RouterLink to="/books" class="btn btn-info" id="megnezem">Megnézem! </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <!-- KÖZTES BANNER || KÖZTES BANNER   -->
          <div class="row">
            <div class="col">
              <RouterLink to="/books">
                <div class="elso_banner"></div>
              </RouterLink>
            </div>
          </div>
          <!-- KÖZTES BANNER || KÖZTES BANNER   -->

          <hr />
          <div class="row">
            <!-- 3. SOR || 1. OSZLOP -->
            <div class="col col-xl-6 harmadiksor_szoveg">
              <div class="row">
                <div class="col" id="kincs_es_kultura">A megbízhatóság és minőség találkozása</div>
              </div>
              <hr />
              <p>
                Minden egyes könyvünk egy alapos szakértői vizsgálaton esik át, mielőtt bemutatásra
                kerülne. Ezzel biztosítva, hogy csak és kizárólag olyan művek kerülhetnek
                kínálatunkba, amelyek megfelelnek a legmagasabb minőségi követelményeknek.
                <br /><br />Legyen szó a könyv eredetiségéről, állapotáról vagy történelmi
                hátteréről. Szakértőink gondosan utánajárnak minden egyes könyv múltjának,
                biztosítva, hogy Ön pontos és részletes információkat kapjon a megvásárolni kívánt
                könyvről. <br /><br />Amikor egy könyvre licitál nálunk, nem csupán egy könyvet kap,
                hanem egy garantáltan hiteles és értékes műkincset, amelynek minőségére teljes körű
                garanciát vállalunk. Ezáltal Ön biztos lehet benne, hogy gyűjteménye a legmagasabb
                színvonalat képviseli.
              </p>
              <div class="row">
                <div class="col mt-3" id="gombok_div">
                  <RouterLink to="/books" class="btn btn-info" id="megnezem">Megnézem!</RouterLink>
                </div>
              </div>
            </div>

            <!-- 3. SOR || 2. OSZLOP -->
            <div class="col col-xl-6" id="safe">
              <RouterLink to="/books">
                <img
                  src="https://kephost.net/p/MTM0ODc1Nw.jpg"
                  id="safe_kep"
                  alt="Luxus minőségű doboz, mely értékes kincset rejt."
                />
              </RouterLink>
            </div>
          </div>
          <!-- 4. SOR || 1. OSZLOP -->

          <div class="row">
            <div class="col col-xl-6" id="safe">
              <RouterLink to="/books">
                <img
                  src="https://kephost.net/p/MTM0ODc2MQ.png"
                  id="safe_kep"
                  alt="Aukcio illusztrációja"
                />
              </RouterLink>
            </div>

            <!-- 4. sor || SZÖVEG OSZLOP -->
            <div class="col col-xl-6" id="negyediksor_szov">
              <hr />
              <div class="row">
                <div class="col" id="regisszt_bizt">Ne maradjon le erről!</div>
              </div>
              <hr />

              Tegyen egy könnyed virtuális sétát különleges könyveink között és regisztráljon előre!
              A regisztrált és visszaigazolást nyert érdeklődőink mindegyike valós és szenvedélyes
              gyűjtöket jelent az aukcióinkon. A licitálásra ugyanis regisztráció szükséges nálunk
              az Ön által kiválasztott könyvre.
              <br />A licitálás előtt nálunk lehetősége nyílik felhasználói nevének kiválasztásához,
              mely folyamat elősegíti a licitálók védelmét és biztonságát. Ezáltal nem csupán
              biztonságosan, hanem otthona kényelméből, vagy a világ bármely pontjáról lehetősége
              lesz álmai könyvének megszerzéséhez. <br />Továbbá a legújabb ritka és prémium könyvek
              kikiáltási időpontjáról is teljes körű információhoz jut.
              <b>Legyen velünk mindig lépéselőnyben!</b>
            </div>
          </div>

          <div class="col-10 m-auto" id="utolso_sor">
            <hr />
            Mi elhoztuk Önnek álmai könyveit, de a történetük folytatása most <br /><b
              ><i>az Ön kezében van!</i></b
            >
          </div>
          <div class="col my-3" id="gombok_div">
            <RouterLink to="/books" class="btn btn-info" id="tovabbakonyvekhez"
              >Fedezze fel kínálatunkat!
            </RouterLink>
            <hr />
            <div class="row">
              <div class="col">
                <RouterLink to="/books">
                  <div class="masodik_banner"></div>
                </RouterLink>
              </div>
            </div>
            <hr />
            <hr />
          </div>

          <!-- // FOOOOTER \\ -->
          <section id="kapcsolat">
            <div class="container">
              <div class="row mb-3">
                <div class="col-6" id="footer_cim">
                  Kérdése van, vagy további információra van szüksége?
                </div>
                <div class="col-6" id="footer_cim">Örömmel állunk rendelkezésére!</div>
              </div>
              <div class="row">
                <div class="col-6">
                  <section id="form_div">
                    <form method="post" action="#">
                      <div class="mb-3">
                        <label for="name_form_question"> Adja meg a teljes nevét:</label>
                        <input
                          name="name"
                          placeholder="Teljes neve"
                          type="text"
                          class="form-control"
                          id="name_form_question"
                          minlength="8"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="email_form_question">Adja meg az e-mail címét:</label>
                        <input
                          name="e-mail"
                          placeholder="pelda@pelda.hu"
                          type="text"
                          class="form-control"
                          id="email_form_question"
                          minlength="10"
                          maxlength="80"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="message_form_question">Kérdése:</label>
                        <textarea
                          name="message"
                          placeholder="Kérjük fejtse ki kérdését!"
                          class="form-control"
                          id="message_form_question"
                          maxlength="500"
                        ></textarea>
                      </div>
                      <div class="text-center">
                        <a href="#" class="btn btn-primary form-button-submit">Üzenet küldése</a>
                      </div>
                    </form>
                  </section>
                </div>
                <div class="col-6">
                  <div class="row mb-3">
                    <div class="col">
                      <p>
                        Csapatunk elkötelezett amellett, hogy a legjobb ügyfélszolgálati élményt
                        nyújtsa Önnek. Akár a termékeinkkel, szolgáltatásainkkal kapcsolatban van
                        kérdése, akár segítségre van szüksége egy megrendelés során, mi itt vagyunk,
                        hogy segítsünk. ű
                      </p>
                      <p>
                        Töltse ki az alábbi űrlapot, és mi a lehető leghamarabb felvesszük Önnel a
                        kapcsolatot. Minden megkeresést nagyra értékelünk, és arra törekszünk, hogy
                        minden kérdésre gyors és hatékony választ adjunk.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col col-xl-6" id="cim_telefon_email">
                      <p class="address">
                        <a href="https://shorturl.at/1wm3z">
                          <section>Hős utca 1/A Budapest, 1101 Magyarország</section>
                        </a>
                      </p>
                      <p class="phone">+36 (1) 220-2020</p>
                      <p class="email">info@bookworms.hu</p>
                    </div>

                    <div class="col col-xl-6" id="socialmedia_links">
                      <p>
                        <a href="/" class="facebook"><i class="fab fa-facebook-f"></i> Facebook</a>
                      </p>
                      <p>
                        <a href="/" class="instagram"><i class="fab fa-instagram"></i> Instagram</a>
                      </p>
                      <p>
                        <a href="/" class="tiktok"><i class="fab fa-tiktok"></i> TikTok</a>
                      </p>
                      <p>
                        <a href="/" class="twitter"><i class="fab fa-twitter"></i> Twitter</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- kapcsolat VÉGE -->
        </div>
      </div>
    </div>
  </div>
</template>

<!--Style-->
<style scoped>
/* Szalagcím dizájn */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
/* Divben nyitó szalagcím dizájn */
@import url('https://fonts.googleapis.com/css?family=Sofia&effect=fire');
/* Div>bekezdés szöveg dizájn */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');

/* További módosítások || További módosítások || További módosítások || További módosítások || További módosítások || További módosítások || */

#scrollToTopBtn {
  display: none; /* Alapértelmezetten rejtve */
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  font-size: 28px;
  background-color: #d1a221cf;
  color: white;
  border: none;
  outline: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  transition:
    width 0.3s ease,
    height 0.3s ease,
    font-size 0.3s ease,
    background-color 0.3s ease;
}

#scrollToTopBtn:hover {
  background-color: #c99505cf;
  width: 70px;
  height: 70px;
  font-size: 32px;
}

/* kapcsolat Ikonjai */
.address::before {
  /* Házikó ikon */
  content: '\f015';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 10px;
}

.phone::before {
  /* Telefon ikon */
  content: '\f095';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 10px;
}

.email::before {
  /* Levél ikon */
  content: '\f0e0';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 10px;
}
.facebook {
  text-decoration: none;
  color: #3b5998;
  margin-right: 10px;
}

/* Instagram */
.instagram {
  text-decoration: none;
  color: #e4405f;
  margin-right: 10px;
}

/* TikTok */
.tiktok {
  text-decoration: none;
  color: #010101;
  margin-right: 10px;
}

/* Twitter */
.twitter {
  text-decoration: none;
  color: #1da1f2;
  margin-right: 10px;
}
.address > a {
  color-scheme: unset;
  text-decoration: none;
}
#cim_telefon_email a {
  color: #777;
}
.phone,
.email {
  font-size: 1.1rem;
}
.email {
  user-select: none;
}
#socialmedia_links > p > a {
  font-size: 1.3rem;
}
#socialmedia_links {
  padding-left: 60px;
}
/* |||  |||  Ikonok VÉGE  |||  ||| */
/* kapcsolat Section */
#kapcsolat {
  border-radius: 5rem;
  background-color: rgb(255, 238, 197);
  padding: 50px 0;
}

#kapcsolat header {
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 30px;
}

#kapcsolat header strong {
  color: #333;
}

#kapcsolat .container {
  max-width: 960px;
  margin: 0 auto;
}

#kapcsolat .row {
  display: flex;
  justify-content: space-between;
}

#kapcsolat .col-6 {
  flex: 0 0 48%;
}

#kapcsolat input[type='text'],
#kapcsolat textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}

#kapcsolat textarea {
  height: 150px;
}

#kapcsolat .btn {
  background-color: #f76c6c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: background-color 0.3s ease;
}

#kapcsolat .btn:hover {
  background-color: #f55656;
}

#kapcsolat p {
  color: #777;
  margin-bottom: 15px;
  line-height: 1.6;
}

#kapcsolat .col-6 p {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

#kapcsolat .text-center {
  text-align: center;
}

/* kapcsolat VÉGE */

#header {
  margin-top: 3rem;
  font-size: 3rem;
  font-family: 'Libre Baskerville', serif;
}

#koszononto_uzenet {
  background-color: #a48e51;
}

.elso_banner {
  background-image: url('https://kephost.net/p/MTM0ODc1OQ.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 250px;
  width: 100%;
}
.masodik_banner {
  background-image: url('https://kephost.net/p/MTM0ODc1OQ.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  width: 100%;
  display: block;
}
#safe {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

#safe_kep {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* KÖNYVESPOLC */ /* KÖNYVESPOLC */
#welcome_container {
  width: 65%;
  margin-bottom: 3rem;
}
hr {
  border: none;
  height: 5px;
  background-color: rgba(58, 39, 1, 0.3);
}
h4 hr {
  border: none;
  height: 5px;
  background-color: rgb(108, 92, 1);
}
.elso_szoveg,
#masodiksor_szoveg,
.harmadiksor_szoveg,
#negyediksor_szov {
  font-size: 1rem;
  text-align: justify;
  padding: 10px;
}
#premium_eleterzes,
#kincs_es_kultura,
#regisszt_bizt {
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
}
#footer_cim {
  font-weight: bold;
  text-align: center;
  font-size: 1.1rem;
}

#konyvespolc {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#book1,
#book2,
#book3 {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

#book1:hover,
#book2:hover,
#book3:hover {
  transform: perspective(500px) rotateY(20deg) translateX(15px); /* Hover effekt */
}
.container {
  padding-bottom: 3rem;
}
.koszonto {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8;
  color: #333;
}

#anchor_foOldalon {
  text-decoration: none;
  color: inherit;
}

.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  margin: 20px 0;
}
.card {
  background-color: #f9e3a8;
  border: 3px solid rgba(173, 120, 5, 0.3);
  margin: 10px 0 0 0;
  border-radius: 10px;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.3),
    0 6px 6px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
}

.lap1,
.lap2,
.lap3,
.kartyan_szovegek_DIVJE {
  position: absolute;
  width: 75%;
  height: 75%;
  pointer-events: none;
  cursor: default;
}

.kartyan_szovegek_DIVJE {
  font-family: 'Libre Baskerville', serif;
  justify-content: center;
  position: relative;
  font-size: 1rem;
  z-index: 2;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  transform: translateX(-10px) translateY(4px) rotateZ(1.3deg);
  pointer-events: none;
  cursor: default;
}

.lap1 {
  transform: translateX(-10px) translateY(-10px) rotateZ(-2deg);
  z-index: 1;
}

.lap2 {
  transform: translateX(-20px) translateY(-20px) rotateZ(-4deg);
  z-index: 0;
}

.lap3 {
  transform: translateX(-30px) translateY(-30px) rotateZ(-6deg);
  z-index: -1;
}

.book:hover .card {
  transform: translateZ(10px);
}

.book:hover .lap1 {
  transform: translateX(-8px) translateY(-8px) rotateZ(-2deg);
}

.book:hover .lap2 {
  transform: translateX(-16px) translateY(-16px) rotateZ(-4deg);
}

.book:hover .lap3 {
  transform: translateX(-24px) translateY(-24px) rotateZ(-6deg);
}

.kartyakon_szovegek {
  list-style-type: none;
  padding: 5px;
  margin: 0;
}
.topLabel {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/Background-1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.topLabelText {
  font-family: 'Playfair Display SC', serif;
  font-style: italic;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 2px #191416;
  background-color: #1914168c;
  box-shadow: 0 0 50px 50px #1914168c;
}
h1 {
  font-family: 'Playfair Display SC', serif;
  font-size: 3rem;
}
h2 {
  font-family: 'Playfair Display SC', serif;
  text-align: center;
  font-style: italic;
}
h3 {
  font-family: 'Playfair Display SC', serif;
  font-style: normal;
  font-size: 2rem;
}
h4 {
  font-size: 1.3rem;
  font-family: 'Libre Baskerville', serif;
  text-align: center;
  line-height: 1.8;
}
.welcome {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8;
  color: #333;
}
#fooldalon_divben_link {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  transition: font-size 2s ease;
}

#fooldalon_divben_link:hover {
  font-size: 1.3rem;
}
.welcome > h2 {
  font-family: 'Sofia', sans-serif;
  font-size: 3rem;
  text-shadow: 2px 2px 5px rgba(25, 20, 22, 0.5);
}

p {
  text-align: justify;
}
.welcome {
  background-color: #dcb750cf;
  border: 3px solid #191416;
  padding: 1em 2em 1em 2em;
  position: relative;
  box-shadow: 5px 5px 30px grey;
}
.welcome:before {
  background: none;
  border: 3px solid #191416;
  content: '';
  display: block;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  right: 0.1rem;
  bottom: 0.1rem;
  pointer-events: none;
}
.btn {
  background-color: #dcb750cf;
  color: black;
}
#gombok_div {
  text-align: center;
  margin-bottom: 0rem;
}
#tovabbakonyvekhez {
  font-family: 'Libre Baskerville', serif;
  background-color: rgb(141, 86, 4);
  color: rgb(255, 234, 206);
  border: 3px solid #3f2e01cf;
  font-weight: bold;
  font-size: larger;
}
#tovabbakonyvekhez:hover {
  color: rgb(255, 245, 232);
  border: -2px solid #bf8f0bcf;
}
#megnezem {
  font-family: 'Libre Baskerville', serif;
  font-size: 1rem;
  background-color: rgb(149, 101, 29);
  color: rgb(255, 234, 206);
  border: 3px solid #3f2e01cf;
  font-weight: bold;
}
#megnezem:hover {
  color: rgb(255, 245, 232);
  border: -2px solid #bf8f0bcf;
}
#utolso_sor {
  text-align: center;
  margin: 0;
}
</style>
