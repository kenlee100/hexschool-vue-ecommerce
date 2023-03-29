const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import toast from "@/utils/toast";
export const articlesStore = defineStore("articleData", {
  state: () => {
    return {
      articles: [],
      articlesItem: {},
      pagination: {},
      categoryData: [],
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
            this.filterArticles();
            useLoadingState().isLoading = false;
          });
      } catch (err) {
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
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    filterArticles() {
      const setItem = new Set();
      this.articles.forEach((item) => {
        item.tag.forEach((tagItem) => {
          this.categoryData = [...setItem.add(tagItem)];
        });
      });
    },
  },
});
