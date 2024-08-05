<script setup lang="ts">
import type { Application } from '@/models/Application';
import { ref } from 'vue';
const pic_x = new URL("@/assets/img/admin/x.png", import.meta.url).href;
const pic_check = new URL("@/assets/img/admin/check.png", import.meta.url).href;

const props = defineProps<{
  title: string;
  applications: Application[];
  showBookId: boolean;
  showUserId: boolean;
  showApplicationStatus: boolean;
  showPrice: boolean;
  showMotivationalLetter: boolean;
  showImages?: boolean; // Add new prop for images
}>();

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
          <th v-if="showImages">Elfogad</th> <!-- Add header for images -->
          <th v-if="showImages">Elutasít</th> <!-- Add header for images -->
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
          <td v-if="showImages"> <!-- Add images in the table -->
            <img :src="pic_check" alt="Check image" style="width: 50px; height: auto;" />
          </td>
          <td v-if="showImages">
            <img :src="pic_x" alt="X image" style="width: 50px; height: auto;" />
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
  