<script setup lang="ts">
import { ref } from 'vue'
import BookCards from './BookCards.vue'
import BookForms from './BookForms.vue'
import type { Book } from '@/models/Book'

// Refek létrehozása, hogy dinamikus legyen az adatáramlás.
const formDisplayed = ref<boolean>(false)
const selectedBook = ref<Book>({
    id: 0,
    title: '',
    description: ''
})

// A book értéket a @book emit-ből kapjuk! Beállítjuk a selectedBook-ot a BookCards componensről kapott bookkal! Ez minden eseménykor, amikor kattintunk, megtörténik!
function setSelectedBook(book: Book){
    selectedBook.value = book
}

// A form láthatóságát állítja be. A true értéket szintén a BookCard componensből kapja, a loadDescription function-ön belül!
function toggleForm(toogle: boolean){
    if(toogle){
        formDisplayed.value = true
    }
}

</script>

<template>
    <div class="container-fluid topLabel mb-5">
        <div class="topLabelText">
            <h1>BookWorms</h1>
            <h3>Where motivation meets literature</h3>
        </div>
    </div>
    <div>
        <!-- A @toggleForm és a @book emitek figyelése, és elkapása a belőlük származó adattal. A toggleForm és a setSelectedBook itt meghatározott functionok.--> 
        <BookCards @toggleForm="toggleForm" @book="setSelectedBook"/>
    </div>
    <div>
        <!-- v-if-el megnézzük, hogy a form látható-e. v-bind-al az itteni selectedBook ref-et 'átadjuk' szintén selectedBook néven a BookForms, azaz a gyermek componensnek! Több változó átadása: {...prop1, ...prop2, ...prop3}-->
        <BookForms v-if="formDisplayed" v-bind:selectedBook="selectedBook"/>
    </div>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.topLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img/Background-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
}

.topLabelText {
    font-family: "Playfair Display SC", serif;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 2px #191416;
    background-color: #1914168c;
    box-shadow: 0 0 50px 50px #1914168c;
}
</style>
