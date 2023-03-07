<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
      <div class="space-y-6">
        <div
          class="rounded border border-netural-netural-300"
          v-for="item in faqData"
          :key="item.title"
        >
          <h2 class="px-4 py-3">
            <button class="accordion-button" type="button">
              {{ item.title }}
            </button>
          </h2>
          <div class="accordion-collapse collapse">
            <div class="px-4 py-3">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
import { useLoadingState } from "@/stores/common.js";
export default {
  data() {
    return {
      faqData: [
        {
          title: "如何預訂行程？",
          description:
            "可以在我們的網站上選擇您感興趣的行程，然後依照網站上的指示進行預訂。",
        },
        {
          title: "行程的支付方式有哪些？",
          description: "我們接受信用卡、ATM轉帳等支付方式",
        },
        {
          title: "可以退訂行程嗎？退訂需要支付什麼費用？",
          description:
            "我們的退訂政策因行程而異，一般情況下，如果您在出發前退訂，將需要支付一定的退訂費用。",
        },
        {
          title: "行程包含哪些服務？",
          description:
            "行程包括住宿、交通、餐飲等服務。詳情請參閱行程頁面介紹。",
        },
      ],
    };
  },
  components: {
    PageHeader,
  },
  created() {
    useLoadingState().isLoading = false;
  },
};
</script>
