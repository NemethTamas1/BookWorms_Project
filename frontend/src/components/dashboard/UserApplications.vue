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

const tooLowBid = ref<boolean>(false)
const successfullBidChangeInDatabase = ref<boolean>(true)

const checkDigit = (event: KeyboardEvent) => {
  if (event.key.length === 1 && isNaN(Number(event.key))) {
    event.preventDefault();
  }
};

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
  tooLowBid.value = false
  successfullBidChangeInDatabase.value = true
  if (userBid <= biggestBid || userBid == undefined) {
    tooLowBid.value = true
  }
  else {
    tooLowBid.value = false
    const response = await useSendBid(application, userBid, biggestBid, token.value);
    if (response == 200) {
      biggestBidDictionary.value = await createBiggestBidDictionary(books);
    }
    else {
      successfullBidChangeInDatabase.value = false
    }
  }
}

// Csatlakozas a socket szerver-hez(backenden a bid.gateway.ts), es 5 masodpercenkent keres kuldese a nyitott socketen keresztul
const socket = io(import.meta.env.VITE_URL);
setInterval(() => {
  socket.emit('getMaxBids', (bids: any) => {
    // a valaszbol bejovo arak "kicserelese", ha a bejovo max ar magasabb
    Object.keys(bids).forEach(key => {
      if (biggestBidDictionary.value[parseInt(key)] < bids[parseInt(key)]) {
        biggestBidDictionary.value[parseInt(key)] = bids[parseInt(key)]
      }
    })
  })
}, 1000);


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
  <section>
    <div class="jelentkezeseim">
            <div>
                <h1>Jelentkezéseim</h1>
            </div>
        </div>
    <table v-if="applications.length > 0" class="mt-3">
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
            <p v-if="tooLowBid">Túl alacsony összeget adott meg!</p>
            <p v-if="!successfullBidChangeInDatabase">Valami hiba történt, kérjük, próbálja meg újra! Amennyiben a hiba
              továbbra is fennáll, kérjük vegye
              fel
              velünk a kapcsolatot!
            </p>
            <div
              v-if="application.application_status === 3 && !isBidEnded(books[application.book_id - 1].bid_end_date)">
              <input @keydown="checkDigit" ref="inputField" type="number" v-model.number="userBid[index]"
                placeholder="Adjon meg egy licitet" />
              <button class="btn btn-success ms-3" @click="submit(application, userBid[index], biggestBidDictionary[application.book_id])">
                Licit
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No applications found.</p>
  </section>
</template>

<style scoped>
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

.jelentkezeseim {
    width: 100%;
    height: 23vh;
    overflow: hidden;
    /* Ha a tartalom kilógna a konténerből */
}

.jelentkezeseim h1 {
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

/* table {
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
} */

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
}
</style>