<template>
  <div class="flex h-[375px] lg:h-[720px] main-slider">
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :modules="modules"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="item in sliderImages" :key="item.id">
        <div class="flex flex-col h-full container">
          <div
            class="relative z-10 flex flex-col items-center justify-center h-full"
          >
            <div
              class="flex flex-col items-center mx-auto [&:not(:last-child)]:mb-5 lg:[&:not(:last-child)]:mb-10 text-center text-netural-netural-100"
            >
              <h2
                class="[&:not(:last-child)]:mb-5 lg:[&:not(:last-child)]:mb-10 en-body lg:en-display"
              >
                JAPAN TRIP
              </h2>
              <p class="ch-heading-3 lg:ch-display font-black">
                <span>讓我們為你的日本之旅</span><br /><span
                  >安排精彩的行程</span
                >
              </p>
            </div>

            <router-link
              to="/products"
              class="flex items-center bg-netural-netural-100 text-netural-netural-400 btn-large group"
            >
              <p>立即前往</p>
              <div
                class="w-4 h-4 -ml-4 opacity-0 transition-all ease-in-out duration-100 group-hover:ml-4 group-hover:opacity-100 group-hover:bg-netural-netural-400 icon-arrow"
              ></div>
            </router-link>
          </div>
          <div
            class="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center"
            :style="`background-image: url('${item.imageUrl}')`"
          ></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <section class="relative z-10 mt-4 lg:-mt-[60px]">
    <div class="container">
      <div
        class="flex w-full pl-6 lg:pl-12 bg-primary-primary-200 focus-within:bg-netural-netural-400 transition-all"
      >
        <input
          class="w-full py-4 lg:py-[42px] bg-transparent font-bold ch-heading-4 text-netural-netural-100 placeholder:text-netural-netural-100 transition-all"
          type="text"
          placeholder="搜尋地區 / 景點"
          name=""
          id=""
          v-model.trim="searchKeyword"
          @keydown.enter="goCategory(searchKeyword)"
        />
        <button
          type="button"
          class="flex items-center justify-center px-8 lg:px-12"
        >
          <div
            class="flex-shrink-0 w-6 h-6 lg:w-14 lg:h-14 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-100 icon-search"
          ></div>
        </button>
      </div>
    </div>
  </section>
  <section class="pt-6 lg:pt-20 pb-10 lg:pb-[160px] bg-netural-netural-100">
    <div class="container">
      <div
        class="px-4 lg:px-8 lg:py-2 [&:not(:last-child)]:mb-10 lg:[&:not(:last-child)]:mb-20 border-l border-netural-netural-400"
      >
        <h2
          class="[&:not(:last-child)]:mb-2 lg:[&:not(:last-child)]:mb-3 en-body lg:en-title"
        >
          RECOMMEND
        </h2>
        <p class="font-bold ch-body lg:ch-heading-3">推薦行程</p>
      </div>
      <div class="hidden lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-6">
        <template v-for="(item, index) in products.slice(0, 6)" :key="item.id">
          <ProductItem :product-data="item" :item-index="index" />
        </template>
      </div>
      <swiper
        :slidesPerView="1"
        :spaceBetween="24"
        :pagination="{
          clickable: true,
        }"
        :width="260"
        :loop="true"
        :modules="modules"
        class="flex lg:!hidden common-slider"
      >
        <swiper-slide
          v-for="(item, index) in products.slice(0, 6)"
          :key="item.id"
        >
          <ProductItem :product-data="item" :item-index="index" />
        </swiper-slide>
      </swiper>
      <div class="flex justify-end">
        <router-link
          to="/products"
          class="flex items-center max-w-[160px] w-full lg:max-w-none lg:w-60 py-3 px-5 lg:py-4 lg:px-8 border-b-4 border-netural-netural-400 group transition-all ease-in-out duration-500 hover:bg-netural-netural-400 cursor-pointer"
        >
          <p
            class="ch-body lg:en-body text-netural-netural-400 transition-all ease-in-out duration-500 group-hover:text-netural-netural-100"
          >
            查看更多
          </p>
          <div
            class="w-4 h-4 lg:w-8 lg:h-8 opacity-0 transition-all ease-in-out duration-500 group-hover:ml-8 group-hover:opacity-100 group-hover:bg-netural-netural-100 icon-arrow"
          ></div>
        </router-link>
      </div>
    </div>
  </section>
  <section class="pt-10 lg:pt-20 pb-10 lg:pb-[160px] bg-netural-netural-200">
    <div
      class="container [&:not(:last-child)]:mb-10 lg:[&:not(:last-child)]:mb-20"
    >
      <div class="px-4 lg:px-8 lg:py-2 border-l border-netural-netural-400">
        <h2
          class="[&:not(:last-child)]:mb-2 lg:[&:not(:last-child)]:mb-3 en-body lg:en-title"
        >
          HOT SPOT
        </h2>
        <p class="font-bold ch-body lg:ch-heading-3">熱門景點</p>
      </div>
    </div>
    <div class="overflow-x-auto grid grid-cols-2 md:grid-cols-5 md:gap-1">
      <div
        v-for="item in spotImages"
        :key="item.chTitle"
        @click="goCategory(item.category)"
        class="relative aspect-square bg-netural-netural-400 cursor-pointer"
      >
        <div
          class="absolute inset-0 h-full w-full bg-cover bg-no-repeat bg-center color-overlay"
          :style="`background-image: url('${item.imageUrl}')`"
        ></div>
        <div
          class="relative z-10 flex flex-col items-center justify-center h-full p-3"
        >
          <h3
            class="[&:not(:last-child)]:lg-2 font-bold ch-caption-1 lg:ch-heading-2 text-netural-netural-100"
          >
            {{ item.chTitle }}
          </h3>
          <p
            class="font-bold ch-caption-1 lg:ch-heading-3 text-center text-netural-netural-100"
          >
            {{ item.jpTitle }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-10 lg:pt-20 pb-10 lg:pb-[160px] bg-netural-netural-100">
    <div class="container">
      <div
        class="px-4 lg:px-8 lg:py-2 [&:not(:last-child)]:mb-10 lg:[&:not(:last-child)]:mb-20 border-l border-netural-netural-400"
      >
        <h2
          class="[&:not(:last-child)]:mb-2 lg:[&:not(:last-child)]:mb-3 en-body lg:en-title"
        >
          LATEST ARTICLE
        </h2>
        <p class="font-bold ch-body lg:ch-heading-3">最新文章</p>
      </div>
      <div class="hidden lg:grid lg:grid-cols-2 lg:gap-6">
        <ArticleItem
          :article-data="item"
          v-for="item in articles.slice(0, 6)"
          :key="item.id"
        />
      </div>
      <swiper
        :slidesPerView="1"
        :spaceBetween="24"
        :pagination="{
          clickable: true,
        }"
        :width="260"
        :loop="true"
        :modules="modules"
        class="flex lg:!hidden common-slider"
      >
        <swiper-slide v-for="item in articles.slice(0, 6)" :key="item.id">
          <ArticleItem :article-data="item" />
        </swiper-slide>
      </swiper>
      <div class="flex justify-end">
        <router-link
          to="/article"
          class="flex items-center max-w-[160px] w-full lg:max-w-none lg:w-60 py-3 px-5 lg:py-4 lg:px-8 border-b-4 border-netural-netural-400 group transition-all ease-in-out duration-500 hover:bg-netural-netural-400 cursor-pointer"
        >
          <p
            class="ch-body lg:en-body text-netural-netural-400 transition-all ease-in-out duration-500 group-hover:text-netural-netural-100"
          >
            查看更多
          </p>
          <div
            class="w-4 h-4 lg:w-8 lg:h-8 opacity-0 transition-all ease-in-out duration-500 group-hover:ml-8 group-hover:opacity-100 group-hover:bg-netural-netural-100 icon-arrow"
          ></div>
        </router-link>
      </div>
    </div>
  </section>
  <section class="pt-10 lg:pt-20 bg-primary-primary-100 pb-10 lg:pb-[160px]">
    <div
      class="container [&:not(:last-child)]:mb-10 lg:[&:not(:last-child)]:mb-20"
    >
      <div class="px-8 py-2 border-l border-netural-netural-400">
        <h2
          class="[&:not(:last-child)]:mb-2 lg:[&:not(:last-child)]:mb-3 en-body lg:en-title"
        >
          WHAT TO DO IN JAPAN
        </h2>
        <p class="font-bold ch-body lg:ch-heading-3">在日本可以做什麼</p>
      </div>
    </div>
    <div
      class="grid grid-rows-3 lg:grid-rows-4 grid-cols-2 lg:grid-cols-9 grid-flow-row lg:grid-flow-col gap-6 px-3 lg:px-0"
    >
      <div
        class="col-span-1 lg:col-span-3 lg:row-span-3 lg:w-full aspect-square lg:aspect-auto"
      >
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-primary-primary-200 hover:bg-secondary-secondary-100 transition-all ease-in-out"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-caption-1 md:ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div
        class="row-start-1 row-span-2 col-start-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto w-full h-[calc(100%-47%)] mb-[10%] place-self-center"
      >
        <div class="overflow-hidden relative flex h-full lg:h-[420px]">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_food.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-primary-primary-100 hover:bg-secondary-secondary-100 transition-all ease-in-out"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 bg-secondary-secondary-200 icon-icecream"
            ></div>
            <h3
              class="overflow-hidden ch-caption-1 md:ch-heading-3 font-bold text-secondary-secondary-200"
            >
              美食
            </h3>
          </div>
        </div>
      </div>
      <div
        class="row-start-2 row-span-2 col-start-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto w-full h-[calc(100%-47%)] mt-[10%] place-self-center"
      >
        <div class="overflow-hidden relative flex h-full lg:h-[306px]">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_experience.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-primary-primary-200 hover:bg-secondary-secondary-100 transition-all ease-in-out"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 bg-netural-netural-100 icon-skateboarding"
            ></div>
            <h3
              class="overflow-hidden ch-caption-1 md:ch-heading-3 font-bold text-netural-netural-100"
            >
              玩 / 體驗
            </h3>
          </div>
        </div>
      </div>
      <div
        class="col-span-1 lg:col-span-3 lg:row-span-2 aspect-square lg:aspect-auto"
      >
        <div
          class="overflow-hidden relative flex w-full h-full lg:h-[306px] lg:-mr-[55px]"
        >
          <img
            class="w-full h-full lg:ml-[110px] object-cover object-top"
            src="@/assets/images/img/image/thing_mall.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-secondary-secondary-200 hover:bg-secondary-secondary-100 transition-all ease-in-out"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 bg-netural-netural-100 icon-mall"
            ></div>
            <h3
              class="overflow-hidden ch-caption-1 md:ch-heading-3 font-bold text-netural-netural-100"
            >
              購物
            </h3>
          </div>
        </div>
      </div>
      <div
        class="col-span-1 lg:col-span-4 lg:row-span-2 lg:h-[416px] lg:-mt-[114px] aspect-square lg:aspect-auto"
      >
        <div class="overflow-hidden relative flex h-full lg:h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_temple.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-primary-primary-100 hover:bg-secondary-secondary-100 transition-all ease-in-out"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 bg-secondary-secondary-200 icon-temple"
            ></div>
            <h3
              class="overflow-hidden ch-caption-1 md:ch-heading-3 font-bold text-secondary-secondary-200"
            >
              自然 / 古蹟
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container -mb-16">
    <div class="relative -mt-[1px] border-b border-netural-netural-500"></div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import ProductItem from "@/components/front/ProductItem.vue";
