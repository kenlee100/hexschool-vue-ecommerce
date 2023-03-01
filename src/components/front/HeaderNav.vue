<template>
  <header>
    <div class="container">
      <div class="flex items-center justify-between py-5 lg:py-4">
        <router-link to="/" class="whitespace-nowrap en-body"
          >JAPAN TRIP</router-link
        >
        <div class="flex items-center md:space-x-6 lg:space-x-24">
          <nav class="hidden md:block">
            <ul class="flex items-center space-x-10">
              <li v-for="item in navList" :key="item.path">
                <router-link
                  class="block p-3 font-bold ch-body text-netural-netural-400 hover:text-secondary-secondary-200"
                  :to="item.path"
                  >{{ item.name }}</router-link
                >
              </li>
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
            <div class="flex items-center justify-center w-12 h-12 cursor-pointer">
              <div
                class="flex-shrink-0 w-5 h-5 bg-secondary-secondary-200 icon-cart"
              ></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import NavListMenu from "../../stores/NavList.js";
import { mapState } from "pinia";

export default {
  // data() {
  //   return {
  //     navListFilter: [],
  //   };
  // },
  computed: {
    // mapState(store名稱, ['要取得的值'])
    ...mapState(NavListMenu, ["navList"]),
  },
  // mounted() {
  //   this.navListFilter = this.$router.getRoutes().map((item) => {
  //     // console.log("item", item);
  //     return {
  //       path: item.path,
  //       name: item.name,
  //     };
  //   });
  // },
};
</script>
