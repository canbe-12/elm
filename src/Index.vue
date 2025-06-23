<script setup lang="ts">
import SearchBar from '@/components/--index/SearchBar.vue';
import CategoryItem from '@/components/--index/CategoryItem.vue';
import PromoBanner from '@/components/--index/PromoBanner.vue';
import FilterOption from '@/components/--index/FilterOption.vue';
import ShopItem from '@/components/--index/ShopItem.vue';
import Bottom from "@/components/Bottom.vue";

const categories = [
  { img: '/img/dcfl01.png', label: '美食' },
  { img: '/img/dcfl02.png', label: '早餐' },
  { img: '/img/dcfl03.png', label: '跑腿代购' },
  { img: '/img/dcfl04.png', label: '汉堡披萨' },
  { img: '/img/dcfl05.png', label: '甜品饮品' },
  { img: '/img/dcfl06.png', label: '速食简餐' },
  { img: '/img/dcfl07.png', label: '地方小吃' },
  { img: '/img/dcfl08.png', label: '米粉面馆' },
  { img: '/img/dcfl09.png', label: '包子粥铺' },
  { img: '/img/dcfl10.png', label: '炸鸡炸串' }
];

const shops = [
  {
    name: '万家饺子（软件园E18店）',
    img: '/img/sj01.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'各种饺子'
  },
  {
    name: '小锅饭豆腐馆（全运店）',
    img: '/img/sj02.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'特色美食'
  },
  {
    name: '麦当劳麦乐送（全运路店）',
    img: '/img/sj03.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'汉堡薯条'
  },
  {
    name: '米村拌饭（浑南店）',
    img: '/img/sj04.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'各种炒菜拌饭'
  },
  {
    name: '申记串道（中海康城店）',
    img: '/img/sj05.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'烤串炸串'
  },
  {
    name: '半亩良田排骨米饭',
    img: '/img/sj06.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'排骨米饭套餐'
  },
  {
    name: '茶兮鲜果饮品 (国际软件园店)',
    img: '/img/sj07.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'甜品饮品'
  },
  {
    name: '唯一水果捞 (软件园E18店)',
    img: '/img/sj08.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'新鲜水果'
  },
  {
    name: '满园春饼 (全运路店)',
    img: '/img/sj09.png',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: '3.22km',
    time: '30分钟',
    tags:'各种春饼'
  },
];
</script>


<template>
  <div class="bg-white min-h-screen pb-16">
    <SearchBar />

    <div class="grid grid-cols-5 gap-y-4 px-4 py-4">
      <CategoryItem v-for="item in categories" :key="item.label" :img="item.img" :label="item.label" />
    </div>

    <PromoBanner />


    <div class="px-1 mt-4">
      <div class="m-4">

        <div class="text-center mb-5">
          <span class="text-lg font-bold text-gray-600">——</span>
          <span class="ml-3 text-lg font-bold text-gray-600">推荐商家</span>
          <span class="ml-3 text-lg font-bold text-gray-600">——</span>
        </div>
        <div class="flex justify-between items-center border-gray-200 pb-2">
          <FilterOption label="综合排序" />
          <FilterOption label="距离最近" />
          <FilterOption label="销量最高" />
          <FilterOption label="筛选" />
        </div>
      </div>
      <ShopItem
          v-for="shop in shops"
          :key="shop.name"
          :shop="shop" />
    </div>

    <Bottom />

  </div>
</template>

<style scoped>

</style>