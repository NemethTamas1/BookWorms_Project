<script setup lang="ts">
import type { Application } from '@/models/Application';
import { ref } from 'vue';

const items = ref<Application[]>([
  {
    id: 1,
    book_title: 'Fotókönyv',
    user_name: 'User1',
    application_status: 'Elfogadva',
    price: 5000,
    motivation_letter: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: 2,
    book_title: 'Angol-magyar szótár',
    user_name: 'User2',
    application_status: 'Elutasított',
    price: 0,
    motivation_letter: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem'
  },
  {
    id: 3,
    book_title: 'A filozófia nagykönyve - Minden, amit tudni érdemes',
    user_name: 'User3',
    application_status: 'Elfogadásra vár',
    price: 0,
    motivation_letter: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
]);
</script>

<template>
    <div>
      <h1>Jelentkezések</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kiválasztott könyv</th>
            <th>Felhasználó neve</th>
            <th>Jelentkezés állapota</th>
            <th>Licit állása</th>
            <th>Motivációs levél</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.book_title }}</td>
            <td>{{ item.user_name }}</td>
            <td>{{ item.application_status }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.motivation_letter }}</td>
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
  