<template>
  <PageHeader
    image-url="/src/assets/images/img/image/page_404.jpg"
  />
  <div class="container">
    <div class="flex flex-col justify-center space-y-4 max-w-[800px] mx-auto">
      <p class="ch-heading-3 text-center">
        喔不！這裡什麼都沒有。
        <br />請確認您的網址是否正確，或者返回首頁開始您的旅遊體驗。
      </p>
      <div class="py-4 text-center">
        <router-link
          class="btn-base text-netural-netural-100 bg-secondary-secondary-100"
          to="/"
          >返回首頁</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
import { useLoadingState } from "@/stores/common.js";
export default {
  components: {
    PageHeader,
  },
  mounted() {
    useLoadingState().isLoading = false;
  },
};
</script>
