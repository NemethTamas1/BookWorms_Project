<script setup lang="ts">
import { useAddUserPasswordAndUpdateStatus } from '@/composables/api/useApi';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const password = ref<string>('')
const passwordAgain = ref<string>('')
const errorMessage = ref<string>('');

const route = useRoute()
const id = parseInt(route.query['id'] as string)

const addPasswordAndChangeStatusInDatabase = async () => {
    if (password.value == passwordAgain.value) {
        await useAddUserPasswordAndUpdateStatus(id, password.value)
    }
    else {
        errorMessage.value = "A két jelszó nem egyezik meg!"
    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="addPasswordAndChangeStatusInDatabase()">
                    <h1>Örömmel látjuk, hogy regisztrálni szeretne!</h1>
                    
                    <label class="form-label" for="username">E-mail cím</label>
                    <input class="form-control" type="username" name="username" id="username" placeholder="example@example.com">
                    <label class="form-label" for="password">Jelszó:</label>
                    <input class="form-control" type="password" name="password" id="password" v-model="password">
                    <label class="form-label" for="passwordAgain">Jelszó mégegyszer:</label>
                    <input class="form-control" type="password" name="passwordAgain" id="passwordAgain"
                        v-model="passwordAgain">
                    <div v-if="errorMessage" class="alert alert-danger">
                        {{ errorMessage }}
                    </div>

                    <button type="submit" class="btn">Regisztráció</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

.row {
    display: flex;
    justify-content: center;
    height: 60vh;
    align-items: center;
    width: 90%;

}
.form {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    color: #201a02;
    background-color: #9f91343e;
    box-shadow: 0 0 50px 50px #9f91343e;
    background-color: whitesmoke;
    border-radius: 5px;
    border: 2px solid #F5CD7E;
}
input{
    width: 40vh;
}

h1{
    font-family:  "Libre Baskerville", serif;
    
}


label {
    font-family:  "Libre Baskerville", serif;
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 0.2rem;
    color: #191814;
    font-weight: 400;
    font-size: 1rem;
}

.btn {
    margin-top: 1rem;
    background-color: #F5CD7E;
    font-weight: 400;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    font-family:  "Libre Baskerville", serif;
}

.btn:hover {
    background-color: #191814;
    border-color: #F5CD7E;
    color: #F5CD7E;
}

input::placeholder{
    color:rgb(173, 166, 149);
}


</style>