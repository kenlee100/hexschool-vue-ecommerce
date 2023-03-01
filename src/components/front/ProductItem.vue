<template>
  <!-- :class="`w-[calc((theme(spacing.full)/6)-(theme(spacing.6)-theme(spacing.6)/2))] mr-6 [&:nth-child(${column}n)]:mr-0 mb-20`" -->
  <div
    :class="`[&:nth-child(${column}n)]:mr-0 mb-20 mr-6`"
    :style="`width:calc( (${itemWidth} / 2) - ( ${gutter} - ${gutter} / ${column}) )`"
  >
    {{ column }}
    <div :class="`flex w-[theme(spacing.full)] ${column}`">
      <img
        src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
        class="w-full h-[480px] object-cover"
        alt=""
      />
    </div>
    <div
      class="relative -mt-[84px] ml-[110px] py-6 px-9 bg-secondary-secondary-100"
    >
      <div class="[&:not(:last-child)]:mb-8">
        <div>
          <span class="icon"></span>
          <p class="font-bold text-body leading-6">東京迪士尼陸地</p>
        </div>
        <h3 class="">
          <p class="text-heading-3 font-bold leading-9s line-clamp-2">
            東京迪士尼海洋3日遊
          </p>
        </h3>
      </div>
      <div class="flex justify-between items-center">
        <p class="font-antonio [&:not(:last-child)]:mr-4">NT$.9000</p>
        <button
          class="py-4 px-6 rounded-full btn-base text-center bg-secondary-secondary-200 text-netural-netural-100"
          type="button"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // classTest:,
      isError: true,
    };
  },
  props: {
    itemWidth: {
      type: String,
      default: "100%",
    },
    column: {
      type: Number,
      default: 2,
    },
    gutter: {
      type: String,
      default: "24px",
    },
  },
  computed: {
    // widthfull() {
    //   return theme("spacing.full");
    // },
  },
};
</script>
