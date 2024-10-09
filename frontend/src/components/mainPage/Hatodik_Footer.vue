<template>
  <section id="footer" class="section-5">
    <div class="container">
      <div class="row" id="teljes_sor">
        <div class="col-12 col-lg-4" id="elsoblokk">
          <div class="row">
            <div class="col-12">
              <h2>BookWorms</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h3>Értesüljön elsők között új szerzeményeinkről!</h3>
              <label for="feliratkozas_doboz"> Íratkozzon fel hírlevelünkre!</label>
              <div class="row">
                <div class="col-5 m-start">
                  <input
                    name="name"
                    placeholder="pelda@bookworms.hu"
                    type="text"
                    class="form-control"
                    id="feliratkozas_doboz"
                    minlength="8"
                  />
                </div>
                <div class="col-5 ms-auto">
                  <a href="#" class="btn btn-inf form-button-submit">Küldés</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4" id="masodikblokk">
          <div class="row">
            <h2>Hasznos linkek</h2>
          </div>
          <div class="row">
            <div class="col-12 col-lg-3">
              <ul class="list-unstyled">
                <li><a href="">Bejelentkezés</a></li>
                <li><a href="">Regisztráció</a></li>
              </ul>
            </div>
            <div class="col-12 col-lg-3">
              <ul class="list-unstyled">
                <li><a href="">Kapcsolat</a></li>
                <li><a href="">Könyvek</a></li>
              </ul>
            </div>
            <div class="col-12 col-lg-3">
              <ul class="list-unstyled">
                <li><a href="">Rólunk</a></li>
                <li><a href=""></a></li>
              </ul>
            </div>
            <div class="col-12 col-lg-3">
              <ul class="list-unstyled">
                <li><a href="">Rólunk</a></li>
                <li><a href=""></a></li>
              </ul>
            </div>
          </div>

          <div class="row">
            <hr style="border: 1px solid gray" />
            <div class="col-12 col-lg-4" id="social_linkek">
              <a href="/" class="facebook"><i class="fab fa-facebook-f"></i> Facebook</a>
            </div>
            <div class="col-12 col-lg-4" id="social_linkek">
              <a href="/" class="instagram"><i class="fab fa-instagram"></i> Instagram</a>
            </div>
            <div class="col-12 col-lg-4" id="social_linkek">
              <a href="/" class="twitter"><i class="fab fa-twitter"></i> Twitter</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4" id="harmadikblokk">
          <div class="row">
            <h2>Elérhetőségeink</h2>
          </div>
          <div class="row">
            <div class="col-12 col-lg-4">
              <i class="fa-solid fa-house"></i>
              Cím:
              <div class="row">
                <div class="col">
                  <a href="https://shorturl.at/1wm3z"
                    ><p>1101 Budapest, Hős utca 1/A Magyarország.</p></a
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="row">
                <div class="col">
                  <i class="fa-solid fa-phone"></i>
                  Telefon:
                  <p>+36 (1) 220-2020</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="row">
                <div class="col">
                  <i class="fa-regular fa-envelope"></i>
                  E-mail:
                </div>
              </div>
              <p>info@bookworms.hu</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col" id="copyright_col">
          <hr style="border: 1px solid #f6ba14" />
          <p class="copyright">© 2024 Minden jog fenntartva - BookWorms Kft.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: 'Footer'
}
</script>

<style scoped>
#teljes_sor {
  opacity: 0.7;
  margin-top: 1rem;
}

.container {
  color: #ffeec5;
  width: 100%;
}
#harmadikblokk i {
  text-wrap: nowrap;
}
#harmadikblokk p {
  padding-top: 1rem;
}
#feliratkozas_doboz {
  width: fit-content;
}
.copyright {
  color: rgba(166, 166, 165, 0.4);
  text-align: center;
  margin-bottom: 5px;
}
#copyright_col hr {
  margin: 5px 0;
}
h2 {
  text-align: start;
  color: #efcf83;
}

section {
  background-image: url(https://kephost.net/p/MTQxMjMzNw.png);
  background-size: cover;
  background-position: left;
  padding: 0;
  margin-left: 145px;
  width: calc(100% - 145px);
  /* background: linear-gradient(
    180deg,
    rgba(3, 26, 38, 1) 0%,
    rgba(22, 58, 78, 1) 40%,
    rgba(33, 72, 94, 1) 60%,
    rgba(4, 28, 41, 1) 100%
  ); */
  border-top: 2px solid grey;
}
a {
  text-decoration: none;
  color: #ffeec5;
}

.btn {
  background-color: rgb(255, 238, 197);
  color: #58490c;
  border-radius: 10px;
  margin-left: 1rem;
}

.btn:hover {
  color: #58490c;
  background-color: #dfcc84;
}

@media (max-width: 992px) {
  section {
    margin: auto;
    width: 100%;
    text-align: justify;
  }
  #social_linkek {
    padding-top: 0.5rem;
    font-weight: bold;
    font-style: italic;
  }
  h2 {
    margin-top: 1rem;
    font-size: 28px;
  }
}
@media (max-width: 767px) {
  #harmadikblokk p {
    border-top: 2px solid grey;
    width: fit-content;
  }
  .copyright{
    margin: 2rem;
  }
}
</style>
