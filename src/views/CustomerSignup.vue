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
  <h1 class="text-2xl font-semibold mb-4">Đăng ký tài khoản mượn sách</h1>
  <Form :validation-schema="userFormSchema">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Email</label>
      <Field v-model="this.user.email" type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
      <ErrorMessage name="email" class="error-feedback"/>
    </div>
    <!-- Password Field -->
    <div class="mb-4">
      <label for="password" class="block text-gray-800">Mật khẩu</label>
      <Field v-model="this.user.password" type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
      <ErrorMessage name="password" class="error"/>
    </div>
    <div class="mb-4">
      <label for="hovaten" class="block text-gray-800">Họ và tên</label>
      <Field v-model="this.user.username" type="text" id="hovaten" name="hovaten" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
      <ErrorMessage name="username" class="error"/>
    </div>
    <div class="mb-4">
      <label for="phone" class="block text-gray-800">Số điện thoại</label>
      <Field v-model="this.user.phone" type="text" id="phone" name="phone" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
      <ErrorMessage name="phone" class="error"/>
    </div>

    <div class="mb-4">
      <label for="address" class="block text-gray-800">Địa chỉ</label>
      <Field v-model="this.user.address" type="text" id="address" name="address" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
      <ErrorMessage name="phone" class="error"/>
    </div>
    <!-- Remember Me Checkbox -->
    <!-- Forgot Password Link -->
    <!-- Login Button -->
    <button @click="createUser(this.user)" type="button" class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Đăng ký</button>
  </Form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-center">
    <a href="#" class="hover:underline"><RouterLink to="/loginuser">Đã có tài khoản ? đăng nhập</RouterLink></a>
  </div>
</div>
</div>
</template>
<script>
import UserService from '@/services/user.service'
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

export default{
      components:{
        Form,
        Field,
        ErrorMessage
    },

    data(){
      const userFormSchema = Yup.object().shape({
            username: Yup.string().required("Tên phải có giá trị"),
            password: Yup.string().required("Nhập mật khẩu").min(5),
            address:Yup.string().required("Vui lòng nhập địa chỉ"),
            email:Yup.string().required("Vui lòng nhập email").min(11),
            phone: Yup.string().required("Nhập số điện thoại").matches(/((09|03|07|08|05))+([0-9]{8}\b)/g,"Số điện thoại không có giá trị"),
        });
        return{
            userFormSchema,
            user:{
                email:'',
                password:'',
                address:'',
                phone:'',
                username:''
            }
        }
    },
    methods:{
      async createUser(data){
        try{
          await UserService.create(data);
          alert("Đăng ký tài khoản thành công")
          this.$router.push('/loginuser')
        }
        catch(error){
          console.log(error);
        }

      }
    }
}
</script>