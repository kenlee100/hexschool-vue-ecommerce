<template>
  <div v-if="productContent.hasOwnProperty('imagesUrl')">
    <swiper
      :slidesPerView="3"
      :spaceBetween="24"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="flex common-slider"
    >
      <swiper-slide v-for="item in productContent.imagesUrl" :key="item.id">
        <img
          class="flex-shrink-0 w-full h-[400px] object-cover"
          :src="item.imageUrl"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
  <div v-else-if="productContent.hasOwnProperty('imageUrl')">
    <img
      class="flex-shrink-0 w-full h-[400px] object-cover"
      :src="productContent.imageUrl"
      alt=""
    />
  </div>
  <div v-else>
    <img
      class="flex-shrink-0 w-full h-[400px] object-cover"
      src="https://placehold.co/640x480?text=No+Photo"
      alt=""
    />
  </div>
  <div class="container">
    <div
      class="flex flex-col-reverse lg:flex-row justify-between lg:space-x-8 pt-10 pb-16"
    >
      <div
        class="lg:w-[66.666%] space-y-6 pb-6 border-b border-netural-netural-500"
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
            {{ productContent.description }}
            <!-- 東京迪士尼海洋是一座以“海洋”為主題的遊樂園，位於東京迪士尼度假區內，十分有特色。整個海洋樂園比東京迪士尼樂園更加刺激，更適合大孩子和成年人一同遊玩。除了遊樂項目，東京迪士尼海洋的娛樂表演也極其精彩。夜間的水上大秀也十分精彩，巨大的水幕、激光、火焰、光線等特殊效果和迪士尼明星們一起構成了這場氣勢磅礴的大秀。 -->
          </p>
        </div>
        <div class="flex flex-col">
          <ul class="flex border-b border-netural-netural-300">
            <li class="group active">
              <div
                class="flex items-center justify-center py-2 px-4 bg-netural-netural-200 text-netural-netural-400 font-semibold ch-heading-4 group-[.active]:text-netural-netural-100 group-[.active]:bg-secondary-secondary-200 cursor-pointer"
              >
                商品內容
              </div>
            </li>
            <li class="group">
              <div
                class="flex items-center justify-center py-2 px-4 bg-netural-netural-200 text-netural-netural-400 font-semibold ch-heading-4 group-[.active]:text-netural-netural-100 group-[.active]:bg-secondary-secondary-200 cursor-pointer"
              >
                購買須知
              </div>
            </li>
          </ul>
          <div class="flex flex-col">
            <div class="pt-5 pb-4 active">
              <div v-html="productContent.content"></div>
              <!-- <p>商品內容：{{ productContent.content }}</p>
                <p>
                  東京迪士尼海洋是一座以“海洋”為主題的遊樂園，位於東京迪士尼度假區內，十分有特色。整個海洋樂園比東京迪士尼樂園更加刺激，更適合大孩子和成年人一同遊玩。除了遊樂項目，東京迪士尼海洋的娛樂表演也極其精彩。夜間的水上大秀也十分精彩，巨大的水幕、激光、火焰、光線等特殊效果和迪士尼明星們一起構成了這場氣勢磅礴的大秀。
                </p> -->
            </div>
            <div class="pt-5 pb-4 hidden">
              <p>商品內容：{{ productContent.content }}</p>
              <p>
                東京迪士尼海洋是一座以“海洋”為主題的遊樂園，位於東京迪士尼度假區內，十分有特色。整個海洋樂園比東京迪士尼樂園更加刺激，更適合大孩子和成年人一同遊玩。除了遊樂項目，東京迪士尼海洋的娛樂表演也極其精彩。夜間的水上大秀也十分精彩，巨大的水幕、激光、火焰、光線等特殊效果和迪士尼明星們一起構成了這場氣勢磅礴的大秀。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:w-[33.333%] mb-8 lg:mb-0">
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
                  {{ index + 1 }} {{ productContent.unit }}
                </option>
              </select>
            </div>
            <input
              class="form-input"
              type="number"
              min="1"
              v-model.number="qty"
            />
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
      <div>
        <swiper
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              width: 260,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 2,
              width: null,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1296: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }"
          class="flex common-slider"
        >
          <swiper-slide v-for="(item, index) in filterOtherItem" :key="item.id">
            <ProductItem
              :product-data="item"
              :item-index="index"
              image-class="!h-[200px]"
              text-content-class="!ml-0 !mt-0"
              @change-content="changeProductContent"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
// const { VITE_URL, VITE_PATH } = import.meta.env;
import { useLoadingState } from "@/stores/common.js";
import ProductItem from "@/components/front/ProductItem.vue";
import { mapActions, mapState } from "pinia";
import { productsStore } from "@/stores/productsStore.js";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";

export default {
  data() {
    return {
      modules: [Autoplay, Navigation, Pagination],
      controlledSwiper: null,
      productContent: {},
      qty: 1,
    };
  },
  components: {
    ProductItem,
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions(productsStore, ["getProductItem", "getProducts", "addCart"]),
    async changeProductContent(id) {
      useLoadingState().isLoading = true;
      this.productContent = {};
      await this.getProductItem(id).then((res) => {
        this.productContent = res.data.product;
        useLoadingState().isLoading = false;
      });
    },
  },
  computed: {
    ...mapState(productsStore, ["products"]),
    // 只篩選出當下頁面內容之外的資料
    filterOtherItem() {
      return this.products.filter((item) => item.id !== this.$route.params.id);
    },
  },
  async mounted() {
    useLoadingState().isLoading = true;
    await this.changeProductContent(this.$route.params.id);
    await this.getProducts();
  },
};
</script>
<style lang="scss" scope>
.common-slider {
  .swiper-pagination-bullet {
    @apply bg-netural-netural-300 transition-all duration-500;
    &.swiper-pagination-bullet-active {
      @apply w-4 rounded bg-secondary-secondary-100;
    }
  }
}
</style>
