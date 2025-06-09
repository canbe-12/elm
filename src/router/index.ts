import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Login.vue';
import Register from '../Register.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Login,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
