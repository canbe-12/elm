<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const goToOrder = () => {
  router.push("/order");
}

defineProps<{
  order: {
    id: number;
    name: string;
    price: number;
  };
  isPaid: boolean;
}>();
</script>


<template>
  <div class="flex justify-between items-center mb-2">
    <div class="flex items-center">
      <span class="text-lg">{{ order.name }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><!-- Icon from Akar Icons by Arturo Wibawa - https://github.com/artcoholic/akar-icons/blob/master/LICENSE --><path fill="currentColor" d="M6 8a1 1 0 0 0-.8 1.6l6 8a1 1 0 0 0 1.6 0l6-8A1 1 0 0 0 18 8z" /></svg>
    </div>

    <div class="flex items-center">
      <span class="mr-2">¥{{ order.price }}</span>
      <button
          v-if="!isPaid"
          class="bg-yellow-500 text-white px-3 py-0.5 rounded"
          @click="goToOrder"
      >
        去支付
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>