const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import router from "../router";
import toast from "@/utils/toast";
import Swal from "sweetalert2";
export default defineStore("cartStore", {
  state: () => ({
    cart: {},
    currentStep: 1,
    couponState: {
      codeName: "",
      couponText: "",
    },
  }),
  actions: {
    async getCartList() {
      try {
        await axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`).then((res) => {
          this.cart = res.data.data;
          useLoadingState().isLoading = false;
        });
      } catch (err) {
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
        useLoadingState().isLoading = false;
      }
    },
    // 修改購物車數量
    async updateCart(content) {
      useLoadingState().isProcessing = true;
      try {
        await axios.put(`${VITE_URL}/api/${VITE_PATH}/cart/${content.id}`, {
          data: {
            product_id: content.product_id,
            qty: content.qty,
          },
        });
        await this.getCartList();
        useLoadingState().isProcessing = false;
        const {
          // 取出內層的資料
          product: { title },
        } = content;
        toast.fire({
          icon: "success",
          title: `已更新 品名：${title} 數量`,
        });
      } catch (err) {
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    // 刪除單筆購物車
    async deleteCartItem(content) {
      useLoadingState().isProcessing = true;
      try {
        const res = await axios.delete(
          `${VITE_URL}/api/${VITE_PATH}/cart/${content.id}`
        );
        await this.getCartList();
        useLoadingState().isProcessing = false;
        const {
          // 取出內層的資料
          product: { title },
        } = content;
        const { message } = res.data;
        toast.fire({
          icon: "success",
          title: `${title} ${message}`,
        });
      } catch (err) {
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
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
        .then((result) => {
          if (result.isConfirmed) {
            useLoadingState().isProcessing = true;
            axios
              .delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
              .then((res) => {
                const { message } = res.data;
                this.getCartList();
                useLoadingState().isProcessing = false;
                toast.fire({
                  icon: "success",
                  title: `${message} 購物車`,
                });
              })
              .catch((err) => {
                toast.fire({
                  icon: "error",
                  title: `${err.response.data.message}`,
                });
              });
          }
        });
    },
    goBackStep(num, target) {
      this.currentStep = JSON.parse(localStorage.getItem("currentStep"));
      if (num < this.currentStep) {
        localStorage.setItem("currentStep", JSON.stringify(num));
        router.push(target);
      }
    },
    goNextStep(num, target) {
      this.currentStep = JSON.parse(localStorage.getItem("currentStep"));
      if (num > this.currentStep) {
        localStorage.setItem("currentStep", JSON.stringify(num));
        router.push(target);
      }
    },
    // 檢查當下step
    checkStep(num) {
      this.currentStep = num;
      localStorage.setItem("currentStep", JSON.stringify(this.currentStep));
    },
    couponPercent(item) {
      return `-${100 - (item.final_total / item.total) * 100}%`; // -10% 英文顯示
      // return `${((item.final_total / item.total) * 100)}%`;
    },
    loadCouponCode() {
      // if(this.cart.total===this.cart.final_total){
      //   console.log('equal');
      // }
      if (
        (this.cart.carts !== undefined && this.cart.carts.length < 0) ||
        this.cart.total === this.cart.final_total
      ) {
        localStorage.setItem(
          "coupon",
          JSON.stringify({
            codeName: "",
            couponText: "",
          })
        );
      } else {
        this.couponState = JSON.parse(localStorage.getItem("coupon")) || {
          codeName: "",
          couponText: "",
        };
      }
    },
  },
  getters: {},
});
