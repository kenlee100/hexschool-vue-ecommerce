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
      searchArea: "",
      products: [],
      productsAll: [],
      productsItem: {},
      modifyData: [],
      categoryData: [],
      currentCategory: "",
      perPageNum: 10,
      // 自訂分頁資料數量
      pagination: {
        per_page: 10,
        totalResult: 0,
        total_pages: 0,
        current_page: 1,
        data: [],
      },
    };
  },
  actions: {
    async getProductsAll() {
      try {
        const res = await axios.get(
          `${VITE_URL}/api/${VITE_PATH}/products/all`
        );
        this.productsAll = res.data.products;
        this.modifyData = [...this.productsAll];
        this.setCategory(this.modifyData);
        useLoadingState().isLoading = false;
      } catch (err) {
        useLoadingState().isLoading = false;
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    async getProducts(num = 1) {
      try {
        const res = await axios.get(
          `${VITE_URL}/api/${VITE_PATH}/products?page=${num}`
        );
        this.products = res.data.products;
        useLoadingState().isLoading = false;
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
    goCategory(category) {
      if (this.categoryData.includes(category)) {
        router.push(`/products?category=${category}`);
      }
    },
    setCategory(product) {
      const setItem = new Set();
      product.forEach((item) => {
        this.categoryData = [...setItem.add(item.category)];
      });
    },
    searchCategory(category) {
      let filterCategoryData = [];
      let filterSearch = [];
      // 條件1 地區/景點
      filterSearch =
        this.searchArea.toLowerCase() === ""
          ? this.productsAll
          : this.productsAll.filter((item) => {
              return (
                this.filterText(item.title, this.searchArea) ||
                this.filterText(item.category, this.searchArea)
              );
            });
      // 條件2 分類篩選
      filterCategoryData =
        category === "全部地區"
          ? this.productsAll
          : this.productsAll.filter((item) => item.category === category);
      if (this.searchArea.toLowerCase() !== "") {
        this.modifyData = filterSearch;
      } else if (category !== "") {
        this.modifyData = filterCategoryData;
      } else {
        this.modifyData = this.productsAll;
        this.currentCategory = "全部地區";
        if (category === "") category = this.currentCategory;
      }
      router.push(`/products?category=${category}`);
      this.pagination.current_page = 1;
    },
    pageNum() {
      this.pagination.totalResult = this.modifyData.length;
      this.pagination.total_pages = Math.ceil(
        this.pagination.totalResult / this.pagination.per_page
      );
      if (this.pagination.current_page > this.pagination.total_pages) {
        this.pagination.current_page = this.pagination.total_pages;
      }
      if (this.pagination.current_page <= 1) {
        this.pagination.current_page = 1;
      }
    },
    filterText(content, searchTarget) {
      if (content)
        return content.toLowerCase().includes(searchTarget.toLowerCase());
    },
  },
  getters: {
    paginationData() {
      this.pageNum();
      const minItem =
        this.pagination.current_page * this.pagination.per_page -
        this.pagination.per_page +
        1;
      const maxItem = this.pagination.current_page * this.pagination.per_page;
      let data = [];
      this.modifyData.forEach((item, i) => {
        let itemNum = i + 1;
        if (itemNum >= minItem && itemNum <= maxItem) {
          data.push(item);
        }
      });
      return {
        ...this.pagination,
        data,
      };
    },
  },
});
