<script setup lang="ts">
import { ref } from 'vue';
console.log("Eljöttünk a kis input felülethez")
const emailValue = ref<string>('');
</script>



<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <label class="form-check" for="email">Írja be az email címét: </label>
                <input class="form-check" v-model="emailValue" type="email" name="email" id="email">
                <button type="submit" class="btn btn-info">Küldés</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 6rem;
}
</style>