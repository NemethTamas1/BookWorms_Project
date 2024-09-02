<script setup lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useGetApplicationsByUserId, useGetBiggestBid, useGetBooks, useSendBid } from '@/composables/api/useApi';
import type { Application } from '@/models/Application';
import type { Book } from '@/models/Book';
import { useLoggedInUserStore } from '@/stores/userStore';
// Replace with actual user ID
const userStore = useLoggedInUserStore()
const userId = userStore.getLoggedInUser.id
console.log(userId)
//const userId = 	269 as number;

//Define a reactive reference to hold the applications
const applicationsResponse = await useGetApplicationsByUserId(userId);
const applications = ref<Application[]>(applicationsResponse);

const booksResponse = await useGetBooks();
const books = ref<Book[]>(booksResponse);

// Filter out books that are not in the applications
books.value = books.value.filter(book => applications.value.some(application => application.book_id === book.id));

// Define a dictionary to store the biggest bid for each book
interface BiggestBidDictionary  {
  [key: number]: number;  // Keys are numbers, values are numbers
}

// Create a dictionary of the biggest bids for each book
async function createBiggestBidDictionary(books: { value: Book[] }): Promise<BiggestBidDictionary> {
  const biggestBids = {} as BiggestBidDictionary;

  for (let i = 0; i < books.value.length; i++) {
    const bookId = books.value[i].id;
    const biggestBidResponse = await useGetBiggestBid(bookId);
    const biggestBid = biggestBidResponse as number;
    // Store the biggest bid for the book in the dictionary
    biggestBids[bookId] = biggestBid;
  }

  return biggestBids;
}

// Initialize the biggest bid dictionary
const biggestBidDictionary = ref<BiggestBidDictionary>({} as BiggestBidDictionary);
biggestBidDictionary.value = await createBiggestBidDictionary(books);

const userBid: number[] = []

async function submit(application: Application, userBid: number, biggestBid: number) {
  try {
    const response = await useSendBid(application, userBid, biggestBid);
    biggestBidDictionary.value = await createBiggestBidDictionary(books);
  } catch (error) {
    console.error("An error occurred during the submission process:", error);
    // Handle error appropriately, e.g., show a user notification
  }
}


</script>

<template>
  <div>
    <table v-if="applications.length > 0" class="table">
      <thead>
        <tr>
          <th>Jelentkezés azon.</th>
          <th>Könyv címe</th>
          <th>Státusz</th>
          <th>Saját licit (Ft)</th>
          <th>Legnagyobb licit (Ft)</th>
          <th>Licitálás</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(application, index) in applications" :key="application.book_id">
          <td>{{ application.id }}</td>
          <td>{{ books[application.book_id - 1].title }}</td>
          <td>{{ application.application_status }}</td>
          <td>{{ application.price }}  Ft</td>
          <td>{{ biggestBidDictionary[application.book_id] }} Ft</td>
          <td>
            <!-- Textbox for user input and submit button -->
            <div class="btnDiv" v-if="application.application_status === 3">
              <input ref="inputField"
                type="number" 
                v-model.number="userBid[index]" 
                placeholder="Adj meg egy licitet"
              />
              <button  class="btn"
                @click="submit(application, userBid[index], biggestBidDictionary[application.book_id])">
                Licit
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No applications found.</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
  font-size: 18px;
}

table {
  width: 80%;
  border-collapse: collapse;
  margin: auto;
  margin-top: 3rem;
  
}

th, td {
  border: 1px solid #f8d985;
  padding: 8px;
}

tr:nth-child(even){
  background-color: #f5e8c3;
}

th {
  background-color: #f9e3a8;
}

.btn {
    background-color: #F5CD7E;
    font-family: "Playfair Display", serif;
    font-weight: 400;
    font-size: 1rem;
    margin-left: 1rem;
    
}
.btnDiv {
  display: flex;
  justify-content: flex-end;
}

.btn:hover {
    background-color: #191814;
    border-color: #F5CD7E;
    color: #F5CD7E;
}

</style>