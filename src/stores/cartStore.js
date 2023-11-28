import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import router from "../router";
import toast from "@/utils/toast";
import { defineStorage } from "@/utils/storage";

import {
  getCartList,
  updateCart,
  deleteCartItem,
  clearCartItem,
} from "../apis/cart.js";

import Swal from "sweetalert2";
export default defineStore("cartStore", {
  state: () => ({
    cart: {},
    currentStep: 1,
  }),
  actions: {
    async getCartList() {
      const { data } = await getCartList();
      this.cart = data;
    },
    // 修改購物車數量
    async updateCart(content) {
      useLoadingState().isProcessing = true;
      await updateCart(content, {
        data: {
          product_id: content.product_id,
          qty: content.qty,
        },
      });
      await this.getCartList();
      const {
        // 取出內層的資料
        product: { title },
      } = content;

      useLoadingState().isProcessing = false;
      await toast.fire({
        icon: "success",
        title: `已更新 品名：${title} 數量`,
      });
    },
    // 刪除單筆購物車
    async deleteCartItem(content) {
      useLoadingState().isProcessing = true;

      const res = await deleteCartItem(content);
      await this.getCartList();

      useLoadingState().isProcessing = false;
      const {
        // 取出內層的資料
        product: { title },
      } = content;
      const { message } = res;
      await toast.fire({
        icon: "success",
        title: `${title} ${message}`,
      });
    },
    // 清除購物車
    async clearCartItem() {
      const swalCustomClass = Swal.mixin({
        customClass: {
          confirmButton:
            "!btn !btn-base !text-netural-netural-100 !bg-secondary-secondary-200",
          cancelButton: "!btn-outline",
        },
        buttonsStyling: false,
      });
      swalCustomClass
        .fire({
          title: "確定清除購物車嗎？",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonText: "確定",
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            useLoadingState().isProcessing = true;
            await clearCartItem().then(async (res) => {
              const { message } = res;
              await this.getCartList();
              useLoadingState().isProcessing = false;
              this.removeCoupon();
              await toast.fire({
                icon: "success",
                title: `${message} 購物車`,
              });
            });
          }
        });
    },
    goBackStep(num, target) {
      this.currentStep = +defineStorage("currentStep").get();
      if (num < this.currentStep) {
        defineStorage("currentStep").set(JSON.stringify(num));
        router.push(target);
      }
    },
    goNextStep(num, target) {
      this.currentStep = +defineStorage("currentStep").get();
      if (num > this.currentStep) {
        defineStorage("currentStep").set(JSON.stringify(num));
        router.push(target);
      }
    },
    // 檢查當下step
    checkStep(num) {
      this.currentStep = num;
      defineStorage("currentStep").set(JSON.stringify(this.currentStep));
    },
    couponPercent(item) {
      return `-${100 - (item.final_total / item.total) * 100}%`; // -10% 英文顯示
    },
  },
  getters: {
    cartCoupon() {
      const firstCart = this.cart.carts.length && this.cart.carts[0];

      if (
        firstCart &&
        firstCart.coupon &&
        firstCart.coupon.code !== "coupon_clear"
      ) {
        return firstCart.coupon;
      }

      return {};
    },
  },
});
