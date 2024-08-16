<script setup lang="ts">
    import { ref } from 'vue';
    import axios from 'axios';

    // Figyelni kívánt változók
    const email = ref<string>('');
    const password = ref<string>('');
    const errorMessage = ref<string>('');

    // Rövid form check
    const handleSubmit = async () => {
        if (!email.value || !password.value) {
            errorMessage.value = 'Kérjük töltse ki az összes mezőt.';
            return; 
        }

        try {
            const response = await axios.post('http://localhost:3000/user/login', {
                email: email.value,
                password: password.value
            });

            const token = response.data.token;
            localStorage.setItem('token', token); // Store the token in local storage

            // You can also redirect the user to a protected route or perform other actions after login
            console.log('Logged in successfully!');
        } catch (error) {
            errorMessage.value = 'Hibás e-mail vagy jelszó.';
        }

        // Form reset
        email.value='';
        password.value='';
    };

    // Ellenőrzés
    console.log('E-mail: ', email.value);
    console.log('Jelszó: ', password.value);
</script>


<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent = handleSubmit>
                    <div class="mb-3">
                        <label for="email">E-mail</label>
                        <input v-model="email" class="form-control" type="email" name="email" id="email" placeholder="example@example.com">
                    </div>

                    <div class="mb-3">
                        <label for="password">Jelszó</label>
                        <input v-model="password" class="form-control" type="password" name="password" id="password">
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