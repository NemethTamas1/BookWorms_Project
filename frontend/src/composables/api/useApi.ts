import type { Book } from "@/models/Book";
import type { Application } from "@/models/Application";
import { ref, watchEffect} from "vue";
import type { User } from "@/models/User";


const baseURL = 'https://backend-shy-dew-2743.fly.dev/'
const localURL = 'http://localhost:3000/'

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

//export const ujId = ref<number>();

//export const idProp = defineProps(['ujId']);

export async function useNewUser(newUser: User): Promise<number | undefined> {
    try {
        const res = await fetch(localURL + 'user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (res.status === 201) {
            console.log('Form adatok sikeresen elküldve!');
            const data = await res.json();
            const lastInsertRowid = data[0]['lastInsertRowid'];
            //ujId.value = lastInsertRowid;
            console.log("useApi-s console.log", lastInsertRowid); // USER ID
            return lastInsertRowid;
        } else {
            console.log('Form adatok elküldése sikertelen!');
        }
    } catch (err) {
        console.log('Error:', err);
        return undefined;
    }
}