import ArticleItem from "@/components/front/ArticleItem.vue";
import { articlesStore } from "@/stores/articlesStore.js";
import { productsStore } from "@/stores/productsStore.js";
import { useLoadingState } from "@/stores/common.js";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
// 另一種引路圖片方式
// const BannerImg = new URL(
//   "/src/assets/images/img/image/banner_01.jpg",
//   import.meta.url
// );
import bannerImg01 from "/src/assets/images/img/image/banner_01.jpg";
import bannerImg02 from "/src/assets/images/img/image/banner_02.jpg";
import spotImg01 from "/src/assets/images/img/image/spot_01.jpg";
import spotImg02 from "/src/assets/images/img/image/spot_02.jpg";
import spotImg03 from "/src/assets/images/img/image/spot_03.jpg";
import spotImg04 from "/src/assets/images/img/image/spot_04.jpg";
import spotImg05 from "/src/assets/images/img/image/spot_05.jpg";
import spotImg06 from "/src/assets/images/img/image/spot_06.jpg";
import spotImg07 from "/src/assets/images/img/image/spot_07.jpg";
import spotImg08 from "/src/assets/images/img/image/spot_08.jpg";
import spotImg09 from "/src/assets/images/img/image/spot_09.jpg";
import spotImg10 from "/src/assets/images/img/image/spot_10.jpg";

