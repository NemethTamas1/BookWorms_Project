<script setup lang="ts">
import { useLoggedInUserStore, useLogOutUser } from '@/stores/userStore';
import { computed } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const userStore = useLoggedInUserStore()
const router = useRouter()

let userId = computed(() => userStore.getLoggedInUser.id)
let userStatus = computed(() => userStore.getLoggedInUser.status)

const navigateToLoginSite = () => {
    router.push('/login')
}

const handleSelection = (event: any) => {
    const selectedValue = event.target.value
    console.log(selectedValue)
    if (selectedValue === 'logOut') {
        console.log('Első: ', userId)
        logOutUser();
        console.log('Második: ', userId)
    } else if (selectedValue === 'myDashboard') {
        router.push('/dashboard')
    } else if (selectedValue === 'admin') {
        router.push('/admin')
    } else if (selectedValue === 'account') {
        router.push('/account')
    } else if (selectedValue === 'modifyBooks') {
        router.push('/modifyBooks')
    }
}

const logOutUser = () => {
    useLogOutUser();
    navigateToLoginSite();
}

const route = useRoute();
const path = computed(() => route.path)
const scrollToSection = async (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (path.value == '/') {
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
        // navbar összecsukó, kattintás után
        const navbarCollapse = document.querySelector('.navbar-collapse')
        if (window.innerWidth <= 992 && navbarCollapse) {
            navbarCollapse.classList.remove('show')
        }
    }
    else {
        await router.push('/')
            .then(() => {
                scrollToSection(sectionId);
            })
    }
}
</script>
<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
    <div>
        <nav class="navbar navbar-expand-lg d-lg-none sticky-top">
            <div class="container-fluid">
                <RouterLink to="/"><img src="https://kephost.net/p/MTM0ODc2NA.png"
                        alt="A BookWorms madártollas logója" /></RouterLink>
                <RouterLink to="/" class="navbar-brand" id="logoszoveg">BookWorms</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link" href="#Fooldal">Főoldal</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/login"><a class="nav-link">Bejelentkezés</a></RouterLink>
                        </li>
                        <li class="nav-item" @click="scrollToSection('Konyvvalaszto')">
                            <a class="nav-link">Könyvek</a>
                        </li>
                        <li class="nav-item" @click="scrollToSection('kimutatas')">
                            <a class="nav-link">Rólunk</a>
                        </li>
                        <li class="nav-item" @click="scrollToSection('footer')">
                            <a class="nav-link">Kapcsolat</a>
                        </li>
                    </ul>
                    <ul v-if="userId != 0" class="navbar-nav ms-auto">
                        <select class="form-select" name="" id="" @change="handleSelection">
                            <option selected value="valasszon">Válasszon a lehetőségek közül...</option>
                            <option v-if="userStatus == 3" value="admin">Admin oldal</option>
                            <option v-if="userStatus == 3" value="modifyBooks">Könyvek módosítása</option>
                            <option value="myDashboard">Jelentkezéseim</option>
                            <option value="account">Fiókom</option>
                            <option value="logOut">Kijelentkezés</option>
                        </select>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="nav d-none d-lg-flex">
            <div class="nav-item fooldal_gomb" @click="scrollToSection('Fooldal')">
                <i class="fas fa-home"></i>
                <span>Főoldal</span>
            </div>
            <div v-if="userId == 0" class="nav-item fooldal_gomb" @click="navigateToLoginSite()">
                <i class="fas fa-home"></i>
                <span>Bejelentkezés</span>
            </div>
            <div v-if="userId != 0" class="nav-item fooldal_gomb">
                <div class="dropend">
                    <button type="button" class="btn dropdown-toggle fooldal_gomb" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fas fa-sign-in"></i>
                        <ul class="navbar-nav ms-auto">
                            <span>Opciók</span>
                        </ul>
                    </button>
                    <ul class="dropdown-menu ms-2" v-if="userId != 0">
                        <li v-if="userStatus == 3" value="admin">
                            <RouterLink to="/admin" class="dropdown-item">Admin oldal</RouterLink>
                        </li>
                        <li value="myDashboard"><RouterLink to="/dashboard" class="dropdown-item">Jelentkezéseim</RouterLink></li>
                        <li value="account">
                            <RouterLink to="/account" class="dropdown-item">Profil Beállítások</RouterLink>
                        </li>
                        <li v-if="userStatus == 3" value="modifyBooks">
                            <RouterLink to="/modifyBooks" class="dropdown-item">Könyv módosítása</RouterLink>
                        </li>
                        <li value="logOut"><a class="dropdown-item" @click="logOutUser()">Kijelentkezés</a></li>
                    </ul>
                </div>
            </div>

            <div class="nav-item fooldal_gomb" @click="scrollToSection('Konyvvalaszto')">
                <i class="fas fa-book"></i>
                <span>Könyvek</span>
            </div>
            <div class="nav-item fooldal_gomb" @click="scrollToSection('kimutatas')">
                <i class="fas fa-info-circle"></i>
                <span>Rólunk</span>
            </div>
            <div class="nav-item fooldal_gomb" @click="scrollToSection('footer')">
                <i class="fa-solid fa-address-book"></i>
                <span>Kapcsolat</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 993px) {
    #navbarSupportedContent {
        border: none;
        padding: 0;
        padding-bottom: 0.5rem;
        margin: 0;
        line-height: 0;
        color: #efcf83;
    }

    .navbar-toggler {
        background: #f8d985;
        border-width: 2px;
        border-color: rgb(209, 157, 14);
    }

    .navbar {
        background: linear-gradient(180deg,
                rgba(3, 26, 38, 1) 0%,
                rgba(22, 58, 78, 1) 50%,
                rgba(4, 28, 41, 1) 100%);
        border-bottom: 2px solid rgba(209, 157, 14, 0.5);
    }

    .nav-item {
        display: block;
        max-width: 20%;
        margin: auto;
        border-radius: 1rem;
        cursor: pointer;
    }

    #logoszoveg {
        color: #efcf83;
        font-size: 35px;
        font-weight: 600;
        text-shadow: 2px 2px 2px rgba(188, 102, 3, 0.6);
    }

    .nav-item:hover {
        border-radius: 1rem;
        cursor: pointer;
        background-color: rgb(227, 173, 46, 0.3);
        margin: auto;
    }

    .nav-link {
        color: #efcf83;
        font-weight: 600;
        display: block;
        margin: 0;
        padding: 5px;
        width: fit-content;
        letter-spacing: 2px;
    }

    .nav-link:hover {
        color: #f7c94b;
    }
}

