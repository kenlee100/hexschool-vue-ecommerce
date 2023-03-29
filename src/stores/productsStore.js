const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import cartStore from "@/stores/cartStore.js";
import toast from "@/utils/toast";
import router from "../router";
export const productsStore = defineStore("productData", {
  state: () => {
    return {
      searchKeyword: "",
      products: [],
      productsItem: {},
      pagination: {},
      categoryData: [],
      currentCategory: "",
      selectCategory: [],
    };
  },
  actions: {
    async getProducts(num = 1) {
      try {
        await axios
          .get(`${VITE_URL}/api/${VITE_PATH}/products?page=${num}`)
          .then((res) => {
            this.products = res.data.products;
            this.pagination = res.data.pagination;

            const setItem = new Set();
            this.products.forEach((item) => {
              this.categoryData = [...setItem.add(item.category)];
            });
            useLoadingState().isLoading = false;
          });
      } catch (err) {
        useLoadingState().isLoading = false;
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    // 加入購物車
    async addCart(content, qty = 1) {
      useLoadingState().isProcessing = true;
      await axios
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, {
          data: {
            product_id: content.id,
            qty,
          },
        })
        .then((res) => {
          useLoadingState().isProcessing = false;
          //解構賦值
          const {
            message,
            // 取出內層的資料
            data: { product },
          } = res.data;
          const { getCartList } = cartStore();
          getCartList();
          toast.fire({
            icon: "success",
            title: `${product.title} ${message}`,
          });
        })
        .catch((err) => {
          useLoadingState().isLoading = false;
          toast.fire({
            icon: "error",
            title: `${err.response.data.message}`,
          });
        });
    },
    async getProductItem(id) {
      try {
        return await axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`);
      } catch (err) {
        useLoadingState().isLoading = false;
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    searchCategory(category) {
      this.currentCategory = category;
      router.push(`/products?category=${category}`);
    },
    goCategory(category) {
      if (this.categoryData.includes(category)) {
        router.push(`/products?category=${category}`);
      }
    },
  },
  getters: {
    // 篩選符合分類的品項 單選
    filterProducts: (state) => {
      return state.products.filter((product) =>
        state.currentCategory === "全部地區"
          ? state.products
          : product.category === state.currentCategory
      );
    },
  },
});
