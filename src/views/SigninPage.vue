<template>
    <LoginForm :user="{}" @login:user="loginUser" />
</template>
<script>
import { userStore } from '@/store/userStore'
import UserService from '@/services/user.service'
import LoginForm from '@/components/Login.vue';
export default{
    components:{
        LoginForm,
    },
    methods:{
        isAuthenticated() {
            const token = localStorage.getItem('isLoginAdmin');
            return token !== false;
        },
        async loginUser(data){
                    UserService.login(data)
                        .then((res)=>{
                            if(res.length){
                            if(!res[0].isAdmin){
                                alert("Incorrect password!");
                            }else{
                                this.$router.push('/dashboard');
                                this.login()
                            }
                        } else alert("Incorrect password!");
                        })
            },
            login() {
			const usersStore = userStore();
			usersStore.loginAdmin();
		},
    }
}
</script>