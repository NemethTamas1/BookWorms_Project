<script setup lang="ts">
import { useGetApplications, useGetUserById, useSendEmailToVerification, useUpdateApplication } from '@/composables/api/useApi';
import type { Application } from '@/models/Application';
import type { User } from '@/models/User';
import { ref } from 'vue';
const pic_x = new URL("@/assets/img/admin/x.png", import.meta.url).href;
const pic_check = new URL("@/assets/img/admin/check.png", import.meta.url).href;
const pic_back = new URL("@/assets/img/admin/back.png", import.meta.url).href;

const props = defineProps<{
  title: string;
  applications: Application[];
  showBookId: boolean;
  showUserId: boolean;
  showApplicationStatus: boolean;
  showPrice: boolean;
  showMotivationalLetter: boolean;
  showCheckImage?: boolean;
  showXImage?: boolean;
  showBackImage?: boolean;
}>();

// Method to change an application status (1 means pending, 2 means accepted, 3 means rejected)
async function changeStatus(application: Application, status: number) {
  let updatedApplication = {
    id: application.id,
    book_id: application.book_id,
    user_id: application.user_id,
    application_status: status,
    price: application.price,
    motivational_letter: application.motivational_letter,
  }
  const updatedApplicationResponseStatus = await useUpdateApplication(updatedApplication);
  if(updatedApplicationResponseStatus == 200){
    props.applications.find(app => app == application)!.application_status = status
  }
}



</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th v-if="showBookId">Kiválasztott könyv ID-ja</th>
          <th v-if="showUserId">Felhasználó ID</th>
          <th v-if="showApplicationStatus">Jelentkezés állapota</th>
          <th v-if="showPrice">Licit állása</th>
          <th v-if="showMotivationalLetter">Motivációs levél</th>
          <th v-if="showCheckImage">Elfogad</th>
          <th v-if="showXImage">Elutasít</th>
          <th v-if="showBackImage">Vissza</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="application in applications" :key="application.id">
          <td>{{ application.id }}</td>
          <td v-if="showBookId">{{ application.book_id }}</td>
          <td v-if="showUserId">{{ application.user_id }}</td>
          <td v-if="showApplicationStatus">{{ application.application_status }}</td>
          <td v-if="showPrice">{{ application.price }}</td>
          <td v-if="showMotivationalLetter">{{ application.motivational_letter }}</td>
          <td v-if="showCheckImage"> <!-- Add images in the table -->
            <img :src="pic_check" alt="Check image" style="width: 50px; height: auto;" @click="changeStatus(application, 2)" />
          </td>
          <td v-if="showXImage">
            <img :src="pic_x" alt="X image" style="width: 50px; height: auto;" @click="changeStatus(application, 3)"/>
          </td> 
          <td v-if="showBackImage">
            <img :src="pic_back" alt="Back arrow image" style="width: 50px; height: auto;" @click="changeStatus(application, 1)"/>
          </td> 
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f4f4f4;
  }
</style>
  