<template>
<div>
    
    <div class="flex h-screen bg-gray-200">
        
        <Sidebar :isViewsProduct="true"/>
        
        <div class="flex flex-col flex-1 overflow-hidden">
<header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
                <div class="flex items-center">
                    <button class="text-gray-500 focus:outline-none lg:hidden">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
    
                    <div class="relative mx-4 lg:mx-0">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </span>
    
                        <input class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text"
                            placeholder="Search">
                    </div>
                </div>
    
            </header>            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div class="container px-6 py-8 mx-auto">
                    <h3 class="text-3xl font-medium text-gray-700">Chỉnh sửa sản phẩm</h3>
    
                    <form enctype="multipart/form-data" action="">
                        <div class="mt-4 flex">
                        <div class="flex items-center justify-center w-1/3">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <img v-if="previewImage" class="w-full h-1/3":src="previewImage" alt="">
                                    <div v-else>
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <div>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    </div>
                                </div>
                                <input id="dropzone-file" type="file" accept="image/jpeg" @change="uploadImg($event)" class="hidden" />
                                
                            </label>
                        </div> 
                        <div class="items-center ml-10 justify-center w-1/3">
                            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
                            <input  v-model="product.productname" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            
                            <label for="small-input" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả sản phẩm</label>
                            <input v-model="product.description" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <label for="small-input" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tác giả</label>
                            <input v-model="product.author" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                            <label for="small-input" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thể loại</label>
                            <input v-model="product.category" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                            <label for="small-input" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhà xuất bản</label>
                            <input v-model="product.NXB" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        
                    </div>
                    <button type="button" @click="updateProduct(this.$route.params.id,this.product)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cập nhật</button>

                    </form>
                </div>
                
            </main>
        </div>
    </div>
</div>
<RouterView/>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import Pagination from '@/components/Pagination.vue';
import productService from '@/services/product.service';
import { toast } from 'vue3-toastify';

export default{
    components:{
        Sidebar,
        Pagination,
    },
    data(){
        return{
            previewImage:null,
            product:{
                productname:'',
                description:'',
                image:null,
                author:'',
                category:'',
                NXB:''
            }
        }
    },
    methods:{
        uploadImg(e){
                const image = e.target.files[0];
                this.product.image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    this.product.image.data = e.target.result
                };
            },
        async updateProduct(id,data){
            try{
                const formData = new FormData();
                formData.append('productname',data.productname)
                formData.append('description',data.description)
                formData.append('image',this.product.image)
                formData.append('author',data.author)
                formData.append('category',data.category)
                formData.append('NXB',data.NXB)
                await productService.update(id,formData)
                    .then(data=>console.log(data))
                    .catch((e)=>console.log(e))
                toast.success('Thêm sản phẩm thành công!',{
                  autoClose: 3000,
                });
            }
            catch(error){
                console.log(error)
            }
        },
        async RetrieveProduct(data){
            this.product= await productService.get(data)
            this.previewImage =this.product.image.data
        }
    },
    mounted(){
        this.RetrieveProduct(this.$route.params.id)
    }
}
</script>