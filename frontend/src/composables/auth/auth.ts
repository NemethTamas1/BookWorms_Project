import type { User } from "@/models/User";
import axios, { type AxiosResponse } from "axios";
import { ref } from "vue";

export const adminToken = ref<string|null>(localStorage.getItem('adminToken'))
export const userToken = ref<string|null>(localStorage.getItem('userToken'))

const baseUrl = import.meta.env.VITE_URL + 'api/'

export async function loginUserOrAdminAndStoreTokenIntoLocalStorage(email: string, password: string): Promise<string | AxiosResponse<any, any>>{
    try {
        const response = await axios.post(baseUrl+ 'user/login', {
            email: email,
            password: password
        });
        return response
    } catch (error) {
        console.log(error)
        let errorMessage = '';
        return errorMessage = 'Hibás e-mail cím vagy jelszó.';
    }
}