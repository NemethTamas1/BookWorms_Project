<script setup lang="ts">
import { useAddUserPasswordAndUpdateStatus } from '@/composables/api/useApi';
import router from '@/router';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const password = ref<string>('')
const passwordAgain = ref<string>('')
const errorMessage = ref<string>('');
const passwordsAreValid = ref<boolean>(false)
const correctPasswords = computed(() => {
    return password.value !== '' && passwordAgain.value !== '' && passwordsAreValid.value
})
const successfullPasswordAndChangeStatusInDatabase = ref<boolean>(true)

const validatePasswords = () => {
    let correctPassword = false
    if (password.value !== passwordAgain.value) {
        errorMessage.value = "A két jelszó nem egyezik meg!"
        passwordsAreValid.value = false
        correctPassword = false
    }
    else if (password.value.length < 8) {
        errorMessage.value = "A jelszónak minimum 8 karakternek kell lennie!"
        passwordsAreValid.value = false
        correctPassword = false
    }
    else {
        errorMessage.value = ''
        passwordsAreValid.value = true
        correctPassword = true
    }
    return correctPassword
}

const route = useRoute()
const id = parseInt(route.query['id'] as string)
const guestToken = route.query['token'] as string

const addPasswordAndChangeStatusInDatabase = async () => {
    const response = await useAddUserPasswordAndUpdateStatus(id, password.value, guestToken)
    if (response == 200) {
        router.push("/login")
    }
    else {
        successfullPasswordAndChangeStatusInDatabase.value = false
    }
}

</script>

<template>
    <section>
        <div class="jelszo_regisztraciohoz">
            <div>
                <h1>Regisztráció</h1>
            </div>
        </div>
        <div class="form-div mt-3">
            <form @submit.prevent="addPasswordAndChangeStatusInDatabase()">
                <label class="form-label" for="password">Jelszó:</label>
                <input @focus="validatePasswords()" @keyup="validatePasswords()" class="form-control" type="password"
                    name="password" id="password" v-model="password">
                <label class="form-label" for="passwordAgain">Jelszó mégegyszer:</label>
                <input @focus="validatePasswords()" @keyup="validatePasswords()" class="form-control" type="password"
                    name="passwordAgain" id="passwordAgain" v-model="passwordAgain">
                <div v-if="errorMessage !== ''" class="alert alert-danger mt-3">
                    {{ errorMessage }}
                </div>

                <button type="submit" :disabled="!correctPasswords" class="btn btn-success mt-3">Regisztráció</button>
            </form>
        </div>
        <div class="row">
            <div v-if="!successfullPasswordAndChangeStatusInDatabase" class="col-12 mt-5">
                <p>Valami hiba történt, kérjük, próbálja meg újra! Amennyiben a hiba továbbra is fennáll, kérjük vegye
                    fel
                    velünk a kapcsolatot!</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 100vh;
    width: 100%;
    margin-left: 145px;
    width: calc(100% - 145px);
    background-image: url('https://kephost.net/p/MTM2MDI1Ng.jpg'),
        linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: whitesmoke;
}

.jelszo_regisztraciohoz {
    width: 100%;
    height: 23vh;
    overflow: hidden;
    /* Ha a tartalom kilógna a konténerből */
}

.jelszo_regisztraciohoz h1 {
    display: flex;
    position: relative;
    z-index: 1;
    /* A szöveg a kép előtt lesz */
    color: #ecd577;
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

.form-div {
    margin: auto;
    width: 40vw;
}

form {
    background-color: #191814;
    padding: 30px;
    border-radius: 5px;
    border: 2px solid #F5CD7E;

    div>label {
        color: #F5CD7E;
    }
}

.form-label {
    margin-bottom: .5rem;
}

label {
    margin-bottom: 1rem;
    text-align: center;
    color: #d3a72e;
    font-family: "Playfair Display", serif;
    font-weight: 400;
    font-size: 1.5rem;
}

.btn {
    margin-top: 1rem;
    background-color: #F5CD7E;
    font-family: "Playfair Display", serif;
}

@media (max-width: 992px) {
    section {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        background-size: cover;
    }

    .form-div {
        width: auto;
    }
}
</style>