export default {
  data() {
    return {
      modules: [FreeMode, Autoplay, Navigation, Pagination],
      controlledSwiper: null,
      sliderImages: [
        {
          id: 1,
          imageUrl: bannerImg01,
        },
        {
          id: 2,
          imageUrl: bannerImg02,
        },
      ],
      spotImages: [
        {
          chTitle: "金閣寺",
          jpTitle: "ろくおんじ",
          imageUrl: spotImg01,
          category: "京都",
        },
        {
          chTitle: "淺草",
          jpTitle: "せんそうじ",
          imageUrl: spotImg02,
          category: "東京",
        },
        {
          chTitle: "富士山",
          jpTitle: "ふじさん",
          imageUrl: spotImg03,
          category: "富士山",
        },
        {
          chTitle: "伏見稻荷大社",
          jpTitle: "ふしみいなりたいしゃ",
          imageUrl: spotImg04,
          category: "京都",
        },
        {
          chTitle: "道頓堀",
          jpTitle: "どうとんぼり",
          imageUrl: spotImg05,
          category: "大阪",
        },
        {
          chTitle: "大阪城",
          jpTitle: "おおさかじょう",
          imageUrl: spotImg06,
          category: "大阪",
        },
        {
          chTitle: "淺草",
          jpTitle: "んそうじ",
          imageUrl: spotImg07,
          category: "東京",
        },
        {
          chTitle: "迪士尼樂園",
          jpTitle: "ディズニーランド",
          imageUrl: spotImg08,
          category: "東京",
        },
        {
          chTitle: "新宿",
          jpTitle: "しんじゅく",
          imageUrl: spotImg09,
          category: "東京",
        },
        {
          chTitle: "東京鐵塔",
          jpTitle: "とうきょうタワー",
          imageUrl: spotImg10,
          category: "東京",
        },
      ],
    };
  },
  components: {
    ProductItem,
    ArticleItem,
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions(articlesStore, ["getArticles"]),
    ...mapActions(productsStore, [
      "getProductItem",
      "getProducts",
      "addCart",
      "goCategory",
    ]),
  },
  computed: {
    ...mapState(useLoadingState, ["isLoading"]),
    ...mapState(articlesStore, ["articles"]),
    ...mapState(productsStore, ["products", "currentCategory"]),
    ...mapWritableState(productsStore, ["searchKeyword"]),
  },
  async mounted() {
    useLoadingState().isLoading = true;
    await this.getArticles();
    await this.getProducts();
  },
};
</script>
<style lang="scss" scope>
.main-slider {
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply bottom-3 lg:bottom-20;
  }
  .swiper-pagination-bullet {
    @apply bg-netural-netural-100 transition-all duration-500;
    &.swiper-pagination-bullet-active {
      @apply w-4 rounded;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    @apply text-netural-netural-100;
  }
}
.common-slider {
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply static mb-10;
  }
  .swiper-pagination-bullet {
    @apply bg-netural-netural-300 transition-all duration-500;
    &.swiper-pagination-bullet-active {
      @apply w-4 rounded bg-secondary-secondary-100;
    }
  }
}
</style>
