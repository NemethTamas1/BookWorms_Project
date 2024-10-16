<script setup lang="ts">
import { useSendForgottenPasswordEmail } from '@/composables/api/useApi';
import { adminToken, loginUserOrAdminAndStoreTokenIntoLocalStorage, userToken } from '@/composables/auth/auth';
import type { User } from '@/models/User';
import { useLoggedInUserStore } from '@/stores/userStore';
import type { Axios, AxiosResponse } from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import NavbarComponent from '../navbar/NavbarComponent.vue';

const userStore = useLoggedInUserStore()

// Figyelni kívánt változók
const email = ref<string>('');
const password = ref<string>('');
const errorMessage = ref<string>('');
const router = useRouter()
let forgottenPasswordRef = ref<boolean>(false)
let passwordEmailSent = ref<string>('')

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
    forgottenPasswordRef.value = true
    console.log(forgottenPasswordRef.value)
}

const sendForgottenPasswordEmail = async (email: string) => {
    const response = await useSendForgottenPasswordEmail(email)
    if (response == 201) {
        passwordEmailSent.value = "true"
    }
    else {
        passwordEmailSent.value = "false"
    }
}

</script>


<template>
    <section>
        <div class="bejelentkezes">
            <div>
                <h1>Bejelentkezés</h1>
            </div>
        </div>
        <div class="form-div mt-3">
            <form @submit.prevent=handleSubmit>
                <div class="mb-3">
                    <label for="email">E-mail</label>
                    <p class="forgottenPasswordMessage" v-if="forgottenPasswordRef">Adja meg az email címet, amihez
                        vissza szeretné állítani a jelszót: </p>
                    <input v-model="email" class="form-control" type="email" name="email" id="email"
                        placeholder="example@example.com">
                </div>

                <div v-if="!forgottenPasswordRef" class="mb-3">
                    <label for="password">Jelszó</label>
                    <input v-model="password" class="form-control" type="password" name="password" id="password">
                </div>

                <div v-if="errorMessage" class="alert alert-danger">
                    {{ errorMessage }}
                </div>
                <div>
                    <p v-if="passwordEmailSent == 'true'">A jelszó változtatásához szükéges emailt a megadott email
                        címre
                        elküldtük!</p>
                    <p v-if="passwordEmailSent == 'false'">A megadott email címmel nem található regisztráció!
                        Amennyiben már jelentkezett egy könyvre, de még kapott regisztrációs e-mailt, kérjük türelmét,
                        amíg egy adminunk jóváhagyja a jelentkezését!</p>
                </div>
                <div class="d-flex justify-content-between">
                    <button v-if="!forgottenPasswordRef" type="submit" class="btn">Bejelentkezés</button>
                    <button v-if="!forgottenPasswordRef" type="button" @click="forgottenPassword()"
                        class="btn">Elfelejtett jelszó</button>
                    <button v-if="forgottenPasswordRef" type="button" @click="sendForgottenPasswordEmail(email)"
                        class="btn">Küldés</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

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

.bejelentkezes {
    width: 100%;
    height: 23vh;
    overflow: hidden;
    /* Ha a tartalom kilógna a konténerből */
}

.bejelentkezes h1 {
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

.row {
    width: 100%;
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

.forgottenPasswordMessage {
    color: white;
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