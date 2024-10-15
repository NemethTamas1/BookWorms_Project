<script setup lang="ts">
import { useChangeUserOrAdminData, useGetUserById } from '@/composables/api/useApi';
import { useLoggedInUserStore } from '@/stores/userStore';
import { adminToken, userToken } from '@/composables/auth/auth';
import type { User } from '@/models/User';
import { reactive, ref, onMounted } from 'vue';

onMounted(() => initialize());

const userStore = useLoggedInUserStore()
const userId = userStore.getLoggedInUser.id
const status = userStore.getLoggedInUser.status

let user = ref<User>({} as User)
const changedPassword = ref<string>('')
const changedPasswordAgain = ref<string>('')
let dataChangedSuccessfully = ref<boolean>(false)
let dataChangeError = ref<boolean>(false)

const initialize = () => {
    dataChangedSuccessfully.value = false
    dataChangeError.value = false
}

const errMessages = reactive({
    family_name_err_msg: '',
    first_name_err_msg: '',
    email_err_msg: '',
    password_match_err_msg: ''
});

let isActiveField = ref<boolean>(false)
if (status == 2) {
    user.value = await useGetUserById(userId, userToken.value!) as User
}
else if (status == 3) {
    user.value = await useGetUserById(userId, adminToken.value!) as User
}

const activateInputFields = () => {
    isActiveField.value = true
}

const cancelUserOrAdminDataModify = async () => {
    isActiveField.value = false
    if (status == 2) {
        user.value = await useGetUserById(userId, userToken.value!) as User
    }
    else if (status == 3) {
        user.value = await useGetUserById(userId, adminToken.value!) as User
    }
}

const changeUserOrAdminData = async () => {
    if (changedPassword.value === '' && changedPasswordAgain.value === '') {
        if (status == 2) {
            try {
                await useChangeUserOrAdminData(user.value, userToken.value!)
                dataChangedSuccessfully.value = true
                isActiveField.value = false
                changedPassword.value = ''
                changedPasswordAgain.value = ''
            } catch (error) {
                dataChangeError.value = true
            }
        }
        else if (status == 3) {
            try {
                await useChangeUserOrAdminData(user.value, adminToken.value!)
                dataChangedSuccessfully.value = true
                isActiveField.value = false
                changedPassword.value = ''
                changedPasswordAgain.value = ''
            } catch (error) {
                dataChangeError.value = true
            }
        }
    }
    else {
        if (changedPassword.value === changedPasswordAgain.value) {
            user.value.password = changedPassword.value
            if (status == 2) {
                try {
                    await useChangeUserOrAdminData(user.value, userToken.value!)
                    dataChangedSuccessfully.value = true
                    isActiveField.value = false
                    changedPassword.value = ''
                    changedPasswordAgain.value = ''
                } catch (error) {
                    dataChangeError.value = true
                }
            }
            else if (status == 3) {
                try {
                    await useChangeUserOrAdminData(user.value, adminToken.value!)
                    dataChangedSuccessfully.value = true
                    isActiveField.value = false
                    changedPassword.value = ''
                    changedPasswordAgain.value = ''
                } catch (error) {
                    dataChangeError.value = true
                }
            }
        }
    }
}

const validateEmailInputField = () => {
    let validationError = false;

    if (user.value.email === '') {
        errMessages.email_err_msg = 'Az e-mail cím mező nem lehet üres!';
        validationError = true;
    } else {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!emailRegex.test(user.value.email)) {
            errMessages.email_err_msg = 'Az e-mail cím formátuma nem megfelelő!'
            validationError = true;
        }
        else {
            errMessages.email_err_msg = '';
            validationError = false;
        }
    }
    return validationError;
}


const validateInputField = () => {
    let validationError = false;

    if (user.value.family_name === '') {
        errMessages.family_name_err_msg = 'A vezetéknév nem lehet üres!';
        validationError = true;
    } else {
        errMessages.family_name_err_msg = '';
        validationError = false;
    }

    if (user.value.first_name === '') {
        errMessages.first_name_err_msg = 'A keresztnév nem lehet üres!';
        validationError = true;
    } else {
        errMessages.first_name_err_msg = '';
        validationError = false;
    }

    if (changedPassword.value != changedPasswordAgain.value) {
        errMessages.password_match_err_msg = 'A két jelszó nem egyezik!';
        validationError = true;
    } else {
        errMessages.password_match_err_msg = '';
        validationError = false;
    }

    return validationError;
};


