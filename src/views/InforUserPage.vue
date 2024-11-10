<template>
    <Navbar/>
    



    <form>
        
  <div class="mt-3 w-1/2 mx-auto space-y-12">
    <nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Chi tiết người dùng</span>
      </div>
    </li>
  </ol>
</nav>
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">Thông tin</h2>

    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">Thông tin cá nhân</h2>
      <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Tên người dùng</label>
          <div class="mt-2">
            <input v-model="this.user.username" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Số điện thoại</label>
          <div class="mt-2">
            <input v-model="this.user.phone" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Địa chỉ email</label>
          <div class="mt-2">
            <input v-model="this.user.email" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>


        <div class="col-span-full">
          <label for="street-address" class="block text-sm/6 font-medium text-gray-900">Địa chỉ</label>
          <div class="mt-2">
            <input v-model="this.user.address" type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>

      </div>
        <div class="mt-6 flex items-center justify-center gap-x-6">
    <button @click="this.updateUser(this.user._id,this.user)" type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>

    </div>
    <div class="relative overflow-x-auto">
        
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Tên sản phẩm
                </th>
                <th scope="col" class="px-6 py-3">
                    Số Lượng
                </th>
                <th scope="col" class="px-6 py-3">
                    Thể Loại
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cart in cartItems" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ cart.name }}
                </th>
                <td class="px-6 py-4">
                    {{ cart.quantity }}
                </td>
                <td class="px-6 py-4">
                    {{ cart.category }}
                </td>
            </tr>
            <tr style="column-span: 4;" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                Quý độc giả đã đặt hàng thành công. Xin vui lòng đến địa chỉ 522 đường 2/3 để nhận sách. Phí mượn sách là 10.000VNĐ 
            </tr>
        </tbody>
    </table>
</div>

  </div>

</form>



</template>
<script>
import Navbar from '@/components/Navbar.vue';
import userService from '@/services/user.service';
import cartService from '@/services/cart.service';
import productService from '@/services/product.service';
import { toast } from 'vue3-toastify';
export default{
    components:{
        Navbar,
    },
    data(){
        return{
            user:{},
            cartItems:[]
        }
    },
    methods:{
        async RetrieveUser(id){
            this.user= await userService.get(id)
        },
        async updateUser(id,data){
            await userService.update(id,data)
                .then(()=>{
                    toast.success('Cập nhật thành công',{
                        autoClose: 3000,
                    })
                })
        },
        async RetrieveCart(id){
            await cartService.get(id)
                .then(data=>{
                    console.log(data[0])
                    data[0].items.forEach( async (element) => {
                    let item= await productService.get(element.productId);
                    this.cartItems.push({
                    name: item.productname,
                    category:item.category,
                    quantity:element.quantity,
            })
        });
                })
        },
    },
    computed:{
    },
    mounted(){
        this.RetrieveUser(this.$route.params.id);
        this.RetrieveCart(this.$route.params.id)
        
    }
}
</script>