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
</script>`


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
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><!-- Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE --><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m4 9H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2" /></g></svg>
      </button>

      <span class="mx-2">{{ product.quantity }}</span>
      <button class="text-blue-500" @click="increaseQuantity">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE --><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z" /></svg>
      </button>

    </div>
  </div>
</template>


<style scoped>

</style>