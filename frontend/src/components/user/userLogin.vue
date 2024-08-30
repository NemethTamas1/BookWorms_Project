<script setup lang="ts">
import { loginUserOrAdminAndStoreTokenIntoLocalStorage } from '@/composables/auth/auth';
import type { User } from '@/models/User';
import { useLoggedInUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'

const userStore = useLoggedInUserStore()

// Figyelni kívánt változók
const email = ref<string>('');
const password = ref<string>('');
const errorMessage = ref<string>('');
const router = useRouter()

// Rövid form check
const handleSubmit = async () => {
    if (!email.value || !password.value) {
        errorMessage.value = 'Kérjük töltse ki az összes mezőt.';
        return;
    }

    const response: string | User = await loginUserOrAdminAndStoreTokenIntoLocalStorage(email.value, password.value)
    if ((response as string).length > 0) {
        errorMessage.value = response as string
    }
    else{
        userStore.setLoggedInUser(response as User)
        localStorage.setItem('userId', userStore.getLoggedInUser.id.toString())
        // localStorage.setItem('userEmail', userStore.getLoggedInUser.email.toString())
        // localStorage.setItem('userFirstName', userStore.getLoggedInUser.first_name.toString())
        // localStorage.setItem('userFamilyName', userStore.getLoggedInUser.family_name.toString())
        router.push({ name: 'dashboardView' })
    }

    // Form reset
    email.value = '';
    password.value = '';
};

// Ellenőrzés
// console.log('E-mail: ', email.value);
// console.log('Jelszó: ', password.value);
</script>


<template>
    <div class="container-fluid fullContainer">
        <div class="row justify-content-center ">
            <div class="col bookwormsFelirat ">
                <h1>BookWorms</h1>
            </div>
        </div>
    </div>

    <div class="row bejelentkezesRow">
       <div class="col-12 col-xs-12 col-sm-12 col-lg-4 ondesktop"></div>
        <div class="col-12 col-sm-12 col-lg-12 bejelentkezesForm">
                <form @submit.prevent=handleSubmit>
                    <div class="col-12 col-xs-4 col-sm-8 col-lg-12">
                        <label for="email">E-mail cím</label>
                        <input v-model="email" class="form-control" type="email" name="email" id="email"
                            placeholder="example@example.com">
                        <label for="password">Jelszó</label>
                        <input v-model="password" class="form-control" type="password" name="password" id="password">
                    

                    <div v-if="errorMessage" class=" col-12 col-sm-6 col-lg-12 mb-3 alert alert-danger">
                        {{ errorMessage }}
                    </div>
                </div>

                    <button type="submit" class="btn">Bejelentkezés</button>
                </form>
            </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.fullContainer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../src/assets/main/oneBookCircle.png");
    background-size: cover;
    background-position: center;
    opacity: 0.50; 
    z-index: 0;

}

.bookwormsFelirat{
    position: relative;
    z-index: 1;
    display: flex;
    justify-content:center;
    align-items: center;
    font-family: "Playfair Display", serif;
    color: #201a02; 
    text-shadow: 2px 2px 5px #120d01;
    font-style: italic;
    text-shadow: 2px 2px 2px #574d0cc4;
    background-color: #9f91343e;
    box-shadow: 0 0 50px 50px #9f91343e;
    padding-top: 9vh;
    
 }
 
 input::placeholder{
     color:rgb(173, 166, 149);
 }


.bejelentkezesForm {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    color: #201a02;    
    font-family: "Playfair Display", serif;
    font-style: italic;
    margin: 2rem;
    margin-top: -9vh;
    padding: 2rem;
    padding-top: -9vh;
    width:30%;
    background-color: #9f91343e;
    box-shadow: 0 0 50px 50px #9f91343e;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    border: 2px solid #F5CD7E;

    div>label {
        color: #191814;
        
    }
}
 .form-control {
    width: 150%;
 }
 .bejelentkezesRow {
    height: 80vh;
    display: flex;
   align-items: center;
    
 }





label {
margin: 1rem;

color: #191814;
font-family: "Playfair Display", serif;
font-weight: 400;
font-size: 1rem;
}

.btn {
    margin-top: 1rem;
    background-color: #F5CD7E;
    font-family: "Playfair Display", serif;
    font-weight: 400;
    font-size: 1rem;
}

.btn:hover {
    background-color: #191814;
    border-color: #F5CD7E;
    color: #F5CD7E;
}

@media (min-width: 260px) {
    h1 {
        font-size: 3.5rem;
    }
    

}


@media (max-width: 760px) {
  .show-on-mobile { display: none !important; }
  .ondesktop {
    display: none;
  }
  .bejelentkezesForm {
        align-items: center;
        width: 80%;
    }
    .form {
        width:100%;
    }
}


</style>