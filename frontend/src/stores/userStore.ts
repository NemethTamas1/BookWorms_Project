import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/models/User'

const loggedInUser = ref<User>({
  id: 0,
  first_name: '',
  family_name: '',
  email: '',
  password: '',
  status: 0
})

export const useLoggedInUserStore = defineStore('user', () => {
  if(localStorage.getItem("userId")){
    loggedInUser.value.id = parseInt(localStorage.getItem("userId")!)
  }
  // if(localStorage.getItem("userEmail")){
  //   loggedInUser.value.email = localStorage.getItem("userEmail")!
  // }
  // if(localStorage.getItem("userFirstName")){
  //   loggedInUser.value.first_name = localStorage.getItem("userFirstName")!
  // }
  // if(localStorage.getItem("userFamilyName")){
  //   loggedInUser.value.family_name = localStorage.getItem("userFamilyName")!
  // }

  const getLoggedInUser = computed(() => loggedInUser.value)
  
  const setLoggedInUser = (user: User) => {
    loggedInUser.value.id = user.id,
    loggedInUser.value.first_name = user.first_name,
    loggedInUser.value.family_name = user.family_name,
    loggedInUser.value.email = user.email
  }

  return { setLoggedInUser, getLoggedInUser }
})


export const useLogOutUser = () => {
  localStorage.clear();
  loggedInUser.value.id = 0;
}