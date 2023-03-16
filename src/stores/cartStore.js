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
    // couponCode: "",
    couponState: {
      codeName: "",
      couponText: "",
    },
  }),
  actions: {
    // addToCart(productId, qty = 1) {
    //   // 取得已經有加入購物車的項目
    //   const currentCartItem = this.cart.find(
    //     (item) => item.productId === productId
    //   );
    //   //進行判斷，如果購物車有該項目則 +1，如果沒已則是新增一個購物車項目
    //   if (currentCartItem) {
    //     currentCartItem.qty += 1;
    //   } else {
    //     this.cart.push({
    //       // 加入購物車時的id
    //       id: new Date().getTime(),
    //       productId,
    //       qty,
    //     });
    //   }
    // },
    // setCartQty(id, e) {
    //   const currentCartItem = this.cart.find((item) => item.id === id);
    //   // console.log(id, );
    //   currentCartItem.qty = e.target.value * 1; // 轉數值
    // },
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
      // 賦予讀取狀態id
      // this.loadingStatus.loadingItem = content.id;
      try {
        await axios.put(`${VITE_URL}/api/${VITE_PATH}/cart/${content.id}`, {
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
      try {
        const res = await axios.delete(
          `${VITE_URL}/api/${VITE_PATH}/cart/${content.id}`
        );
        await this.getCartList();
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
          // showDenyButton: true,
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonText: "確定",
          // denyButtonText: `Don't save`,
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            axios
              .delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
              .then((res) => {
                const { message } = res.data;
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
      if (this.cart.carts && this.cart.carts.length < 0) {
        localStorage.setItem(
          "coupon",
          JSON.stringify({
            codeName: "",
            couponText: "",
          })
        );
      }
      this.couponState = JSON.parse(localStorage.getItem("coupon")) || {
        codeName: "",
        couponText: "",
      };
    },
  },
  getters: {},
});
