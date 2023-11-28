<template>
  <div class="flex w-full">
    <img
      :src="articleContent.imageUrl"
      class="w-full h-[400px] object-cover"
      :alt="articleContent.title"
    />
  </div>
  <div class="flex flex-col flex-1 container">
    <div
      class="relative z-10 flex flex-col flex-1 w-full lg:max-w-[900px] -mt-8 lg:-mt-[84px] lg:mx-auto p-4 lg:py-6 lg:px-[32px] bg-netural-netural-100"
    >
      <div class="[&:not(:last-child)]:mb-5">
        <h3 class="flex items-start [&:not(:last-child)]:mb-2">
          <p
            class="font-bold ch-heading-3 lg:ch-heading-1 text-secondary-secondary-100"
          >
            {{ articleContent.title }}
          </p>
        </h3>
      </div>
      <div class="flex flex-col space-y-4">
        <div class="flex items-start">
          <img
            class="flex-shrink-0 w-8 h-8 [&:not(:last-child)]:mt-2 [&:not(:last-child)]:mr-4 object-cover rounded-full"
            src="https://images.pexels.com/photos/9833110/pexels-photo-9833110.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            :alt="articleContent.author"
          />
          <div class="flex flex-col">
            <p
              class="ch-caption-2 lg:ch-caption-1 font-bold text-netural-netural-400"
            >
              {{ articleContent.author }}
            </p>
            <p
              class="ch-caption-2 lg:ch-caption-1 font-normal text-netural-netural-300"
            >
              {{ $filters.ddmmyyyy(articleContent.create_at) }}
            </p>
          </div>
        </div>
        <div class="flex items-center flex-wrap gap-x-4 gap-y-3">
          <div v-for="tag in articleContent.tag" :key="tag">
            <p
              class="text-netural-netural-300 font-bold ch-caption-1 whitespace-nowrap"
            >
              # {{ tag }}
            </p>
          </div>
        </div>
      </div>
      <div class="pt-9 pb-10 mb-20 border-b-2 border-netural-netural-300">
        <div
          v-html="articleContent.content"
          class="text-netural-netural-300 editor-content"
        ></div>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-between mt-auto space-y-10 lg:space-y-0"
      >
        <template v-for="(item, index) in filterOtherItem" :key="item.id">
          <router-link
            :to="`/article/${item.id}`"
            v-if="index % 2 === 0"
            class="flex flex-row-reverse items-center w-full lg:max-w-none lg:w-[40%] py-3 px-5 lg:py-4 lg:px-8 border-2 lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:border-b-4 border-netural-netural-400 group transition-all ease-in-out duration-500 hover:bg-netural-netural-400 cursor-pointer"
          >
            <p
              class="flex-1 pl-3 ch-heading-3 font-bold text-netural-netural-400 transition-all ease-in-out duration-500 group-hover:text-netural-netural-100 line-clamp-2"
            >
              {{ item.title }}
            </p>
            <div
              class="flex-shrink-0 w-4 h-4 lg:w-8 lg:h-8 mr-auto opacity-100 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:bg-netural-netural-100 bg-netural-netural-400 rotate-180 icon-arrow"
            ></div>
          </router-link>
          <router-link
            :to="`/article/${item.id}`"
            v-if="index % 2 === 1"
            class="flex items-center w-full lg:max-w-none lg:w-[40%] py-3 px-5 lg:py-4 lg:px-8 border-2 lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:border-b-4 border-netural-netural-400 group transition-all ease-in-out duration-500 hover:bg-netural-netural-400 text-right cursor-pointer"
          >
            <p
              class="flex-1 pr-3 ch-heading-3 font-bold text-netural-netural-400 transition-all ease-in-out duration-500 group-hover:text-netural-netural-100 line-clamp-2"
            >
              {{ item.title }}
            </p>
            <div
              class="flex-shrink-0 w-4 h-4 lg:w-8 lg:h-8 ml-auto opacity-100 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:bg-netural-netural-100 bg-netural-netural-400 icon-arrow"
            ></div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import { articlesStore } from "@/stores/articlesStore.js";
import { getArticleItem } from "../apis/articles";
export default {
  data() {
    return {
      articleContent: {},
    };
  },
  methods: {
    ...mapActions(articlesStore, ["getArticleItem", "getArticles"]),
    // 事件 改變articleContent 狀態
    async changeArticleContent(id) {
      const { article } = await getArticleItem(id);
      return article;
    },
  },
  watch: {
    articleId: async function (val) {
      // 換頁時可能會抓不到id而錯誤
      if (!val) return;
      useLoadingState().isLoading = true;
      this.articleContent = await this.changeArticleContent(val);
    },
  },
  computed: {
    ...mapState(articlesStore, ["articles"]),
    // 只篩選出當下頁面內容之外的資料
    filterOtherItem() {
      return this.articles
        .filter((item) => item.id !== this.$route.params.id)
        .splice(0, 2); // 取前兩筆
    },
    articleId() {
      return this.$route.params.id;
    },
  },
  async created() {
    useLoadingState().isLoading = true;
    this.articleContent = await this.changeArticleContent(
      this.$route.params.id
    );
    await this.getArticles();
  },
};
</script>
