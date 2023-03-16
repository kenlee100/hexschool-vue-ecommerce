<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
      <div class="grid grid-flow-row gap-10 md:gap-0">
        <AboutItem
          v-for="(item, index) in aboutData"
          :key="item.title"
          :item-index="index"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { useLoadingState } from "@/stores/common.js";
import PageHeader from "@/components/PageHeader.vue";
import AboutItem from "@/components/front/AboutItem.vue";
export default {
  data() {
    return {
      aboutData: [
        {
          title: "提供各種日本旅遊行程選擇",
          description:
            "我們提供各種日本旅遊行程選擇，包括觀光旅遊、文化旅遊、戶外探險等。我們與當地景點合作，能夠為客人提供直接購買景點門票的服務。",
        },
        {
          title: "專業的日本旅遊行程網站",
          description:
            "我們致力於為客人提供最專業的旅遊服務。我們的團隊精心規劃各種旅遊行程，讓您體驗日本的魅力",
        },
        {
          title: "我們提供票券販售",
          description:
            "我們還提供票券販售，讓客人的旅行更加輕鬆愉快。我們的團隊一直致力於為客人提供最好的服務，讓旅遊成為一段難忘的回憶。",
        },
        {
          title: "我們熱愛旅遊，了解日本的魅力",
          description:
            "我們的團隊將不斷努力，為客人提供最好的旅遊服務。歡迎您選擇我們，一起體驗日本的魅力。",
        },
      ],
    };
  },
  components: {
    PageHeader,
    AboutItem,
  },
  mounted() {
    useLoadingState().isLoading = true;
    setTimeout(() => {
      useLoadingState().isLoading = false;
    }, 300);
  },
};
</script>
