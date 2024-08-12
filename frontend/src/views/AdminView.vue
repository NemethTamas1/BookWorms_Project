<script setup lang="ts">
import { ref } from 'vue';
import Tabs from '@/components/admin/Tabs.vue';
import Table from '@/components/admin/Table.vue';
import { useGetApplications, useGetBooks } from '@/composables/api/useApi';
import type { Application } from '@/models/Application';

// Define the tabs
const tabs = ['Összes', 'Elfogadásra vár', 'Elfogadott', 'Elutasított'];

const selectedTab = ref(tabs[0]);
const selectedBookId = ref<number | null>(null); // Use null for "All" option

// Pagination states
const itemsPerPage = 10; // Number of items per page
const currentPage = ref(0);
const totalPages = ref(0);

function updateSelectedTab(tab: string) {
  selectedTab.value = tab;
  currentPage.value = 0; // Reset the current page
}

const { applications } = useGetApplications();
const {books} = useGetBooks();

// Define filter functions
function filterApplications(tab: string): Application[] {
  let filteredApplications = applications.value;
  // Filter by tab
  switch (tab) {
    case 'Összes':
      break; // No filtering
    case 'Elfogadásra vár':
      filteredApplications = filteredApplications.filter(app => app.application_status === 1);
      break;
    case 'Elfogadott':
      filteredApplications = filteredApplications.filter(app => app.application_status === 2);
      break;
    case 'Elutasított':
      filteredApplications = filteredApplications.filter(app => app.application_status === 3);
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
  updateTotalPages(tab);
  return filteredApps.slice(start, end);
}

function updateTotalPages(tab: string) {
  totalPages.value = Math.ceil(filterApplications(tab).length / itemsPerPage);
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
    <Tabs :tabs="tabs" :currentPage=0 @update:selectedTab="updateSelectedTab">
       <template #default="{ selectedTab }"> <!--No filtering, show all applications -->
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
    <!-- Pagination Controls -->
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 0">Previous</button>
      <span>Page {{ currentPage + 1 }} of {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages - 1">Next</button>
    </div>
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
