<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  selectedBookId?: number | null;
}>();

// Ellenőrizheted, hogy az ID rendelkezésre áll-e
console.log("Selected Book ID a BooksForm-ban:", props.selectedBookId);

</script>

<template>
  <form>
    <fieldset :disabled="!props.selectedBookId">
      <div>
        <label class="form-label" for="nev">Név {{ props.selectedBookId }} ID</label><!--Böngészőben console-ban kiírja a számot, ide miért nem teszi be?-->
        <input class="form-control" placeholder="Név" type="text" id="nev" name="nev" />
      </div>
      <div>
        <label class="form-label" for="email">E-mail</label>
        <input class="form-control" placeholder="E-mail" type="text" id="e-mail" name="e-mail" />
      </div>
      <div>
        <label class="form-label" for="motivlev">Motivációs levél</label>
        <textarea class="form-control" placeholder="Motivációs levél" type="text" id="motivlev" name="motivlev"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Vissza</button>
        <button type="button" class="btn btn-success">Küldés</button>
      </div>
    </fieldset>
  </form>
</template>
