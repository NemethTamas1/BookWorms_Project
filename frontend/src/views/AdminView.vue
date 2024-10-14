<script setup lang="ts">
import { ref } from 'vue';
import Tabs from '@/components/admin/Tabs.vue';
import Table from '@/components/admin/Table.vue';
import { useGetApplications, useGetBooks } from '@/composables/api/useApi';
import type { Application } from '@/models/Application';
import type { Book } from '@/models/Book';
import { adminToken } from '@/composables/auth/auth';

// Define the tabs
const tabs = ['Összes', 'Nem visszaigazolt', 'Elfogadásra vár', 'Elfogadott', 'Elutasított'];

//const selectedTab = ref(tabs[0]);
const selectedBookId = ref<number | null>(null); // Use null for "All" option

// Pagination states
const itemsPerPage = 10; // Number of items per page
const currentPage = ref(0);
const totalPages = ref(0);

const applicationsResponse = await useGetApplications(adminToken.value!);
const applications = ref<Application[]>(applicationsResponse)
const booksResponse = await useGetBooks();
const books = ref<Book[]>(booksResponse)

function handleTabChange() {
  currentPage.value = 0;
}

// Define filter functions
function filterApplications(tab: string): Application[] {
  let filteredApplications = applications.value;
  // Filter by tab
  switch (tab) {
    case 'Összes':
      break; // No filtering
    case 'Nem visszaigazolt':
      filteredApplications = filteredApplications.filter(app => app.application_status === 1);
      break;
    case 'Elfogadásra vár':
      filteredApplications = filteredApplications.filter(app => app.application_status === 2);
      break;
    case 'Elfogadott':
      filteredApplications = filteredApplications.filter(app => app.application_status === 3);
      break;
    case 'Elutasított':
      filteredApplications = filteredApplications.filter(app => app.application_status === 4);
      break;
    default:
      return [];
  }

  // Filter by selectedBookId
  if (selectedBookId.value !== null) {
    filteredApplications = filteredApplications.filter(app => app.book_id === selectedBookId.value);
  }

  return filteredApplications;
}

// Compute the paginated applications for the current page
function paginatedApplications(tab: string): Application[] {
  const filteredApps = filterApplications(tab);
  const start = currentPage.value * itemsPerPage;
  const end = start + itemsPerPage;
  updateTotalPages(tab, filteredApps);
  return filteredApps.slice(start, end);
}

function updateTotalPages(tab: string, filteredApps: Application[]) {
  totalPages.value = Math.ceil(filteredApps.length / itemsPerPage);
}

// Change page
function changePage(newPage: number) {
  currentPage.value = newPage;
}

</script>


<template>
  <section>
  <div>
    <div class="jelenkezesek">
        <div>
          <h1>Jelentkezések</h1>
        </div>
    </div>
  </div>
  
  

    <!-- Dropdown for filtering by book ID -->
    <div class="filter-container">
      <label for="bookIdSelect">Szűrés könyv ID alapján: </label>
      <select id="bookIdSelect" v-model="selectedBookId">
        <option :value="null">Összes</option> <!-- Correctly handle null for 'All' -->
        <option v-for="book in books" :key="book.id" :value="book.id">
          {{ book.id +". könyv" }}
        </option>
      </select>
    </div>
    <!-- Listen for the 'tab-changed' event and reset currentPage -->
    <Tabs :tabs="tabs" @tab-changed="handleTabChange">
       <template #default="{ selectedTab }">
        <!-- Pagination Controls -->
        <div class="pagination">
          <button @click="changePage(currentPage - 1)" :disabled="currentPage === 0">Előző</button>
          <span>Oldal: {{ currentPage + 1 }}/{{ totalPages }}</span>
          <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages - 1">Következő</button>
        </div>
         <!--No filtering, show all applications -->
        <Table
          v-if="selectedTab === 'Összes'"
          title="Összes jelentkezés"
          :applications="paginatedApplications(selectedTab)"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="true"
          :showPrice="true"
          :showMotivationalLetter="true"
          :showCheckImage="false"
          :showXImage="false"
          :showBackImage="false"
        />
        <!--Applications awaiting e-mail confirmation from user  -->
        <Table
          v-if="selectedTab === 'Nem visszaigazolt'"
          title='Nem visszaigazolt jelentkezések'
          :applications="paginatedApplications(selectedTab)"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="false"
          :showPrice="false"
          :showMotivationalLetter="true"
          :showCheckImage="false"
          :showXImage="false"
          :showBackImage="false"
        />
        <!--Applications awaiting approval -->
        <Table
          v-if="selectedTab === 'Elfogadásra vár'" 
          title="Elfogadásra váró jelentkezések"
          :applications="paginatedApplications(selectedTab)"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="false"
          :showPrice="false"
          :showMotivationalLetter="true"
          :showCheckImage="true"
          :showXImage="true"
          :showBackImage="false"
        />
        <!--Approved applications -->
        <Table
          v-if="selectedTab === 'Elfogadott'"
          title="Elfogadott jelentkezések"
          :applications="paginatedApplications(selectedTab)"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="false"
          :showPrice="true"
          :showMotivationalLetter="true"
          :showCheckImage="false"
          :showXImage="true"
          :showBackImage="true"
        />
        <!--Rejected applications -->
        <Table
          v-if="selectedTab === 'Elutasított'"
          title="Elutasításított jelentkezések"
          :applications="paginatedApplications(selectedTab)"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="false"
          :showPrice="false"
          :showMotivationalLetter="true"
          :showCheckImage="true"
          :showXImage="false"
          :showBackImage="true"
        />
      </template>
    </Tabs>
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

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
  background-color: #f5e8c3;
  border-radius: 10px;
  border: 2px solid #faeabe;
  color: rgb(37, 24, 1);
}

.pagination button:hover {
  border: 2px solid #f6ba14;
  background-color: #f3b50b;
  color: rgb(37, 24, 1);
}

.pagination span {
  margin: 0 10px;
  color: #d3a72e;
}



.jelenkezesek {
    width: 100%;
    height: 23vh; 
    overflow: hidden; /* Ha a tartalom kilógna a konténerből */
}

/* .jelenkezesek::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/Background-1.png"); 
    background-size: contain;
    background-position: center;
    opacity: 0.48; 
    z-index: 0;
} */

.jelenkezesek h1 {
display: flex;
position: relative;
z-index: 1; /* A szöveg a kép előtt lesz */
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

.filter-container{
  text-align: center;
  margin: 2rem 0; 
}
#bookIdSelect {
  margin: 0 1.5rem;
  padding: 5px 10px;
  background-color: #f5e8c3;
  border-radius: 10px;
  border: 2px solid #faeabe;
  color: rgb(37, 24, 1);
}

#bookIdSelect:hover {
  border: 2px solid #f6ba14;
  background-color: #f3b50b;
  color: rgb(37, 24, 1);
}

label {
  text-align: center;
  color: #ecd577;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 1.5rem;
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
