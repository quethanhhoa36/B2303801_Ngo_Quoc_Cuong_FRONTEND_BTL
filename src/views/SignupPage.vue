<template>
    <SignUpForm :user="{}" @submit:user="createUser"/>
</template>
<script>
import UserService from '@/services/user.service'
import SignUpForm from '@/components/Signup.vue';
export default{
    components:{
        SignUpForm,
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