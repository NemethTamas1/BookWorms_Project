<script setup lang="ts">
import { ref } from 'vue';
import Tabs from '@/components/admin/Tabs.vue';
import Table from '@/components/admin/Table.vue';
import { useGetApplications, useGetBooks } from '@/composables/api/useApi';
import type { Application } from '@/models/Application';
import type { Book } from '@/models/Book';

// Define the tabs
const tabs = ['Összes', 'Nem visszaigazolt', 'Elfogadásra vár', 'Elfogadott', 'Elutasított'];

//const selectedTab = ref(tabs[0]);
const selectedBookId = ref<number | null>(null); // Use null for "All" option

// Pagination states
const itemsPerPage = 10; // Number of items per page
const currentPage = ref(0);
const totalPages = ref(0);

const applicationsResponse = await useGetApplications();
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
  <div>
    <h1>Jelentkezések:</h1>
    <!-- Dropdown for filtering by book ID -->
    <div class="filter-container">
      <label for="bookIdSelect">Szűrés a könyv ID alapján: </label>
      <select id="bookIdSelect" v-model="selectedBookId">
        <option :value="null">Nincs</option> <!-- Correctly handle null for 'All' -->
        <option v-for="book in books" :key="book.id" :value="book.id">
          {{ book.id }}
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
  </div>
</template>
<style scoped>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
}

.pagination span {
  margin: 0 10px;
}
</style>
