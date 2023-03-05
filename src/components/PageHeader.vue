<template>
  <div class="flex flex-col mb-[60px]">
    <div class="overflow-hidden relative img-overlay">
      <img
        src="https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&dpr=2"
        class="w-full h-[200px] lg:h-[400px] object-cover"
        alt=""
      />
    </div>
    <div class="container">
      <div
        class="relative z-10 -mt-[34px] lg:-mt-[62px] px-4 lg:px-8 lg:py-2 w-max-content [&:not(:last-child)]:mb-10 lg:[&:not(:last-child)]:mb-20 bg-netural-netural-100 before:content-[''] before:absolute before:left-2 before:top-[6px] lg:before:left-4 before:bottom-2 lg:before:top-[14px] lg:before:bottom-4 before:w-[1px] before:bg-netural-netural-400"
      >
      {{ getPath }}
        <!-- <h2 class="en-body">
          {{ getPath[0].en }}
        </h2> -->
        <p class="font-bold ch-heading-1 lg:ch-display">
          <!-- {{ getPath[0].name }} -->
        </p>
      </div>
      <!-- <div class="relative z-10 flex items-center justify-center -mt-10">
        <h2
          v-if="getPath.length > 0"
          class="relative w-full px-6 py-2 after:content-[''] after:relative after:inset-x-0 after:-bottom-2 after:block after:mx-auto after:border-b-4 after:border-netural-netural-400 ch-heading-3 lg:ch-display font-bold bg-netural-netural-100"
        >
          
        </h2>
      </div> -->
    </div>
    <!-- <h2 v-else class="fs-4 text-secondary">後台管理</h2> -->
  </div>
</template>
<script>
import { mapState } from "pinia";
import useNavListMenu from "@/stores/navList.js";
export default {
  props: {
    pageTitle: {
      type: String,
      require: true,
    },
  },
  computed: {
    ...mapState(useNavListMenu, ["navList"]),
    getPath() {
      // 回傳符合navList store的路徑
      return this.navList.filter((item) => {
        console.log("item", item);
        return item.path === this.$route.path;
      });
    },
  },
  // mounted() {
  //   console.log("navlist", this.navList);
  // },
};
</script>
