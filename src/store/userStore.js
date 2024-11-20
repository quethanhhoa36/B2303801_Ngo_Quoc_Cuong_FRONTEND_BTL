import { defineStore } from "pinia";
export const userStore = defineStore('user',{
    state: async () => ({ 
        isLogin: false,
        isLoginAdmin: localStorage.getItem('isLoginAdmin')||false
    }),
    actions:{
        async login(user){
            localStorage.setItem('userId',JSON.stringify(user));
        },
        logout(){
            localStorage.removeItem('userId');
        },
        loginAdmin() {
            localStorage.setItem('isLoginAdmin',true);
            },
        logoutAdmin() {
            localStorage.removeItem('isLoginAdmin');
        },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token;
        },
  } ,

});