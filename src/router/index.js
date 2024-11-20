import { createWebHistory, createRouter } from "vue-router";
function isAuthenticated() {
  const token = localStorage.getItem('isLoginAdmin');
  console.log(token);
  return token !== null;
}

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
        component: () => import('../views/Dashboard.vue'),
        meta: { requiresAuth: true }  
    },
    {
        path:'/viewproduct',
        name:'viewproduct',
        component: () => import('../views/ViewProduct.vue'),
        meta: { requiresAuth: true }
    },
    {
        path:'/addproduct',
        name:'addproduct',
        component: () => import('../views/Addproduct.vue'),
        meta: { requiresAuth: true }
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
        path:'/admincart',
        name:'admincart',
        component:()=>import('../views/AdminCart.vue'),
        meta: { requiresAuth: true }
    },
    {
        path:'/admincart/:id',
        name:'admincartdetail',
        component:()=>import('../views/Invoice.vue')
    },
    {
        path:'/test',
        name:'test',
        component:()=>import('../components/DetailCart.vue')
    },
    {
        path:'/signupUser',
        name:'signup',
        component:()=> import('../views/CustomerSignup.vue')
    }

];
const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes, 
    });
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;  
