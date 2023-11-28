<template>
  <PageHeader :image-url="pageImage" />
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
      <template v-for="item in articles" :key="item.id">
        <ArticleItem :article-data="item" text-content-class="!ml-4" />
      </template>
    </div>
    <PaginationComponent
      :pages="pagination"
      @change-page="getArticles"
      :get-list="getArticles"
    />
  </div>
</template>

<script>
import PaginationComponent from "@/components/PaginationComponent.vue";
import PageHeader from "@/components/PageHeader.vue";
import ArticleItem from "@/components/ArticleItem.vue";
import { mapActions, mapState } from "pinia";
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
  },
  methods: {
    ...mapActions(articlesStore, ["getArticles"]),
  },
  computed: {
    ...mapState(articlesStore, ["articles", "pagination"]),
  },
  async created() {
    useLoadingState().isLoading = true;
    await this.getArticles();
  },
};
</script>
