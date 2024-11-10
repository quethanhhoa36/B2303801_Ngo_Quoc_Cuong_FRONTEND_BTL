import { defineStore } from "pinia";
export const userStore = defineStore('user',{
    state: async () => ({ 
        isLogin: false,
    }),
    actions:{
        async login(user){
            localStorage.setItem('userId',JSON.stringify(user));
        },
        logout(){
            localStorage.removeItem('userId');
        },
    },

});