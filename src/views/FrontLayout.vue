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
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  components: { RouterView, HeaderNav, FooterNav, MobileMenu },
};
</script>
