<template>
  <PageHeader :image-url="pageImage" />
  <div class="container">
    <CartStep v-if="!order.is_paid" :current-step="currentStep" />
    <div class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
      <div class="lg:w-[66.666%]">
        <div class="flex flex-col space-y-4">
          <template v-if="order.products">
            <div
              class="flex items-center p-4 bg-netural-netural-200"
              v-for="(item, index) in order.products"
              :key="index"
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
                    {{ item.product.title }}
                  </h3>
                </div>
                <div
                  class="flex flex-1 items-center md:justify-end md:flex-shrink-0"
                >
                  <div class="ml-auto en-caption-01 whitespace-nowrap">
                    x {{ item.qty }}
                  </div>
                  <div
                    class="flex items-center justify-end flex-shrink-0 min-w-[120px]"
                  >
                    <div class="flex flex-col items-end min-w-[50px] space-y-1">
                      <div
                        v-if="item.final_total !== item.total"
                        class="en-caption-02 line-through text-right"
                      >
                        ${{ $filters.currency(Math.round(item.total)) }}
                      </div>
                      <div
                        class="en-body text-right text-secondary-secondary-200"
                      >
                        ${{ $filters.currency(Math.round(item.final_total)) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <div class="flex items-center justify-end">
            <div
              v-if="order.products && Object.keys(order.products).length > 0"
              class="flex space-x-4 ch-heading-4 font-bold text-netural-netural-300"
            >
              <span>共</span>
              <p class="en-body text-secondary-secondary-200">
                {{ Object.keys(order.products).length }}
              </p>
              <span>件商品</span>
            </div>
          </div>
          <div class="space-y-8">
            <div
              class="flex flex-col p-4 md:p-6 space-y-4 bg-netural-netural-200"
            >
              <div class="flex flex-col space-y-2 pb-3">
                <div class="flex justify-between">
                  <p class="font-bold ch-body">小計：</p>
                  <p
                    class="flex-shrink-0 en-caption-01"
                    :class="{
                      'line-through': couponIsShow,
                    }"
                  >
                    ${{ $filters.currency(Math.round(finalTotal)) }}
                  </p>
                </div>
                <div
                  v-if="finalTotal !== order.total"
                  class="flex justify-between"
                >
                  <p class="font-bold ch-body">折扣後：</p>
                  <p class="flex-shrink-0 en-caption-01">
                    ${{ $filters.currency(Math.round(order.total)) }}
                  </p>
                </div>
                <div
                  v-if="Object.keys(orderCoupon).length"
                  class="flex justify-between"
                >
                  <p class="font-bold ch-body">優惠券：</p>
                  <p class="font-bold ch-body text-netural-netural-300">
                    {{ orderCoupon.code }}
                  </p>
                </div>
              </div>
              <div class="flex justify-between">
                <p class="font-bold ch-heading-4">總計:</p>
                <p class="flex-shrink-0 en-body text-secondary-secondary-200">
                  ${{ $filters.currency(Math.round(order.total)) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:w-[33.333%]">
        <div
          class="overflow-hidden flex flex-col items-center p-4 md:p-6 bg-netural-netural-200"
        >
          <div class="flex flex-col w-full space-y-4">
            <h3 class="ch-heading-2 font-bold">訂單明細</h3>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4">訂單編號：</p>
              <p class="flex-1 ch-heading-4 break-all lg:text-right">
                {{ order.id }}
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300"
            >
              <p class="font-bold ch-heading-4">訂單建立時間：</p>
              <p class="flex-1 ch-heading-4 break-all lg:text-right">
                {{ $filters.date(order.create_at) }}
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4">信箱：</p>
              <p class="flex-1 ch-heading-4 break-all lg:text-right">
                {{ order.user.email }}
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4">姓名：</p>
              <p class="flex-1 ch-heading-4 break-all lg:text-right">
                {{ order.user.name }}
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4">收件地址：</p>
              <p class="flex-1 ch-heading-4 break-all lg:text-right">
                {{ order.user.county }}{{ order.user.district
                }}{{ order.user.address }}
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4">電話：</p>
              <p class="flex-1 ch-heading-4 break-all lg:text-right">
                {{ order.user.tel }}
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4">付款方式：</p>
              <p class="flex-1 ch-heading-4 break-all lg:text-right">
                {{ order.user.paidMethod }}
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4 break-all">金額：</p>
              <p
                class="flex-shrink-0 pt-1 en-body text-secondary-secondary-200"
              >
                $ {{ $filters.currency(Math.round(order.total)) }}
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4">付款狀態：</p>
              <p
                class="flex-1 ch-heading-4 break-all lg:text-right"
                :class="order.is_paid"
              >
                <span v-if="order.is_paid" class="text-green-700"
                  >付款完成</span
                >
                <span v-else class="text-red-800">尚未付款</span>
              </p>
            </div>
            <div
              class="flex flex-col justify-between items-start flex-wrap [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30 break-all"
            >
              <p class="font-bold ch-heading-4">留言：</p>
              <p class="flex-1 ch-heading-4 break-all lg:text-right">
                {{ order.message }}
              </p>
            </div>
            <button
              v-if="!order.is_paid"
              @click="payOrder(this.orderId)"
              type="button"
              class="btn-base bg-secondary-secondary-200 text-netural-netural-100"
            >
              付款
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import PageHeader from "@/components/PageHeader.vue";
import CartStep from "@/components/CartStep.vue";
import { useLoadingState } from "@/stores/common.js";
import cartStore from "@/stores/cartStore.js";
import toast from "@/utils/toast";
import pageImage from "@/assets/images/img/image/page_checkout.jpg";
import { getOrder, payOrder } from "@/apis/order.js";
export default {
  data() {
    return {
      order: {
        products: [],
        user: {},
      },
      finalTotal: {},
      pageImage,
      orderId: "",
    };
  },
  components: { PageHeader, CartStep },
  methods: {
    ...mapActions(cartStore, ["checkStep", "couponPercent"]),
    async getOrder(data) {
      const res = await getOrder(data);
      useLoadingState().isLoading = false;
      const { order } = res;
      this.order = order;
      this.finalTotal = Object.entries(this.order.products).reduce(
        (acc, current) => acc + current[1].total,
        0
      );
    },
    async payOrder(data) {
      useLoadingState().isProcessing = true;
      await payOrder(data);
      await this.getOrder(data);
      await toast.fire({
        icon: "success",
        title: `付款完成`,
      });
      useLoadingState().isProcessing = false;
    },
  },
  computed: {
    ...mapState(cartStore, ["currentStep", "cartCoupon"]),
    productsId() {
      return Object.keys(this.order.products)[0];
    },
    couponIsShow() {
      return (
        this.order.products[this.productsId] &&
        Object.keys(this.order.products[this.productsId]).includes("coupon")
      );
    },
    orderCoupon() {
      if (Object.keys(this.order).length) {
        const firstCheckoutId = Object.keys(this.order.products)[0];
        const products = this.order.products[firstCheckoutId];
        if (
          firstCheckoutId &&
          Object.keys(products).includes("coupon") &&
          products.coupon.code !== "coupon_clear"
        ) {
          return products.coupon;
        }
      }
      return {};
    },
  },
  created() {
    useLoadingState().isLoading = true;
    this.checkStep(3);
    this.orderId = this.$route.params.orderId;
    this.getOrder(this.orderId);
  },
};
</script>
