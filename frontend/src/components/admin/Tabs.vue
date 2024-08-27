<script setup lang="ts">
import { ref } from 'vue';

// Define the props
const props = defineProps<{
  tabs: string[];
}>();

// Use the tabs prop from the props object
const selectedTab = ref(props.tabs[0]);

// Define the emit function
const emit = defineEmits(['tab-changed']);

function selectTab(tab: string) {
  selectedTab.value = tab;
  // Emit the event to inform the parent component about the tab change
  emit('tab-changed', tab);
}
</script>

<template>
  <div>
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="selectTab(tab)"
        :class="{ active: tab === selectedTab }"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content">
      <slot :selected-tab="selectedTab"></slot>
    </div>
  </div>
</template>

<style>
.tabs {
  display: flex;
  margin-bottom: 10px;
}
.tabs button {
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: none;
  border-bottom: 2px solid transparent;
}
.tabs button.active {
  border-bottom: 2px solid #42b983;
}
.tab-content {
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}
</style>
