<script setup lang="ts">
import { useGetBooks } from '@/composables/apiService/useApiService';
import { ref } from 'vue';
const { books } = useGetBooks();
let description = ref<string>('');

const emit = defineEmits<{
  (event: 'bookSelected', id: number): void;
}>();

function loadDescription(id: number) {
    description.value = books.value[id - 1].description;
}

//Létrehozni egy függvényt, amit majd máshol meg tudok hívni, és azt átadni, ahol használni kell?
function idKinyer(id: number) {
    console.log(books.value[id-1].id)
    let formIdMegjelenit = books.value[id-1].id;
    emit('bookSelected', formIdMegjelenit); // Kibocsátja az id-t

    return formIdMegjelenit;
}

</script>

<template>


    <!--Cardok-->
    <div class="container">
        <div class="row">
            <div v-for="book in books" class="col-4">
                <div class="card">
                    <!--<img src="..." class="card-img-top" alt="...">-->
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="card-text">{{ book.description }}</p>
                        <button id="erdekelGomb" @click="loadDescription(book.id), idKinyer(book.id)" class="btn btn-warning">Érdekel</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>{{ description }}</p>
            </div>
        </div>

        <div>

        </div>
    </div>
</template>


<!--Style-->
<style scoped></style>