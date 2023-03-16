<template>
  <div class="flex items-center justify-center">
    <nav class="py-8">
      <ul class="flex items-center justify-center space-x-2">
        <li class="group" :class="{ disabled: !pages.has_pre }">
          <a
            class="flex items-center justify-center w-12 h-12 rounded bg-netural-netural-200 text-netural-netural-400 group-[.disabled]:opacity-30 group-[.disabled]:cursor-not-allowed font-semibold ch-heading-4"
            href="#"
            @click.prevent="getList(pages.current_page - 1)"
          >
            <span class="material-symbols-outlined"> chevron_left </span>
          </a>
        </li>
        <!-- 傳入的 item 為 頁碼數字 -->
        <li
          class="group"
          :class="{ active: pages.current_page === item }"
          v-for="(item, index) in pages.total_pages"
          :key="index"
        >
          <!-- 當下頁面狀態時 顯示 span標籤元素 -->
          <span
            v-if="pages.current_page === item"
            class="flex items-center justify-center w-12 h-12 rounded bg-netural-netural-200 text-netural-netural-300 group-[.active]:bg-secondary-secondary-200 group-[.active]:text-netural-netural-100 font-semibold ch-heading-4"
            >{{ index + 1 }}</span
          >
          <!-- 否則 顯示 a 標籤元素 + 可切換分頁資料事件 -->
          <a
            v-else
            class="flex items-center justify-center w-12 h-12 rounded bg-netural-netural-200 text-netural-netural-400 font-semibold ch-heading-4"
            href="#"
            @click.prevent="$emit('change-page', categoryData, item)"
            >{{ index + 1 }}</a
          >
        </li>
        <li class="group" :class="{ disabled: !pages.has_next }">
          <a
            class="flex items-center justify-center w-12 h-12 rounded bg-netural-netural-200 text-netural-netural-400 group-[.disabled]:opacity-30 group-[.disabled]:cursor-not-allowed font-semibold ch-heading-4"
            href="#"
            @click.prevent="getList(pages.current_page + 1)"
          >
            <span class="material-symbols-outlined"> chevron_right </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    pages: {
      type: Object,
      default: () => {},
    },
    //
    getList: {
      type: Function,
      default: () => {},
    },
    category: {
      type: String,
      default: "",
    },
  },
  emits: ["change-page"],
  computed: {
    categoryData() {
      return this.category === "全部地區" ? "" : this.category;
    },
  },
};
</script>
<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 0, "opsz" 48;
}
</style>
