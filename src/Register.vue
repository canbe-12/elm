<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Bottom from "@/components/Bottom.vue";

const router = useRouter();

// 注册表单字段
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");
const name = ref("");
const gender = ref("男");  // 默认选男

// 注册方法
const register = () => {
  if (password.value !== confirmPassword.value) {
    alert("两次密码输入不一致，请重新输入！");
    return;
  }

  // 注册逻辑处理（例如：调用API）
  alert("注册成功！");

  goToLogin();
};

const goToLogin = () => {
  router.push({ name: "Login" });
};
</script>

<template>
  <div class="flex flex-col min-h-screen">

    <header class="bg-sky-500 text-white text-center py-4">
      <p class="text-2xl">用户注册</p>
    </header>

    <div class="w-full px-4 py-6">

      <div class="mb-6">
        <label class="block text-lg mb-2">手机号码：</label>
        <input
            v-model="phone"
            type="text"
            placeholder="请输入手机号码"
            class="w-full text-base p-4 border border-gray-300 rounded-md"
        />
      </div>

      <div class="mb-6">
        <label class="block text-lg mb-2">密码：</label>
        <input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            class="w-full text-base p-4 border border-gray-300 rounded-md"
        />
      </div>

      <div class="mb-6">
        <label class="block text-lg mb-2">确认密码：</label>
        <input
            v-model="confirmPassword"
            type="password"
            placeholder="请确认密码"
            class="w-full text-base p-4 border border-gray-300 rounded-md"
        />
      </div>

      <div class="mb-6">
        <label class="block text-lg mb-2">用户姓名：</label>
        <input
            v-model="name"
            type="text"
            placeholder="请输入用户姓名"
            class="w-full text-base p-4 border border-gray-300 rounded-md"
        />
      </div>

      <div class="mb-6">
        <label class="block text-lg mb-2">性别：</label>
        <div class="text-base">
          <input v-model="gender" type="radio" value="男" class="mr-2" /> 男
          <input v-model="gender" type="radio" value="女" class="mr-2" /> 女
        </div>
      </div>

      <div class="mb-6">
        <button
            @click="register"
            class="bg-[#4caf50] text-white w-full text-lg py-4 rounded-md cursor-pointer hover:opacity-80 transition-opacity"
        >
          注册
        </button>
      </div>

      <div>
        <button
            @click="goToLogin"
            class="bg-[#f1f1f1] text-black w-full text-lg py-4 rounded-md cursor-pointer hover:opacity-80 transition-opacity">
          已有账号？去登录
        </button>
      </div>

    </div>

    <Bottom class="fill-[#333]" />

  </div>
</template>
