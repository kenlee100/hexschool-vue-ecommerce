<template>
  <footer class="bg-primary-primary-100">
    <div class="container">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between py-20 md:py-[54px]"
      >
        <p class="pb-[26px] md:pb-0 whitespace-nowrap en-body md:en-title">
          JAPAN TRIP
        </p>
        <nav class="">
          <ul class="flex items-center md:space-x-6 lg:space-x-[86px]">
            <li v-for="item in navList" :key="item.path">
              <router-link
                class="block py-[12px] px-1 md:p-3 font-bold ch-body text-netural-netural-400 hover:text-secondary-secondary-200"
                :to="item.path"
                >{{ item.title }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="bg-netural-netural-500">
      <div class="container">
        <p
          class="py-3 md:py-6 md:px-3 ch-caption-2 md:ch-body text-center text-netural-netural-100"
        >
          本網站僅供個人作品使用，不提供商業用途
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
import useNavListMenu from "../../stores/navList.js";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useNavListMenu, ["navList"]),
  },
};
</script>
