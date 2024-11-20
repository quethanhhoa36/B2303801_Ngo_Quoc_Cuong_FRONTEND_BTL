<template>
    <Navbar/>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        <RouterLink to="/">Trang chủ</RouterLink>
      </a>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Giỏ hàng</span>
      </div>
    </li>
  </ol>
    </nav>

    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Giỏ hàng</h2>

    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div class="space-y-6">
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div v-for="(cart,index) in carts" :key="index" class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 " :src="cart.img.data" />
              </a>

              <label for="counter-input" class="sr-only">Choose quantity:</label>
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button @click="decreaseQuantity(cart.id)" type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input v-model="cart.quantity" type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                  <button @click="increaseQuantity(cart.id)" type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">{{ cart.name }}</a>

                <div class="flex items-center gap-4">
                  <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Thêm vào bộ sưu tập
                  </button>

                  <button @click="remveFromCart(index)" type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="hidden xl:mt-8 xl:block">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Mọi người quan tâm</h3>
          <div class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
            <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#" class="overflow-hidden rounded">
                <img class="mx-auto h-44 w-44 dark:hidden" src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935095632947.jpg" alt="imac image" />
                <img class="mx-auto hidden h-44 w-44 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              </a>
              <div>
                <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Tiệm Cắt Tóc Trông Về Phía Biển</a>
                <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">Con người ta, khi làm một công việc trong suốt thời gian dài, đặc biệt là làm đi làm lại những tác vụ đơn giản, đầu óc được thả lỏng sẽ bắt đầu suy nghĩ, khiến những thứ như kinh doanh, cuộc đời, triết học nhen nhóm trong tư tưởng.</p>
              </div>
            </div>
            <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#" class="overflow-hidden rounded">
                <img class="mx-auto h-44 w-44 dark:hidden" src="https://cdn0.fahasa.com/media/catalog/product/b/i/biamem.jpg" alt="imac image" />
                <img class="mx-auto hidden h-44 w-44 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
              </a>
              <div>
                <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Con Chim Xanh Biếc Bay Về</a>
                <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">Như một cuốn phim “trinh thám tình yêu”, Con chim xanh biếc bay về dẫn bạn đi hết từ bất ngờ này đến tò mò suy đoán khác, để kết thúc bằng một nỗi hân hoan vô bờ sau bao phen hồi hộp nghi kỵ đến khó thở.</p>
              </div>
            </div>
            <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#" class="overflow-hidden rounded">
                <img class="mx-auto h-44 w-44 dark:hidden" src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_6113.jpg" alt="imac image" />
                <img class="mx-auto hidden h-44 w-44 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
              </a>
              <div>
                <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Văn Học Tuổi 20 - Cõi Người Mắc Cạn</a>
                <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">Cõi người mắc cạn là tiểu thuyết 12 chương của Hoàng Khánh Duy, được tác giả sáng tác theo phương thức huyền thoại hóa, chú trọng yếu tố văn hóa và môi trường “xanh”.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p class="text-xl font-semibold text-gray-900 dark:text-white">Thống kê đơn hàng</p>

          <div class="space-y-4">

            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt class="text-base font-bold text-gray-900 dark:text-white">Tổng</dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">10.000VNĐ</dd>
            </dl>
          </div>

          <a @click="order()" href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Đặt hàng</a>

          <div class="flex items-center justify-center gap-2">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> hoặc </span>
            <a href="#" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
              Tiếp tục mượn sách
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</section>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import cartService from '@/services/cart.service';
import { toast } from 'vue3-toastify';
export default{
    data(){
      return{
        carts: [],
        ordercarts:[]
      }
    },
    methods:{
      getCart(){
        this.carts=JSON.parse(localStorage.getItem('cart'))
      },
      increaseQuantity(id){
        this.carts.forEach(cart=>{
          if(cart.id==id){
            cart.quantity++
          }
        })
        localStorage.setItem('cart',JSON.stringify(this.carts))
      },
      decreaseQuantity(id,e){
        this.carts.forEach(cart=>{
          if(cart.id==id){
            cart.quantity--
          }
        })
        localStorage.setItem('cart',JSON.stringify(this.carts))
      },
      remveFromCart(index){
        var i=index+1;
        this.carts.splice(index,1)  
        localStorage.setItem('cart',JSON.stringify(this.carts))
      },
      async order(){
        const userId= JSON.parse(localStorage.getItem('userId'))
        if(!userId){
          this.$router.push("/loginuser")
          return false;
        }
        if(this.carts.length==0){
          toast.error('Giỏ hàng trống',{
            autoClose:3000,
          })
          return false;
        }
        this.carts.forEach(cart =>{
          this.ordercarts.push({
            productId:cart.id,
            quantity:cart.quantity
          })
        })
        
        await cartService.create({
          userId: userId,
          items:this.ordercarts,
        })
          .then(()=>toast.success('Đặt hàng thành công',{
                  autoClose: 3000,
                }))
          .catch(error=>console.log(error))
      }
    },
    components:{
        Navbar
    },
    mounted(){
      this.getCart()
    }
}
</script>