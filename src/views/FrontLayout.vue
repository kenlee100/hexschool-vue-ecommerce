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
    this.$router.afterEach((to, from) => {
      this.$nextTick(() => {
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
