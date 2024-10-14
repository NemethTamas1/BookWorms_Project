<script setup lang="ts">
import { updateBook, useGetBooks } from '@/composables/api/useApi';
import { adminToken } from '@/composables/auth/auth';
import type { Book } from '@/models/Book';
import { ref } from 'vue';

const books = ref<Book[]>([]);
books.value = await useGetBooks();
const modifyBook = ref<boolean>(false);
const bookID = ref<number>();

const modify = (bookId: number) => {
    modifyBook.value = true;
    bookID.value = bookId;
}

const save = async (book: Book) => {
    modifyBook.value = false;
    await updateBook(book, adminToken.value!);
}

const cancel = async () => {
    modifyBook.value = false;
    books.value = await useGetBooks();
}

</script>

<template>
    <section>
        <div class="konyv_modositasa">
            <div>
                <h1>Könyv módosítása</h1>
            </div>
        </div>
        <div>
            <table class="mt-3">
                <thead>
                    <th>ID</th>
                    <th>Cím</th>
                    <th>Leírás</th>
                    <th>Licit vége</th>
                    <th>Módosítás</th>
                </thead>
                <tbody>
                    <tr v-for="book in books">
                        <td v-if="!modifyBook">{{ book.id }}</td>
                        <td v-if="modifyBook && bookID == book.id">{{ book.id }}</td>
                        <td v-if="!modifyBook">{{ book.title }}</td>
                        <td v-if="modifyBook && bookID == book.id"><input class="form-control" type="text"
                                v-model="book.title"></td>
                        <td v-if="!modifyBook">{{ book.description }}</td>
                        <td v-if="modifyBook && bookID == book.id"><input class="form-control" type="text"
                                v-model="book.description"></td>
                        <td v-if="!modifyBook">{{ book.bid_end_date }}</td>
                        <td v-if="modifyBook && bookID == book.id"><input class="form-control" type="datetime-local"
                                v-model="book.bid_end_date"></td>
                        <td v-if="!modifyBook"><button class="btn btn-success"
                                @click="modify(book.id)">Módosítás</button></td>
                        <td v-if="modifyBook && bookID == book.id"><button class="btn btn-success"
                                @click="save(book)">Mentés</button></td>
                        <td v-if="modifyBook && bookID == book.id"><button class="btn btn-danger"
                                @click="cancel()">Mégsem</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>


</template>

<style>
section {
    justify-content: center;
    align-items: center;
    height: 100vh;
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

.konyv_modositasa {
    width: 100%;
    height: 23vh;
    overflow: hidden;
    /* Ha a tartalom kilógna a konténerből */
}

.konyv_modositasa h1 {
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

table {
    border-collapse: collapse;
    margin: auto;
    background-color: #a78f40;
}

tr:nth-child(even){
  background-color: #454638;
}

th {
  background-color: #454638;
  color: #ecd577;
  
}

th, td {
  border: 2px solid #121214;
  padding: .5rem;
}

@media (max-width: 992px) {
    section {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        background-size: cover;
    }

    .form-div{
        width: auto;
    }
}
</style>