<script setup lang="ts">
import { ref } from 'vue'
import BookCards from '@/components/BookCards.vue'
import BookForms from '@/components/BookForms.vue'

const selectedBookId = ref<number | null>(null);

function handleBookSelected(id: number) {
  console.log("Kiválasztott könyv ID:", id);
  selectedBookId.value = id;
}
</script>

<template>
  <div>
    <BookCards @erdekelGomb="handleBookSelected" />
    <BookForms :selectedBookId="selectedBookId" />
  </div>
</template>
