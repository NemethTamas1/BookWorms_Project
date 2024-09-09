<script setup lang="ts">
import { updateBook, useGetBooks } from '@/composables/api/useApi';
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
    await updateBook(book);
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Cím</th>
                        <th>Leírás</th>
                        <th>Licit vége</th>
                        <th>Módosítás</th>
                    </thead>
                    <tbody v-for="book in books">
                        <tr>
                            <td>{{ book.id }}</td>
                            <td v-if="!modifyBook">{{ book.title }}</td>
                            <td v-if="modifyBook && bookID == book.id"><input type="text" v-model="book.title"></td>
                            <td v-if="!modifyBook">{{ book.description }}</td>
                            <td v-if="modifyBook && bookID == book.id"><input type="text" v-model="book.description"></td>
                            <td v-if="!modifyBook">{{ book.bid_end_date }}</td>
                            <td v-if="modifyBook && bookID == book.id"><input type="datetime-local" v-model="book.bid_end_date"></td>
                            <td v-if="!modifyBook"><button class="btn btn-success" @click="modify(book.id)">Módosítás</button></td>
                            <td v-if="modifyBook && bookID == book.id"><button class="btn btn-success" @click="save(book)">Mentés</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</template>

<style>
.container {
    margin-top: 4rem;
}
</style>