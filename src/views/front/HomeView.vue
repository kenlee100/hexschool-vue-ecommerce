<template>
  <div class="flex h-[375px] lg:h-[720px] img-overlay">
    <div class="container">
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
            <span>讓我們為你的日本之旅</span><br /><span>安排精彩的行程</span>
          </p>
        </div>

        <router-link
          to="/"
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
        style="background-image: url('/src/assets/images/img/image/banner.jpg')"
      ></div>
    </div>
  </div>
  <section class="relative z-10 mt-4 lg:-mt-[60px]">
    <div class="container">
      <div class="flex w-full pl-6 lg:pl-12 bg-primary-primary-200">
        <input
          class="w-full py-4 lg:py-[42px] bg-primary-primary-200 font-bold ch-heading-4 text-netural-netural-100 placeholder:text-netural-netural-100"
          type="text"
          placeholder="搜尋地區 / 景點"
          name=""
          id=""
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
  <section class="pt-20 pb-10 pb-10 lg:pb-[160px] bg-netural-netural-100">
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
      <div class="grid grid-rows-3 grid-flow-col gap-6">
        <template v-for="(item, index) in 6" :key="index">
          <ProductItem :item-index="index" />
        </template>
      </div>
      <div class="flex justify-end">
        <div
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
        </div>
      </div>
    </div>
  </section>
  <section
    class="pt-10 lg:pt-20 pb-10 pb-10 lg:pb-[160px] bg-netural-netural-200"
  >
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
    <div class="overflow-x-auto grid grid-cols-2 md:grid-cols-5 gap-1">
      <div
        v-for="(item, index) in 10"
        :key="index"
        class="relative aspect-square bg-netural-netural-400"
      >
        <div
          class="absolute inset-0 h-full w-full bg-cover bg-no-repeat bg-center img-overlay"
          style="
            background-image: url('https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800');
          "
        ></div>
        <div
          class="relative z-10 flex flex-col items-center justify-center h-full p-3"
        >
          <h3
            class="[&:not(:last-child)]:lg-2 font-bold ch-caption-1 lg:ch-heading-2 text-netural-netural-100"
          >
            金閣寺
          </h3>
          <p
            class="font-bold ch-caption-1 lg:ch-heading-3 text-netural-netural-100"
          >
            とうきょうタワー
          </p>
        </div>
      </div>
    </div>
  </section>
  <section
    class="pt-10 lg:pt-20 pb-10 pb-10 lg:pb-[160px] bg-netural-netural-100"
  >
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
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-for="(item, index) in 6" :key="index">
          <ArticleItem />
        </template>
      </div>
      <div class="flex justify-end">
        <div
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
        </div>
      </div>
    </div>
  </section>
  <section class="pt-10 lg:pt-20 bg-primary-primary-100 pb-10 lg:pb-[160px]  border-b border-netural-netural-500">
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
    <!-- <div class="relative flex gap-6 h-[746px]">
      <div class="w-[35%] h-[80%]">
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div class="left-[calc(35%+24px)] w-[20%] h-[60%]">
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div
        class="relative left-[calc(35%+24px)] top-[calc(60%+24px)] w-[20%] h-[40%]"
      >
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div class="relative left-[calc(55%+24px*2)] top-0 w-[35%] h-[40%]">
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div
        class="relative left-[calc(55%+24px*2)] top-[calc(40%+24px)] w-[42.8%] h-[40%]"
      >
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
    </div> -->

    <!-- https://stackoverflow.com/questions/63252451/how-to-get-alternating-height-in-css-grid -->
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
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
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
        class="row-start-1 col-start-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto"
      >
        <div class="overflow-hidden relative flex h-full lg:h-[420px]">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_food.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-primary-primary-100"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-secondary-secondary-200 icon-icecream"
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
        class="row-start-2 col-start-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto"
      >
        <div class="overflow-hidden relative flex h-full lg:h-[306px]">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_experience.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-skateboarding"
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
            class="w-full h-full lg:ml-[110px] object-cover"
            src="@/assets/images/img/image/thing_mall.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-secondary-secondary-200"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-mall"
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
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[196px] md:h-[196px] bg-primary-primary-100"
          >
            <div
              class="w-[22px] h-[22px] md:w-12 md:h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-secondary-secondary-200 icon-temple"
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
</template>
<script>
import { mapState } from "pinia";
import ProductItem from "@/components/front/ProductItem.vue";
import ArticleItem from "@/components/front/ArticleItem.vue";
import { useLoadingState } from "@/stores/common.js";
export default {
  components: {
    ProductItem,
    ArticleItem,
  },
  computed: {
    ...mapState(useLoadingState, ["isLoading"]),
  },
  mounted() {
    // 讀取狀態測試
    useLoadingState().$patch((state) => {
      state.isLoading = false;
    });
    // const loading = useLoadingState();

    // console.log("useLoadingState", useLoadingState().isLoading);
    // setTimeout(() => {
    //   // loading.$patch({isLoading: false})
    // }, 3000);
  },
};
</script>
