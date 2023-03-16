<template>
  <div
    v-if="itemIndex % 2 === 0"
    class="relative flex flex-col md:flex-row md:mb-20 md:mt-[60px]"
  >
    <div class="flex w-full md:w-[60%]">
      <img
        src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
        class="w-full h-[300px] lg:h-[400px] object-cover"
        alt=""
      />
    </div>
    <div
      class="relative md:absolute -mt-8 ml-4 md:mt-0 md:-top-[60px] md:left-[55%] z-10 md:w-[35%] p-4 md:py-6 md:px-[32px] bg-netural-netural-200 shadow-md"
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
  <div
    v-if="itemIndex % 2 === 1"
    class="relative flex flex-col md:flex-row md:mb-20 md:mt-[60px]"
  >
    <div class="flex w-full md:w-[60%] ml-auto">
      <img
        src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
        class="w-full h-[250px] lg:h-[400px] object-cover"
        alt=""
      />
    </div>
    <div
      class="relative md:absolute -mt-8 mr-4 md:mt-0 md:-top-[60px] md:right-[55%] z-10 md:w-[35%] p-4  md:py-6 md:px-[32px] bg-netural-netural-200 shadow-md"
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
    itemIndex: {
      type: Number,
    },
  },
};
</script>
