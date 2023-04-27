const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import toast from "@/utils/toast";
import router from "../router";
export const articlesStore = defineStore("articleData", {
  state: () => {
    return {
      articles: [],
      articlesItem: {},
      pagination: {},
      tagData: [],
      currentCategory: "all",
    };
  },
  actions: {
    async getArticles(num = 1) {
      try {
        await axios
          .get(`${VITE_URL}/api/${VITE_PATH}/articles?page=${num}`)
          .then((res) => {
            this.articles = res.data.articles;
            this.pagination = res.data.pagination;
            this.filterTags();
            useLoadingState().isLoading = false;
          });
      } catch (err) {
        useLoadingState().isLoading = false;
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    async getArticleItem(id) {
      try {
        return await axios.get(`${VITE_URL}/api/${VITE_PATH}/article/${id}`);
      } catch (err) {
        useLoadingState().isLoading = false;
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    filterTags() {
      const setItem = new Set();
      this.articles.forEach((item) => {
        item.tag.forEach((tagItem) => {
          this.tagData = [...setItem.add(tagItem)];
        });
      });
    },

    changeTag(tag) {
      router.push(`/article/tags/${tag}`);
    },
    changeArticlesCategory(category) {
      this.currentCategory = category;
      this.changeTag(category);
    },
  },
  getters: {
    filterData(state) {
      return state.currentCategory === "all"
        ? state.articles
        : state.articles.filter((item) => {
            return item.tag.includes(state.currentCategory);
          });
    },
  },
});
