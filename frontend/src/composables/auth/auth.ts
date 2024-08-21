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

        const token = response.data.access_token
        const status = response.data.status
        console.log(token)
        console.log(status)
        if(status == 3){
            userIsLoggedIn.value = true
            localStorage.setItem('userToken', token); // Store the token in local storage
            console.log('Logged in successfully!');
            return null
        }
        else if(status == 4){
            adminIsLoggedIn.value = true
            localStorage.setItem('adminToken', token);
            console.log('Logged in successfully!');
            return null
        }
        else{
            console.log('Invalid user status!');
            return null
        }
    } catch (error) {
        console.log(error)
        let errorMessage = '';
        return errorMessage = 'Hibás e-mail cím vagy jelszó.';
    }
}