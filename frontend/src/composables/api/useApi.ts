import type { Application } from "@/models/Application";
import type { User } from "@/models/User";
import axios, { type AxiosResponse } from "axios";
import type { Book } from "@/models/Book";
import { useLoggedInUserStore } from "@/stores/userStore";

const baseURL = import.meta.env.VITE_URL + 'api/'
console.log(baseURL)

export async function useGetBooks(): Promise<Book[]> {
    try {
        const response = await axios.get(baseURL + 'books', {
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

export async function useGetApplications(adminToken: string): Promise<Application[]> {
    try {
        const response = await axios.get(baseURL + 'applications', {
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Authorization': `Admin ${adminToken}`
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
        const response = await axios.post(baseURL + 'user', newUser)
        console.log(response)
        return response.data
    } catch (error: any) {
        console.log(error)
        return 0
    }
}

export async function useNewApplication(newApplication: Application): Promise<AxiosResponse<any, any>> {
    try {
        const response = await axios.post(baseURL + 'applications', newApplication)
        console.log(response)
        return response
    } catch (error: any) {
        return error.response.status
    }
}



//what happens when we call this function with a wrong id?
export async function useUpdateApplication(updatedApplication: Application, adminToken: string): Promise<number> {
    try {
        const headers = {'Authorization': `Admin ${adminToken}`}
        const response = await axios.put(baseURL + `applications/${updatedApplication.id}`, updatedApplication, {headers})
        if (response.status == 200) {
            console.log('Application updated successfully!');
            console.log('Updated application data:', response);
            return response.status
        }
        else {
            console.log('Update failed with status:', response.status);
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
}

export async function useSendEmailToVerification(userId: number): Promise<number> {
    try {
        const response = await axios.post(baseURL + 'mail', { id: userId })
        if (response.status == 201) {
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

export async function useSendEmailToRegistration(userId: number): Promise<number> {
    try {
        const response = await axios.put(baseURL + 'mail/register', { id: userId })
        if (response.status == 201) {
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

export async function useGetUserById(userId: number, token: string): Promise<User | number> {
    try {
        console.log(token)
        const userStatus = useLoggedInUserStore().getLoggedInUser.status
        const response = await axios.get(baseURL + `user/?id=${userId}`, {
            headers: {
                'Authorization': `${userStatus == 2 ? 'User' : userStatus == 3 ? 'Admin' : ''} ${token}`
            }
        })
        if (response.status == 200) {
            return response.data
        }
        else {
            console.log("Something went wrong!")
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
}

export async function useUpdateApplicationStatusById(userId: number, applicationId:number, guestToken: string): Promise<any> {
    try {
        console.log(guestToken)
        const response = await axios.put(baseURL + `applications/?userId=${userId}&applicationId=${applicationId}`, null, {
            headers: {
                'Authorization': `Guest ${guestToken}`
            }
        })
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function useAddUserPasswordAndUpdateStatus(userId: number, password: string) {
    try {
        const response = await axios.put(baseURL + `user/registration/?id=${userId}`, { password: password })
        if (response.status == 200) {
            return response.data
        }
        else {
            console.log("Something went wrong!")
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
} export async function useGetApplicationsByUserId(userId: number, token: string): Promise<Application[]> {
    try {
        const userStatus = useLoggedInUserStore().getLoggedInUser.status
        const response = await axios.get(baseURL + `applications/search-by-userid`, {
            params: { userId: userId },
            headers: {
                'Authorization': `${userStatus == 2 ? 'User' : userStatus == 3 ? 'Admin' : ''} ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function useGetBiggestBid(bookId: number, token:String): Promise<number | null> {
    try {
        const userStatus = useLoggedInUserStore().getLoggedInUser.status
        const response = await axios.get(baseURL + `applications/search-by-bookid`, {
            headers: {'Authorization': `${userStatus == 2 ? 'User' : userStatus == 3 ? 'Admin' : ''} ${token}`},
            params: { bookId: bookId }
        })
        if (response.status == 200) {
            return response.data
        }
        else {
            console.log("Something went wrong!")
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function useSendBid(application: Application, newBid: number, biggestBid: number, token: string): Promise<number> {
    if (newBid <= biggestBid) {
        alert("A licited túl alacsony, addj meg egy magasabb összeget!")
        return 0
    }
    else {
        const updatedApplication = application
        updatedApplication.price = newBid
        try {
            const userStatus = useLoggedInUserStore().getLoggedInUser.status
            const response = await axios.put(baseURL + `applications/${updatedApplication.id}`, application, {
                headers: {
                    'Authorization': `${userStatus == 2 ? 'User' : userStatus == 3 ? 'Admin' : ''} ${token}`
                }
            })
            return response.status
        } catch (error: any) {
            return error.response.status
        }
    }
}