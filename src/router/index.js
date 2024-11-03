import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import('../views/SigninPage.vue')
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import('../views/SignupPage.vue')
    },
    {
        path: '/',
        name: "Navbar",
        component: () => import ('../views/HomePage.vue')
    },
    {
        path: '/dashboard/:id',
        name:"userprofile",
        component: ()=> import('../views/DetailUser.vue')
    },
    
    {
        path:'/dashboard',
        name:'dashboard',
        component: () => import('../views/Dashboard.vue')  
    },
    {
        path:'/viewproduct',
        name:'viewproduct',
        component: () => import('../views/ViewProduct.vue')
    }

];
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes, 
    });
export default router;  
