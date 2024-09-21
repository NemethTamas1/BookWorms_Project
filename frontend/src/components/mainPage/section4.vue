<template>
  <section id="section4" class="section-4">
    <div class="container" id="fullContainer">
      <div class="row">
        <div class="col-12" id="elso_belso_oszlop_keret">
          <div class="row">
            <h2>Segíthetünk? Küldje el kérdését!</h2>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                Töltse ki az alábbi űrlapot, és mi a lehető leghamarabb felvesszük Önnel a
                kapcsolatot. Minden megkeresést nagyra értékelünk, és arra törekszünk, hogy minden
                kérdésre gyors és hatékony választ adjunk.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                Csapatunk elkötelezett amellett, hogy a legjobb ügyfélszolgálati élményt nyújtsa
                Önnek. Akár a termékeinkkel, szolgáltatásainkkal kapcsolatban van kérdése, akár
                segítségre van szüksége egy megrendelés során, mi itt vagyunk, hogy segítsünk Önnek!
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-10 col-lg-8 m-auto form-container">
              <form method="post" action="#">
                <div class="mb-3">
                  <label for="name_form_question">Adja meg a teljes nevét:</label>
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
                  <label for="email_form_question"><p>Adja meg az e-mail címét:</p></label>
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
                  <label for="szoveg_doboz"><p>Kérdése:</p></label>
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
                  <div class="col text-center">
                    <a href="#" class="btn btn-info form-button-submit">Üzenet küldése</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Minimum magasság beállítása */
  width: calc(100% - 145px);
  margin-left: 145px;
  padding: 1rem; /* Extra padding hozzáadása */
  background-image: url(https://kephost.net/p/MTM5NDU2Mw.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#fullContainer {
  border-radius: 2rem;
  background-color: rgba(34, 23, 3, 0.85);
  border: 10px double rgba(246, 212, 117, 0.6);
  padding: 3rem;
  max-width: 1200px; /* Maximum szélesség korlátozása nagy képernyőkön */
  width: 100%; /* A container szélessége mindig alkalmazkodik */
  box-sizing: border-box; /* Biztosítja, hogy a padding beleszámít a szélességbe */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#elso_belso_oszlop_keret {
  color: white;
  font-size: 20px;
  margin: 0;
  padding: 0;
}

.form-container {
  padding: 1.5rem;
  border: 1px solid rgba(246, 212, 117, 0.6);
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 100%; /* A form-container szélessége 100% */
  max-width: 700px; /* Maximum szélesség tablet és asztali nézetekhez */
}

label {
  text-align: start;
}

p {
  text-align: justify;
  color: #f7f5f1cf;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
}

h2 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
}

.btn {
  background-color: rgb(255, 238, 197);
  border: 3px solid #58490c;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(84, 62, 1);
  margin: 10px;
  border-radius: 1rem;
}

.btn:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
}

@media (max-width: 992px) {
  section {
    padding: 2rem;
    margin: 0;
    width: 100%;
    min-height: auto; /* A magasság automatikusan alakul mobilon */
  }

  #fullContainer {
    padding: 2rem;
    max-width: 80%; /* A container szélessége mobilon ne legyen túl széles */
  }

  .form-container {
    width: 80%;
    padding: 2rem 1rem;
    max-width: none; 
  }
}

@media (max-width: 576px) {
  h2 {
    font-size: 1.5rem; 
  }

  p {
    font-size: 1.2rem; 
  }

  .btn {
    font-size: 1rem; 
  }
}
</style>
