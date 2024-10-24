<template>
<Navbar :user="getUser" />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import { userStore } from '@/store/userStore';
import userService from '@/services/user.service';
export default{
    components:{
        Navbar,
    },
    methods:{
        getUser(){
            const usersStore = userStore();
            return usersStore.getUser();
        }
    }
}
</script>