import { defineStore } from "pinia";
import { getArticles } from "../apis/articles";
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
      const { articles, pagination } = await getArticles(num);
      this.articles = articles;
      this.pagination = pagination;
    },
  },
});
