<script setup lang="ts">
defineProps<{
  shop: {
    id: number;
    name: string;
    img: string;
    minPrice: number;
    deliveryFee: number;
    tags: string;
    isNew?: boolean;
  };
}>()
</script>


<template>
  <div class="border-b border-gray-100">
    <div class="flex p-3">
      <div class="relative w-24 h-24">
        <img :src="shop.img" class="w-full h-full object-cover rounded" />
        <div v-if="shop.id === 1 || shop.id === 2 || shop.id === 3" class="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-1 py-0.5 rounded-full">{{ shop.id }}</div>
      </div>
      <div class="flex-1 ml-3">
        <h3 class="text-lg font-bold">
          <router-link :to="{ name: 'BusinessInfo', params: { id: shop.id } }">
            {{ shop.name }}
          </router-link>
        </h3>
        <p class="text-sm text-gray-600 mt-1">¥{{ shop.minPrice }}起送 | ¥{{ shop.deliveryFee }}配送</p>
        <p class="text-sm text-gray-600 mt-1">{{ shop.tags }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>