<template>
  <router-link
    :to="`/article/${articleData.id}`"
    class="flex flex-col mb-10 lg:mb-20 group"
  >
    <div class="flex w-full">
      <img
        :src="articleData.imageUrl"
        class="w-full h-[180px] lg:h-[280px] object-cover"
        alt=""
        :class="imageClass"
      />
    </div>
    <div
      class="relative z-10 flex flex-col flex-1 -mt-8 lg:-mt-[84px] ml-4 lg:ml-[110px] p-4 lg:py-6 lg:px-[32px] bg-netural-netural-100 group-hover:bg-secondary-secondary-100 transition-all"
      :class="textContentClass"
    >
      <div class="[&:not(:last-child)]:mb-5">
        <h3 class="flex items-start [&:not(:last-child)]:mb-2">
          <p
            class="font-bold ch-body lg:ch-heading-4 text-secondary-secondary-100 line-clamp-2 group-hover:text-primary-primary-100 transition-all"
          >
            {{ articleData.title }}
          </p>
        </h3>
        <div>
          <p
            class="font-normal ch-caption-2 lg:ch-body text-netural-netural-300 line-clamp-5 group-hover:text-netural-netural-200 transition-all"
          >
            {{ articleData.description }}
          </p>
        </div>
      </div>
      <div class="flex items-start mt-auto">
        <img
          class="flex-shrink-0 w-8 h-8 [&:not(:last-child)]:mt-2 [&:not(:last-child)]:mr-4 object-cover rounded-full"
          src="https://images.pexels.com/photos/9833110/pexels-photo-9833110.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div class="flex flex-col">
          <p
            class="ch-caption-2 lg:ch-caption-1 font-bold text-netural-netural-400 group-hover:text-primary-primary-100 transition-all"
          >
            {{ articleData.author }}
          </p>
          <p
            class="ch-caption-2 lg:ch-caption-1 font-normal text-netural-netural-300 group-hover:text-primary-primary-100 transition-all"
          >
            {{ $filters.ddmmyyyy(articleData.create_at) }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    articleData: {
      type: Object,
      default: () => {},
    },
    imageClass: {
      type: String,
    },
    textContentClass: {
      type: String,
    },
  },
};
</script>
