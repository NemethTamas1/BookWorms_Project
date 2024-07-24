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
            <h4>Selected book:</h4>
            <!-- prop felhasználása -->
            <p>{{ selectedBook.title }}</p>            
          </div>
          <div>
            <label class="form-label" for="nev">Név
              ID</label><!--Böngészőben console-ban kiírja a számot, ide miért nem teszi be?-->
            <input class="form-control" placeholder="Név" type="text" id="nev" name="nev" />
          </div>
          <div>
            <label class="form-label" for="email">E-mail</label>
            <input class="form-control" placeholder="E-mail" type="text" id="e-mail" name="e-mail" />
          </div>
          <div>
            <label class="form-label" for="motivlev">Motivációs levél</label>
            <textarea class="form-control" placeholder="Motivációs levél" type="text" id="motivlev"
              name="motivlev"></textarea>
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
  background-color: #F5CD7E;
  border: 3px solid #191416;
  padding: 2em;
  position: relative;
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
</style>
