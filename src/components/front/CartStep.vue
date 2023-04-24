<template>
  <div class="steps [&:not(:last-child)]:mb-10">
    <div class="steps-list">
      <div
        class="steps-list__item -active"
        :class="[
          { '-checked': currentStep === 2 },
          { '-active -checked': currentStep === 3 },
        ]"
      >
        <div class="steps-list__group">
          <div class="steps-list__point">
            <div class="steps-list__badge">
              <p
                class="steps-list__text"
                :class="{ '!hidden': currentStep >= 2 }"
              >
                1
              </p>
              <div
                v-if="currentStep > 1"
                class="flex items-center justify-center"
              >
                <span
                  class="material-symbols-outlined text-netural-netural-100 ch-heading-1"
                >
                  done
                </span>
              </div>
            </div>
            <p class="steps-list__title">購物車</p>
          </div>
          <div class="steps-list__line"></div>
        </div>
      </div>
      <div
        class="steps-list__item"
        :class="[
          { '-active -checked': currentStep === 3 },
          { '-active': currentStep === 2 },
        ]"
      >
        <div class="steps-list__group">
          <div class="steps-list__content">
            <div class="steps-list__badge">
              <p
                class="steps-list__text"
                :class="{ '!hidden': currentStep === 3 }"
              >
                2
              </p>
              <div
                v-if="currentStep > 2"
                class="flex items-center justify-center"
              >
                <span
                  class="material-symbols-outlined text-netural-netural-100 ch-heading-1"
                >
                  done
                </span>
              </div>
            </div>
            <p class="steps-list__title">確認訂單</p>
          </div>
          <div class="steps-list__line"></div>
        </div>
      </div>
      <div class="steps-list__item" :class="{ '-active': currentStep === 3 }">
        <div class="steps-list__group">
          <div class="steps-list__content">
            <div class="steps-list__badge">
              <p
                class="steps-list__text"
                :class="{ '!hidden': currentStep === 3 }"
              >
                3
              </p>
              <div
                v-if="currentStep === 3"
                class="flex items-center justify-center"
              >
                <span
                  class="material-symbols-outlined text-netural-netural-100 ch-heading-1"
                >
                  done
                </span>
              </div>
            </div>
            <p class="steps-list__title">訂單完成</p>
          </div>
          <div class="steps-list__line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
};
</script>
