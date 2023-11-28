import request from "@/utils/request";

export const addCart = (data) =>
  request({
    url: `/cart`,
    method: "POST",
    data,
  });

export const getCartList = () =>
  request({
    url: `/cart`,
    method: "GET",
  });

export const updateCart = (content, data) =>
  request({
    url: `/cart/${content.id}`,
    method: "PUT",
    data,
  });

export const deleteCartItem = (content) =>
  request({
    url: `/cart/${content.id}`,
    method: "DELETE",
  });

export const clearCartItem = () =>
  request({
    url: `/carts`,
    method: "DELETE",
  });
