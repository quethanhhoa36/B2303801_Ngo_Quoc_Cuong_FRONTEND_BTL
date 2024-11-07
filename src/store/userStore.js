import { defineStore } from "pinia";

export const userStore = defineStore('user',{
    state:() => ({ 
        isLogin: false,
        user: null,
        cart:{},
    }),
    getters:{
        getUser: ()=> {return this.user},
    },
    actions:{
        login(user){
            this.isLogin=true;
            this.user =user;
        },
        logout(){
            this.isLogin=false;
            this.user=null;
        },
    },

});