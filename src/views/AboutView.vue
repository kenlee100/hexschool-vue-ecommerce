<template>
  <PageHeader :image-url="pageImage" />
  <div class="container">
    <div class="grid grid-flow-row gap-10 md:gap-0">
      <AboutItem
        v-for="(item, index) in aboutData"
        :key="item.title"
        :item-index="index"
        :title="item.title"
        :description="item.description"
        :image-url="item.imageUrl"
      />
    </div>
  </div>
</template>

<script>
import { useLoadingState } from "@/stores/common.js";
import PageHeader from "@/components/PageHeader.vue";
import AboutItem from "@/components/AboutItem.vue";
import aboutImg01 from "/src/assets/images/img/image/about_01.jpg";
import aboutImg02 from "/src/assets/images/img/image/about_02.jpg";
import aboutImg03 from "/src/assets/images/img/image/about_03.jpg";
import aboutImg04 from "/src/assets/images/img/image/about_04.jpg";
import pageImage from "@/assets/images/img/image/page_about.jpg";
export default {
  data() {
    return {
      aboutData: [
        {
          title: "提供各種日本旅遊行程選擇",
          description:
            "我們提供各種日本旅遊行程選擇，包括觀光旅遊、文化旅遊、戶外探險等。我們與當地景點合作，能夠為使用者提供直接購買景點門票的服務。",
          imageUrl: aboutImg01,
        },
        {
          title: "專業的日本旅遊行程網站",
          description:
            "我們致力於為使用者提供最專業的旅遊服務。我們的團隊精心規劃各種旅遊行程，讓您體驗日本的魅力",

          imageUrl: aboutImg02,
        },
        {
          title: "我們提供票券販售",
          description:
            "我們還提供票券販售，讓使用者的旅行更加輕鬆愉快。我們的團隊一直致力於為使用者提供最好的服務，讓旅遊成為一段難忘的回憶。",
          imageUrl: aboutImg03,
        },
        {
          title: "我們熱愛旅遊，了解日本的魅力",
          description:
            "我們的團隊將不斷努力，為使用者提供最好的旅遊服務。歡迎您選擇我們，一起體驗日本的魅力。",

          imageUrl: aboutImg04,
        },
      ],
      pageImage,
    };
  },
  components: {
    PageHeader,
    AboutItem,
  },
  created() {
    useLoadingState().isLoading = true;
    setTimeout(() => {
      useLoadingState().isLoading = false;
    }, 300);
  },
};
</script>
