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
    },
    {
        path:'/addproduct',
        name:'addproduct',
        component: () => import('../views/Addproduct.vue')
    },
    {
        path:'/viewproduct/:id',
        name:'editproduct',
        component: () => import('../views/EditProduct.vue')
    },
    {
        path:'/loginuser',
        name:'loginuser',
        component: () => import('../views/CustomerLogin.vue')
    },
    {
        path:'/preview',
        name:'userview',
        component: () => import('../views/CustomerProduct.vue')
    },
    {
        path:'/previewproduct/:id',
        name:'preview',
        component: () => import('../views/Overview.vue')
    },
    {
        path:'/cart',
        name:'cart',
        component:()=> import('../views/Cart.vue')
    },
    {
        path:'/user/:id',
        name:'information',
        component:()=> import('../views/InforUserPage.vue')
    },
    {
        path:'/admincart/:id',
        name:'cartdetail',
    },
    {
        path:'/admincart',
        name:'admincart'
    }

];
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes, 
    });
export default router;  
