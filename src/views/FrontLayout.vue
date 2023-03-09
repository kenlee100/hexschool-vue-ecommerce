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
import { useMenuStore, useLoadingState } from "../stores/common.js";
import { mapState } from "pinia";

export default {
  methods: {},
  computed: {
    ...mapState(useMenuStore, ["toggle"]),
    ...mapState(useLoadingState, ["isLoading"]),
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
};
</script>
<style lang="scss">
.vl-overlay .vl-background {
  @apply bg-primary-primary-200 opacity-100;
}
</style>
