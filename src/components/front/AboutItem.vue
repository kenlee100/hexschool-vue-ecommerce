<template>
  <div class="relative mb-20 mt-[60px]">
    <div class="flex w-1/2">
      <img
        src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
        class="w-full h-[180px] lg:h-[280px] object-cover"
        alt=""
      />
    </div>
    <div
      class="absolute -top-[60px] left-[40%] z-10 w-[40%] py-6 px-[32px] bg-netural-netural-100 shadow-md"
    >
      <div class="[&:not(:last-child)]:mb-5">
        <h3 class="flex items-start [&:not(:last-child)]:mb-2">
          <p
            class="font-bold ch-body lg:ch-heading-2 text-secondary-secondary-100 line-clamp-2"
          >
            {{ title }}
          </p>
        </h3>
        <div>
          <p
            class="font-normal ch-caption-2 lg:ch-body text-netural-netural-300 line-clamp-5"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>
