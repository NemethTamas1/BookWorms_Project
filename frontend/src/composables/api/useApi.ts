import type { Application } from "@/models/Application";
import type { User } from "@/models/User";
import axios from "axios";
import type { Book } from "@/models/Book";

const localURL = 'http://localhost:3000/'
const baseURL = import.meta.env.VITE_BASE_URL

export async function useGetBooks(): Promise<Book[]> {
    try {
        const response = await axios.get(localURL + 'books', {
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
        return []
    }
}

export async function useGetApplications(): Promise<Application[]> {
    try {
        const response = await axios.get(localURL + 'applications', {
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function useNewUser(newUser: User): Promise<number> {
    try {
        const response = await axios.post(localURL + 'user', newUser)
        return response.data
    } catch (error: any) {
        console.log(error)
        return 0
    }
}

export async function useNewApplication(newApplication: Application): Promise<number> {
    try {
        const response = await axios.post(localURL + 'applications', newApplication)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}



//what happens when we call this function with a wrong id?
export async function useUpdateApplication(updatedApplication: Application): Promise<number> {
    try {
        const response = await axios.put(baseURL + `applications/${updatedApplication.id}`, updatedApplication)
        if(response.status == 200){
            console.log('Application updated successfully!');
            console.log('Updated application data:', response);
            return response.status
        }
        else{
            console.log('Update failed with status:', response.status);
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
}