</script>

<template>
    <section>
        <div class="szemelyes_adatok">
            <div>
                <h1>Személyes adatok</h1>
            </div>
        </div>
        <div class="form-div mt-3">
            <form class="col-12" @submit.prevent="changeUserOrAdminData()">
                <label for="family_name" class="form-label">Vezetéknév: </label>
                <input @focus="validateInputField()" @keyup="validateInputField()" class="form-label"
                    :disabled="!isActiveField" type="text" id="family_name" name="family_name"
                    v-model="(user.family_name)">
                <p class="errorMsg" v-if="errMessages.family_name_err_msg !== ''">{{ errMessages.family_name_err_msg }}
                </p>
                <label for="first_name" class="form-label">Keresztnév: </label>
                <input @focus="validateInputField()" @keyup="validateInputField()" class="form-label"
                    :disabled="!isActiveField" type="text" id="first_name" name="first_name"
                    v-model="(user.first_name)">
                <p class="errorMsg" v-if="errMessages.first_name_err_msg !== ''">{{ errMessages.first_name_err_msg }}
                </p>
                <label for="email" class="form-label">E-mail: </label>
                <input @focus="validateEmailInputField()" @keyup="validateEmailInputField()" class="form-label"
                    :disabled="!isActiveField" type="text" id="email" name="email" v-model="(user.email)">
                <p class="errorMsg" v-if="errMessages.email_err_msg !== ''">{{ errMessages.email_err_msg }}
                </p>
                <label for="password" class="form-label">Jelszó megváltoztatása:</label>
                <input v-model="(changedPassword)" @focus="validateInputField()" @keyup="validateInputField()"
                    class="form-label" :disabled="!isActiveField" type="password" name="password" id="password"
                    autocomplete="new-password">
                <label for="passwordAgain" class="form-label">Jelszó mégegyszer:</label>
                <input v-model="(changedPasswordAgain)" @focus="validateInputField()" @keyup="validateInputField()"
                    class="form-label" :disabled="!isActiveField" type="password" name="passwordAgain"
                    id="passwordAgain">
                <p class="errorMsg" v-if="errMessages.password_match_err_msg !== ''">{{
                    errMessages.password_match_err_msg }}
                </p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-warning" :disabled="isActiveField" @click="activateInputFields()">Adatok
                        módosítása</button>
                    <button class="btn btn-danger" v-if="isActiveField"
                        @click="cancelUserOrAdminDataModify()">Mégse</button>
                    <button class="btn btn-success" type="submit"
                        :disabled="!isActiveField || validateInputField() || validateEmailInputField()">Mentés</button>
                </div>
            </form>
            <div v-if="dataChangedSuccessfully" class="col-12 text-center">
                <h4>Sikeres adatváltoztatás!</h4>
            </div>
            <div v-if="dataChangeError" class="col-12 text-center">
                <h4>Valami hiba történt, kérjük próbálja meg később!</h4>
            </div>
        </div>
    </section>
</template>

<style scoped>
.szemelyes_adatok {
    width: 100%;
    height: 23vh;
    overflow: hidden;
    /* Ha a tartalom kilógna a konténerből */
}

.szemelyes_adatok h1 {
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

form {
    padding: 1.5rem;
    border: 2px solid #ecd577;
    display: flex;
    flex-direction: column;
    color: #ecd577;

    input {
        border-radius: .2rem;
        background-color: rgba(3, 26, 38, 0.8);
    }
}

.form-div {
    margin: auto;
    width: 40vw;
}

input {
    color: #ecd577;
    background-color: #07080a;
}

button {
    width: 30%;
}
button:hover{
    width: 30%;
    color: wheat;
    background-color: #07080a;
    border: orange 1px solid;
}
.col-12:first-of-type label{
    color: whitesmoke;
    font-weight: 600;
    letter-spacing: 2px;
    background-color: rgba(236, 213, 119, .4);
    width: fit-content;
    padding: 0 1rem;
    border-radius: 1rem;
}

@media (max-width: 992px) {
    section {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        background-size: cover;
    }

    .form-div{
        width: auto;
    }
}
</style>