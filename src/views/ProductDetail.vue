<template>
  <div v-if="productContent.hasOwnProperty('imagesUrl')">
    <Swiper
      v-if="productContent.imagesUrl && productContent.imagesUrl.length >= 3"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }"
      class="flex product-slider"
    >
      <SwiperSlide
        v-for="(item, index) in productContent.imagesUrl"
        :key="item.id"
      >
        <img
          class="flex-shrink-0 w-full h-[400px] object-cover"
          :src="item.imageUrl"
          :alt="`${productContent.title}${index + 1}`"
        />
      </SwiperSlide>
    </Swiper>
    <Swiper
      v-else-if="productContent.imagesUrl.length < 3 || productContent.imageUrl"
      :slidesPerView="1"
      :spaceBetween="0"
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
      <SwiperSlide
        v-for="(item, index) in productContent.imagesUrl"
        :key="item.id"
      >
        <img
          class="flex-shrink-0 w-full h-[400px] object-cover"
          :src="item.imageUrl"
          :alt="`${productContent.title}${index + 1}`"
        />
      </SwiperSlide>
    </Swiper>
  </div>
  <div v-else-if="productContent.hasOwnProperty('imageUrl')">
    <img
      class="flex-shrink-0 w-full h-[400px] object-cover"
      :src="productContent.imageUrl"
      :alt="productContent.title"
    />
  </div>
  <div v-else>
    <img
      class="flex-shrink-0 w-full h-[400px] object-cover"
      src="https://placehold.co/640x480?text=No+Photo"
      alt="預設圖"
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
          class="flex pb-4 [&:not(:last-child)]:mb-4 !mt-3 border-b border-netural-netural-300"
        >
          <div
            class="flex-shrink-0 w-4 h-4 mt-0.5 lg:mt-1 [&:not(:last-child)]:mr-2 bg-netural-netural-300 icon-pin"
          ></div>
          <div
            class="lg:font-bold ch-caption-2 lg:ch-body text-netural-netural-300"
          >
            {{ productContent.category }}
          </div>
        </div>
        <div class="flex flex-col">
          <div class="editor-content" v-html="productContent.description"></div>
        </div>
        <div class="flex flex-col">
          <ul class="flex border-b border-netural-netural-300">
            <li
              class="group"
              :class="{ active: currentTab === tab }"
              v-for="tab in tabList"
              :key="tab"
              @click="currentTab = tab"
            >
              <div
                class="flex items-center justify-center py-2 px-4 text-netural-netural-300 font-semibold ch-heading-4 group-[.active]:text-netural-netural-100 group-[.active]:bg-secondary-secondary-100 cursor-pointer"
              >
                {{ tab }}
              </div>
            </li>
          </ul>
          <div class="flex flex-col">
            <transition name="fade" mode="out-in">
              <div
                class="pt-5 pb-4 editor-content"
                v-if="currentTab === '行程內容'"
              >
                <div v-html="productContent.content"></div>
              </div>
              <div class="pt-5 pb-4" v-else-if="currentTab === '注意事項'">
                <ol
                  class="space-y-2 pt-3 pl-5 en-caption-02 leading-7.5 font-bold list-decimal"
                >
                  <li>
                    票券有效期限：請確認您所購買的票券有效期限，並於有效期限內使用，逾期無法使用。
                  </li>
                  <li>
                    入場方式：每個景點的入場方式可能不同，請務必確認入場方式，並依照票券使用方式進入。
                  </li>
                  <li>
                    使用時段：有些票券有使用時段限制，請確認使用時段，並在指定時段內使用。
                  </li>
                  <li>
                    套票使用方式：如購買套票，請依照票券上所列明的使用方式及順序使用，並注意各景點的開放時間，以免因時間不足而無法使用。
                  </li>
                  <li>
                    票券轉讓禁止：票券一經售出，不得轉讓他人使用。如經發現違規使用，將依照法律規定處理。
                  </li>
                  <li>
                    退換票：票券一經售出，恕不退換，請務必確認購買內容再進行購買。
                  </li>
                  <li>
                    注意安全：使用票券時，請務必注意人身安全及財物安全，避免遺失或損毀。
                  </li>
                  <li>
                    其他注意事項：請在使用票券前仔細閱讀票券上所列之注意事項，以確保使用順利。
                  </li>
                  <li>希望以上注意事項說明能為您提供幫助，祝您旅途愉快！</li>
                </ol>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:w-[33.333%] mb-8 lg:mb-0">
        <div
          class="sticky top-[72px] inset-x-0 p-6 space-y-6 bg-netural-netural-200"
        >
          <div class="space-y-2">
            <div>
              <span class="en-title">{{
                $filters.currency(productContent.price)
              }}</span>
              元
            </div>
            <div class="h6">
              原價
              <span class="en-caption-01 line-through">{{
                $filters.currency(productContent.origin_price)
              }}</span>
              元
            </div>
          </div>
          <div class="space-y-4">
            <div class="form-select">
              <select name="" id="" v-model.number="qty">
                <option selected disabled>商品數量</option>
                <option
                  v-for="(item, index) in 10"
                  :key="index"
                  :value="index + 1"
                >
                  {{ index + 1 }} {{ productContent.unit }}
                </option>
              </select>
            </div>
          </div>

          <div class="w-full">
            <button
              type="button"
              @click="addCart(productContent, qty)"
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
        <Swiper
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
          <SwiperSlide v-for="(item, index) in filterOtherItem" :key="item.id">
            <ProductItem
              :product-data="item"
              :item-index="index"
              image-class="!h-[200px]"
              text-content-class="!ml-0 !mt-0"
              @change-content="changeProductContent"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoadingState } from "@/stores/common.js";
import ProductItem from "@/components/ProductItem.vue";
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
      tabList: ["行程內容", "注意事項"],
      currentTab: "行程內容",
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
      return await this.getProductItem(id).then((res) => {
        useLoadingState().isLoading = false;
        return res.data.product;
      });
    },
    toggle(content) {
      content.active = !content.active;
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },

    endTransition(el) {
      el.style.height = "";
    },
  },
  watch: {
    // 監聽ID有變動就再透過 this.changeProductContent 取得新資料渲染至頁面上
    productId: async function (val) {
      // 換頁時可能會抓不到id而錯誤
      if (!val) return;
      this.productContent = await this.changeProductContent(val);
    },
  },
  computed: {
    ...mapState(productsStore, ["products"]),
    // 只篩選出當下頁面內容之外的資料
    filterOtherItem() {
      return this.products.filter((item) => item.id !== this.$route.params.id);
    },
    productId() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    useLoadingState().isLoading = true;
    this.productContent = await this.changeProductContent(
      this.$route.params.id
    );
    await this.getProducts();
  },
};
</script>

<style lang="scss" scope>
.common-slider,
.product-slider {
  .swiper-slide {
    @apply flex h-auto;
  }
  .swiper-pagination {
    @apply relative mt-4;
  }
  .swiper-pagination-bullet {
    @apply bg-netural-netural-300 transition-all duration-500;
    &.swiper-pagination-bullet-active {
      @apply w-4 rounded bg-secondary-secondary-100;
    }
  }
}
.product-slider {
  .swiper-pagination {
    @apply static lg:mt-0;
  }
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-200;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}
</style>
