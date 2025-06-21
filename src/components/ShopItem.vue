<template>
  <div class="flex p-6 border-b">
    <img :src="shop.img" class="w-20 h-20 rounded mr-3" />
    <div class="flex-1">

      <h3 class="font-bold text-base">
        <div class="flex itmes-center">
          <span class="font-bold text-xl">{{ shop.name }}</span>
          <div class="flex-1"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><!-- Icon from Siemens Industrial Experience Icons by Siemens AG - https://github.com/siemens/ix-icons/blob/main/LICENSE.md --><path fill="currentColor" fillRule="evenodd" d="M128 85.335c0-23.564 19.103-42.667 42.667-42.667h170.666c23.565 0 42.667 19.103 42.667 42.667v341.333c0 23.564-19.103 42.667-42.667 42.667H170.667c-23.564 0-42.667-19.103-42.667-42.667zm42.667 0v341.333h170.666V85.335z" clipRule="evenodd" /><path fill="currentColor" d="M277.333 405.335h-42.666v-42.667h42.666zm-64-298.667h85.334v21.333h-85.334z" /></svg>
        </div>
      </h3>

      <p class="text-gray-600 text-sm">
        <div class="flex itmes-center">
          <span>⭐⭐⭐⭐⭐ {{ shop.rating }} 月售{{ shop.sales }}单</span>
          <div class="flex-1"></div>
          <div class="bg-blue-500 text-white px-2 py-0.5 ml-2 rounded text-xs">蜂鸟专送</div>
        </div>
      </p>

      <p class="text-gray-600 text-sm">
        <div class="flex items-center">
          <span>¥{{ shop.minPrice }}起送｜ ¥{{ shop.deliveryFee }}配送</span>
          <div class="flex-1"></div>
          <span>{{ shop.distance }} | {{ shop.time }}</span>
        </div>
      </p>

      <p class="inline-block border border-gray-300 text-gray-500 px-0.75 py-0.5 rounded text-xs">各种饺子</p>

      <p>
        <div class="flex items-center">
          <span class="inline-block bg-green-500 text-white px-1 py-0 rounded-l text-sm">新</span>
          <div class="ml-2 text-gray-600 text-sm mt-1"> 饿了么新用户首单立减9元</div>
          <div class="flex-1"></div>
          <div class="text-gray-500 text-xs mt-1">2个活动 </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><!-- Icon from Akar Icons by Arturo Wibawa - https://github.com/artcoholic/akar-icons/blob/master/LICENSE --><path fill="currentColor" d="M6 8a1 1 0 0 0-.8 1.6l6 8a1 1 0 0 0 1.6 0l6-8A1 1 0 0 0 18 8z" /></svg>
        </div>
      </p>


      <p>
        <div class="flex items-center">
          <span class="inline-block bg-green-500 text-white px-1 py-0 rounded-l text-sm">特</span>
          <div class="ml-2 text-gray-600 text-sm mt-1">特价商品5元起</div>
        </div>
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  shop: {
    name: string;
    img: string;
    rating: number;
    sales: number;
    minPrice: number;
    deliveryFee: number;
    distance: string;
    time: string;
  };
}>();
</script>
