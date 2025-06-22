<template>
  <!-- 顶部标题部分 -->
  <div class="bg-sky-500 px-4 pt-4 pb-3">
    <div class="flex items-center text-white font-bold text-base">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><!-- Icon from Elusive Icons by Team Redux - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M600 0C350.178 0 147.656 202.521 147.656 452.344c0 83.547 16.353 169.837 63.281 232.031L600 1200l389.062-515.625c42.625-56.49 63.281-156.356 63.281-232.031C1052.344 202.521 849.822 0 600 0m0 261.987c105.116 0 190.356 85.241 190.356 190.356C790.356 557.46 705.116 642.7 600 642.7s-190.356-85.24-190.356-190.356S494.884 261.987 600 261.987" /></svg>
      <span class="text-lg">沈阳市规划大厦</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><!-- Icon from Akar Icons by Arturo Wibawa - https://github.com/artcoholic/akar-icons/blob/master/LICENSE --><path fill="currentColor" d="M6 8a1 1 0 0 0-.8 1.6l6 8a1 1 0 0 0 1.6 0l6-8A1 1 0 0 0 18 8z" /></svg>
    </div>
  </div>

  <!-- sticky 搜索栏，用负 margin 消除白线 -->
  <div class="sticky top-0 z-50 bg-sky-500 px-5 pt-1.25 pb-1.25 -mt-px">
    <div class="flex justify-center">
      <div class="relative w-full max-w-md overflow-hidden rounded-md bg-white shadow-sm">
        <span class="absolute left-24 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><!-- Icon from Simple line icons by Sabbir Ahmed - https://github.com/thesabbir/simple-line-icons/blob/master/LICENSE.md --><path fill="currentColor" d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471s336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527" /></svg>
        </span>
        <input
            type="text"
            placeholder="搜索饿了么商家、商品名称"
            class="pl-30 pr-2 py-2 text-sm text-gray-600 placeholder-gray-500 w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-200 border-none"
        />
      </div>
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>

</style>
