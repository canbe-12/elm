import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Login.vue';
import Register from '../Register.vue';
import Index from '../Index.vue';

const routes = [
    {
        path: '/',
        redirect: '/index',
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
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
