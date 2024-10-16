<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
  date: Date;
}>();
let countDownDate = new Date(props.date).getTime(); // The deadline //Book bid_date
const countdown = ref<string>(''); // Countdown value
let x = setInterval(() => {
   let now = new Date().getTime();
   let distance = countDownDate - now;

   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
   countdown.value = days + "n " + hours + "ó " + minutes + "p " + seconds + "s";
   //console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s"); // Countdown output

   if (distance <= 0) {
      clearInterval(x);
      countdown.value = "A licitnek vége" // Text at the end of the countdown
      //console.log("Too late!") // Text at the end of the countdown
   }
}, 1000)

</script>
<template>
    <div class="clockdown">
        {{ countdown }}
    </div>
</template>