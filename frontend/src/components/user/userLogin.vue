<script setup lang="ts">
    import { ref } from 'vue';

    //Figyelni kívánt változók
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    //Rövid form check
    const handleSubmit = () => {
        if (!email.value || !password.value) {
            errorMessage.value = 'Kérjük töltse ki az összes mezőt.';
            return; 
        }

        //Ellenőrzés
        console.log('E-mail: ', email.value);
        console.log('Jelszó: ', password.value);

        //Form reset
        email.value='';
        password.value='';
    };
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent = handleSubmit>
                    <div class="mb-3">
                        <label for="email">E-mail</label>
                        <input class="form-control" type="email" name="email" id="email" placeholder="example@example.com">
                    </div>

                    <div class="mb-3">
                        <label for="password">Jelszó</label>
                        <input class="form-control" type="password" name="password" id="password">
                    </div>

                    <div v-if="errorMessage" class="alert alert-danger">
                        {{ errorMessage }}
                    </div>

                    <button type="submit" class="btn">Bejelentkezés</button>
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
    font-family: "Playfair Display SC", serif;
    background-color: #191416;
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

.btn {
    margin-top: 1rem;
    background-color:#F5CD7E;
}
</style>