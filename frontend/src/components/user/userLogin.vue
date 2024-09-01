<script setup lang="ts">
import { loginUserOrAdminAndStoreTokenIntoLocalStorage } from '@/composables/auth/auth';
import type { User } from '@/models/User';
import { useLoggedInUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
// import { useMediaQuery } from '@vueuse/core';

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
    

    <div class="row bejelentkezesRow">
       <!-- <div class="col-12 col-xs-12 col-sm-12 col-lg-4 uresDiv"></div> -->
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

                    <button type="submit" class="btn bejelentkezesGomb">Bejelentkezés</button>
                </form>
               
        </div>     
    </div>
    <div class="row visszaGombRow">
        <div class="col-12 col-xs-12 col-sm-12 col-lg-4 visszaGombDiv ">
            <button type="submit" class="btn visszaGomb">Vissza a Főoldalra</button>        
            
                </div> 
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
    background-image: url("/src/assets/img/main/oneBookCircle.png");
    background-size: cover;
    background-position: center;
    opacity: 0.40; 
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

.bejelentkezesRow {
    display: flex;
    justify-content: center;
    height: 60vh;
    align-items: center;

}


.bejelentkezesForm {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    color: #201a02;
    margin: 2rem;
    margin-top: -9vh;
    padding: 2rem;
    padding-top: -9vh;
    width:30%;
    background-color: #9f91343e;
    box-shadow: 0 0 50px 50px #9f91343e;
    background-color: whitesmoke;
    border-radius: 5px;
    border: 2px solid #F5CD7E;

    div>label {
        color: #191814;
        
    }
}
 .form-control {
    width: 150%;
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

.bejelentkezesGomb {
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
.visszaGomb{
    margin-top: 1rem;
    background-color: #F5CD7E;
    font-family: "Playfair Display", serif;
    font-weight: 400;
    font-size: 1.2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 10rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    font-family:  "Libre Baskerville", serif;
}

.visszaGombRow {
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    
   
}
.visszaGombDiv {
    display: flex;
    justify-content: center;
}



@media screen and (max-width: 768px) {
    h1 {
        font-size: 3.5rem;
    }
    .bejelentkezesForm {
        width: 80%;
        max-width: 500px;
    }
    .form-control {
        width: 100%;
    }
    
  }



@media (min-width: 769px) {
  /* .uresDiv {
    display: none;
  }
  .bejelentkezesForm {
        align-items: center;
        width: 80%;
    }
    .form {
        width:100%;
    } */
}

#scrollToTopBtn {
  display: none; /* Alapértelmezetten rejtve */
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  font-size: 28px;
  background-color: #d1a221cf;
  color: white;
  border: none;
  outline: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  transition:
    width 0.3s ease,
    height 0.3s ease,
    font-size 0.3s ease,
    background-color 0.3s ease;
}

#scrollToTopBtn:hover {
  background-color: #c99505cf;
  width: 70px;
  height: 70px;
  font-size: 32px;
}

</style>