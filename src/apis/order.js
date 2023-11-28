import request from "@/utils/request";

export const getOrder = (id) =>
  request({
    url: `/order/${id}`,
    method: "GET",
  });
export const createOrder = (data) =>
  request({
    url: `/order`,
    method: "POST",
    data,
  });

export const payOrder = (id) =>
  request({
    url: `/pay/${id}`,
    method: "POST",
  });

export const addCoupon = (data) =>
  request({
    url: `/coupon`,
    method: "POST",
    data
  });
