import request from "@/utils/request";

export const getProducts = (num = 1) =>
  request({
    url: `/products?page=${num}`,
    method: "GET",
  });

export const getProductsAll = () =>
  request({
    url: `/products/all`,
    method: "GET",
  });
export const getProductItem = (id) =>
  request({
    url: `/product/${id}`,
    method: "GET",
  });