.dropdown-item:hover {
    background-color: rgba(159, 132, 42, 0.8);

    height: auto;
}

.dropdown-menu {
    margin: auto;
    padding-bottom: 1rem;
    background: linear-gradient(180deg,
            rgba(36, 38, 40, 0.8) 0%,
            rgba(60, 60, 59, 0.8) 40%,
            rgba(112, 97, 78, 0.8) 70%,
            rgba(159, 132, 42, 0.8) 100%);
    border-top: 2px solid rgba(255, 166, 0, 0.1);
    border-right: 2px solid rgba(255, 166, 0, 0.2);
    transform: translateX(20px);
    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.show>.dropdown-menu {
    opacity: 1;
    transform: translateX(0);
}

.dropdown-item {
    color: #efcf83;
    font-size: 20px;
    color: whitesmoke;
}

.btn.dropdown-toggle {
    outline: none !important;
    box-shadow: none !important;
    border: none;
}

.btn.dropdown-toggle::after {
    display: none !important;
}

.nav {
    position: fixed;
    background: rgb(40, 45, 48);
    background: rgb(36, 38, 40);
    background: linear-gradient(180deg,
            rgba(36, 38, 40, 1) 0%,
            rgba(60, 60, 59, 1) 40%,
            rgba(112, 97, 78, 1) 70%,
            rgba(159, 132, 42, 0.8995973389355743) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 5px solid #cc9966;
    justify-content: center;
    height: 100vh;
    width: 145px;
    padding: 0;
}

.fooldal_gomb {
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 1rem;
    border-radius: 20%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: rgb(252, 249, 239);
    cursor: pointer;
    transition:
        background-color 0.3s,
        color 0.3s;
}

.nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px 10px;
    transition:
        background-color 0.3s ease,
        color 0.3s ease;
}

.nav-item i {
    font-size: 26px;
    margin-bottom: 10px;
}

.nav-item span {
    font-size: 18px;
}

@media (min-width: 993px) {
    .nav.d-none.d-lg-flex {
        height: 100%;
    }

    .nav-item {
        border-radius: 0;
        padding: 2rem 0;
        margin: 0;
        box-sizing: border-box;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        box-shadow: 0 0 0 0 rgba(246, 186, 20, 0);
        transition: box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .nav-item:hover {
        box-shadow: 0 0 10px 3px rgba(246, 186, 20, 0.8);
    }
}
</style>