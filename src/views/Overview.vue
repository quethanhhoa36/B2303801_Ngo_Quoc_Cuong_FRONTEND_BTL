<template>
    <Navbar/>
    <section class="relative mt-10 ">
        <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
                <div class="img">
                    <div class="img-box h-full max-lg:mx-auto ">
                        <img :src="this.product.image.data"
                            class="max-lg:mx-auto lg:ml-auto h-full object-cover">
                    </div>
                </div>
                <div
                    class="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                    <div class="data w-full max-w-xl">
                        <h2 class="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                            {{ product.productname }}</h2>
                        <div class="flex font-manrope text-gray-900 font-bold flex-col sm:flex-row sm:items-center">

                        <p>Mô tả</p>
                            
                        </div>
                        <p class="text-gray-500 text-base font-normal mb-5">
                            {{ product.description }} 
                        </p>
                        
                        <div class="flex font-manrope text-gray-900 font-bold flex-col sm:flex-row sm:items-center">

                        <p>Tác giả</p>
                            
                        </div>
                        <p class="text-gray-500 text-base font-normal mb-5">
                            {{ product.author }} 
                        </p>
                        
                        <div class="flex font-manrope text-gray-900 font-bold flex-col sm:flex-row sm:items-center">

                        <p>Thể loại</p>
                            
                        </div>
                        <p class="text-gray-500 text-base font-normal mb-5">
                            {{ product.category }} 
                        </p>

                        <div class="flex font-manrope text-gray-900 font-bold flex-col sm:flex-row sm:items-center">

                        <p>NXB</p>
                            
                        </div>
                        <p class="text-gray-500 text-base font-normal mb-5">
                            {{ product.NXB }} 
                        </p>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                            <div class="flex sm:items-center sm:justify-center w-full">
                                <button @click="this.quantity--"
                                    class="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                    <svg class="stroke-gray-900 group-hover:stroke-black" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                            stroke-linecap="round" />
                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                            stroke-linecap="round" />
                                    </svg>
                                </button>
                                <input :value="this.quantity" type="number"
                                    class="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                                    placeholder="1">
                                <button @click="this.quantity++"
                                    class="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                    <svg class="stroke-gray-900 group-hover:stroke-black" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="#9CA3AF" stroke-width="1.6"
                                            stroke-linecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                                            stroke-width="1.6" stroke-linecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                                            stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                            <button @click="addToCart(this.$route.params.id)"
                                class="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100">
                                <svg class="stroke-indigo-600 " width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                        stroke="" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                                Thêm vào giỏ hàng</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>                                          
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import productService from '@/services/product.service';
import { userStore } from '@/store/userStore';
import { toast } from 'vue3-toastify';

export default{
    components:{
        Navbar
    },
    data(){
        return {
            quantity: 1,
            product:{
                productname:'',
                description:'',
                image:{},
                author:'',
                category:'',
                NXB:''
            }
        }
    },
    methods:{
        async RetrieveProduct(id){
            this.product= await productService.get(id)
            console.log(this.product)
        },
        addToCart(data){
            if(!localStorage.getItem('cart')){
                const cart = []
                cart.push({
                    id:data,
                    img:this.product.image,
                    name:this.product.productname,
                    quantity:this.quantity
                })
                localStorage.setItem('cart',JSON.stringify(cart))
            }else{
                const cart = JSON.parse(localStorage.getItem('cart'))
                cart.forEach(car => {
                    if(car.id==data){
                        car.id=data
                        car.quantity+=this.quantity
                    }                    
                });
                if(!cart.find(car => car.id==data)){
                    cart.push({
                        id:data,
                        img:this.product.image,
                        name:this.product.productname,
                        quantity:this.quantity
                    })
                }
                localStorage.setItem('cart',JSON.stringify(cart))

            }
            
        }

    },

    mounted(){
        this.RetrieveProduct(this.$route.params.id)
        
    }
}
</script>