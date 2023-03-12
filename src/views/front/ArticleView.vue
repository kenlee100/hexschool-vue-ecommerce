<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <template v-for="item in articles" :key="item.id">
          <ArticleItem :article-data="item" text-content-class="!ml-4" />
        </template>
      </div>
      <Pagination
        :pages="pagination"
        @change-page="getArticles"
        :get-list="getArticles"
      />
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination.vue";
import PageHeader from "@/components/PageHeader.vue";
import ArticleItem from "@/components/front/ArticleItem.vue";
import { mapActions, mapState } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import { articlesStore } from "@/stores/articlesStore.js";
export default {
  data() {
    return {};
  },
  components: {
    PageHeader,
    Pagination,
    ArticleItem,
  },
  methods: {
    ...mapActions(articlesStore, ["getArticles", "getArticleItem"]),
  },
  computed: {
    ...mapState(articlesStore, ["articles", "pagination"]),
  },
  async mounted() {
    useLoadingState().isLoading = true;
    await this.getArticles();
  },
};
</script>
