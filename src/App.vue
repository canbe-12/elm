<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<template>
  <div id="app">
    <!-- 这是路由视图，它会根据路由动态显示 Login 或 Register 组件 -->
    <router-view />
  </div>
</template>

<style scoped>
/* 样式可以继续添加 */
</style>
