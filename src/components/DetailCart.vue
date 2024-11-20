<template>
    

<!-- Invoice -->

<!-- Modal -->

<!-- Modal -->
<!-- Invoice -->
<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
  <div class="sm:w-11/12 lg:w-3/4 mx-auto">
    <!-- Card -->
    <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl">
      <!-- Grid -->
      <div class="flex justify-between">
        <div>
          

          <h1 class="mt-2 text-lg md:text-xl font-semibold text-blue-600">Nhà sách - Thư viện</h1>
        </div>
        <!-- Col -->

        <div class="text-end">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-800">Đơn hàng chi tiết</h2>

          <address class="mt-4 not-italic text-gray-800">
            Số 522<br>
            Đường 3/2<br>
            P.Hưng Lợi, Q.Ninh Kiều<br>
            Việt Nam<br>
          </address>
        </div>
        <!-- Col -->
      </div>
      <!-- End Grid -->

      <!-- Grid -->
      <div class="mt-8 grid sm:grid-cols-2 gap-3">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Đơn của</h3>
          <h3 class="text-lg font-semibold text-gray-800">{{ this.user.username }}</h3>
          <address class="mt-2 not-italic text-gray-500">
            {{ this.user.address }}
          </address>
        </div>
        <!-- Col -->

        <div class="sm:text-end space-y-2">
          <!-- Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl class="grid sm:grid-cols-5 gap-x-3">
              <dt class="col-span-3 font-semibold text-gray-800">Ngày trả sách:</dt>
              <dd class="col-span-2 text-gray-500">{{ this.getDueDate }}</dd>
            </dl>
          </div>
          <!-- End Grid -->
        </div>
        <!-- Col -->
      </div>
      <!-- End Grid -->

      <!-- Table -->
      <div class="mt-6">
        <div class="border border-gray-200 p-4 rounded-lg space-y-4">
          <div class="hidden sm:grid sm:grid-cols-4">
            <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Sản phẩm</div>
            <div class="text-start text-xs font-medium text-gray-500 uppercase">Tác giả</div>
            <div class="text-start text-xs font-medium text-gray-500 uppercase">Số lượng</div>
          </div>

          

          <div v-for="item in items" class="grid grid-cols-3 mt-1 sm:grid-cols-4 gap-2">
            <div class="col-span-full sm:col-span-2">
              <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
              <p class="font-medium text-gray-800">{{ item.name }}</p>
            </div>
            <div>
              <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Tác giả</h5>
              <p class="text-gray-800">{{ item.author }}</p>
            </div>
            <div>
              <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
              <p class="text-gray-800">{{ item.quantity }}</p>
            </div>
            
          </div>
          



        </div>
      </div>
      <!-- End Table -->

      <!-- Flex -->
      <div class="mt-8 flex sm:justify-end">
        <div class="w-full max-w-2xl sm:text-end space-y-2">
          <!-- Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">

            <dl class="grid sm:grid-cols-5 gap-x-3">
              <dt class="col-span-3 font-semibold text-gray-800">Số tiền phải trả:</dt>
              <dd class="col-span-2 text-gray-500">10.000VNĐ</dd>
            </dl>

          </div>
          <!-- End Grid -->
        </div>
      </div>
      <!-- End Flex -->

      <div class="mt-8 sm:mt-12">
        <div class="mt-2">
          <p class="block text-sm font-medium text-gray-800">nhasach@gmail.com</p>
          <p class="block text-sm font-medium text-gray-800">+0123456789</p>
        </div>
      </div>

      <p class="mt-5 text-sm text-gray-500">© 2022</p>
    </div>
    <!-- End Card -->

    <!-- Buttons -->
    <div class="mt-6 flex justify-end gap-x-3">
      <a @click="this.goback()" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" href="#">
      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Quay lại
      </a>
      <a @click="this.deleteCart(this.$route.params.id)" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
        Xóa đơn
      </a>
      <a @click="this.updateInvoice(this.$route.params.id)" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
        Xác nhận đơn
      </a>
    </div>
    <!-- End Buttons -->
  </div>
</div>
<!-- End Invoice --><!-- End Modal --><!-- End Modal -->
</template>
<script>
import cartService from '@/services/cart.service';
import userService from '@/services/user.service';
import productService from '@/services/product.service';
import { toast } from 'vue3-toastify';
export default{
    data(){
        return{
            cartDetail:{},
            items:[],
            user:{}
        }
    },
    methods:{
        async RetrieveData(data){
            
            this.cartDetail =  await cartService.getId(data)
            this.user= await userService.get(this.cartDetail.userId);
            this.cartDetail.items.forEach(async item => {
                var it = await productService.get(item.productId)
                this.items.push({
                    name: it.productname,
                    author: it.author,
                    quantity: item.quantity,
                })
            });
        },
        goback(){
            this.$router.go(-1);
        },
        async updateInvoice(id){
            await cartService.update(id,{
                finished:true,
            })
            toast.success("Thành công cập nhật xử lí đơn hàng",
                {
                  autoClose: 3000,
                }
            )
        },
        async deleteCart(id){
            await cartService.deleteId(id)
        }
    },
    computed:{
        getDueDate(){
            const duedate= new Date(this.cartDetail.duedate)
            return duedate.getDate()+"/"+duedate.getMonth()+"/"+duedate.getFullYear();
        }
    },
    mounted(){
        this.RetrieveData(this.$route.params.id)
    }
}
</script>