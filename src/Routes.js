import register from './pages/register/register.vue'
import login from './pages/login/login.vue'
import home from './pages/home/home.vue'

export const Routes = [{
        path: '/',
        redirect: '/login',
    },
    {
        path: '/register',
        name: "register",
        component: register,
    },
    {
        path: '/login',
        name: "login",
        component: login,
    },
    {
        path: '/home',
        name: "home",
        component: home,
    },

]