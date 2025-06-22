<template>
  <div>
    <header class="bg-sky-500 text-white text-center py-4">
      <p class="text-2xl">商家列表</p>
    </header>

    <div class="min-h-screen pb-16">
      <div class="bg-white">
        <Shop
            v-for="(shop, index) in shops"
            :key="index"
            :shop="shop"
        />
      </div>
    </div>

    <Bottom/>
  </div>
</template>

<script setup lang="ts">
import Shop from '@/components/--BusiList/Shop.vue'
import Bottom from "@/components/Bottom.vue";

const shops = [
  {
    id: 3,
    name: '万家饺子 (软件园E18店)',
    img: '/img/sj01.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '各种饺子炒菜',
    isNew: true
  },
  {
    id: 2,
    name: '小锅饭豆腐馆 (全运店)',
    img: '/img/sj02.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '特色美食'
  },
  {
    id: 1,
    name: '麦当劳麦乐送 (全运路店)',
    img: '/img/sj03.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '汉堡薯条'
  },
  {
    id: 4,
    name: '米村拌饭 (浑南店)',
    img: '/img/sj04.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '各种炒菜拌饭'
  },
  {
    id: 5,
    name: '申记串道 (中海康城店)',
    img: '/img/sj05.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '烤串炸串'
  },
  {
    id: 6,
    name: '半亩良田排骨米饭',
    img: '/img/sj06.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '排骨米饭套餐'
  },
  {
    id: 7,
    name: '茶兮鲜果饮品 (国际软件园店)',
    img: '/img/sj07.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '甜品饮品'
  },
  {
    id: 8,
    name: '唯一水果捞 (软件园E18店)',
    img: '/img/sj08.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '新鲜水果'
  },
  {
    id: 9,
    name: '满园春饼 (全运路店)',
    img: '/img/sj09.png',
    deliveryFee: 3,
    minPrice: 15,
    tags: '各种春饼'
  }
]
</script>