import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { loginUserOrAdminAndStoreTokenIntoLocalStorage } from '@/composables/auth/auth'
import type { User } from '@/models/User'

export const useLoggedInUserStore = defineStore('user', () => {
  const loggedInUser = ref<User>()
  function setLoggedInUser(user: User){
    loggedInUser.value = user
  }
  return { loggedInUser, setLoggedInUser }
})
