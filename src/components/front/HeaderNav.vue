<template>
  <header
    class="sticky top-0 inset-x-0 z-20 lg:h-auto bg-netural-netural-100 shadow-md"
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
                    >{{ item.name }}</a
                  >
                </li>
              </router-link>
              <!-- <li v-for="item in navList" :key="item.path">
                <router-link
                  class="block p-3 font-bold ch-body text-netural-netural-400 hover:text-secondary-secondary-200"
                  :to="item.path"
                  >{{ item.name }}</router-link
                >
              </li> -->
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
            <router-link to="/cart"
              class="flex items-center justify-center w-12 h-12 cursor-pointer"
            >
              <div
                class="flex-shrink-0 w-5 h-5 bg-secondary-secondary-200 icon-cart"
              ></div>
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
import { mapActions, mapState } from "pinia";

export default {
  computed: {
    ...mapState(useNavListMenu, ["navList"]),
    ...mapState(useMenuStore, ["toggle", "menuState"]),
  },
  methods: {
    ...mapActions(useMenuStore, ["menuToggle"]),
  },
  mounted() {
    // this.navListFilter = this.$router.getRoutes().map((item) => {
    //   // console.log("item", item);
    //   return {
    //     path: item.path,
    //     name: item.name,
    //   };
    // });
  },
};
</script>
