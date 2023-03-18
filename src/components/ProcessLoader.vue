<template>
  <div
    v-if="isProcessing"
    class="fixed z-30 inset-0 flex items-center justify-center"
  >
    <div
      class="relative z-30 w-12 h-12 rounded-full animate-animation-rotate before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-4 before:border-netural-netural-400 before:animate-animation-prixClipFix"
    ></div>
    <div class="absolute w-full h-full bg-netural-netural-100 opacity-80"></div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { useLoadingState } from "@/stores/common.js";
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(useLoadingState, ["isProcessing"]),
  },
};
</script>
