import request from "@/utils/request";

export const getArticles = (num = 1) =>
  request({
    url: `/articles?page=${num}`,
    method: "GET",
  });

export const getArticleItem = (id) =>
  request({
    url: `/article/${id}`,
    method: "GET",
  });
