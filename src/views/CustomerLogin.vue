<template>
    <!-- component -->
<!-- component -->
<div class="bg-slate-300 flex justify-center items-center h-screen">
    <!-- Left: Image -->
<div class="w-1/2 h-screen hidden lg:block">
  <img src="https://i.pinimg.com/564x/14/b6/70/14b670f183eb1a0ea98d5379f36edd86.jpg" alt="Placeholder Image" class="object-cover w-full h-full">
</div>
<!-- Right: Login Form -->
<div class= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">Đăng nhập</h1>
  <form method="POST">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Email</label>
      <input v-model="this.user.email" type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-800">Mật khẩu</label>
      <input v-model="this.user.password" type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
    </div>
    <!-- Remember Me Checkbox -->
    <!-- Forgot Password Link -->
    <!-- Login Button -->
    <button type="button" @click="loginUser(this.user)" class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Đăng nhập</button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-center">
    <a href="#" class="hover:underline">Sign up Here</a>
  </div>
</div>
</div>
</template>
<script>
import { userStore } from '@/store/userStore'
import UserService from '@/services/user.service'
export default{
    data(){
        return{
            user:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        async loginUser(data){
                    UserService.login(data)
                        .then((res)=>{
                            if(res.length){
                                this.$router.push('/')
                                this.login(res[0])
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