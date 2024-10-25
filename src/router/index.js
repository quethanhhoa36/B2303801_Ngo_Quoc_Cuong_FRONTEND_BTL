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
    }
];
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes, 
    });
export default router;  