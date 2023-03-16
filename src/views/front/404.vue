<template>
  <div class="layout-content">
    <PageHeader
      page-image="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
