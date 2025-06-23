<script setup lang="ts">
defineProps<{
  item: {
    img: string;
    id: number;
    name: string;
    quantity: number;
    price: number;
  };
}>();
</script>

<template>
  <div class="flex justify-between items-center mb-2">
    <div class="flex items-center">
      <img :src="item.img" class="w-10 h-10 mr-2" />
      <div>
        <div class="flex items-center">
          <span>{{ item.name }}</span>
          <span class="ml-2">x{{ item.quantity }}</span>
        </div>
      </div>
    </div>
    <div>
      <span>¥{{ item.price }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>