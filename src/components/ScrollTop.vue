<template>
  <div
    class="fixed z-30 right-3 bottom-10 flex justify-center items-center w-12 h-12 rounded-full cursor-pointer transition-all opacity-0 invisible bg-secondary-secondary-100 text-netural-netural-100 shadow-lg"
    :class="{ '!opacity-100 !visible': isShow }"
    title="返回最上層"
    @click="scrollToTop"
  >
    <div class="ch-heading-1 material-symbols-outlined">expand_less</div>
  </div>
</template>

<script>
export default {
  data() {
    return { isShow: false };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      const rootElement = document.documentElement;
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.1) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    document.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
