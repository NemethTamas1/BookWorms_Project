import axios from "axios";
import { ref } from "vue";

export const userIsLoggedIn = ref<boolean>(false)
export const adminIsLoggedIn = ref<boolean>(false)

export async function loginUserOrAdminAndStoreTokenIntoLocalStorage(email: string, password: string): Promise<null | string>{
    try {
        const response = await axios.post('http://localhost:3000/user/login', {
            email: email,
            password: password
        });

        const token = response.data.token;
        userIsLoggedIn.value = true
        localStorage.setItem('token', token); // Store the token in local storage
        // You can also redirect the user to a protected route or perform other actions after login
        console.log('Logged in successfully!');
        return null
    } catch (error) {
        let errorMessage = '';
        return errorMessage = 'Hibás e-mail vagy jelszó.';
    }
}