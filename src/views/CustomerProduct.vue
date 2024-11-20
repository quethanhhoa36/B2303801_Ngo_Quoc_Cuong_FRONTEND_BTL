<template>
    <Navbar/>
<div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input v-model="this.searchText" @input="filteredContacts" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm sách..." required />
    </div>
</form>

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
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Sản phẩm</span>
      </div>
    </li>
  </ol>
    </nav>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Sách</h2>

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div @click="link(product._id)" v-for="product in this.products" :key="product._id" class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img :src="getImgUrl(product.image)" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ product.productname }}
              </a>
            </h3>
          </div>

        </div>
      </div>
      <!-- More products... -->
    </div>
  </div>
</div>
</template>

<script>
import productService from '@/services/product.service';
import Navbar from '@/components/Navbar.vue';
import Pagination from '@/components/Pagination.vue';
export default{
    components:{
        Navbar,
        Pagination
    },
    data(){
      return{
        searchText:"",
        products:[],
        tmp:[]
      }
    },
    computed:{
            contactStrings() {
                return this.tmp.map((product) => {
                    const { productname, author } = product;
                    return [productname, author].join("");
                });
            },
            
    },
    methods:{
      async RetrieveProduct(){
            try{
                this.products= await productService.getAll();
                this.tmp = await productService.getAll();
            }
            catch(error){
                console.log(error);
            }
        },
        filteredContacts() {
            if (!this.searchText) this.products = this.tmp
                this.products = this.tmp.filter((_user, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        // async RetrieveProductPage(){
        //     try{
        //         this.tmp = await productService.getByPage(this.pageValue)
        //         this.productsPerPage = await productService.getByPage(this.pageValue)
        //     }
        //     catch(error){
        //         console.log(error);
        //     }
        // },
        getImgUrl(img){
            return img.data;
        },
        link(id){
            this.$router.push('/previewproduct/'+id);
        },
    },
    mounted(){
      this.RetrieveProduct()
      // this.RetrieveProductPage
    }
}
</script>