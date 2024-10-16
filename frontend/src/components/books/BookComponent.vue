 <script setup lang="ts">
import { onMounted, ref } from 'vue'
import BookCards from './subComponents/BookCards.vue'
import BookForms from './subComponents/BookForms.vue'
import type { Book } from '../../models/Book'
import BookWelcome from './subComponents/BookWelcome.vue';

// Refek létrehozása, hogy dinamikus legyen az adatáramlás.
const selectedBook = ref<Book>({
    id: 0,
    title: '',
    description: '',
    bid_end_date: new Date("Sep 07, 2024 22:10:15")
})

// A book értéket a @book emit-ből kapjuk! Beállítjuk a selectedBook-ot a BookCards componensről kapott bookkal! Ez minden eseménykor, amikor kattintunk, megtörténik!
function setSelectedBook(book: Book){
    selectedBook.value = book
}

</script>

<template>
    <section>
        <div class="elerheto_konyvek">
            <div>
                <h1>Elérhető könyveink</h1>
            </div>
        </div>
    <div>
        <!-- A @toggleForm és a @book emitek figyelése, és elkapása a belőlük származó adattal. A toggleForm és a setSelectedBook itt meghatározott functionok.--> 
        <BookCards @book="setSelectedBook"/>
    </div>
    <div>
        <BookForms :selectedBook="selectedBook"/>
    </div>
</section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
section {
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: 100vh;
    width: 100%;
    margin-left: 145px;
    width: calc(100% - 145px);
    background-image: url('https://kephost.net/p/MTM2MDI1Ng.jpg'),
        linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: whitesmoke;
}

.elerheto_konyvek {
    width: 100%;
    height: 23vh;
    overflow: hidden;
    /* Ha a tartalom kilógna a konténerből */
}

.elerheto_konyvek h1 {
    display: flex;
    position: relative;
    z-index: 1;
    /* A szöveg a kép előtt lesz */
    color: #ecd577;
    justify-content: center;
    text-shadow: 2px 2px 5px #120d01;
    font-family: "Playfair Display", serif;
    font-style: italic;
    font-size: 3rem;
    margin-top: 9vh;
    text-shadow: 2px 2px 2px #574d0cc4;
    background-color: #9f91343e;
    box-shadow: 0 0 50px 50px #9f91343e;
}

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

@media (max-width: 992px) {
    section {
        margin: 0;
        padding: 0;
        width: 100%;
        background-size: cover;
    }
}
</style>
