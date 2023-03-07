<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <template v-for="(item, index) in 6" :key="index">
          <ArticleItem />
        </template>
      </div>
      <!-- <Pagination /> -->
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination.vue";
import PageHeader from "@/components/PageHeader.vue";
import ArticleItem from "@/components/front/ArticleItem.vue";
import { useLoadingState } from "@/stores/common.js";
export default {
  components: {
    PageHeader,
    Pagination,
    ArticleItem,
  },
  mounted() {
    useLoadingState().isLoading = false;
  },
};
</script>
