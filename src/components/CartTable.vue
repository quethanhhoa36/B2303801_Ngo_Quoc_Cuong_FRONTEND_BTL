<template>
    

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Người mượn
                </th>
                <th scope="col" class="px-6 py-3">
                    Ngày trả sách
                </th>
                <th scope="col" class="px-6 py-3">
                    Trạng thái
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cart in this.cartDisplay" @click="link(cart.id)"  class="hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ cart.username }}
                </th>
                <td class="px-6 py-4">
                    {{ cart.date }}
                </td>
                <td v-if="cart.state" class="px-6 py-4">
                    Đã hoàn thành
                </td>
                <td v-else class="px-6 py-4">
                    Chưa xử lý
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>
<script>
import userService from '@/services/user.service';
export default{
    props:{
        cartLists:{type:Array, default:[]},
    },
    data(){
        return{
            cartDisplay:[],
        }
    },
    watch:{
            async cartLists(){
            this.cartDisplay=[]
            this.cartLists.forEach(async (cart)=>{
                var cartdue = new Date(cart.duedate)
                var date= cartdue.getDate() +"/" +cartdue.getMonth()+"/"+cartdue.getFullYear()
                var username = await userService.get(cart.userId)
                this.cartDisplay.push({
                    username: username.username,
                    id: cart._id,
                    date:date,
                    state: cart.finished
                })
            })
        }
    },
    methods:{
        link(data){
            this.$router.push("/admincart/"+data);
        }
    }
}
</script>