<script setup lang="ts">
import { useGetBooks } from '@/composables/api/useApi';
import type { Book } from '@/models/Book';
import { ref } from 'vue';
import BookCountdown from './BookCountdown.vue';

const booksResponse = await useGetBooks();
const books = ref<Book[]>(booksResponse)
let description = ref<string>('');
// Emitek létrehozása. Emitekkel olyan eseményeket tudunk létrehozni, amiket a szülő componens figyel, 
// és el tudja kapni azokat, amikor megtörténik az esemény. A szülő componens jelenleg a BookComponent, mert ott használjuk fel a BookCards componenst.
// Meghatározok egy toggleForm és egy book eseményt. 
const emit = defineEmits(['book', 'launchModal']);

function loadDescription(id: number) {
    description.value = books.value[id - 1].description;
    // Érdekel gomb nyomására a toggleForm esemény 'elsül' true értékkel, a book esemény pedig az aktuális Book objecttel. Irány a BookComponent!
    emit('book', books.value[id - 1])
    emit('launchModal', true)
}

const cardPicsSrc =
    [
        new URL("../../../assets/img/szotar.jpg", import.meta.url).href,
        new URL("../../../assets/img/fotokonyv.jpg", import.meta.url).href,
        new URL("../../../assets/img/filozofia.jpg", import.meta.url).href
    ]
</script>

<template>
    <!--Cardok-->
    <div class="container">
        <div class="row holder">
            <div v-if="books.length > 0" v-for="book in books" class="col-12 col-md-4 my-3 my-md-5">

                <div class="card">
                    <div class="bar left"></div>
                    <div class="bar top"></div>
                    <div class="bar right"></div>
                    <div class="bar bottom"></div>
                    <img :src="cardPicsSrc[book.id - 1]" class="card-img-top" alt="...">
                    <div>
                        <BookCountdown :date="book.bid_end_date" />
                    </div>
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="card-text">{{ book.description }}</p>
                        <button id="erdekelGomb" @click="loadDescription(book.id)" class="btn mt-auto">Tovább</button>
                    </div>

                </div>
            </div>
            <div class="col-12 mt-5 text-center card" v-else>
                <h1>Valami hiba történt a könyvek betöltése közben, kérjük nézzen vissza később!</h1>
            </div>
        </div>
        <div class="row" :class="description ? 'detailedDescription' : ''">
            <div class="col-12 d-flex flex-column mt-3">
                <p class="m-0">{{ description }}</p>
                <button v-if="description" id="regisztralokALicitreGomb" class="btn mt-3 mx-auto" data-bs-toggle="modal"
                    data-bs-target="#bookFormModal">Regisztrálok a licitre</button>
            </div>
        </div>
    </div>
</template>


<!--Style-->
<style scoped>
.btn {
    background-color: #dcb750cf;
}

.detailedDescription {
    color: #191416;
    background-color: #dcb750cf;
    border: 3px solid #191416;
    padding: 2em;
    position: relative;
    box-shadow: 5px 5px 30px grey;
}

