import type { Application } from "@/models/Application";
import type { User } from "@/models/User";
import axios, { type AxiosResponse } from "axios";
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
        console.log(response)
        return response.data
    } catch (error: any) {
        console.log(error)
        return 0
    }
}

export async function useNewApplication(newApplication: Application): Promise<AxiosResponse<any, any>> {
    try {
        const response = await axios.post(localURL + 'applications', newApplication)
        console.log(response)
        return response
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

export async function useSendEmailToVerification(userId: number): Promise<number>{
    try {
        const response = await axios.post(localURL + 'mail', {id: userId})
        if(response.status == 201){
            console.log('Email sent!')
            return response.status
        }
        else {
            console.log('Something went wrong!')
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
}

export async function useSendEmailToRegistration(userId: number): Promise<number>{
    try {
        const response = await axios.put(localURL + 'mail/register', {id: userId})
        if(response.status == 201){
            console.log('Email sent!')
            return response.status
        }
        else {
            console.log('Something went wrong!')
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
}

export async function useGetUserById(userId: number): Promise<User | number> {
    try {
        const response = await axios.get(localURL + `user/?id=${userId}`)
        if(response.status == 200){
            return response.data
        }
        else{
            console.log("Something went wrong!")
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
}

export async function useUpdateApplicationStatusById(id: number): Promise<any>{
    try {
        const response = await axios.put(localURL + `applications/?id=${id}`)
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function useAddUserPasswordAndUpdateStatus(userId: number, password: string) {
    try {
        const response = await axios.put(localURL + `user/registration/?id=${userId}`, {password : password})
        if(response.status == 200){
            return response.data
        }
        else{
            console.log("Something went wrong!")
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
}export async function useGetApplicationsByUserId(userId: number): Promise<Application[]> {
    try {
        const response = await axios.get(localURL + `applications/search-by-userid`, {
            params: { userId: userId }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function useGetBiggestBid(bookId: number): Promise<number | null> {
    try {
        const response = await axios.get(localURL + `applications/search-by-bookid`,{
            params: { bookId: bookId }
        })
        if(response.status == 200){
            return response.data
        }
        else{
            console.log("Something went wrong!")
            return 0
        }
    } catch (error) {
            console.log(error)
            return 0
    }
}

export async function useSendBid(application: Application, newBid: number, biggestBid: number): Promise<number> {
    if(newBid <= biggestBid){
        alert("A licited túl alacsony, addj meg egy magasabb összeget!")
        return 0
    }
    else{
        const updatedApplication = application
        updatedApplication.price = newBid
        try {
            const response = await axios.put(localURL + `applications/${updatedApplication.id}`, updatedApplication)
            return response.status
        } catch (error: any) {
            return error.response.status
        }
    }
}