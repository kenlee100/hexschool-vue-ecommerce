import { defineStore } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import cartStore from "@/stores/cartStore.js";
import toast from "@/utils/toast";
import router from "../router";
import { getProducts, getProductsAll } from "../apis/products";
import { addCart } from "../apis/cart";

export const productsStore = defineStore("productData", {
  state: () => {
    return {
      searchArea: "",
      products: [],
      productsAll: [],
      modifyData: [],
      categoryData: [],
      currentCategory: "",
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
      const res = await getProductsAll();
      this.productsAll = res.products;
      this.modifyData = [...this.productsAll];
      this.setCategory(this.modifyData);
    },
    async getProducts(num = 1) {
      const res = await getProducts(num);
      this.products = res.products;
    },
    // 加入購物車
    async addCart(content, qty = 1) {
      useLoadingState().isProcessing = true;
      const res = await addCart({
        data: {
          product_id: content.id,
          qty,
        },
      });
      useLoadingState().isProcessing = false;
      //解構賦值
      const {
        message,
        // 取出內層的資料
        data: { product },
      } = res;
      const { getCartList } = cartStore();
      await getCartList();
      await toast.fire({
        icon: "success",
        title: `${product.title} ${message}`,
      });
    },
    setCategory(product) {
      const setItem = new Set();
      product.forEach((item) => {
        this.categoryData = [...setItem.add(item.category)];
      });
    },
    changeCategory(category) {
      this.searchArea = "";
      this.currentCategory = category;
      this.changeQuery(category);
      this.filterData(category);
    },
    filterData(category) {
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
      }
    },
    searchCategory(category) {
      this.currentCategory = "";
      if (category === "") {
        this.currentCategory = "全部地區";
        this.modifyData = this.productsAll;
        this.changeQuery(this.currentCategory);
      } else if (this.categoryData.includes(category)) {
        // searchArea 符合 categoryData 時，顯示符合的分類選單
        this.changeCategory(category);
      } else {
        this.filterData(category);
        this.changeQuery(category);
      }
    },
    changeQuery(query) {
      router.push(`/products?category=${query}`);
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
