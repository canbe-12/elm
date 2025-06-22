<template>
  <div class="flex justify-between items-center mb-4">
    <div class="flex items-center w-3/4">
      <img :src="product.img" class="w-16 h-16 mr-2" alt="菜品图片">
      <div>
        <h3 class="text-lg font-bold">{{ product.name }}</h3>
        <p class="text-gray-600 text-sm">{{ product.description }}</p>
        <p class="text-gray-600 mt-1">¥{{ product.price }}</p>
      </div>
    </div>

    <div class="flex items-center">
      <button class="text-gray-400" @click="decreaseQuantity">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
        </svg>
      </button>

      <span class="mx-2">{{ product.quantity }}</span>
      <button class="text-blue-500" @click="increaseQuantity">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>

    </div>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    img: string;
  };
}>();

const increaseQuantity = () => {
  props.product.quantity++;
};

const decreaseQuantity = () => {
  if (props.product.quantity > 0) {
    props.product.quantity--;
  }
};
</script>