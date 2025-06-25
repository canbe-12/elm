<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductItem from '@/components/--Busiinfo/ProductItem.vue';
import IcRoundShoppingCart from '@/icons/shoppingcart.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goPayment = () => {
  router.push('/Payment');
};

const shop = ref({
  id: 1,
  name: '万家饺子 (软件园E18店)',
  img: '/img/sj01.png',
  minPrice: 15,
  deliveryFee: 3,
  tags: '各种饺子炒菜',
  products: [
    {
      id: 1,
      name: '纯肉鲜肉（水饺）',
      img: '/img/sp01.png',
      description: '新鲜猪肉',
      price: 15,
      quantity: 2
    },
    {
      id: 2,
      name: '玉米鲜肉（水饺）',
      img: '/img/sp02.png',
      description: '玉米鲜肉',
      price: 16,
      quantity: 1
    },
    {
      id: 3,
      name: '虾仁三鲜（蒸饺）',
      img: '/img/sp03.png',
      description: '虾仁三鲜',
      price: 22,
      quantity: 0
    },
    {
      id: 4,
      name: '素三鲜（蒸饺）',
      img: '/img/sp04.png',
      description: '素三鲜',
      price: 15,
      quantity: 0
    },
    {
      id: 5,
      name: '角瓜鸡蛋（蒸饺）',
      img: '/img/sp05.png',
      description: '角瓜鸡蛋',
      price: 16,
      quantity: 0
    },
    {
      id: 6,
      name: '小白菜肉（水饺）',
      img: '/img/sp06.png',
      description: '小白菜肉',
      price: 18,
      quantity: 0
    },
    {
      id: 7,
      name: '芹菜牛肉（水饺）',
      img: '/img/sp07.png',
      description: '芹菜牛肉',
      price: 18,
      quantity: 0
    },
    {
      id: 8,
      name: '虾嫩鲜肉（蒸饺）',
      img: '/img/sp08.png',
      description: '超绝虾滑',
      price: 20,
      quantity: 0
    },
    {
      id: 9,
      name: '角瓜鸡蛋（水饺）',
      img: '/img/sp09.png',
      description: '鲜辣可口',
      price: 13,
      quantity: 0
    },
    {
      id: 10,
      name: '蒸蛋',
      img: '/img/sp10.png',
      description: '嫩滑可口',
      price: 15,
      quantity: 0
    },
    {
      id: 11,
      name: '麻婆豆腐',
      img: '/img/sp11.png',
      description: '下饭神器',
      price: 16,
      quantity: 0
    }
  ]
});
const cartTotal = computed(() => {
  return shop.value.products.reduce((total, product) =>
      total + product.price * product.quantity, 0 );
});

const totalQuantity = computed(() => {
  return shop.value.products.reduce((total, product) => total + product.quantity, 0);
});
</script>


<template>
  <div class="bg-white min-h-screen pb-16">
    <header class="bg-sky-500 text-white text-center py-4">
      <p class="text-2xl">商家信息</p>
    </header>

    <div class="p-4 flex flex-col items-center">
      <img :src="shop.img" alt="商家图片" class="w-50 h-50 object-cover rounded">
      <h2 class="text-2xl font-bold mt-2">{{ shop.name }}</h2>
      <p class="text-gray-600 mt-1">¥{{ shop.minPrice }}起送 ¥{{ shop.deliveryFee }}配送</p>
      <p class="text-gray-600 mt-1">{{ shop.tags }}</p>
    </div>

    <div class="p-4">
      <ProductItem
          v-for="(product, index) in shop.products"
          :key="index"
          :product="product"
      />
    </div>

    <div class="fixed bottom-0 left-0 right-0 bg-gray-800 py-4 flex justify-between items-center shadow-xl">
      <div class="flex items-center pl-4 text-white">
        <div class="relative">
          <IcRoundShoppingCart class="text-blue-500 w-12 h-12" />
          <div v-if="totalQuantity > 0" class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-500 rounded-full border-2 border-gray-300">
            {{ totalQuantity }}
          </div>
        </div>
        <p class="ml-2 text-xl font-bold">¥{{ cartTotal }}</p>
        <p class="ml-1 text-sm text-gray-300">另需配送费3元</p>
      </div>

      <button @click="goPayment" class="absolute right-0 bottom-0 bg-green-500 text-white text-2xl py-6 px-10 shadow-lg">
        去结算
      </button>
    </div>
  </div>
</template>


<style scoped>

</style>