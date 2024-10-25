<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <Form :validation-schema="userSchema" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-2">
          <Field v-model="user.email" id="email" name="email" type="text"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="email" class="error-feedback"/>
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div class="mt-2">
          <Field v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="password" class="error"/>
        </div>
      </div>
      <div>
        <button @click="loginUser" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </Form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Chưa có tài khoản ?
      <RouterLink to ="/signup">Đăng ký</RouterLink>
    </p>
  </div>
</div>    
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
export default {
  components:{
        Form,
        Field,
        ErrorMessage
    },
  props: {
      user: { type: Object, required: true}
    },
  data(){
        const userSchema = Yup.object().shape({
        email: Yup.string().required("Vui lòng nhập email"),
        password: Yup.string().required("Nhập mật khẩu").min(9)
      })
      return {
        userSchema,
        userLocal:this.user
      }
  },
  methods:{
    loginUser(){
      this.$emit("login:user",this.userLocal);
    }
  }
  
};
</script>