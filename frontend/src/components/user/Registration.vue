<script setup lang="ts">
import { useAddUserPasswordAndUpdateStatus } from '@/composables/api/useApi';
import router from '@/router';
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
        router.push("/login")
    }
    else {
        errorMessage.value = "A két jelszó nem egyezik meg!"
    }
}

</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="addPasswordAndChangeStatusInDatabase()">
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