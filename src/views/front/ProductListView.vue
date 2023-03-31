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
            v-model.trim="searchPlaces"
            @keydown.enter="searchCategory(searchPlaces)"
          />
          <button
            type="button"
            class="flex items-center justify-center px-4"
            @click="searchCategory(searchPlaces)"
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
              @click="searchCategory('全部地區')"
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
              @click="searchCategory(item)"
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
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-6"
        >
          <template v-for="(item, index) in paginationData.data" :key="item.id">
            <ProductItem
              :product-data="item"
              :item-index="index"
              image-class="!h-[200px]"
              text-content-class="!ml-0 !mt-0"
            />
          </template>
        </div>
        <!-- <PaginationComponent
            :pages="paginationData"
            :category="currentCategory"
            @change-page="getProducts"
            :get-list="getProducts"
          ></PaginationComponent> -->
        <PaginationCustomComponent
          :pages="paginationData"
          @change-page="changePage"
        ></PaginationCustomComponent>
        <!-- <div
          class="flex flex-col justify-center space-y-4 max-w-[800px] mx-auto"
        >
          <p class="ch-heading-3 text-center">找不到符合的關鍵字，請重新搜尋</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import PaginationComponent from "@/components/PaginationComponent.vue";
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
      products: [],
      productsAll: [],
      modifyData: [],
      searchPlaces: "",
      searchArea: "",
      // pagination: {},
      pagination: {
        per_page: 2,
        totalResult: 0,
        total_pages: 0,
        current_page: 1,
        data: [],
      },
      currentCategory: "全部地區",
    };
  },
  components: {
    // PaginationComponent,
    PaginationCustomComponent,
    PageHeader,
    ProductItem,
  },
  methods: {
    ...mapActions(productsStore, [
      "getProducts",
      // "searchCategory",
      "goCategory",
      "setCategory",
      "getProductsAll",
      "PromiseFunction",
    ]),
    changePage(num) {
      this.pagination.current_page = num;
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
      console.log(content.toLowerCase().includes(searchTarget.toLowerCase()));
      if (content)
        return content.toLowerCase().includes(searchTarget.toLowerCase());
    },
    searchCategory(category) {
      let filterCategoryData = [];
      let filterSearch = [];
      filterSearch =
        this.searchPlaces.toLowerCase() === ""
          ? this.productsAll
          : this.productsAll.filter((item) => {
              return (
                this.filterText(item.title, this.searchPlaces) ||
                this.filterText(item.category, this.searchPlaces)
              );
            });
      filterCategoryData =
        category === "全部地區"
          ? this.productsAll
          : this.productsAll.filter((item) => item.category === category);
      console.log("filterSearch", filterSearch);

      if (this.searchPlaces.toLowerCase() !== "") {
        this.modifyData = filterSearch;
      } else {
        this.modifyData = filterCategoryData;
      }
      this.$router.push(`/products?category=${category}`);

      this.pagination.current_page = 1;
    },
  },
  watch: {
    "$route.query.category": {
      handler(category) {
        console.log("category", category);
        if (!category) {
          this.currentCategory = "全部地區";
        } else {
          this.currentCategory = category;
        }
      },
      deep: true,
      // immediate: true,
    },
  },
  computed: {
    ...mapState(productsStore, ["categoryData"]),
    // ...mapWritableState(productsStore, ["searchPlaces"]),
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
  async mounted() {
    useLoadingState().isLoading = true;
    console.log(1);
    await this.getProducts()
      .then((res) => {
        this.products = res.data.products;
        // this.pagination = res.data.pagination;

        console.log(2, res);
        return this.getProductsAll();
      })
      .then((res) => {
        this.productsAll = res.data.products;
        this.modifyData = res.data.products;
        // this.searchCategory(this.$route.query.category);
        this.setCategory(this.productsAll);
        console.log(4);
        return this.PromiseFunction();
      })
      .then(() => {
        console.log(5);
        useLoadingState().isLoading = false;
      });

    // console.log("this.$route.query.category", this.$route.query.category);
    // console.log(7);
  },
};
</script>
