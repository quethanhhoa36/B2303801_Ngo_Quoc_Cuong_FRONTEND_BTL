import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import('../views/LoginPage.vue')
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import('../components/Signup.vue')
    },
    {
        path: '/main',
        name: "Navbar",
        component: () => import ('../components/Navbar.vue')
    }
];
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes, 
    });
export default router;  