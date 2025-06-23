<script setup lang="ts">
import {ref} from "vue";
import { useRouter } from 'vue-router';
import Bottom from "@/components/Bottom.vue";
import OouiSuccess from '@/icons/success.vue';

const router = useRouter();

const order = {
  name: '万家饺子（软件园E18店）',
  totalPrice: 49
};

const paymentMethod = ref<null | string>(null);

const togglePaymentMethod = (method: string) => {
  paymentMethod.value = method === paymentMethod.value ? null : method;
};

const confirmPayment = () => {
  alert('支付成功！');
  router.push('/orderList');
};
</script>


<template>
  <div>
    <header class="bg-sky-500 text-white text-center py-4">
      <p class="text-2xl">在线支付</p>
    </header>

    <div class="p-4">
      <h2 class="text-lg mb-2 text-gray-400">订单信息：</h2>
      <div class="flex justify-between items-center mb-2">
        <div class="flex items-center">
          <span class="text-lg">{{ order.name }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><!-- Icon from Akar Icons by Arturo Wibawa - https://github.com/artcoholic/akar-icons/blob/master/LICENSE --><path fill="currentColor" d="M6 8a1 1 0 0 0-.8 1.6l6 8a1 1 0 0 0 1.6 0l6-8A1 1 0 0 0 18 8z" /></svg>
        </div>
        <span class="text-red-500">¥{{ order.totalPrice }}</span>
      </div>
    </div>

    <div class="p-4">
      <div class="flex items-center justify-between mb-4"
        @click="togglePaymentMethod('alipay')">
        <div class="flex items-center">
          <img src="/img/alipay.png" class="w-35 h-10 mr-2" alt="支付宝">
        </div>
        <div class="flex items-center">
          <span v-if="paymentMethod !== 'alipay'" class="w-4 h-4 border-2 border-gray-400 rounded-full"></span>
          <OouiSuccess v-else class="text-green-500"/>
        </div>
      </div>

      <div class="flex items-center justify-between mb-4"
        @click="togglePaymentMethod('wechatpay')">
        <div class="flex items-center">
          <img src="/img/wechat.png" class="w-35 h-10 mr-2" alt="微信支付">
        </div>
        <div class="flex items-center">
          <span v-if="paymentMethod !== 'wechatpay'" class="w-4 h-4 border-2 border-gray-400 rounded-full"></span>
          <OouiSuccess v-else class="text-green-500" />
        </div>
      </div>
    </div>

    <div class="p-4">
      <button
          class="bg-green-500 text-white w-full py-2 rounded-lg text-lg font-bold"
          @click="confirmPayment"
      >
        确认支付
      </button>
    </div>
  </div>

  <Bottom/>
</template>


<style scoped>

</style>