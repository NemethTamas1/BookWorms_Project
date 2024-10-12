<script setup lang="ts">
import { adminToken, loginUserOrAdminAndStoreTokenIntoLocalStorage, userToken } from '@/composables/auth/auth';
import type { User } from '@/models/User';
import { useLoggedInUserStore } from '@/stores/userStore';
import type { Axios, AxiosResponse } from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const userStore = useLoggedInUserStore()

// Figyelni kívánt változók
const email = ref<string>('');
const password = ref<string>('');
const errorMessage = ref<string>('');
const router = useRouter()
const forgottenPasswordRef = ref<boolean>(false)

// Rövid form check
const handleSubmit = async () => {
    if (!email.value || !password.value) {
        errorMessage.value = 'Kérjük töltse ki az összes mezőt.';
        return;
    }

    const response: string | AxiosResponse<any, any> = await loginUserOrAdminAndStoreTokenIntoLocalStorage(email.value, password.value)
    if ((response as string).length > 0) {
        errorMessage.value = response as string
    }
    else {
        const user = (response as AxiosResponse).data.user
        const token = (response as AxiosResponse).data.access_token
        userStore.setLoggedInUser(user)
        localStorage.setItem('userId', userStore.getLoggedInUser.id.toString())
        if (user.status == 2) {
            localStorage.setItem('userToken', token);
            localStorage.setItem('status', '2');
            userToken.value = token
            router.push({ name: 'dashboardView' })
        }
        else if (user.status == 3) {
            localStorage.setItem('adminToken', token);
            localStorage.setItem('status', '3');
            adminToken.value = token
            router.push({ name: 'adminView' })
        }
        else {
            errorMessage.value = "Valami hiba történt..."
        }
    }

    // Form reset
    email.value = '';
    password.value = '';
};

const forgottenPassword = () => {

}
</script>


<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent=handleSubmit>
                    <div class="mb-3">
                        <label for="email">E-mail</label>
                        <input v-model="email" class="form-control" type="email" name="email" id="email"
                            placeholder="example@example.com">
                    </div>

                    <div class="mb-3">
                        <label for="password">Jelszó</label>
                        <input v-model="password" class="form-control" type="password" name="password" id="password">
                    </div>

                    <div v-if="errorMessage" class="alert alert-danger">
                        {{ errorMessage }}
                    </div>

                    <div class="d-flex justify-content-between">
                        <button type="submit" class="btn">Bejelentkezés</button>
                        <button type="button" @click="forgottenPassword()" class="btn">Elfelejtett jelszó</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.row {
    width: 100%;
}



form {
    margin-top: 4rem;
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
</style>