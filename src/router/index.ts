import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Login.vue';
import Register from '../Register.vue';
import Index from '../Index.vue';
import BusinessList from "../BusinessList.vue";
import OrderList from "../OrderList.vue";
import Order from '../Order.vue';
import Payment from '../Payment.vue';
import BusinessInfo from '../BusinessInfo.vue';

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
    },
    {
        path: '/businesslist',
        name: 'BusinessList',
        component: BusinessList
    },
    {
        path: '/orderlist',
        name: 'OrderList',
        component: OrderList
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment
    },
    {
        path:'/businessinfo',
        name: 'BusinessInfo',
        component: BusinessInfo
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
