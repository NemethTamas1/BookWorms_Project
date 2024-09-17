<script setup lang="ts">
import { useChangeUserOrAdminData, useGetUserById } from '@/composables/api/useApi';
import { useLoggedInUserStore } from '@/stores/userStore';
import { adminToken, userToken } from '@/composables/auth/auth';
import type { User } from '@/models/User';
import { reactive, ref } from 'vue';

const userStore = useLoggedInUserStore()
const userId = userStore.getLoggedInUser.id
const status = userStore.getLoggedInUser.status

let user = ref<User>({} as User)
const changedPassword = ref<string>('')
const changedPasswordAgain = ref<string>('')

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
            await useChangeUserOrAdminData(user.value, userToken.value!)
        }
        else if (status == 3) {
            await useChangeUserOrAdminData(user.value, adminToken.value!)
        }
    }
    else {
        if (changedPassword.value === changedPasswordAgain.value) {
            user.value.password = changedPassword.value
            if (status == 2) {
                await useChangeUserOrAdminData(user.value, userToken.value!)
            }
            else if (status == 3) {
                await useChangeUserOrAdminData(user.value, adminToken.value!)
            }
        }
    }
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

    if (user.value.email === '') {
        errMessages.email_err_msg = 'Az e-mail cím nem lehet üres!';
        validationError = true;
    } else {
        errMessages.email_err_msg = '';
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
    <div class="container">
        <div class="row">
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
                <input @focus="validateInputField()" @keyup="validateInputField()" class="form-label"
                    :disabled="!isActiveField" type="text" id="email" name="email" v-model="(user.email)">
                <p class="errorMsg" v-if="errMessages.email_err_msg !== ''">{{ errMessages.email_err_msg }}
                </p>
                <label for="password" class="form-label">Jelszó megváltoztatása:</label>
                <input v-model="(changedPassword)" @focus="validateInputField()" @keyup="validateInputField()" class="form-label" :disabled="!isActiveField" type="password"
                    name="password" id="password" autocomplete="new-password">
                <label for="passwordAgain" class="form-label">Jelszó mégegyszer:</label>
                <input v-model="(changedPasswordAgain)" @focus="validateInputField()" @keyup="validateInputField()" class="form-label" :disabled="!isActiveField" type="password"
                    name="passwordAgain" id="passwordAgain">
                <p class="errorMsg" v-if="errMessages.password_match_err_msg !== ''">{{ errMessages.password_match_err_msg }}
                </p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-warning" :disabled="isActiveField" @click="activateInputFields()">Adatok
                        módosítása</button>
                    <button class="btn btn-danger" v-if="isActiveField"
                        @click="cancelUserOrAdminDataModify()">Mégse</button>
                    <button class="btn btn-success" type="submit"
                        :disabled="!isActiveField || validateInputField()">Mentés</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 5rem;
}

form {
    display: flex;
    flex-direction: column;

    input {
        border-radius: .2rem;
    }
}

button {
    width: 30%;
}
</style>