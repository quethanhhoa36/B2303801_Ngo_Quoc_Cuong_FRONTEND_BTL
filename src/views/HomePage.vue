<template>
<Navbar/>
  <div class="relative overflow-hidden bg-white">
    <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Thư viện - Nhà sách</h1>
        </div>  
        <div>
          <div class="mt-10">
            <!-- Decorative image grid -->
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src="https://i.pinimg.com/564x/97/f6/67/97f66752f30be411e48746c3bed73954.jpg" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://i.pinimg.com/564x/28/a5/38/28a53818427467bceef016911ed494b4.jpg" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://i.pinimg.com/564x/0e/93/54/0e9354202f3c655eb33e92b9fc9d64d5.jpg" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://i.pinimg.com/736x/8b/75/d8/8b75d8fbfb272b583917f9b60709e56d.jpg" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://i.pinimg.com/236x/5c/8c/0a/5c8c0a86ba91c3ac9ea6b7c71cef4405.jpg" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://i.pinimg.com/236x/6d/0c/d2/6d0cd23779c2016e9950be4d25722ec9.jpg" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"><RouterLink to="/preview">Mượn sách</RouterLink></a>
          </div>
        </div>
      </div>
    </div>
  </div>
<MySwiper :items="items"/>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import productService from '@/services/product.service';
import MyCarouSel from '@/components/MyCarouSel.vue';
export default{
    components:{
        Navbar,
        MySwiper: MyCarouSel,
    },
    data(){
      return{
        items:[
                {
                    image:'https://cdn0.fahasa.com/media/catalog/product/9/7/9786043651591_1.jpg',
                    title:'Lén Nhặt Chuyện Đời',
                    description:'sách hay',
                },
                {
                    image:'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_41170.jpg',
                    title:'Trường Ca Achiles',
                    description:'sách hay',
                },
                {
                    image:'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg',
                    title:'Nhà Giả Kim',
                    description:'sách nổi tiếng',
                },
                {
                    image:'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974182375.jpg',
                    title:'Người Đàn Ông Mang Tên OVE',
                    description:'sách nổi tiếng',
                },
                {
                    image:'https://cdn0.fahasa.com/media/catalog/product/i/m/image_217480.jpg',
                    title:'Cây Cam Ngọt Của Tôi',
                    description:'sách nổi tiếng',
                },
                {
                    image:'https://cdn0.fahasa.com/media/catalog/product/s/u/suoi-am-mat-troi-01-_1_.jpg',
                    title:'Sưởi Ấm Mặt Trời',
                    description:'sách nổi tiếng',
                },
                {
                    image:'https://cdn0.fahasa.com/media/catalog/product/i/m/image_231202.jpg',
                    title:'Người Bà Tài Giỏi Vùng Saga',
                    description:'sách nổi tiếng',
                },
            ]
      }
    },


    
}
</script>