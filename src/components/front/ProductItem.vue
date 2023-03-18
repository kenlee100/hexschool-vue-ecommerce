<template>
  <router-link
    :to="`/product/${productData.id}`"
    v-if="itemIndex % 2 === 0"
    @click="$emit('change-content', productData.id)"
    class="flex flex-col flex-shrink-0 w-full mb-10 lg:mb-20 group"
  >
    <div class="relative overflow-hidden flex flex-shrink-0 w-full">
      <div
        class="absolute right-0 top-0 md:right-9 md:top-9 z-10 flex items-center justify-center w-14 h-14 lg:w-12 lg:h-12 cursor-pointer"
      >
        <div
          class="flex-shrink-0 w-6 h-6 lg:w-9 lg:h-9 bg-netural-netural-100 transition-all ease-in-out duration-300 icon-favorite hover:icon-favorite-solid"
        ></div>
      </div>
      <img
        :src="productData.imageUrl"
        class="w-full h-[200px] lg:h-[480px] object-cover transition-all ease-in-out group-hover:scale-[1.1]"
        :class="imageClass"
        alt=""
      />
    </div>
    <div
      class="relative z-10 flex flex-col flex-1 lg:-mt-[84px] lg:ml-[110px] py-6 px-5 lg:px-9 bg-secondary-secondary-100"
      :class="textContentClass"
    >
      <div class="[&:not(:last-child)]:mb-3 lg:[&:not(:last-child)]:mb-8">
        <div class="flex items-start">
          <div
            class="flex-shrink-0 w-4 h-4 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-100 icon-pin"
          ></div>
          <p
            class="lg:font-bold ch-caption-2 lg:ch-body text-netural-netural-100"
          >
            {{ productData.category }}
          </p>
        </div>
        <h3>
          <p
            class="font-bold ch-body lg:ch-heading-3 text-netural-netural-100 line-clamp-2"
          >
            {{ productData.title }}
          </p>
        </h3>
      </div>
      <div class="flex justify-between items-center mt-auto">
        <p
          class="[&:not(:last-child)]:mr-4 en-caption-01 lg:en-body text-netural-netural-100"
        >
          ${{ productData.price }}
        </p>
        <button
          class="flex-shrink-0 bg-secondary-secondary-200 text-netural-netural-100 btn-base"
          type="button"
          @click.stop.prevent="addCart(productData)"
        >
          加入購物車
        </button>
      </div>
    </div>
  </router-link>
  <router-link
    :to="`/product/${productData.id}`"
    v-if="itemIndex % 2 === 1"
    @click="$emit('change-content', productData.id)"
    class="flex flex-col flex-shrink-0 w-full mb-10 lg:mb-20 group"
  >
    <div class="relative overflow-hidden flex flex-shrink-0 w-full">
      <div
        class="absolute right-0 top-0 md:right-9 md:top-9 z-10 flex items-center justify-center w-14 h-14 lg:w-12 lg:h-12 cursor-pointer"
      >
        <div
          class="flex-shrink-0 w-6 h-6 lg:w-9 lg:h-9 bg-netural-netural-100 transition-all ease-in-out duration-300 icon-favorite hover:icon-favorite-solid"
        ></div>
      </div>
      <img
        :src="productData.imageUrl"
        class="w-full h-[200px] lg:h-[480px] object-cover transition-all ease-in-out group-hover:scale-[1.1]"
        :class="imageClass"
        alt=""
      />
    </div>
    <div
      class="relative z-10 flex flex-col flex-1 lg:-mt-[84px] lg:ml-[110px] py-6 px-5 lg:px-9 bg-netural-netural-200 lg:bg-netural-netural-200"
      :class="textContentClass"
    >
      <div class="[&:not(:last-child)]:mb-3 lg:[&:not(:last-child)]:mb-8">
        <div class="flex items-start">
          <div
            class="flex-shrink-0 w-4 h-4 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-400 icon-pin"
          ></div>
          <p
            class="lg:font-bold ch-caption-2 lg:ch-body text-netural-netural-400"
          >
            {{ productData.category }}
          </p>
        </div>
        <h3>
          <p
            class="font-bold ch-body lg:ch-heading-3 text-netural-netural-400 line-clamp-2"
          >
            {{ productData.title }}
          </p>
        </h3>
      </div>
      <div class="flex justify-between items-center mt-auto">
        <p
          class="[&:not(:last-child)]:mr-4 en-caption-01 lg:en-body text-netural-netural-400"
        >
          ${{ productData.price }}
        </p>
        <button
          class="flex-shrink-0 bg-secondary-secondary-200 text-netural-netural-100 btn-base"
          type="button"
          @click.stop.prevent="addCart(productData)"
        >
          加入購物車
        </button>
      </div>
    </div>
  </router-link>
</template>
<script>
import { mapActions } from "pinia";
import { productsStore } from "@/stores/productsStore.js";
export default {
  emits: ["change-content"],
  props: {
    itemIndex: {
      type: Number,
    },
    productData: {
      type: Object,
      default: () => {},
    },
    imageClass: {
      type: String,
    },
    textContentClass: {
      type: String,
    },
  },
  methods: {
    ...mapActions(productsStore, ["addCart"]),
  },
};
</script>
