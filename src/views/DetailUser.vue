<template>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thông tin người dùng</h2>
  </div>  
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <Form :validation-schema="userFormSchema" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Họ và tên</label>
        <div class="mt-2">
          <Field v-model="user.username" name="name" type="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="name" class="error-feedback"/>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-2">
          <Field v-model="user.email" name="email" type="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="email" class="error"/>
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
        <div class="mt-2">
          <Field v-model="user.password" name="password" type="password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="password" class="error"/>
        </div>
      </div>

      <div>
        <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Địa chỉ</label>
        <div class="mt-2">
          <Field v-model="user.address" name="address" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="address" class="error"/>
        </div>
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Số điện thoại</label>
        <div class="mt-2">
          <Field v-model="user.phone" name="phone" type="tel" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <ErrorMessage name="phone" class="error"/>
        </div>
      </div>

      <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input v-model="this.user.isAdmin" value="true"id="bordered-radio-1" type="radio" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thủ thư</label>
      </div>
      <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input v-model="this.user.isAdmin" value="false"checked id="bordered-radio-2" type="radio" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Độc giả</label>
      </div>

      <div class="flex justify-around	">
        <button @click="updateUser(this.id,this.user)"  class="flex w-2/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Lưu</button>
        <button @click="this.$router.go(-1)"  class="flex w-2/3 justify-center rounded-md bg-white-600 px-3 py-1.5 text-sm font-semibold leading-6 text-back shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Quay lại</button>
      </div>

      
      

      
    </Form>
  </div>
</div>    
<RouterView/>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import userService from '@/services/user.service';
import { toast } from 'vue3-toastify';
import Sidebar from '@/components/Sidebar.vue';
export default{
    components:{
        Form,
        Field,
        ErrorMessage,
        Sidebar
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