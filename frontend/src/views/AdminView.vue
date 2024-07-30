<script setup lang="ts">
import { ref} from 'vue';
import Tabs from '@/components/admin/Tabs.vue';
import Table from '@/components/admin/Table.vue';
import { useGetApplications } from '@/composables/api/useApi';

// Define the tabs
const tabs = ['Összes', 'Elfogadásra vár', 'Elfogadott', 'Elutasított'];

const selectedTab = ref(tabs[0]);

function updateSelectedTab(tab: string) {
  selectedTab.value = tab;
}

const { applications } = useGetApplications();

// Define filter functions
function filterApplications(tab: string): Application[] {
  switch (tab) {
    case 'Tab 1':
      return applications.value; // No filtering
    case 'Tab 2':
      return applications.value.filter(app => app.application_status === 1); // Filter by status
    case 'Tab 3':
      return applications.value.filter(app => app.application_status === 2); // Filter by price
    case 'Tab 4':
      return applications.value.filter(app => app.application_status === 3); // Filter by user ID
    default:
      return [];
  }
}

</script>


<template>
  <div>
    <h1>Elfogadásra váró jelentkezések</h1>
    <Tabs :tabs="tabs" @update:selectedTab="updateSelectedTab">
       <template #default="{ selectedTab }"> <!--No filtering, show all applications -->
        <Table
          v-if="selectedTab === 'Összes'"
          title="Összes jelentkezés"
          :applications="filterApplications('Tab 1')"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="true"
          :showPrice="true"
          :showMotivationalLetter="true"
        />
        <!--Applications awaiting approval -->
        <Table
          v-if="selectedTab === 'Elfogadásra vár'" 
          title="Elfogadásra váró jelentkezések"
          :applications="filterApplications('Tab 2')"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="false"
          :showPrice="false"
          :showMotivationalLetter="true"
          :showImages="true"
        />
        <!--Approved applications -->
        <Table
          v-if="selectedTab === 'Elfogadott'"
          title="Elfogadott jelentkezések"
          :applications="filterApplications('Tab 3')"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="false"
          :showPrice="true"
          :showMotivationalLetter="true"
        />
        <Table
          v-if="selectedTab === 'Elutasításított'"
          title="Elutasításított jelentkezések"
          :applications="filterApplications('Tab 4')"
          :showBookId="true"
          :showUserId="true"
          :showApplicationStatus="false"
          :showPrice="false"
          :showMotivationalLetter="true"
        />
      </template>
    </Tabs>
  </div>
</template>