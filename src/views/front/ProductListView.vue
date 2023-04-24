<template>
  <PageHeader :image-url="pageImage" />
  <div class="container">
    <div class="flex flex-col lg:flex-row justify-between lg:space-x-8">
      <div
        class="flex flex-col self-start w-full lg:w-[260px] mb-6 lg:mb-0 p-4 lg:p-6 border border-netural-netural-300 rounded-md"
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
            v-model.trim="searchArea"
            @keyup.enter="searchCategory(searchArea)"
          />
          <button
            type="button"
            class="flex items-center justify-center px-4"
            @click="searchCategory(searchArea)"
          >
            <div
              class="flex-shrink-0 w-6 h-6 bg-netural-netural-300 icon-search"
            ></div>
          </button>
        </div>
        <div class="flex flex-col">
          <h3 class="ch-heading-4 font-bold pb-4">地區篩選</h3>
          <ul
            class="overflow-x-auto lg:overflow-visible flex flex-row items-center lg:flex-col w-full"
          >
            <li
              @click="changeCategory('全部地區')"
              class="group lg:w-full"
              :class="{ active: currentCategory === '全部地區' }"
            >
              <div
                class="flex items-center h-[48px] lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:after:block after:ml-auto after:ch-heading-3 after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-[.active]:bg-netural-netural-400 group-[.active]:text-netural-netural-100"
              >
                <p class="flex-1 pr-2 whitespace-nowrap">全部地區</p>
              </div>
            </li>
            <li
              v-for="item in categoryData"
              :key="item"
              class="group lg:w-full"
              :class="{ active: currentCategory === item }"
              @click="changeCategory(item)"
            >
              <div
                class="flex items-center h-[48px] lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:after:block after:ml-auto after:ch-heading-3 after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-[.active]:bg-netural-netural-400 group-[.active]:text-netural-netural-100"
              >
                <p class="flex-1 pr-2 whitespace-nowrap">{{ item }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:flex-auto w-full lg:w-[75%]">
        <template v-if="paginationData.data.length > 0">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-6"
          >
            <template
              v-for="(item, index) in paginationData.data"
              :key="item.id"
            >
              <ProductItem
                :product-data="item"
                :item-index="index"
                image-class="!h-[200px]"
                text-content-class="!ml-0 !mt-0"
              />
            </template>
          </div>
          <PaginationCustomComponent
            :pages="pagination"
            @change-page="changePage"
          />
        </template>
        <div
          v-else
          class="flex flex-col justify-center space-y-4 max-w-[800px] mx-auto"
        >
          <p class="ch-heading-3 text-center">找不到符合的關鍵字，請重新搜尋</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationCustomComponent from "@/components/PaginationCustomComponent.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProductItem from "@/components/front/ProductItem.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useLoadingState } from "@/stores/common.js";
import { productsStore } from "@/stores/productsStore.js";
import pageImage from "@/assets/images/img/image/page_products.jpg";
export default {
  data() {
    return {
      pageImage,
    };
  },
  components: {
    PaginationCustomComponent,
    PageHeader,
    ProductItem,
  },
  methods: {
    ...mapActions(productsStore, [
      "getProductsAll",
      "searchCategory",
      "changeCategory",
    ]),
    changePage(num) {
      this.pagination.current_page = num;
      this.paginationData.current_page = num;
    },
    searchQueryContent() {
      if (this.categoryData.includes(this.$route.query.category)) {
        this.changeCategory(this.$route.query.category);
      } else {
        if (this.$route.query.category === "全部地區") return;
        this.searchArea = this.$route.query.category || "";
        this.searchCategory(this.searchArea);
      }
    },
  },
  computed: {
    ...mapState(productsStore, [
      "categoryData",
      "pagination",
      "modifyData",
      "currentCategory",
    ]),
    ...mapWritableState(productsStore, ["searchArea", "paginationData"]),
  },
  async mounted() {
    useLoadingState().isLoading = true;
    await this.getProductsAll();
    this.searchQueryContent();
  },
};
</script>
