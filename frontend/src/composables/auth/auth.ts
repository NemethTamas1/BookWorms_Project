import type { User } from "@/models/User";
import axios from "axios";
import { ref } from "vue";

export const user = ref<User>()

export async function loginUserOrAdminAndStoreTokenIntoLocalStorage(email: string, password: string): Promise<null | string>{
    try {
        const response = await axios.post('http://localhost:3000/user/login', {
            email: email,
            password: password
        });

        const token = response.data.access_token
        const responseUser = response.data.user

        if(responseUser.status == 3){
            user.value = responseUser as User
            localStorage.setItem('userToken', token); // Store the token in local storage
            console.log('Logged in successfully!');
            return null
        }
        else if(responseUser.status == 4){
            user.value = responseUser as User
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