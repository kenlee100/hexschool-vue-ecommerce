<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
      <div class="flex flex-col lg:flex-row justify-between lg:space-x-8">
        <div
          class="flex flex-col self-start w-full lg:w-[260px] mb-6 lg:mb-0 py-5 px-6 border border-netural-netural-300 rounded-md"
        >
          <div
            class="flex w-full pl-6 lg:pl-4 [&:not(:last-child)]:mb-4 lg:[&:not(:last-child)]:mb-6 bg-netural-netural-200"
          >
            <input
              class="w-full py-4 lg:py-2 bg-netural-netural-200 font-bold ch-heading-4 text-netural-netural-300"
              type="text"
              placeholder="搜尋地區 / 景點"
              name=""
              id=""
            />
            <button type="button" class="flex items-center justify-center px-4">
              <div
                class="flex-shrink-0 w-6 h-6 bg-netural-netural-300 icon-search"
              ></div>
            </button>
          </div>
          <div class="flex flex-col">
            <h3 class="ch-heading-4 font-bold pb-4">地區篩選</h3>
            <ul
              class="grid grid-cols-4 lg:grid-cols-3 gap-3 lg:flex lg:flex-col lg:gap-0"
            >
              <li @click="searchCategory('全部地區')" class="group">
                <div
                  class="flex items-center after:content-['chevron\_right'] after:ml-auto after:ch-heading-3 after:font-['Material_Symbols_Outlined'] pb-2 px-3 border-b border-gray-200 cursor-pointer group-[.active]:bg-netural-netural-400 group-[.active]:text-netural-netural-100"
                >
                  <p class="flex-1 pr-2 whitespace-nowrap">全部地區</p>
                </div>
              </li>
              <li
                v-for="(item, index) in categoryData"
                :key="item"
                class="group"
                @click="searchCategory(item)"
              >
                <div
                  class="flex items-center after:content-['chevron\_right'] after:ml-auto after:ch-heading-3 after:font-['Material_Symbols_Outlined'] pb-2 px-3 border-b border-gray-200 cursor-pointer group-[.active]:bg-netural-netural-400 group-[.active]:text-netural-netural-100"
                >
                  <p class="flex-1 pr-2 whitespace-nowrap">{{ item }}</p>
                </div>
              </li>
            </ul>
            <!-- 多選checkbox -->
            <!-- <ul
              class="grid grid-cols-4 lg:grid-cols-3 gap-3 lg:flex lg:flex-col lg:space-y-2 lg:gap-0"
            >
              <li>
                <div class="el-checkbox el-checkbox-primary">
                  <input id="`all`" class="el-checkbox-input" type="checkbox" />
                  <label class="el-checkbox-style" for="`all`">
                    <span class="material-symbols-outlined"> done </span>
                  </label>
                  <label class="el-checkbox-label" for="`all`">
                    <span class="el-checkbox-label__text">全部地區</span>
                  </label>
                </div>
              </li>
              <li v-for="(item, index) in categoryData" :key="item">
                <div class="el-checkbox el-checkbox-primary">
                  <input
                    :id="`${item}-${index}`"
                    class="el-checkbox-input"
                    type="checkbox"
                    v-model="selectCategoryStore"
                    :value="item"
                    @change="searchCategory(item)"
                  />
                  <label class="el-checkbox-style" :for="`${item}-${index}`">
                    <span class="material-symbols-outlined"> done </span>
                  </label>
                  <label class="el-checkbox-label" :for="`${item}-${index}`">
                    <span class="el-checkbox-label__text">{{ item }}</span>
                  </label>
                </div>
              </li>
            </ul> -->
          </div>
        </div>
        <div class="lg:flex-auto w-full lg:w-[75%]">
          <!-- <div class="grid grid-cols-3 grid-flow-row gap-6">
            <template v-for="(item, index) in products" :key="index">
              <ProductItem
                :item-data="item"
                :item-index="index"
              />
            </template>
          </div> -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-6"
          >
            <template v-for="(item, index) in filterProducts" :key="item.id">
              <ProductItem
                :product-data="item"
                :item-index="index"
                image-class="!h-[200px]"
                text-content-class="!ml-0 !mt-0"
              />
            </template>
          </div>
          <Pagination
            :pages="pagination"
            @change-page="getProducts"
            :get-list="getProducts"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { RouterLink } from "vue-router";
const { VITE_URL, VITE_PATH } = import.meta.env;
import Pagination from "@/components/Pagination.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProductItem from "@/components/front/ProductItem.vue";
import { mapActions, mapState } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import { productsStore } from "@/stores/productsStore.js";
export default {
  data() {
    return {
      loadingStatus: {
        loadingItem: "",
      },

      // products: [],
      // pagination: {},
      // tempProduct: {
      //   imagesUrl: [],
      // },
      // currentCategory: "",
      productId: "",
      // selectCategoryStore: null,
      // selectCategory: [],
    };
  },
  watch: {
    // queryVal(val) {
    //   console.log("va", val);
    //   if (!val) return;
    //   this.$router.push({
    //     // path: "/products",
    //     name: "ProductListView",
    //     query: { category: val.category },
    //   });
    // },
  },
  components: {
    Pagination,
    PageHeader,
    ProductItem,
  },
  methods: {
    ...mapActions(productsStore, ["getProducts", "searchCategory"]),

    // openModal(id) {
    //   // id為外層帶入 productId
    //   // 將 id 帶入 讀取狀態
    //   this.loadingStatus.loadingItem = id;
    //   this.productId = id;
    // },
    // changeQuery(content) {
    //   this.$router.push({
    //     // path: "/products",
    //     name: "ProductListView",
    //     query: { category: content },
    //   });
    // },
  },
  computed: {
    ...mapState(productsStore, [
      "products",
      "pagination",
      "categoryData",
      "filterProducts",
      "currentCategory",
    ]),
    // queryVal() {
    //   return this.$route.query;
    // },
  },
  async mounted() {
    useLoadingState().isLoading = true;
    await this.getProducts();
  },
};
</script>
