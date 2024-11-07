<template>
    <Navbar/>
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
export default{
    components:{
        Navbar,
    },
    data(){
      return{
        products:[],
        tmp:[]
      }
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
      console.log(this.products)
    }
}
</script>