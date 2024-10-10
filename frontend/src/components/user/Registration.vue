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
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="addPasswordAndChangeStatusInDatabase()">
                    <label class="form-label" for="password">Jelszó:</label>
                    <input @focus="validatePasswords()" @keyup="validatePasswords()" class="form-control"
                        type="password" name="password" id="password" v-model="password">
                    <label class="form-label" for="passwordAgain">Jelszó mégegyszer:</label>
                    <input @focus="validatePasswords()" @keyup="validatePasswords()" class="form-control"
                        type="password" name="passwordAgain" id="passwordAgain" v-model="passwordAgain">
                    <div v-if="errorMessage !== ''" class="alert alert-danger mt-3">
                        {{ errorMessage }}
                    </div>

                    <button type="submit" :disabled="!correctPasswords"
                        class="btn btn-success mt-3">Regisztráció</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div v-if="!successfullPasswordAndChangeStatusInDatabase" class="col-12 mt-5">
                <p>Valami hiba történt, kérjük, próbálja meg újra! Amennyiben a hiba továbbra is fennáll, kérjük vegye
                    fel
                    velünk a kapcsolatot!</p>
            </div>
        </div>
    </div>
</template>