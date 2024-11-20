<template>    
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" class="px-6 py-3">
                    Sản phẩm
                </th>
                <th scope="col" class="px-6 py-3">
                    Thể loại
                </th>
                <th scope="col" class="px-6 py-3">
                    Tác giả
                </th>
                <th scope="col" class="px-6 py-3">
                    Tùy chọn
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in productLists" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 flex py-4 font-semibold text-gray-900 dark:text-white">
                    <img :src="getImgUrl(product.image)" class="w-16 md:w-32 max-w-full max-h-full">
                    <p class="px-6 py-3 ml-3">{{ product.productname }}</p>
                </td>

                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <p>{{product.category}}</p>
                </td>

                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <p>{{product.author}}</p>
                </td>

                <td class="px-6 py-4">
                    <a @click="link(product._id)" href="#" class="font-medium mr-3 text-blue-600 dark:text-red-500 hover:underline">Chỉnh sửa</a>
                    <a @click="deleteProduct(product._id)" href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                </td>
            </tr>
            
            
            
        </tbody>
    </table>
</div>
</template>
<script>
import productService from '@/services/product.service';


export default{
    props:{
        productLists:{type:Array, default:[]},
    },
    
    methods:{
        link(id){
            this.$router.push('/viewproduct/'+id);
        },
        getImgUrl(img){
            return img.data;
        },
        async deleteProduct(id){
            if(confirm("Bạn muốn xóa sản phẩm này ?")){
                await productService.delete(id);
                location.reload
            }
        }
    },
    
    mounted(){
    }
}
</script>