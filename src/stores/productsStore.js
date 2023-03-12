const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";
export const productsStore = defineStore("productData", {
  state: () => {
    return {
      products: [],
      productsItem: {},
      pagination: {},
      categoryData: [],
      currentCategory: "全部地區",
      selectCategory: [],
    };
  },
  actions: {
    async getProducts(category = "", num = 1) {
      try {
        await axios
          .get(
            `${VITE_URL}/api/${VITE_PATH}/products?page=${num}&category=${category}`
          )
          .then((res) => {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            useLoadingState().isLoading = false;
          });
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
    // async getProductsCategory(category = "", num = 1) {
    //   try {
    //     await axios
    //       .get(
    //         `${VITE_URL}/api/${VITE_PATH}/products?page=${num}&category=${category}`
    //       )
    //       .then((res) => {
    //         this.categoryData = res.data.products;
    //         this.pagination = res.data.pagination;
    //         useLoadingState().isLoading = false;
    //       });
    //   } catch (err) {
    //     alert(`${err.response.data.message}`);
    //   }
    // },
    // 加入購物車
    async addCart(content, qty = 1) {
      console.log("addcart");
      // 賦予讀取狀態id
      // this.loadingStatus.loadingItem = content.id;
      await axios
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, {
          data: {
            product_id: content.id,
            qty,
          },
        })
        .then((res) => {
          // 將讀取狀態清空
          // this.loadingStatus.loadingItem = "";
          //解構賦值
          const {
            message,
            // 取出內層的資料
            data: { product },
          } = res.data;
          alert(`${product.title} ${message}`);
          // this.$refs.productModal.closeModal();
        })
        .catch((err) => {
          alert(`${err.response.data.message}`);
        });
    },
    async getProductItem(id) {
      try {
        return await axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`);
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
    searchCategory(category) {
      this.currentCategory = category;
    },
  },
  getters: {
    // 處理分類項目文字
    categoryList({ products }) {
      const setItem = new Set();
      products.forEach((item) => {
        this.categoryData = setItem.add(item.category);
      });
      return this.categoryData;
    },
    // 篩選符合分類的品項 多選
    // filterProducts: (state) => {
    //   const filterProduct =
    //     state.selectCategory === undefined && state.selectCategory.length === 0
    //       ? state.products
    //       : state.products.filter((product) =>
    //           state.currentCategory === "全部地區"
    //             ? state.products
    //             : state.selectCategory.includes(product.category)
    //         );
    //   return filterProduct;
    // },
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
