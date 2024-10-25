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
                            if(res.data.length){
                            console.log(res.data[0]);
                            this.login(res.data[0]);
						// alert("Login successful!");
                            this.$router.push('/');
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