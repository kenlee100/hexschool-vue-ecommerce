<template>
  <MobileMenu />
  <HeaderNav />
  <router-view></router-view>
  <FooterNav />
  <VueLoading v-model:active="isLoading"></VueLoading>
</template>
<script>
import { RouterView } from "vue-router";
import HeaderNav from "@/components/front/HeaderNav.vue";
import FooterNav from "@/components/front/FooterNav.vue";
import MobileMenu from "@/components/front/MobileMenu.vue";
import useNavListMenu from "@/stores/navList.js";
import { useMenuStore, useLoadingState } from "@/stores/common.js";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      allPathData: [],
      currentPageData: {},
    };
  },
  methods: {
    ...mapActions(useNavListMenu, ["pushRouteData"]),
  },
  computed: {
    ...mapState(useMenuStore, ["toggle"]),
    ...mapState(useLoadingState, ["isLoading"]),
    ...mapState(useNavListMenu, ["webTitle"]),
    modifyRouteData() {
      return this.$router
        .getRoutes()
        .filter((item) => Object.keys(item.meta).length > 0);
      // console.log("navRouteData", navRouteData);
    },
  },
  watch: {
    // 監聽手機選單狀態
    toggle() {
      if (this.toggle) {
        document.body.classList.add("overflow-hidden", "md:overflow-auto");
      } else {
        document.body.classList.remove("overflow-hidden", "md:overflow-auto");
      }
    },
  },
  components: { RouterView, HeaderNav, FooterNav, MobileMenu },
  mounted() {
    this.allPathData = this.$router.getRoutes();
    console.log("this.allPathData", this.allPathData);
    console.log("this.$route", this.$route);
    console.log("location", location);
    console.log("this.$route.meta", this.$route.meta);
    // this.currentPageData = this.allPathData.find((item) => {
    //   // console.log('item',item.path === this.$route.fullPath);
    //   return item.path === this.$route.fullPath;
    //   // return item.path === this.$route.fullPath ||;
    //   // console.log(item);
    // });
    // console.log(this.$route);
    console.log("currentPageData", this.currentPageData);
    console.log("title", document.title);
    this.$router.afterEach((to, from) => {
      // Use next tick to handle router history correctly
      // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
      this.$nextTick(() => {
        // console.log('title',document.title);
        document.title = `${to.meta.title} - ${this.webTitle}`;
      });
    });
    this.pushRouteData(this.modifyRouteData);
  },
};
</script>
<style lang="scss">
.vl-overlay .vl-background {
  @apply bg-primary-primary-200 opacity-100;
}
</style>
