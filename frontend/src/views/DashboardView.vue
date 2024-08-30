<script setup lang="ts">
import Dashboard from '@/components/dashboard/My_applications.vue';
</script>

<template>
    <div>
    <div class="jelenkezesek">
        <div>
          <h1>Saját jelentkezéseim</h1>
        </div>
    </div>
  </div>
  
    <div>
      
      <Dashboard />
    </div>
</template>

<style scoped>
h1 {
  font-size: 26px;
  margin-bottom: 30px;
  text-align: center;
}


.jelenkezesek {
    position: relative;
    width: 100%;
    height: 23vh; 
    overflow: hidden; /* Ha a tartalom kilógna a konténerből */
}

.jelenkezesek::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../src/assets/main/Background-1.png"); 
    background-size: contain;
    background-position: center;
    opacity: 0.44; 
    z-index: 0; /* Háttérként való megjelenítés */
}

.jelenkezesek h1 {
display: flex;
position: relative;
z-index: 1; /* A szöveg a kép előtt lesz */
color: #201a02; 
justify-content: center;
text-shadow: 2px 2px 5px #120d01;
font-family: "Playfair Display", serif;
font-style: italic;
font-size: 3rem;
margin-top: 9vh;
text-shadow: 2px 2px 2px #574d0cc4;
background-color: #9f91343e;
box-shadow: 0 0 50px 50px #9f91343e;
  
}


</style>