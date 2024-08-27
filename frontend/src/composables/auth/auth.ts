import type { User } from "@/models/User";
import axios from "axios";

export const adminToken = localStorage.getItem('adminToken')
export const userToken = localStorage.getItem('userToken')

const baseUrl = import.meta.env.VITE_URL + 'api/'

export async function loginUserOrAdminAndStoreTokenIntoLocalStorage(email: string, password: string): Promise<string | User>{
    try {
        let errorMessage = '';
        const response = await axios.post(baseUrl+ 'user/login', {
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