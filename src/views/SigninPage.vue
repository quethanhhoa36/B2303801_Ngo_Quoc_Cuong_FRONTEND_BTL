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
        async loginUser(data){
                    UserService.login(data)
                        .then((res)=>{
                            if(res.length){
                            if(!res[0].isAdmin){
                                alert("Incorrect password!");
                            }else{
                                this.$router.push('/dashboard');
                                this.login(res[0])
                            }
                        } else alert("Incorrect password!");
                        })
            },
            login(Email) {
			const usersStore = userStore();
			usersStore.login( Email );
		},
    }
}
</script>