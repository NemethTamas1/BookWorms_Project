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
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
}
.tabs button {
  margin-left: 0.2rem;
  padding: 1rem  ;
  cursor: pointer;
  border: 2px solid #faeabe;
  border-radius: 10px;
  background-color: #ecd577;
}
.tabs button.active {
  border: 2px solid #f6ba14;
}

.tab-content {
  padding: 10px;
}
</style>
