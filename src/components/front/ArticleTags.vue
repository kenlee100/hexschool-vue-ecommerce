<template>
  <div class="flex items-center flex-wrap gap-x-2 gap-y-2">
    <div
      @click="changeArticlesCategory(tag)" :title="tag"
      class="px-3 py-1 cursor-pointer bg-netural-netural-200"
      v-for="tag in tagData"
      :key="tag"
    >
      <p
        class="text-netural-netural-400 font-bold ch-caption-1 whitespace-nowrap"
      >
        #{{ tag }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { articlesStore } from "@/stores/articlesStore.js";
export default {
  props: {
    tagData: {
      type: Object,
    },
  },
  methods: {
    ...mapActions(articlesStore, ["changeArticlesCategory", "changeTag"]),
  },
  computed: {
    ...mapState(articlesStore, ["currentCategory", "filterData"]),
  },
};
</script>
