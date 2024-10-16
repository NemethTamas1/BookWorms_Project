<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/navbar/NavbarComponent.vue';
</script>

<template>
  <NavbarComponent/>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
</style>