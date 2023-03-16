<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
      <div class="space-y-6">
        <div
          :id="`accordion-${item.id}`"
          class="shadow-md group"
          :ref="`accordion-${item.id}`"
          v-for="item in faqData"
          :key="item.id"
          :class="{ active: item.active }"
        >
          <h2
            class="bg-netural-netural-100 transition-all group-[.active]:bg-secondary-secondary-100"
          >
            <button
              @click="toggle(item)"
              class="relative flex items-center w-full px-4 py-3 text-secondary-secondary-100 group-[.active]:text-primary-primary-100 cursor-pointer"
              type="button"
            >
              <p class="flex-1 pr-10 text-left ch-heading-4 font-bold">
                {{ item.title }}
              </p>
              <div
                class="absolute right-4 top-3 flex justify-center items-center w-10 h-10 group-[.active]:opacity-0 group-[.active]:rotate-180 transition-all duration-300"
              >
                <span class="material-symbols-outlined ch-heading-2">
                  add
                </span>
              </div>
              <div
                class="absolute right-4 top-3 flex justify-center items-center w-10 h-10 -rotate-180 group-[.active]:opacity-1 transition-all duration-300"
              >
                <span class="material-symbols-outlined ch-heading-2">
                  remove
                </span>
              </div>
            </button>
          </h2>
          <transition
            name="accordion-item"
            @enter="startTransition"
            @after-enter="endTransition"
            @before-leave="startTransition"
            @after-leave="endTransition"
          >
            <div v-if="item.active" class="overflow-hidden">
              <div class="px-4 py-3 text-body">
                {{ item.description }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
import { useLoadingState } from "@/stores/common.js";
export default {
  data() {
    return {
      faqData: [
        {
          id: 1,
          title: "如何預訂行程？",
          description:
            "可以在我們的網站上選擇您感興趣的行程，然後依照網站上的指示進行預訂。",
          active: true,
        },
        {
          id: 2,
          title: "行程的支付方式有哪些？",
          description: "我們接受信用卡、ATM轉帳等支付方式",
          active: false,
        },
        {
          id: 3,
          title: "可以退訂行程嗎？退訂需要支付什麼費用？",
          description:
            "我們的退訂政策因行程而異，一般情況下，如果您在出發前退訂，將需要支付一定的退訂費用。",
          active: false,
        },
        {
          id: 4,
          title: "行程包含哪些服務？",
          description:
            "行程包括住宿、交通、餐飲等服務。詳情請參閱行程頁面介紹。",
          active: false,
        },
      ],
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    toggle(content) {
      content.active = !content.active;
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },

    endTransition(el) {
      el.style.height = "";
    },
  },
  mounted() {
    useLoadingState().isLoading = true;
    setTimeout(() => {
      useLoadingState().isLoading = false;
    }, 300);
  },
};
</script>
<style lang="scss">
.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.3s ease;
}
.accordion-item-enter-from,
.accordion-item-leave-to {
  height: 0 !important;
}
</style>
