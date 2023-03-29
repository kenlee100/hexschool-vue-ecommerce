<template>
  <PageHeader :image-url="pageImage" />
  <div class="container">
    <template v-if="cart.carts && cart.carts.length >= 1">
      <CartStep :current-step="currentStep" />
      <div
        class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8"
      >
        <div class="lg:w-[66.666%]">
          <div class="flex flex-col space-y-4">
            <template v-if="cart.carts">
              <div
                class="flex items-center p-4 bg-netural-netural-200"
                v-for="item in cart.carts"
                :key="item.id"
              >
                <div
                  class="overflow-hidden hidden md:flex flex-shrink-0 w-[140px] [&:not(:last-child)]:mr-4"
                >
                  <router-link
                    :to="`/product/${item.product.id}`"
                    class="flex items-center w-full"
                    target="_blank"
                  >
                    <div class="overflow-hidden">
                      <img
                        class="w-[140px] h-[90px] object-cover"
                        :src="item.product.imageUrl"
                        :alt="item.product.title"
                      />
                    </div>
                  </router-link>
                </div>
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between w-full space-y-4 md:space-y-0"
                >
                  <div class="w-full md:w-auto md:flex-1 md:pr-4">
                    <h3 class="font-bold ch-heading-3 line-clamp-2">
                      <a href="">{{ item.product.title }}</a>
                    </h3>
                  </div>
                  <div
                    class="flex flex-1 items-center md:justify-end md:flex-shrink-0"
                  >
                    <div class="ch-body">
                      <label for="" class="hidden">Qty:</label>
                      <div class="form-select">
                        <select
                          name=""
                          id=""
                          v-model.number="item.qty"
                          @change="updateCart(item)"
                        >
                          <option selected disabled>選擇數量</option>
                          <option
                            v-for="(item, index) in 10"
                            :key="index"
                            :value="index + 1"
                          >
                            {{ index + 1 }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="flex items-center justify-end flex-shrink-0 min-w-[120px] ml-auto"
                    >
                      <div
                        class="flex flex-col items-end min-w-[50px] space-y-1"
                      >
                        <div
                          v-if="item.final_total !== item.total"
                          class="en-caption-02 line-through text-right"
                        >
                          ${{ Math.round(item.total) }}
                        </div>
                        <div
                          class="en-body text-right text-secondary-secondary-200"
                        >
                          ${{ Math.round(item.final_total) }}
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex items-center justify-center w-10 h-10 ml-4 cursor-pointer"
                      @click="deleteCartItem(item)"
                    >
                      <span class="material-symbols-outlined ch-heading-2">
                        close
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <div class="flex items-center justify-between">
              <div v-if="cart.carts && cart.carts.length > 0">
                <button
                  class="btn-outline"
                  type="button"
                  @click="clearCartItem"
                >
                  清空購物車
                </button>
              </div>
              <div
                v-if="cart.carts && cart.carts.length > 0"
                class="flex space-x-4 ch-heading-4 font-bold text-netural-netural-300"
              >
                <span>共</span>
                <p class="en-body text-secondary-secondary-200">
                  {{ cart.carts.length }}
                </p>
                <span>件商品</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:w-[33.333%]">
          <div class="sticky top-[72px] inset-x-0 space-y-8">
            <div
              class="flex flex-col p-4 md:p-6 space-y-4 bg-netural-netural-200"
            >
              <h2 class="font-bold ch-heading-2">購物車</h2>
              <div
                class="flex flex-col space-y-2 pb-3 [&:not(:last-child)]:mb-3 [&:not(:last-child)]:border-b border-netural-netural-400"
              >
                <div class="flex justify-between">
                  <p class="font-bold ch-body">小計：</p>
                  <p class="flex-shrink-0 en-caption-01 line-through">
                    ${{ cart.total }}
                  </p>
                </div>
                <div
                  v-if="cart.final_total !== cart.total"
                  class="flex justify-between"
                >
                  <p class="font-bold ch-body">折扣後：</p>
                  <p class="flex-shrink-0 en-caption-01">
                    ${{ Math.round(cart.final_total) }}
                  </p>
                </div>
                <div class="flex items-center space-x-2">
                  <p class="font-bold ch-body text-netural-netural-300">
                    {{ couponState.couponText }}
                  </p>
                </div>
              </div>
              <div class="flex justify-between">
                <p class="font-bold ch-heading-4">總計:</p>
                <p class="flex-shrink-0 en-body text-secondary-secondary-200">
                  ${{ Math.round(cart.final_total) }}
                </p>
              </div>
              <button
                type="button"
                class="btn-base w-full bg-secondary-secondary-200 text-netural-netural-100"
                @click="goNextStep(2, '/order')"
              >
                前往結帳
              </button>
            </div>
            <div class="p-4 md:p-6 bg-netural-netural-200">
              <div class="flex items-center">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-input"
                    placeholder="輸入優惠券代碼"
                    v-model="couponState.codeName"
                  />
                  <button
                    type="button"
                    class="flex-shrink-0 p-4 whitespace-nowrap bg-netural-netural-400 text-netural-netural-100"
                    @click="addCoupon(couponState.codeName)"
                  >
                    套用
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div
      v-else
      class="flex flex-col justify-center space-y-4 max-w-[800px] mx-auto"
    >
      <p class="ch-heading-3 text-center">
        您的購物車目前有一點空虛，快來挑選一些商品吧！
      </p>
      <div class="py-4 text-center">
        <router-link
          class="btn-base text-netural-netural-100 bg-secondary-secondary-100"
          to="/products"
          >瀏覽推薦行程</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";
import PageHeader from "@/components/PageHeader.vue";
import CartStep from "@/components/front/CartStep.vue";
import { useLoadingState } from "@/stores/common.js";
import cartStore from "@/stores/cartStore.js";
import toast from "@/utils/toast";
import pageImage from "@/assets/images/img/image/page_cart.jpg";
export default {
  data() {
    return {
      isCouponCodeShow: true,
      orderFinishInfo: {
        success: true,
        message: "已建立訂單",
        total: 0,
        orderId: "",
        create_at: Date.now(),
        email: "",
      },
      pageImage,
    };
  },
  components: {
    PageHeader,
    CartStep,
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "updateCart",
      "deleteCartItem",
      "clearCartItem",
      "goNextStep",
      "checkStep",
      "couponPercent",
      "loadCouponCode",
    ]),
    async addCoupon(code) {
      useLoadingState().isProcessing = true;
      try {
        await this.$http
          .post(`${VITE_URL}/api/${VITE_PATH}/coupon`, {
            data: {
              code: this.couponState.codeName,
            },
          })
          .then((res) => {
            this.isCouponCodeShow = false;
            this.couponState.codeName = code;
            this.couponState.couponText = res.data.message;
            this.storeCouponCode(this.couponState);
            useLoadingState().isProcessing = false;
            toast.fire({
              icon: "success",
              title: `${res.data.message}`,
            });
            this.getCartList();
          });
      } catch (err) {
        useLoadingState().isLoading = false;
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    storeCouponCode(code) {
      localStorage.setItem("coupon", JSON.stringify(code));
    },
  },
  computed: {
    ...mapState(cartStore, ["cart", "currentStep", "couponState"]),
  },
  async mounted() {
    this.checkStep(1);
    useLoadingState().isLoading = true;
    await this.getCartList();
    this.loadCouponCode();
  },
};
</script>
