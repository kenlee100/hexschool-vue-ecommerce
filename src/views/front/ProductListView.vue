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
              class="grid grid-cols-4 lg:grid-cols-3 gap-3 lg:flex lg:flex-col lg:space-y-2 lg:gap-0"
            >
              <li v-for="(item, index) in 10" :key="index">
                <div class="el-checkbox el-checkbox-primary">
                  <input
                    :id="index"
                    class="el-checkbox-input"
                    type="checkbox"
                  />
                  <label class="el-checkbox-style" :for="index">
                    <!-- <i class="fa-solid fa-check fa-fw"></i> -->
                    <span class="material-symbols-outlined"> done </span>
                  </label>
                  <label class="el-checkbox-label" :for="index">
                    <span class="el-checkbox-label__text">地區</span>
                  </label>
                </div>
              </li>
            </ul>
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
            <template v-for="(item, index) in products" :key="index">
              <ProductItem
                :item-index="index"
                image-class="!h-[200px]"
                text-content-class="!ml-0 !mt-0"
              />
            </template>
          </div>
          <Pagination
            :pages="pagination"
            @change-page="getProducts"
            :get-products="getProducts"
          ></Pagination>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-4" v-for="item in products" :key="item.id">
          <div class="card mb-4">
            <router-link :to="`/product/${item.id}`">
              <img :src="item.imageUrl" class="card-img-top" :alt="item.title" />
            </router-link>
            <div class="card-body">
              <span class="badge rounded-pill bg-primary">{{ item.category }}</span>
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.description }}
              </p>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="openModal(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id"
                >
                  <i
                    v-if="loadingStatus.loadingItem === item.id"
                    class="fas fa-spinner fa-pulse"
                  ></i>
                  快速查看
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="addCart(item)"
                  :disabled="loadingStatus.loadingItem === item.id"
                >
                  <i
                    v-if="loadingStatus.loadingItem === item.id"
                    class="fas fa-spinner fa-pulse"
                  ></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <!-- <ProductModal
    ref="productModal"
    :temp-content="tempProduct"
    :add-cart="addCart"
    :id="productId"
    :open-modal="openModal"
  ></ProductModal> -->
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
// import { RouterLink } from "vue-router";
// import ProductModal from "@/components/front/ProductModal.vue";
import Pagination from "@/components/Pagination.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProductItem from "@/components/front/ProductItem.vue";
import { useLoadingState } from "@/stores/common.js";
export default {
  data() {
    return {
      loadingStatus: {
        loadingItem: "",
      },
      products: [],
      pagination: {},
      tempProduct: {
        imagesUrl: [],
      },
      productId: "",
    };
  },
  components: {
    // RouterLink,
    // ProductModal,
    Pagination,
    PageHeader,
    ProductItem,
  },
  methods: {
    openModal(id) {
      // id為外層帶入 productId
      // 將 id 帶入 讀取狀態
      this.loadingStatus.loadingItem = id;
      this.productId = id;
    },
    // 加入購物車
    addCart(content, qty = 1) {
      // 賦予讀取狀態id
      this.loadingStatus.loadingItem = content.id;
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, {
          data: {
            product_id: content.id,
            qty,
          },
        })
        .then((res) => {
          // 將讀取狀態清空
          this.loadingStatus.loadingItem = "";
          //解構賦值
          const {
            message,
            // 取出內層的資料
            data: { product },
          } = res.data;
          alert(`${product.title} ${message}`);
          this.$refs.productModal.closeModal();
        })
        .catch((err) => {
          alert(`${err.response.data.message}`);
        });
    },
    getProducts(num = 1) {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/products?page=${num}`)
        .then((res) => {
          console.log("res", res);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          useLoadingState().isLoading = false;
        })
        .catch((err) => {
          alert(`${err.response.data.message}`);
        });
    },
  },
  mounted() {
    useLoadingState().isLoading = true;
    this.getProducts();
  },
};
</script>
