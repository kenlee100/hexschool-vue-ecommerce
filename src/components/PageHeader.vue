<template>
  <div class="flex flex-col mb-[60px]">
    <div class="overflow-hidden relative pattern-overlay">
      <img
        :src="pageImage"
        class="w-full h-[200px] lg:h-[400px] object-cover"
        alt=""
      />
    </div>
    <div class="container">
      <div
        class="relative z-10 flex items-center justify-center mx-auto w-full max-w-[400px] -translate-y-1/2 bg-netural-netural-100"
      >
        <h2
          class="relative px-6 py-2 after:content-[''] after:relative after:inset-x-0 after:-bottom-2 after:block after:mx-auto after:w-full after:h-1 after:bg-netural-netural-400 text-center ch-heading-3 lg:ch-display font-bold"
        >
          {{ this.$route.meta.title }}
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageImage: {
      type: String,
      default:
        "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&dpr=2",
    },
  },
};
</script>
