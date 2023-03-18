<template>
  <header
    class="sticky top-0 inset-x-0 z-50 lg:h-auto bg-netural-netural-100 shadow-md"
  >
    <div class="container">
      <div class="flex items-center justify-between h-[72px] py-4 lg:py-5">
        <router-link to="/" class="whitespace-nowrap en-body"
          >JAPAN TRIP</router-link
        >
        <div class="flex items-center md:space-x-6 lg:space-x-24">
          <nav class="hidden md:block">
            <ul class="flex items-center space-x-10">
              <router-link
                custom
                v-slot="{ href, isActive }"
                v-for="item in navList"
                :key="item.path"
                :to="item.path"
              >
                <li class="group" :class="{ 'nav-active': isActive }">
                  <a
                    class="block p-3 font-bold ch-body text-netural-netural-400 hover:text-secondary-secondary-200 group-[.nav-active]:text-secondary-secondary-200"
                    :href="href"
                    >{{ item.title }}</a
                  >
                </li>
              </router-link>
            </ul>
          </nav>
          <div class="flex space-x-2">
            <div
              class="flex items-center justify-center w-12 h-12 cursor-pointer"
            >
              <div
                class="flex-shrink-0 w-5 h-5 bg-secondary-secondary-200 transition-all ease-in-out duration-300 icon-favorite hover:icon-favorite-solid"
              ></div>
            </div>
            <router-link
              to="/cart"
              class="relative flex items-center justify-center w-12 h-12 cursor-pointer"
            >
              <div
                class="flex-shrink-0 w-5 h-5 bg-secondary-secondary-200 icon-cart"
              ></div>
              <p
                v-if="
                  this.cart.carts !== undefined && this.cart.carts.length > 0
                "
                :class="{
                  'animate__animated animate__pulse animate__infinite':
                    this.cart.carts.length > 0,
                }"
                class="absolute right-0 top-2 min-w-[22px] h-[22px] py-0.5 px-1 scale-90 rounded-full bg-secondary-secondary-100 text-primary-primary-100 en-caption-02 text-center"
              >
                {{ this.cart.carts.length }}
              </p>
            </router-link>
            <div
              class="flex flex-col justify-between w-[48px] h-[48px] py-4 px-[14px] md:hidden group"
              :class="{ active: toggle }"
              @click="menuToggle"
            >
              <span
                class="w-full h-0.5 rounded-sm bg-secondary-secondary-200 duration-[400ms] ease-in-out group-[.active]:rotate-45 group-[.active]:origin-[0%_0%]"
              ></span>
              <span
                class="w-full h-0.5 rounded-sm bg-secondary-secondary-200 duration-[200ms] ease-in-out group-[.active]:scale-y-0"
              ></span>
              <span
                class="w-full h-0.5 rounded-sm bg-secondary-secondary-200 duration-[400ms] ease-in-out group-[.active]:-rotate-45 group-[.active]:origin-[0%_100%]"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import useNavListMenu from "@/stores/navList.js";
import { useMenuStore } from "@/stores/common.js";
import cartStore from "@/stores/cartStore.js";
import { mapActions, mapState } from "pinia";

export default {
  computed: {
    ...mapState(useNavListMenu, ["navList"]),
    ...mapState(useMenuStore, ["toggle", "menuState"]),
    ...mapState(cartStore, ["cart"]),
  },
  methods: {
    ...mapActions(useMenuStore, ["menuToggle"]),
    ...mapActions(cartStore, ["getCartList"]),
  },
  mounted() {
    this.getCartList();
  },
};
</script>
<style>
.animate__animated.animate__pulse {
  --animate-duration: 0.5s;
}
</style>
