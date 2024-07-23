<script setup lang="ts">
import BookCards from './BookCards.vue';
</script>

<template>
    <div class="container-fluid topLabel mb-5">
        <div class="topLabelText">
            <h1>BookWorms</h1>
            <h3>Where motivation meets literature</h3>
        </div>
    </div>
    <div>
        <BookCards />
    </div>
    
    <!-- <div v-if="error === null">
        <h1>Books:</h1>
        <ul>
            <li v-for="book in books">
                Title: {{ book.title }}, Description: {{ book.description }}
            </li>
        </ul>
    </div>
    <div v-else>
        <h1>Something happened, please come back later!</h1>
    </div> -->

    </template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.topLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img/Background-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
}

.topLabelText{
    font-family: "Playfair Display SC", serif;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 2px #191416;
    background-color: #1914168c;
    box-shadow: 0 0 50px 50px #1914168c;
}
</style>
