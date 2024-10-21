<template>
    <h1 class="mx-auto">Hiệu sách 36</h1>
    <SignInForm :user="{}" @submit:user="createUser"/>
</template>
<script>
import UserService from '@/services/user.service'
import SignInForm from '@/components/Signup.vue';
export default{
    components:{
        SignInForm,
    },
    methods:{
        async createUser(data){
                try{
                    await UserService.create(data);
                    alert("thêm liên hệ thành công");
                }
                catch(error){
                    console.log(error);
                }
            }
    }
}
</script>