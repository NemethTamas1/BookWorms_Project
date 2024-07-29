import type { Book } from "@/models/Book";
import type { Application } from "@/models/Application";
import { ref, watchEffect } from "vue";

const baseURL = 'https://backend-shy-dew-2743.fly.dev/'
//const baseURL = 'http://localhost:3000/'

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
