import type { Book } from "@/models/Book";
import type { Application } from "@/models/Application";
import { ref, watchEffect} from "vue";
import type { User } from "@/models/User";

const baseURL = 'https://backend-shy-dew-2743.fly.dev/'
const localURL = 'http://localhost:3000/'
//const baseURL = localURL

export function useGetBooks() {
    const books = ref<Book[]>([])
    const error = ref(null)

    const resetBooksRef = () => {
        books.value = []
        error.value = null
    }

    fetch(baseURL + 'books', {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
        }
    }).then(res => res.json())
        .then((res) => {
            books.value = res
        }).catch(err => {
            error.value = err
            console.log(err)
        })

    watchEffect(() => {
        resetBooksRef();
    })

    return { books, error }
}

export function useGetApplications() {
    const applications = ref<Application[]>([])
    const error = ref(null)

    const resetApplicationsRef = () => {
        applications.value = []
        error.value = null
    }

    fetch(baseURL + 'applications', {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
        }
    }).then(res => res.json())
        .then((res) => {
            applications.value = res
        }).catch(err => {
            error.value = err
            console.log(err)
        })

    watchEffect(() => {
        resetApplicationsRef();
    })

    return { applications, error }
}


export async function useNewUser(newUser: User): Promise<void> {
    await fetch(baseURL + 'user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    }).then(res => {
        if (res.status === 201) {
            console.log('Form adatok sikeresen elküldve!');
            return res.json();
        }
        else {
            console.log('Form adatok elküldése sikertelen!');
        }
    }).then(res => {
        //console.log(res[0]['lastInsertRowid']) // USER ID
    }).catch(err => {
        console.log('Error:', err)
        return { success: false }
    })
}

export async function useNewApplication(newApplication: Application): Promise<void> {
    await fetch(baseURL + 'applications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newApplication)
    }).then(res => {
        if (res.status === 201) {
            console.log('Sikereresen elküldve!');
            return res.json();
        }
        else {
            console.log('Küldés sikertelen!');
        }
    }).then(() => {
    }).catch(err => {
        console.log('Error:', err)
        return { success: false }
    })
    
}