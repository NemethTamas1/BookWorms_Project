<script setup lang="ts">
import type { Application } from '@/models/Application';
import { ref } from 'vue';
import { useGetApplications } from '@/composables/api/useApi';
const { applications } = useGetApplications();
</script>

<template>
      <h1>Jelentkezések</h1>
      <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kiválasztott könyv ID-ja</th>
            <th>Felhasználó ID</th>
            <th>Jelentkezés állapota</th>
            <th>Licit állása</th>
            <th>Motivációs levél</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="application in applications">
            <td>{{ application.id }}</td>
            <td>{{ application.book_id }}</td>
            <td>{{ application.user_id }}</td>
            <td>{{ application.application_status }}</td>
            <td>{{ application.price }}</td>
            <td>{{ application.motivational_letter }}</td>
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
  