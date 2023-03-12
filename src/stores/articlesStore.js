const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";
export const articlesStore = defineStore("articleData", {
  state: () => {
    return {
      articles: [],
      articlesItem: {},
      pagination: {},
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
            useLoadingState().isLoading = false;
          });
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
    async getArticleItem(id) {
      try {
        return await axios.get(`${VITE_URL}/api/${VITE_PATH}/article/${id}`);
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
  },
});
