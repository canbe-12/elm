<script setup lang="ts">
defineProps<{
  img: string;
  label: string;
}>();
</script>


<template>
  <div class="flex flex-col items-center text-sm">
    <img :src="img" class="w-12 h-12 mb-1" />
    <span>{{ label }}</span>
  </div>
</template>

<style scoped>

</style>