.detailedDescription:before {
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

p {
    font-family: "Roboto", sans-serif;
}

.card {
    min-height: 100%;
    background-color: #dcb750cf;
    border: 2px solid #ebb00dcf;
    padding: 2em;
    position: relative;
    box-shadow: 5px 5px 30px grey;
}

.card:before {
    background: none;
    /* border: 2px solid #191416; */
    content: "";
    display: block;
    position: absolute;
    top: .1rem;
    left: .1rem;
    right: .1rem;
    bottom: .1rem;
    pointer-events: none;
}

.bar {
    background: rgba(255, 215, 0, 0.5);
    box-shadow: 0px 0px 4px rgba(255, 215, 0, 0.8),
        0px 0px 8px rgba(255, 215, 0, 0.6),
        0px 0px 16px rgba(255, 215, 0, 0.4);
    border-radius: 4px;
    position: absolute;
}


.left,
.right {
    width: 4px;
}

.top,
.bottom {
    height: 4px;
}

.card:hover .left {
    -webkit-animation: left 4s linear infinite;
    animation: left 4s linear infinite;
}

@-webkit-keyframes left {
    0% {
        height: 0;
        top: 100%;
        left: 0;
    }

    20% {
        height: 100%;
        top: 0;
        left: 0;
    }

    40% {
        height: 0;
        top: 0;
        left: 0;
    }
}

@keyframes left {
    0% {
        height: 0;
        top: 100%;
        left: 0;
    }

    20% {
        height: 100%;
        top: 0;
        left: 0;
    }

    40% {
        height: 100%;
        top: 0;
        left: 0;
    }
}

.card:hover .top {
    -webkit-animation: top 4s linear infinite;
    animation: top 4s linear infinite;
}

@-webkit-keyframes top {
    0% {
        width: 0;
        top: 0;
        left: 0;
    }

    20% {
        width: 0;
        top: 0;
        left: 0;
    }

    40% {
        width: 100%;
        top: 0;
        left: 0;
    }

    60% {
        width: 0;
        top: 0;
        left: 100px;
    }
}

@keyframes top {
    0% {
        width: 0;
        top: 0;
        left: 0;
    }

    20% {
        width: 0;
        top: 0;
        left: 0;
    }

    40% {
        width: 100%;
        top: 0;
        left: 0;
    }

    60% {
        width: 0;
        top: 0;
        left: 100px;
    }
}

.card:hover .right {
    -webkit-animation: right 4s linear infinite;
    animation: right 4s linear infinite;
}

@-webkit-keyframes right {
    0% {
        height: 0;
        top: 0;
        left: 100%;
    }

    40% {
        height: 0;
        top: 0;
        left: 100%;
    }

    60% {
        height: 100%;
        top: 0;
        left: 100%;
    }

    80% {
        height: 0;
        top: 100%;
        left: 100%;
    }
}

@keyframes right {
    0% {
        height: 0;
        top: 0;
        left: 100%;
    }

    40% {
        height: 0;
        top: 0;
        left: 100%;
    }

    60% {
        height: 100%;
        top: 0;
        left: 100%;
    }

    80% {
        height: 0;
        top: 100%;
        left: 100%;
    }
}

.card:hover .bottom {
    -webkit-animation: bottom 4s linear infinite;
    animation: bottom 4s linear infinite;
}

@-webkit-keyframes bottom {
    0% {
        width: 0;
        top: 100%;
        left: 196px;
    }

    60% {
        width: 0;
        top: 100%;
        left: 196px;
    }

    80% {
        width: 100%;
        top: 100%;
        left: 0;
    }

    100% {
        width: 0;
        top: 100%;
        left: 0;
    }
}

@keyframes bottom {
    0% {
        width: 0;
        top: 100%;
        left: 100%;
    }

    60% {
        width: 0;
        top: 100%;
        left: 100%;
    }

    80% {
        width: 100%;
        top: 100%;
        left: 0;
    }

    100% {
        width: 0;
        top: 100%;
        left: 0;
    }
}

/* another glow */
/* 
body{
  background: #222;
  margin: 0;
}

  
.bar{
  background: #d0f0dd;
  box-shadow: 0px 0px 0 #40ff22,
    0px 0px 4px #30ff1f,
    0px 0px 8px #20ff1b,
    0px 0px 16px #10ff18;
  border-radius: 4px;
  position: absolute;
}
.left{
  width: 4px;
  -webkit-animation: left 2s linear infinite;
}
@-webkit-keyframes left{
  0%  {height: 0; top: 390px; left: 0;}
  20% {height: 500px; top: 0; left: 0;}
  40% {height: 0; top: 0; left: 0;}
}
.top{
  height: 4px;
  -webkit-animation: top 2s linear infinite;
}
@-webkit-keyframes top{
  0%  {width: 0; top: 0; left: 0;}
  20% {width: 0; top: 0; left: 0;}
  40% {width: 100px; top: 0; left: 0;}
  60% {width: 0; top:0; left: 100px;}
}
.right{
  width: 4px;
  -webkit-animation: right 2s linear infinite;
}
@-webkit-keyframes right{
  0%  {height: 0; top: 0; left: 390px;}
  40% {height: 0; top: 0; left: 390px;}
  60% {height: 100px; top: 0; left: 390px;}
  80% {height: 0; top: 100px;left: 390px;}
}
.bottom{
  height: 4px;
  -webkit-animation: bottom 2s linear infinite;
}
@-webkit-keyframes bottom{
  0%  {width: 0; top: 390px; left: 390px;}
  60% {width: 0; top: 390px; left: 390px;}
  80% {width: 100px; top:390px; left: 0px;}
  100% {width: 0px; top:390px; left: 0px;}
}
 */
</style>