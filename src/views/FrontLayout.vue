<template>
  <HeaderNav />
  <router-view></router-view>
  <FooterNav />
</template>
<script>
import { RouterView } from "vue-router";
import HeaderNav from "@/components/front/HeaderNav.vue";
import FooterNav from "@/components/front/FooterNav.vue";
export default {
  components: { RouterView, HeaderNav, FooterNav },
};
</script>
