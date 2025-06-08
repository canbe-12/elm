<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col">
    <div class="p-2 text-center bg-blue text-white">用户登录</div>

    <div class="grom">
      <div class="p-2">
        <label>手机号码：</label>
        <input class=" outline-0"/>
      </div>

      <div class="p-2">
        <label class="2-5em inline-block">密码：</label>
        <input type="password" class=" outline-0"/>
      </div>

      <div>
        <button class="bg-green text-white p-2">登录</button>
      </div>

      <div>
        <button class="bg-grey text-black p-2 ">注册新用户</button>
      </div>
    </div>

    <div class="border border-t-gray-7  bg-gray-200 p-2"></div>
  </div>
</template>

<style scoped>

</style>