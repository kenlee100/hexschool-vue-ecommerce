<template>
  <PageHeader :image-url="pageImage" />

  <div class="container">
    <div class="flex flex-col lg:flex-row justify-between lg:space-x-8">
      <div
        class="lg:sticky top-[72px] z-20 flex flex-col self-start w-full lg:w-[260px] mb-6 lg:mb-0 p-4 lg:p-6 border border-netural-netural-300 bg-netural-netural-100 rounded-md"
      >
        <div class="flex flex-col">
          <h3 class="ch-heading-4 font-bold pb-4">
            Tag<span class="pb-4" v-if="currentCategory !== 'all'"
              >：{{ currentCategory }}
            </span>
          </h3>
        </div>

        <ArticleTags :tag-data="tagData" />
      </div>
      <div class="lg:flex-auto w-full lg:w-[75%]">
        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
          <template v-for="item in filterData" :key="item.id">
            <ArticleItem :article-data="item" text-content-class="!ml-4" />
          </template>
        </div>
        <PaginationComponent
          :pages="pagination"
          @change-page="getArticles"
          :get-list="getArticles"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PaginationComponent from "@/components/PaginationComponent.vue";
import PageHeader from "@/components/PageHeader.vue";
import ArticleItem from "@/components/front/ArticleItem.vue";
import ArticleTags from "@/components/front/ArticleTags.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import { articlesStore } from "@/stores/articlesStore.js";
import pageImage from "@/assets/images/img/image/page_article.jpg";
export default {
  data() {
    return {
      pageImage,
    };
  },
  components: {
    PageHeader,
    PaginationComponent,
    ArticleItem,
    ArticleTags,
  },
  methods: {
    ...mapActions(articlesStore, [
      "getArticles",
      "getArticleItem",
      "changeArticlesCategory",
    ]),
  },
  watch: {
    "$route.params.tag": {
      handler(newVal) {
        this.currentCategory = newVal || "all";
      },
      deep: true,
    },
  },
  computed: {
    ...mapState(articlesStore, [
      "articles",
      "pagination",
      "tagData",
      "filterData",
    ]),
    ...mapWritableState(articlesStore, ["currentCategory"]),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(to, from, vm);
      // useLoadingState().isProcessing = true;
    });
  },
  async mounted() {
    useLoadingState().isLoading = true;
    await this.getArticles();
    this.currentCategory = this.$route.params.tag || "all";
  },
};
</script>
