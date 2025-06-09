<script setup lang="ts">
import HomeIcon from '@/icons/HomeIcon.vue';
import { useRouter } from "vue-router";

const router = useRouter();

const goToRegister = () => {
  router.push({ name: "Register" });
};
</script>

<template>
  <div class="wrapper flex flex-col">

    <header class="text-center bg-blue-5 text-white py-4">
      <p class="text-2xl">用户登录</p>
    </header>

    <div class="form-box px-4 py-6">
      <div class="mb-4">
        <label class="block text-lg">手机号码：</label>
        <input type="text" class="w-full p-2 border rounded-md outline-none" placeholder="请输入手机号码"/>
      </div>

      <div class="mb-4">
        <label class="block text-lg">密码：</label>
        <input type="password" class="w-full p-2 border rounded-md outline-none" placeholder="请输入密码"/>
      </div>

      <div class="mb-4">
        <button class="bg-green text-white w-full py-3 rounded-md">登录</button>
      </div>

      <div class="text-center">
        <button  @click="goToRegister" class="bg-gray-200 text-black py-3 px-6 rounded-md">注册新用户</button>
      </div>
    </div>


    <HomeIcon style="fill: #333"/>

  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100%;
}

header {
  background-color: #3498db;
}

.form-box {
  max-width: 400px;
  margin: 0 auto;
}

button {
  font-size: 1.25rem;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

button.bg-green {
  background-color: #27ae60;
}

button.bg-gray-200 {
  background-color: #bdc3c7;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

button{
  width: 100%;
}
</style>
