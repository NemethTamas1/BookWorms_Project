<template>
  <section id="section4" class="section section-4">
    <div class="elsoHarmad">
      <!--  -->
    </div>
    <div class="container masodikHarmad">
      <div class="row">
        <div class="col-12" id="elso_belso_oszlop_keret">
          <h2>Segíthetünk? Küldje el kérdését!</h2>
          <p>
            Töltse ki az alábbi űrlapot, és mi a lehető leghamarabb felvesszük Önnel a kapcsolatot.
            Minden megkeresést nagyra értékelünk, és arra törekszünk, hogy minden kérdésre gyors és
            hatékony választ adjunk.
          </p>
          <p>
            Csapatunk elkötelezett amellett, hogy a legjobb ügyfélszolgálati élményt nyújtsa Önnek.
            Akár a termékeinkkel, szolgáltatásainkkal kapcsolatban van kérdése, akár segítségre van
            szüksége egy megrendelés során, mi itt vagyunk, hogy segítsünk Önnek!
          </p>

          <form method="post" action="#">
            <div class="mb-3 text-start">
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
            <div class="mb-3 text-start">
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
            <div class="mb-3 text-start">
              <label for="szoveg_doboz">Kérdése:</label>
              <textarea
                name="message"
                placeholder="Kérjük fejtse ki üzenetét!"
                class="form-control"
                id="szoveg_doboz"
                maxlength="500"
                minlength="50"
              ></textarea>
            </div>
            <div class="row">
              <div class="col">
                <a href="#" class="btn btn-inf form-button-submit">Üzenet küldése</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="harmadikHarmad">
      <!--  -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section4'
})
</script>

<style scoped>
/* A teljes section felosztása */
.elsoHarmad,
.harmadikHarmad {
  height: 10vh;
  width: 100%;
  background-image: url(https://w0.peakpx.com/wallpaper/156/261/HD-wallpaper-brown-leather-texture-leather-lines-brown-wooden-background-leather-textures-leather-backgrounds-macro-leather.jpg);
}
.elsoHarmad {
  background-position: top;
  background-position-x: right;
}
.harmadikHarmad {
  background-position: bottom;
  background-position-x: left;
}
.masodikHarmad {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding:1rem;
}

/* A teljes felosztás VÉGE */
form{
  width: 95%;
}
#section4 {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-left: 145px;
  width: calc(100% - 145px);
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url(https://kephost.net/p/MTM5NDU3NQ.png);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vh;
  border-radius: 2rem;
  background-color: rgba(34, 23, 3, 0.75);
  border: 10px double rgba(246, 212, 117, 0.6);
  margin: 1rem;
}
#elso_belso_oszlop_keret {
  justify-content: center;
  align-items: center;
  width: 80vh;
  max-width: 800px; /* Maximális szélesség beállítása */
  padding: 0;
  color: #ffffee;
  text-shadow: 5px 3px 3px rgba(78, 42, 2, 0.5);
  font-size: 20px;
}
h2{
  margin-bottom: 1rem;
  font-size: 2.5rem;
}
.btn {
  font-size: 1.3rem;
  font-weight: bold;
  background-color: rgb(255, 238, 197);
  text-shadow: none;
  color: #58490c;
  border-radius: 10px;
}

.btn:hover {
  color: #58490c;
  background-color: #dfcc84;
}
/* SZÖVEG STÍLUSOK */
p {
  text-align: justify;
  line-height: 1.6;
  font-size: 1.2rem;
}

/* TELEFON NÉZETEK */
@media (max-width: 992px) {
  .section {
    padding-left: 0;
  }
}
</style>

<!-- BŐR BACKGROUND:  https://kephost.net/p/MTM5NDU2Mw.png -->
<!-- BŐR 2. BACKGROUND:  https://kephost.net/p/MTM5NDU3NQ.png -->
