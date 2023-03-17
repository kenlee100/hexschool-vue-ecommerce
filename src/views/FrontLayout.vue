<template>
  <MobileMenu />
  <HeaderNav />
  <router-view></router-view>
  <FooterNav />
  <VueLoading v-model:active="isLoading">
    <div class="compass"></div>
  </VueLoading>
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
    return {};
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
.compass {
  @apply relative w-16 h-16 bg-netural-netural-100 rounded-full rotate-45 animate-animation_compass before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:w-[15px] before:h-[30px] before:skew-x-[5deg] before:skew-y-[60deg] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-primary-primary-200 after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:w-[6px] after:h-[6px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-netural-netural-100;
}

.swal2-container {
  top: 75px !important;
}
.swal2-actions {
  @apply w-full pt-6 px-4 space-x-4;
}
.swal2-confirm,
.swal2-cancel {
  @apply flex-1;
}
</style>
