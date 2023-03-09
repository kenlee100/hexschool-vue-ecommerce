<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <template v-for="(item, index) in 6" :key="index">
          <ArticleItem text-content-class="!ml-4" />
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
  created() {
    useLoadingState().isLoading = true;
  },
  mounted() {
    useLoadingState().isLoading = false;
  },
};
</script>
