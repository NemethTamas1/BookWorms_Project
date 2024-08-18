import type { Book } from "@/models/Book";
import type { Application } from "@/models/Application";
import { ref, watchEffect} from "vue";
import type { User } from "@/models/User";


const baseURL = import.meta.env.VITE_URL;

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

//Új, refaktorált fetch
export async function  useNewUser(newUser: User): Promise<void> {
    try {
        const response = await fetch(`${baseURL}user`, { //${baseURL}user not ${baseURL}/user
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newUser)
        });

        if(!response.ok) {
            console.error('Form adatok elküldése sikertelen!');
            return;
        }

        const result = await response.json();
        console.log('Form adatok sikeresen elküldve!');
    } catch (error) {
        console.log('Error: ', error)
    }
}

//Régi fetch
// export async function useNewUser(newUser: User): Promise<void> {
//     await fetch(baseURL + 'user', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newUser)
//     }).then(res => {
//         if (res.status === 201) {
//             console.log('Form adatok sikeresen elküldve!');
//             return res.json();
//         }
//         else {
//             console.log('Form adatok elküldése sikertelen!');
//         }
//     }).then(res => {
//         //console.log(res[0]['lastInsertRowid']) // USER ID
//     }).catch(err => {
//         console.log('Error:', err)
//         return { success: false }
//     })
// }

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



//what happens when we call this function with a wrong id?
export async function useUpdateApplication(updatedApplication: Application): Promise<void> {
    try {
        const response = await fetch(`${baseURL}applications/${updatedApplication.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedApplication), // Convert the application object to a JSON string
        });

        if (response.status === 200) { // 200 status indicates successful update
            console.log('Application updated successfully!');
            const data = await response.json(); // Parse the JSON response if needed
            console.log('Updated application data:', data);
        } else {
            console.log('Update failed with status:', response.status);
        }
    } catch (err) {
        console.log('Error:', err);
    }
}

