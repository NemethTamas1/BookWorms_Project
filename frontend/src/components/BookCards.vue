<script setup lang="ts">
import { useGetBooks } from '@/composables/api/useApi';
import { ref } from 'vue';
const { books } = useGetBooks();
let description = ref<string>('');
// Emitek létrehozása. Emitekkel olyan eseményeket tudunk létrehozni, amiket a szülő componens figyel, 
// és el tudja kapni azokat, amikor megtörténik az esemény. A szülő componens jelenleg a BookComponent, mert ott használjuk fel a BookCards componenst.
// Meghatározok egy toggleForm és egy book eseményt. 
const emit = defineEmits(['toggleForm', 'book']);

function loadDescription(id: number) {
    description.value = books.value[id - 1].description;
    // Érdekel gomb nyomására a toggleForm esemény 'elsül' true értékkel, a book esemény pedig az aktuális Book objecttel. Irány a BookComponent!
    emit('toggleForm', true)
    emit('book', books.value[id - 1])
}

</script>

<template>
    <!--Cardok-->
    <div class="container">
        <div class="row">
            <div v-for="book in books" class="col-12 col-md-4 my-3 my-md-0">
                <div class="card">
                    <!--<img src="..." class="card-img-top" alt="...">-->
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="card-text">{{ book.description }}</p>
                        <button id="erdekelGomb" @click="loadDescription(book.id)" class="btn">Érdekel</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <p class="m-0">{{ description }}</p>
            </div>
        </div>

        <div>

        </div>
    </div>
</template>


<!--Style-->
<style scoped>
.btn {
    background-color: #dcb750cf;
}

.card-text {
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Roboto", sans-serif;
    margin: 3rem 0;
    display: -webkit-box;
   -webkit-line-clamp: 8;
           line-clamp: 8;
   -webkit-box-orient: vertical;
}
p{
    font-family: "Roboto", sans-serif;
}
.card {
    margin-bottom: 3rem;
}
</style>