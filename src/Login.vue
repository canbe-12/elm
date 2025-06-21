<script setup lang="ts">
import Bottom from '@/components/Bottom.vue';
import { useRouter } from "vue-router";

const router = useRouter();

const goToRegister = () => {
  router.push({ name: "Register" });
};
</script>

<template>
  <div class="flex flex-col min-h-screen">

    <header class="bg-[#3498db] text-white text-center py-4">
      <p class="text-2xl">用户登录</p>
    </header>

    <div class="flex-1 w-full px-4 py-6">

      <div class="mb-6">
        <label class="block text-lg mb-2">手机号码：</label>
        <input
            type="text"
            placeholder="请输入手机号码"
            class="w-full text-base p-4 border border-gray-300 rounded-md"
        />
      </div>

      <div class="mb-6">
        <label class="block text-lg mb-2">密码：</label>
        <input
            type="password"
            placeholder="请输入密码"
            class="w-full text-base p-4 border border-gray-300 rounded-md"
        />
      </div>

      <div class="mb-4">
        <button
            class="bg-[#4caf50] text-white w-full text-lg py-4 rounded-md hover:opacity-80 transition-opacity"
        >
          登录
        </button>
      </div>

      <div>
        <button
            @click="goToRegister"
            class="bg-[#f1f1f1] text-black w-full text-lg py-4 rounded-md hover:opacity-80 transition-opacity"
        >
          注册新用户
        </button>
      </div>

    </div>

    <Bottom class="fill-[#333]" />

  </div>
</template>
