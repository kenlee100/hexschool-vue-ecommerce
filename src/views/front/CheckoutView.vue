<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
      {{ order }}
      <div
        class="overflow-hidden flex flex-col items-center max-w-[400px] mx-auto p-6 bg-netural-netural-200"
      >
        <div class="flex flex-col w-full space-y-3">
          <h3 class="ch-heading-2 font-bold">{{ orderFinishInfo.message }}</h3>
          <div
            class="flex flex-col lg:flex-row justify-between items-start flex-wrap [&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30"
          >
            <p class="font-bold ch-heading-4">訂單編號：</p>
            <p class="flex-shrink-0 pt-1 en-caption-01">
              {{ orderFinishInfo.orderId }}
            </p>
          </div>
          <div
            class="flex flex-col lg:flex-row justify-between items-start flex-wrap [&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b border-netural-netural-300"
          >
            <p class="font-bold ch-heading-4">訂單建立時間：</p>
            <p class="flex-shrink-0 pt-1 en-caption-01">
              {{ $filters.date(orderFinishInfo.create_at) }}
            </p>
          </div>
          <div
            class="flex justify-between items-start flex-wrap [&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b border-netural-netural-300"
          >
            <p class="font-bold ch-heading-4">金額：</p>
            <p class="flex-shrink-0 pt-1 en-body text-secondary-secondary-200">
              $ {{ Math.round(orderFinishInfo.total) }}
            </p>
          </div>
          <div class="py-4">
            已將您的訂單內容，寄送至信箱
            <span class="font-bold text-secondary-secondary-100">{{
              orderFinishInfo.email
            }}</span>
            請盡快前往信箱查看
          </div>
          <a
            href=""
            class="btn-base bg-secondary-secondary-200 text-netural-netural-100"
            >繼續購物</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";
import PageHeader from "@/components/PageHeader.vue";
import { useLoadingState } from "@/stores/common.js";
import cartStore from "@/stores/cartStore.js";
export default {
  data() {
    return {
      order: {
        products: [],
        user: {},
      },
      orderFinishInfo: {
        success: true,
        message: "已建立訂單",
        total: 0,
        orderId: "",
        create_at: Date.now(),
        email: "",
      },
    };
  },
  components: { PageHeader },
  methods: {
    async getOrder() {
      try {
        await this.$http
          .get(`${VITE_URL}/api/${VITE_PATH}/order/${this.orderId}`)
          .then((res) => {
            console.log("res", res);
            const { order } = res.data;
            this.order = order;
            // this.cart = res.data.data;
            // useLoadingState().isLoading = false;
          });
      } catch (err) {
        alert(`${err.response.data.message}`);
        useLoadingState().isLoading = false;
      }
    },
    async payOrder() {
      try {
        await this.$http.post(
          `${VITE_URL}/api/${VITE_PATH}/pay/${this.orderId}`
        );
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
  },
  mounted() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
