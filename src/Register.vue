<template>
  <div class="flex flex-col">
    <header class="text-center bg-blue-5 text-white py-4">
      <p class="text-2xl">用户注册</p>
    </header>

    <!-- 注册表单部分 -->
    <div class="form-container">
      <div class="p-2">
        <label>手机号码：</label>
        <input v-model="phone" type="text" placeholder="请输入手机号码" class="input-field" />
      </div>

      <div class="p-2">
        <label>密码：</label>
        <input v-model="password" type="password" placeholder="请输入密码" class="input-field" />
      </div>

      <div class="p-2">
        <label>确认密码：</label>
        <input v-model="confirmPassword" type="password" placeholder="请确认密码" class="input-field" />
      </div>

      <div class="p-2">
        <label>用户姓名：</label>
        <input v-model="name" type="text" placeholder="请输入用户姓名" class="input-field" />
      </div>

      <div class="p-2">
        <label>性别：</label>
        <div class="gender-options" style="font-size: 1.2rem;">
          <input v-model="gender" type="radio" value="男" /> 男
          <input v-model="gender" type="radio" value="女" /> 女
        </div>
      </div>

      <!-- 提交按钮 -->
      <div class="p-2">
        <button @click="register" class="bg-green text-white p-2">注册</button>
      </div>

      <!-- 注册成功后跳转到登录页面 -->
      <div class="p-2">
        <button @click="goToLogin" class="bg-grey text-black p-2">已有账号？去登录</button>
      </div>
    </div>

    <Bottom style="fill: #333"/>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Bottom from "@/components/Bottom.vue";  // 导入 vue-router

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

  // 注册成功后跳转到登录页面
  goToLogin();
};

// 跳转到登录页面
const goToLogin = () => {
  router.push({ name: "Login" });
};
</script>

<style scoped>
header {
  background-color: #3498db;
}


.form-container {
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.input-field {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-top: 8px;
}

button {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
}

button.bg-green {
  background-color: #4caf50;
}

button.bg-grey {
  background-color: #f1f1f1;
}

.gender-options input {
  margin-right: 10px;
}

.p-2 {
  padding: 8px 0;
}
</style>
