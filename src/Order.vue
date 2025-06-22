<template>
  <div>
    <header class="bg-sky-500 text-white text-center py-4">
      <p class="text-2xl">确认订单</p>
    </header>

    <div class="bg-sky-400 text-white p-4 mb-4">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-bold">订单配送至：</h3>
        <span class="text-xl">></span>
      </div>
      <div class="text-xl font-bold mb-1">沈阳市浑南区智慧四街1-121号</div>
      <div>张三先生 13656785432</div>
    </div>

    <div class="p-4 mb-4">
      <h3 class="text-lg font-bold">万家饺子（软件园E18店）</h3>
    </div>

    <div class="bg-white p-4 mb-4">
      <Lorder
          v-for="(item, index) in orderItems"
          :key="index"
          :item="item"
      />
      <div class="flex justify-between items-center mt-2">
        <span>配送费</span>
        <span>¥3</span>
      </div>
    </div>

    <div class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <span class="text-2xl">¥{{ totalPrice }}</span>
      <button @click="goPayment" class="bg-green-500 px-4 py-1 rounded">去支付</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goPayment = () => {
  router.push('/Payment');
};

import Lorder from '@/components/--Order/Lorder.vue'

const orderItems = [
  {
    img: '/img/sp01.png',
    id: 1,
    name: '纯肉鲜肉（水饺）',
    quantity: 2,
    price: 15
  },
  {
    id: 2,
    img: '/img/sp02.png',
    name: '玉米鲜肉（水饺）',
    quantity: 1,
    price: 16
  }
]

const deliveryFee = 3;

const totalPrice = orderItems.reduce((total, item) =>
    total + item.price * item.quantity, 0) + deliveryFee;
</script>