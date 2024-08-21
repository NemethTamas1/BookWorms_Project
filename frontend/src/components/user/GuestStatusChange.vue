<script setup lang="ts">
import { useUpdateUserStatusById } from '@/composables/api/useApi';
import { useRoute } from 'vue-router';

console.log("Itt vagyunk")
const changeStatusInDatabase = async () => {
    const route = useRoute()
    const id = parseInt(route.query['id'] as string)
    //const id = route.query['id'] as unknown as number
    await useUpdateUserStatusById(id)
}

changeStatusInDatabase()
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>Köszönjük a visszaigazolást!</h1>
            <p>Amennyiben egy jelentkezése elfogadásra kerül, egy regisztrációhoz szükséges linket fog kapni.</p>
        </div>
    </div>
</div>
</template>