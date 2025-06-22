<template>
  <div>
    <header class="bg-sky-500 text-white text-center py-4">
      <p class="text-2xl">我的订单</p>
    </header>

    <div class="p-4">
      <h2 class="text-lg font-bold mb-2">未支付订单信息：</h2>
      <OrderItem
          v-for="(unpaidOrder, index) in unpaidOrders"
          :key="index"
          :order="unpaidOrder"
          :is-paid="false"
      />
    </div>

    <div class="p-4">
      <h2 class="text-lg font-bold mb-2">已支付订单信息：</h2>
      <OrderItem
          v-for="(paidOrder, index) in paidOrders"
          :key="index"
          :order="paidOrder"
          :is-paid="true"
      />
    </div>

    <Bottom />
  </div>
</template>

<script setup lang="ts">
import OrderItem from '@/components/--OrderList/OrderItem.vue';
import Bottom from "@/components/Bottom.vue";

const unpaidOrders = [
  {
    id: 1,
    name: '万家饺子 (软件园E18店)',
    price: 49,
  },
  {
    id: 2,
    name: '小锅饭豆腐馆 (全运店)',
    price: 55,
  }
];

const paidOrders = [
  {
    id: 3,
    name: '万家饺子 (软件园E18店)',
    price: 49,
  },
  {
    id: 4,
    name: '小锅饭豆腐馆 (全运店)',
    price: 55,
  }
];
</script>