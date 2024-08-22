import type { User } from "@/models/User";
import axios from "axios";

export async function loginUserOrAdminAndStoreTokenIntoLocalStorage(email: string, password: string): Promise<string | User>{
    try {
        let errorMessage = '';
        const response = await axios.post('http://localhost:3000/user/login', {
            email: email,
            password: password
        });

        const token = response.data.access_token
        const responseUser = response.data.user

        if(responseUser.status == 2){
            localStorage.setItem('userToken', token); // Store the token in local storage
            console.log('Logged in successfully!');
            return responseUser
        }
        else if(responseUser.status == 3){
            localStorage.setItem('adminToken', token);
            console.log('Logged in successfully!');
            return responseUser
        }
        else{
            console.log('Invalid user status!');
            return errorMessage = 'Hibás e-mail cím vagy jelszó.';
        }
    } catch (error) {
        console.log(error)
        let errorMessage = '';
        return errorMessage = 'Hibás e-mail cím vagy jelszó.';
    }
}