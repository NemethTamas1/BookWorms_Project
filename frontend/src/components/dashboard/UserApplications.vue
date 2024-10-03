<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useGetApplicationsByUserId, useGetBiggestBid, useGetBooks, useSendBid } from '@/composables/api/useApi';
import type { Application } from '@/models/Application';
import type { Book } from '@/models/Book';
import { useLoggedInUserStore } from '@/stores/userStore';
import { adminToken, userToken } from '@/composables/auth/auth';
import { io } from 'socket.io-client';

const userStore = useLoggedInUserStore()
const userStatus = userStore.getLoggedInUser.status
const userId = userStore.getLoggedInUser.id
const token = ref<string>('')
const setToken = () => {
  if (userStatus == 2) {
    token.value = userToken.value!
  }
  else if (userStatus == 3) {
    token.value = adminToken.value!
  }
}

//Define a reactive reference to hold the applications
const checkStatusForApplications = async (): Promise<Ref<Application[]>> => {
  if (userStatus == 2) {
    const applicationsResponse = await useGetApplicationsByUserId(userId, userToken.value!);
    const applications = ref<Application[]>(applicationsResponse);
    return applications
  }
  else if (userStatus == 3) {
    const applicationsResponse = await useGetApplicationsByUserId(userId, adminToken.value!);
    const applications = ref<Application[]>(applicationsResponse);
    return applications
  }
  else {
    return ref<Application[]>([])
  }
}

const applications: Ref<Application[]> = await checkStatusForApplications();
const booksResponse = await useGetBooks();
const books = ref<Book[]>(booksResponse);

// Filter out books that are not in the applications
books.value = books.value.filter(book => applications.value.some(application => application.book_id === book.id));

// Define a dictionary to store the biggest bid for each book
interface BiggestBidDictionary {
  [key: number]: number;  // Keys are numbers, values are numbers
}

// Create a dictionary of the biggest bids for each book
async function createBiggestBidDictionary(books: { value: Book[] }): Promise<BiggestBidDictionary> {
  const biggestBids = {} as BiggestBidDictionary;

  for (let i = 0; i < books.value.length; i++) {
    const bookId = books.value[i].id;
    setToken();
    const biggestBidResponse = await useGetBiggestBid(bookId, token.value);
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
    const response = await useSendBid(application, userBid, biggestBid, token.value);
    biggestBidDictionary.value = await createBiggestBidDictionary(books);
  } catch (error) {
    console.error("An error occurred during the submission process:", error);
    // Handle error appropriately, e.g., show a user notification
  }
}

// Csatlakozas a socket szerver-hez(backenden a bid.gateway.ts), es 5 masodpercenkent keres kuldese a nyitott socketen keresztul
const socket = io('http://localhost:3000');
setInterval(() => {
  socket.emit('getMaxBids', (bids: any) => {
    // a valaszbol bejovo arak "kicserelese", ha a bejovo max ar magasabb
    Object.keys(bids).forEach(key => {
      if (biggestBidDictionary.value[parseInt(key)] < bids[parseInt(key)]){
        biggestBidDictionary.value[parseInt(key)] = bids[parseInt(key)]
      }
    })
  })
}, 5000);


function isBidEnded(end_date: Date): boolean {
  let countDownDate = new Date(end_date).getTime(); // The deadline //Book bid_date
  let now = new Date().getTime();
  let distance = countDownDate - now;
  if (distance >= 0) {
    return false
  }
  else {
    return true
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
          <th>Licit vége</th>
          <th>Saját licit (Ft)</th>
          <th>Legnagyobb licit (Ft)</th>
          <th>Licitálás</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(application, index) in applications" :key="application.book_id">
          <td>{{ application.id }}</td>
          <td>{{ books[application.book_id - 1].title }}</td>
          <td v-if="application.application_status == 1">Megerősítésre vár</td>
          <td v-if="application.application_status == 2">Elfogadásra vár</td>
          <td v-if="application.application_status == 3">Elfogadott</td>
          <td>{{ books[application.book_id - 1].bid_end_date }}</td>
          <td>{{ application.price }} Ft</td>
          <td>{{ biggestBidDictionary[application.book_id] }} Ft</td>
          <td>
            <!-- Textbox for user input and submit button -->
            <p v-if="isBidEnded(books[application.book_id - 1].bid_end_date)">A licitnek vége</p>
            <div
              v-if="application.application_status === 3 && !isBidEnded(books[application.book_id - 1].bid_end_date)">
              <input ref="inputField" type="number" v-model.number="userBid[index]" placeholder="Adj meg egy licitet" />
              <button @click="submit(application, userBid[index], biggestBidDictionary[application.book_id])">
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

th,
td {
  border: 1px solid #f8d985;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f5e8c3;
}

th {
  background-color: #f9e3a8;
}
</style>