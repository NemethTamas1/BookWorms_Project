<script setup lang="ts">
    import { useGetUserById } from '@/composables/api/useApi';
    import { useLoggedInUserStore } from '@/stores/userStore';
    import { adminToken, userToken } from '@/composables/auth/auth';
    import type { User } from '@/models/User';
    const userStore = useLoggedInUserStore()
    const userId = userStore.getLoggedInUser.id
    const status = userStore.getLoggedInUser.status
    let user = {} as User
    if(status == 2){
        user = await useGetUserById(userId, userToken.value!) as User
    }
    else if(status == 3){
        user = await useGetUserById(userId, adminToken.value!) as User
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <form class="col-12">
                <label for="family_name">Vezetéknév: </label>
                <input type="text" v-model="(user.family_name)">
            </form>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 5rem;
}
</style>