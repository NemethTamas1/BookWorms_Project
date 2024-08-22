 <script setup lang="ts">
import { ref } from 'vue'
import BookCards from './subComponents/BookCards.vue'
import BookForms from './subComponents/BookForms.vue'
import type { Book } from '../../models/Book'
import BookWelcome from './subComponents/BookWelcome.vue';

// Refek létrehozása, hogy dinamikus legyen az adatáramlás.
const selectedBook = ref<Book>({
    id: 0,
    title: '',
    description: ''
})

// A book értéket a @book emit-ből kapjuk! Beállítjuk a selectedBook-ot a BookCards componensről kapott bookkal! Ez minden eseménykor, amikor kattintunk, megtörténik!
function setSelectedBook(book: Book){
    selectedBook.value = book
}

</script>

<template>
    <div>
        <!-- A @toggleForm és a @book emitek figyelése, és elkapása a belőlük származó adattal. A toggleForm és a setSelectedBook itt meghatározott functionok.--> 
        <BookCards @book="setSelectedBook"/>
    </div>
    <div>
        <BookForms :selectedBook="selectedBook"/>
    </div>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.topLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../../assets/img/Background-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

.topLabelText {
    font-family: "Playfair Display SC", serif;
    font-style: italic;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 2px #191416;
    background-color: #1914168c;
    box-shadow: 0 0 50px 50px #1914168c;
    
}
h1{
    font-family: "Playfair Display SC", serif;
    font-size: 3rem;
}
h3{
    font-style: normal;
}
</style>
