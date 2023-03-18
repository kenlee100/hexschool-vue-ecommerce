<template>
  <div
    class="fixed inset-x-0 bottom-0 z-20 md:hidden flex flex-col h-[calc(100%-72px)] bg-netural-netural-400 transition-all"
    :class="toggle ? 'translate-x-0' : '-translate-x-full'"
  >
    <nav class="flex flex-col h-full justify-center items-center py-4">
      <ul
        class="overflow-y-auto flex flex-col items-center w-full space-y-2 px-4 sm:px-[88px]"
      >
        <li
          class="w-full border-b border-netural-netural-300 text-center"
          v-for="item in navList"
          :key="item.path"
        >
          <router-link
            class="block py-8 font-normal ch-caption-1 text-netural-netural-300"
            :to="item.path"
            >{{ item.title }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapState, mapWritableState } from "pinia";
import useNavListMenu from "@/stores/navList.js";
import { useMenuStore } from "@/stores/common.js";
export default {
  computed: {
    ...mapState(useNavListMenu, ["navList"]),

    // mapWritableState 可修改 state
    ...mapWritableState(useMenuStore, ["toggle"]),
  },
  mounted() {
    this.$router.afterEach(() => {
      this.toggle = false;
    });
  },
};
</script>
