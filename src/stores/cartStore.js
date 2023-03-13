const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";

export default defineStore("cartStore", {
  state: () => ({
    cart: {},
    // couponCode: "",
    
  }),
  actions: {
    addToCart(productId, qty = 1) {
      // 取得已經有加入購物車的項目
      const currentCartItem = this.cart.find(
        (item) => item.productId === productId
      );
      //進行判斷，如果購物車有該項目則 +1，如果沒已則是新增一個購物車項目
      if (currentCartItem) {
        currentCartItem.qty += 1;
      } else {
        this.cart.push({
          // 加入購物車時的id
          id: new Date().getTime(),
          productId,
          qty,
        });
      }
    },
    removeCartItem(id) {
      // cart item id 與 傳入的id 一樣，就取得目前陣列索引
      const index = this.cart.findIndex((item) => item.id === id);
      // 帶入取得的索引，並刪除一個項目
      this.cart.splice(index, 1);
    },
    // 寫入數量
    // 外面 (e)=> 傳入e
    setCartQty(id, e) {
      const currentCartItem = this.cart.find((item) => item.id === id);
      // console.log(id, );
      currentCartItem.qty = e.target.value * 1; // 轉數值
    },
    async getCartList() {
      try {
        await axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`).then((res) => {
          // console.log("res0", res);
          this.cart = res.data.data;
          useLoadingState().isLoading = false;
        });
      } catch (err) {
        alert(`${err.response.data.message}`);
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
        // 將讀取狀態清空
        // this.loadingStatus.loadingItem = "";
        await this.getCartList();
        const {
          // 取出內層的資料
          product: { title },
        } = content;
        alert(`已更新 品名：${title} 數量`);
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
    // 刪除單筆購物車
    async deleteCartItem(content) {
      // 賦予讀取狀態id
      // this.loadingStatus.loadingItem = content.id;
      try {
        const res = await axios.delete(
          `${VITE_URL}/api/${VITE_PATH}/cart/${content.id}`
        );
        // 將讀取狀態清空
        // this.loadingStatus.loadingItem = "";
        await this.getCartList();
        const {
          // 取出內層的資料
          product: { title },
        } = content;
        const { message } = res.data;
        alert(`${title} ${message}`);
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
    // 清除購物車
    async clearCartItem() {
      const dialog = confirm("確定清除購物車嗎？");
      if (dialog) {
        try {
          const res = await axios.delete(`${VITE_URL}/api/${VITE_PATH}/carts`);
          await this.getCartList();
          const { message } = res.data;
          setTimeout(() => {
            alert(`${message} 購物車`);
          }, 500);
        } catch (err) {
          alert(`${err.response.data.message}`);
        }
      }
    },
    
  },
  getters: {
    // 產品資訊已經存在productsStore
    // cartList: ({ cart }) => {
    //   // 1. 購物車的品項資訊，需要整合產品資訊
    //   // 2. 必須計算小計的金額
    //   // 3. 必須提供總金額
    //   // 直接執行productsStore，然後透過展開將資料狀態取出來
    //   // const { products } = productsStore();
    //   // console.log( cart);
    //   const carts = cart.carts.map((item) => {
    //     // console.log("cart", item);
    //     // 單一產品資訊
    //     // const product = products.find((content) => {
    //     //   // console.log("find", content);
    //     //   return content.id === item.product_id;
    //     // });
    //     // console.log("product", product);
    //     return {
    //       ...item,
    //       // product,
    //       // subtotal: item.qty * item.product.origin_price,
    //     };
    //   });
    //   // const total = carts.reduce((acc, current) => {
    //   //   console.log("reduce", acc, current);
    //   //   // return acc + current.subtotal;
    //   // }, 0);
    //   // console.log('total', total);
    //   return {
    //     carts, // 列表
    //     // total, // 總金額
    //   };
    // },
  },
});
