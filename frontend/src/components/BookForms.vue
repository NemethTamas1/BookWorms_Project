<script setup lang="ts">
// Prop létrehozása, mivel egz változót adtam át a szülőtől, azaz a BookComponent-ből, ő tudja, hogy ezt kapja meg. Több változó átadása is lehetséges.
const props = defineProps(['selectedBook'])
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form>
          <div>
            <h4>Kiválasztott könyv:</h4>
            <!-- prop felhasználása -->
            <p>{{ selectedBook.title }}</p>
          </div>
          <div>
            <label class="form-label"
              for="family_name">Vezetéknév</label>
            <input class="form-control" placeholder="Vezetéknév" type="text" id="family_name" name="family_name" />
          </div>
          <div>
            <label class="form-label"
              for="first_name">Keresztnév</label>
            <input class="form-control" placeholder="Keresztnév" type="text" id="first_name" name="first_name" />
          </div>
          <div>
            <label class="form-label" for="email">E-mail</label>
            <input class="form-control" placeholder="E-mail" type="text" id="email" name="email" />
          </div>
          <div>
            <label class="form-label" for="motivational_letter">Motivációs levél</label>
            <textarea class="form-control" placeholder="Motivációs levél" type="text" id="motivational_letter"
              name="motivational_letter"></textarea>
          </div>
          <div class="modal-footer mt-3">
            <button type="submit" class="btn btn-success">Küldés</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  background-color: #dcb750cf;
  border: 3px solid #191416;
  padding: 2em;
  position: relative;
  box-shadow: 5px 5px 30px grey;
  margin: 3rem 0 10rem 0;
}

p {
  font-family: "Roboto", sans-serif;
}
form:before {
  background: none;
  border: 3px solid #191416;
  content: "";
  display: block;
  position: absolute;
  top: .1rem;
  left: .1rem;
  right: .1rem;
  bottom: .1rem;
  pointer-events: none;
}

input, textarea {
  font-family: "Roboto", sans-serif;
}

input::placeholder {
  color:rgb(192, 184, 165);
}
textarea::placeholder {
  color:rgb(192, 184, 165)
}

button{
  background-color: black;
}

</style>
