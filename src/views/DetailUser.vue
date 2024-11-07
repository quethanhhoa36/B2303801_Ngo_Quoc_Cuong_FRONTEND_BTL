<template>
  <Navbar/>
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thông tin người dùng</h2>
  </div>  

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <Form :validation-schema="userFormSchema" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <div class="mt-2">
          <Field v-model="user.username" name="name" type="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="name" class="error-feedback"/>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">email</label>
        <div class="mt-2">
          <Field v-model="user.email" name="email" type="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="email" class="error"/>
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">password</label>
        <div class="mt-2">
          <Field v-model="user.password" name="password" type="password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="password" class="error"/>
        </div>
      </div>

      <div>
        <label for="address" class="block text-sm font-medium leading-6 text-gray-900">address</label>
        <div class="mt-2">
          <Field v-model="user.address" name="address" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="address" class="error"/>
        </div>
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
        <div class="mt-2">
          <Field v-model="user.phone" name="phone" type="tel" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="phone" class="error"/>
        </div>
      </div>

      <div>
        <button @click="updateUser(this.id,this.user)"  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign</button>
      </div>
    </Form>
  </div>
</div>    
<RouterView/>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import userService from '@/services/user.service';
import { toast } from 'vue3-toastify';

export default{
    components:{
        Form,
        Field,
        ErrorMessage,
        Navbar
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
            user:{},
            id: this.$route.params.id,
            userFormSchema
        };
    },
    methods:{
        async getUser(id){
            try{
                this.user = await userService.get(id);
            }
            catch(error){
                console.log(error);
            }
        },
        async updateUser(id,data){
            try{
                await userService.update(id,data);
                toast.success('Cập nhật thành công!',{
                  autoClose: 3000,
                });
            }
            catch(error){
                console.log(error)
            }
        }
    },
    mounted(){
        this.getUser(this.id);
    },
}
</script>