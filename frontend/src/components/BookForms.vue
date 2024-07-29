<script setup lang="ts">
import { useFormSubmission } from '@/composables/api/useFormSubmission';
// Prop létrehozása, mivel egz változót adtam át a szülőtől, azaz a BookComponent-ből, ő tudja, hogy ezt kapja meg. Több változó átadása is lehetséges.
const props = defineProps(['selectedBook'])
const { family_name, first_name, email, motivational_letter, handleSubmit } = useFormSubmission()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="handleSubmit">
          <div>
            <h4>Kiválasztott könyv:</h4>
            <!-- prop felhasználása -->
            <p>{{ selectedBook.title }}</p>
          </div>
          <div>
            <label class="form-label"
              for="family_name">Vezetéknév</label>
            <input :v-model="family_name" class="form-control" placeholder="Vezetéknév" type="text" id="family_name" name="family_name"/>
          </div>
          <div>
            <label class="form-label"
              for="first_name">Keresztnév</label>
            <input :v-model="first_name" class="form-control" placeholder="Keresztnév" type="text" id="first_name" name="first_name"/>
          </div>
          <div>
            <label class="form-label" for="email">E-mail</label>
            <input :v-model="email" class="form-control" placeholder="E-mail" type="text" id="email" name="email" />
          </div>
          <div>
            <label class="form-label" for="motivational_letter">Motivációs levél</label>
            <textarea :v-model="motivational_letter" class="form-control" placeholder="Motivációs levél" type="text" id="motivational_letter"
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
