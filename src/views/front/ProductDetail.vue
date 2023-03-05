<template>
  <div class="layout-content">
    <div>
      <img
        v-if="productContent.hasOwnProperty('imageUrl')"
        class="w-full h-[400px] object-cover"
        :src="productContent.imageUrl"
        alt=""
      />
      <img
        v-else
        class="w-full h-[400px] object-cover"
        src="https://placehold.co/640x480?text=No+Photo"
        alt=""
      />
    </div>
    <div class="container">
      <div class="flex justify-between space-x-8 pt-10 pb-16">
        <div
          class="w-[66.666%] space-y-6 pb-6 border-b border-netural-netural-500"
        >
          <h1 class="font-bold ch-heading-1">
            {{ productContent.title }}
          </h1>
          <div
            class="flex pb-4 [&:not(:last-child)]:mb-4 border-b border-netural-netural-300"
          >
            <div
              class="flex-shrink-0 w-4 h-4 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-300 icon-pin"
            ></div>
            <p
              class="lg:font-bold ch-caption-2 lg:ch-body text-netural-netural-300"
            >
              {{ productContent.category }}
            </p>
          </div>
          <div class="flex flex-col">
            <p>
              {{
                productContent.description
              }}東京迪士尼海洋是一座以“海洋”為主題的遊樂園，位於東京迪士尼度假區內，十分有特色。整個海洋樂園比東京迪士尼樂園更加刺激，更適合大孩子和成年人一同遊玩。除了遊樂項目，東京迪士尼海洋的娛樂表演也極其精彩。夜間的水上大秀也十分精彩，巨大的水幕、激光、火焰、光線等特殊效果和迪士尼明星們一起構成了這場氣勢磅礴的大秀。
            </p>
          </div>
          <div class="flex flex-col">
            <ul class="flex border-b border-netural-netural-300">
              <li class="group active">
                <a
                  class="flex items-center justify-center py-2 px-4 bg-netural-netural-200 text-netural-netural-400 font-semibold ch-heading-4 group-[.active]:text-netural-netural-100 group-[.active]:bg-secondary-secondary-200"
                  href="#"
                  >商品內容</a
                >
              </li>
              <li class="group">
                <a
                  class="flex items-center justify-center py-2 px-4 bg-netural-netural-200 text-netural-netural-400 font-semibold ch-heading-4 group-[.active]:text-netural-netural-100 group-[.active]:bg-secondary-secondary-200"
                  href="#"
                  >購買須知</a
                >
              </li>
            </ul>
            <div class="flex flex-col">
              <div class="p-4 active">
                <p>商品內容：{{ productContent.content }}</p>
                <p>
                  東京迪士尼海洋是一座以“海洋”為主題的遊樂園，位於東京迪士尼度假區內，十分有特色。整個海洋樂園比東京迪士尼樂園更加刺激，更適合大孩子和成年人一同遊玩。除了遊樂項目，東京迪士尼海洋的娛樂表演也極其精彩。夜間的水上大秀也十分精彩，巨大的水幕、激光、火焰、光線等特殊效果和迪士尼明星們一起構成了這場氣勢磅礴的大秀。
                </p>
              </div>
              <div class="p-4 hidden">
                <p>商品內容：{{ productContent.content }}</p>
                <p>
                  東京迪士尼海洋是一座以“海洋”為主題的遊樂園，位於東京迪士尼度假區內，十分有特色。整個海洋樂園比東京迪士尼樂園更加刺激，更適合大孩子和成年人一同遊玩。除了遊樂項目，東京迪士尼海洋的娛樂表演也極其精彩。夜間的水上大秀也十分精彩，巨大的水幕、激光、火焰、光線等特殊效果和迪士尼明星們一起構成了這場氣勢磅礴的大秀。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-1 w-[33.333%]">
          <div
            class="sticky top-[72px] inset-x-0 p-6 space-y-6 bg-netural-netural-200"
          >
            <div class="space-y-2">
              <div class="">
                <span class="en-title">{{ productContent.price }}</span> 元
              </div>
              <div class="h6">
                原價
                <span class="en-caption-01">{{
                  productContent.origin_price
                }}</span>
                元
              </div>
            </div>
            <div class="space-y-4">
              <div class="form-select">
                <select name="" id="" v-model.number="qty">
                  <option selected disabled>商品規格</option>
                  <option
                    v-for="(item, index) in 10"
                    :key="index"
                    :value="index + 1"
                  >
                    {{ index + 1 }}
                  </option>
                </select>
              </div>
              <input class="form-input" type="number" min="1" v-model.number="qty" />
            </div>

            <div class="w-full">
              <button
                type="button"
                @click="addCart(productContent)"
                class="btn-base w-full text-netural-netural-100 bg-secondary-secondary-200"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-6">
        <h2 class="ch-heading-2 font-bold text-netural-netural-400">
          其他行程推薦
        </h2>
        <div class="flex space-x-6 gap-6">
          <template v-for="(item, index) in 4" :key="index">
            <ProductItem :item-index="index" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { useLoadingState } from "@/stores/common.js";
import ProductItem from "@/components/front/ProductItem.vue";
export default {
  data() {
    return {
      productContent: {},
      qty: 1,
    };
  },
  components: {
    ProductItem,
  },
  methods: {
    getProductItem(id) {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.productContent = res.data.product;
          useLoadingState().isLoading = false;
        })
        .catch((err) => {
          alert(`${err.response.data.message}`);
          useLoadingState().isLoading = false;
        });
    },
    addCart(content, qty = 1) {
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, {
          data: {
            product_id: content.id,
            qty,
          },
        })
        .then((res) => {
          //解構賦值
          const {
            message,
            // 取出內層的資料
            data: { product },
          } = res.data;
          alert(`${product.title} ${message}`);
        })
        .catch((err) => {
          alert(`${err.response.data.message}`);
        });
    },
  },
  mounted() {
    useLoadingState().isLoading = true;
    this.getProductItem(this.$route.params.id);
  },
};
</script>
