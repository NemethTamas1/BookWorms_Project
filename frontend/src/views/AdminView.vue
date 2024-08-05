<script setup lang="ts">
import { ref} from 'vue';
import Tabs from '@/components/admin/Tabs.vue';
import Table from '@/components/admin/Table.vue';
import { useGetApplications } from '@/composables/api/useApi';
import type { Application } from '@/models/Application';

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
    case 'Összes':
      return applications.value; // No filtering
    case 'Elfogadásra vár':
      return applications.value.filter(app => app.application_status === 1); // Filter by status
    case 'Elfogadott':
      return applications.value.filter(app => app.application_status === 2); // Filter by status
    case 'Elutasított':
      return applications.value.filter(app => app.application_status === 3); // Filter by status
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
          :applications="filterApplications('Összes')"
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
          :applications="filterApplications('Elfogadásra vár')"
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
          :applications="filterApplications('Elfogadott')"
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
          :applications="filterApplications('Elutasított')"
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