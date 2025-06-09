import { useRouter } from 'vue-router';


<template>
  <div class="footer">
    <ul class="flex justify-between">
      <li @click="goHome" class="flex flex-col items-center cursor-pointer">
        <i class="fa fa-home text-xl"></i>
        <p>首页</p>
      </li>
      <li class="flex flex-col items-center cursor-pointer">
        <i class="fa fa-compass text-xl"></i>
        <p>发现</p>
      </li>
      <li @click="goOrderList" class="flex flex-col items-center cursor-pointer">
        <i class="fa fa-file-text-o text-xl"></i>
        <p>订单</p>
      </li>
      <li class="flex flex-col items-center cursor-pointer">
        <i class="fa fa-user-o text-xl"></i>
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/'); // 导航到首页
};

const goOrderList = () => {
  router.push('/orderList'); // 导航到订单列表
};
</script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer i {
  color: #888;
}
.footer li {
  flex: 1;
  text-align: center;
}
.footer li:hover i {
  color: #007bff;
}
</style>
