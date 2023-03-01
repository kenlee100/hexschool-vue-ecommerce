<template>
  <footer class="bg-primary-primary-100">
    <div class="container">
      <div
        class="flex items-center justify-between py-[54px] border-t border-netural-netural-500"
      >
        <p class="en-title">JAPAN TRIP</p>
        <nav>
          <ul class="flex items-center space-x-[86px]">
            <li v-for="item in navList" :key="item.path">
              <router-link
                class="block p-3 font-bold ch-body text-netural-netural-400 hover:text-secondary-secondary-200"
                :to="item.path"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="bg-netural-netural-500">
      <div class="container">
        <p class="py-6 md:px-3 ch-body text-center text-netural-netural-100">
          本網站僅供個人作品使用，不提供商業用途
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
import NavListMenu from "../../stores/NavList.js";
import { mapState } from "pinia";
export default {
  computed: {
    // mapState(store名稱, ['要取得的值'])
    ...mapState(NavListMenu, ["navList"]),
  },
};
</script>
