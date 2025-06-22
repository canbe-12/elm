<template>
  <div class="footer">
    <ul class="flex justify-between">
      <li @click="goIndex" class="flex flex-col items-center cursor-pointer">
        <i class="fa fa-home text-xl"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><!-- Icon from Dashicons by WordPress - https://github.com/WordPress/dashicons/blob/master/gpl.txt --><path fill="currentColor" d="m16 8.5l1.53 1.53l-1.06 1.06L10 4.62l-6.47 6.47l-1.06-1.06L10 2.5l4 4v-2h2zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5z" /></svg>
        <p>首页</p>
      </li>

      <li @click="goBusinessList" class="flex flex-col items-center cursor-pointer">
        <i class="fa fa-compass text-xl"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 50 50"><!-- Icon from Map Icons by Scott de Jonge - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M25 49C11.766 49 1 38.233 1 25S11.766 1 25 1s24 10.766 24 24s-10.767 24-24 24m0-44C13.972 5 5 13.972 5 25s8.972 20 20 20s20-8.972 20-20S36.028 5 25 5m.045 3.25S18 20.321 18 24v2c0 3.678 7.066 16 7.066 16S32 29.934 32 26.256v-2.262c0-3.679-6.955-15.744-6.955-15.744M25 29a4 4 0 1 1 0-8a4 4 0 0 1 0 8" /></svg>
        <p>发现</p>
      </li>

      <li @click="goOrderList" class="flex flex-col items-center cursor-pointer">
        <i class="fa fa-file-text-o text-xl"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><!-- Icon from Garden SVG Icons by Zendesk - https://github.com/zendeskgarden/svg-icons/blob/main/LICENSE.md --><path fill="none" stroke="currentColor" stroke-linecap="round" d="M4.5 7.5h7m-7 1.97h7m-7 2h7m3-7.27V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5" /></svg>
        <p>订单</p>
      </li>

      <li @click="goLogin" class="flex flex-col items-center cursor-pointer">
        <i class="fa fa-user-o text-xl"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><!-- Icon from uiw icons by liwen0526 - https://github.com/uiwjs/icons/blob/master/LICENSE --><path fill="currentColor" d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0" /></svg>
        <p>我的</p>
      </li>

    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goIndex = () => {
  router.push('/Index');
};

const goBusinessList = () => {
  router.push('/BusinessList');
};

const goOrderList = () => {
  router.push('/OrderList');
};

const goLogin = () => {
  router.push('/Login');
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
