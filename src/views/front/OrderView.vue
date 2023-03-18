<template>
  <PageHeader :image-url="pageImage" />
  <div class="container">
    <CartStep :current-step="currentStep" />
    <div
      class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8"
      v-if="currentStep === 2"
    >
      <div class="lg:w-1/2 space-y-6">
        <div class="flex flex-col space-y-4">
          <template v-if="cart.carts">
            <div
              class="flex items-center p-4 bg-netural-netural-200"
              v-for="item in cart.carts"
              :key="item.id"
            >
              <!-- <div class="overflow-hidden flex flex-shrink-0 w-[140px]">
                          <a href="/" class="flex items-center w-full">
                            <div class="overflow-hidden">
                              <img class="w-full h-full objec-cover" src="" alt="" />
                            </div>
                          </a>
                        </div> -->
              <div
                class="flex flex-col md:flex-row md:items-center md:justify-between w-full space-y-4 md:space-y-0"
              >
                <div class="w-full md:w-auto md:flex-1 md:pr-4">
                  <h3 class="font-bold ch-heading-3 line-clamp-2">
                    <router-link :to="`/product/${item.product.id}`">{{
                      item.product.title
                    }}</router-link>
                  </h3>
                </div>
                <div
                  class="flex flex-1 items-center md:justify-end md:flex-shrink-0"
                >
                  <div class="ml-auto en-caption-01 whitespace-nowrap">
                    x {{ item.qty }}
                  </div>
                  <div
                    class="flex items-center justify-end flex-shrink-0 min-w-[120px] space-x-4"
                  >
                    <div class="flex flex-col items-end min-w-[50px] space-y-1">
                      <div
                        class="en-caption-02 line-through text-right"
                        v-if="item.final_total !== item.total"
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
                </div>
              </div>
            </div>
          </template>
          <div class="flex items-center justify-end">
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
        <div class="space-y-8">
          <div
            class="flex flex-col p-4 md:p-6 space-y-4 bg-netural-netural-200"
          >
            <div
              class="flex flex-col space-y-2 pb-3 [&:not(:last-child)]:border-b border-netural-netural-400"
            >
              <div class="flex justify-between">
                <p class="font-bold ch-body">小計：</p>
                <p class="flex-shrink-0 en-caption-01 line-through">
                  ${{ cart.total }}
                </p>
              </div>
              <div class="flex justify-between">
                <p class="font-bold ch-body">折扣後：</p>
                <p class="flex-shrink-0 en-caption-01">
                  ${{ Math.round(cart.final_total) }}
                </p>
              </div>
              <div class="flex justify-between">
                <p class="font-bold ch-body">優惠券：</p>
                <!-- <p class="flex-shrink-0 en-caption-01 line-through">
                            ${{ cart.total }}
                          </p> -->
                <p class="font-bold ch-body text-netural-netural-300">
                  {{ couponState.codeName }}
                </p>
              </div>
            </div>
            <div class="flex justify-between">
              <p class="font-bold ch-heading-4">總計:</p>
              <p class="flex-shrink-0 en-body text-secondary-secondary-200">
                ${{ Math.round(cart.final_total) }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div v-if="cart.carts && cart.carts.length > 0">
            <button
              class="btn-outline"
              type="button"
              @click="goBackStep(1, '/cart')"
            >
              返回上一步
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:w-1/2">
        <Form
          ref="form"
          class="flex flex-col p-4 md:p-6 bg-netural-netural-200 space-y-6"
          v-slot="{ errors }"
          @submit="createOrder"
        >
          <div class="space-y-2">
            <label for="email" class="text-heading-4 font-bold">Email</label>
            <Field
              id="email"
              name="Email"
              type="email"
              class="form-input"
              :class="{ 'border-2 border-red-700': errors['Email'] }"
              v-model="form.user.email"
              placeholder="請輸入 Email"
              rules="required|email"
            ></Field>
            <error-message
              name="Email"
              class="block ch-body font-bold text-red-700"
            ></error-message>
          </div>

          <div class="space-y-2">
            <label for="name" class="text-heading-4 font-bold"
              >收件人姓名</label
            >
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-input"
              :class="{ 'border-2 border-red-700': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <error-message
              name="姓名"
              class="block ch-body font-bold text-red-700"
            ></error-message>
          </div>

          <div class="space-y-2">
            <label for="phone" class="text-heading-4 font-bold"
              >收件人手機</label
            >
            <Field
              id="tel"
              name="手機"
              type="tel"
              class="form-input"
              :class="{ 'border-2 border-red-700': errors['手機'] }"
              placeholder="請輸入手機"
              :rules="isPhone"
              v-model="form.user.tel"
            ></Field>
            <error-message
              name="手機"
              class="block ch-body font-bold text-red-700"
            ></error-message>
          </div>
          <div class="space-y-2">
            <label for="city" class="text-heading-4 font-bold">地區</label>
            <div class="form-select">
              <Field
                id="city"
                name="地區"
                :class="{ 'border-2 border-red-700': errors['地區'] }"
                rules="required"
                as="select"
                v-model="form.user.city"
              >
                <option value="" selected disabled>請選擇地區</option>
                <option value="台北市">台北市</option>
                <option value="高雄市">高雄市</option>
              </Field>
            </div>
            <error-message
              name="地區"
              class="block ch-body font-bold text-red-700"
            ></error-message>
          </div>
          <div class="space-y-2">
            <label for="address" class="text-heading-4 font-bold"
              >收件人地址</label
            >
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-input"
              :class="{ 'border-2 border-red-700': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <error-message
              name="地址"
              class="block ch-body font-bold text-red-700"
            ></error-message>
          </div>
          <div class="space-y-2">
            <label for="paid" class="text-heading-4 font-bold">付款方式</label>
            <div class="form-select">
              <Field
                id="paid"
                name="付款"
                as="select"
                v-model="form.user.paidMethod"
              >
                <option value="線上刷卡">線上刷卡</option>
                <option value="ATM轉帳">ATM轉帳</option>
              </Field>
            </div>
          </div>
          <div class="space-y-2">
            <label for="message" class="text-heading-4 font-bold">留言</label>
            <textarea
              id="message"
              class="form-input"
              cols="30"
              rows="6"
              v-model="form.message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn-base w-full bg-secondary-secondary-200 text-netural-netural-100"
          >
            確認付款
          </button>
        </Form>
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
import pageImage from "@/assets/images/img/image/page_order.jpg";
export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          city: "",
          paidMethod: "線上刷卡",
        },
        message: "",
      },
      coupon: "",
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
      "goBackStep",
      "checkStep",
      "loadCouponCode",
    ]),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請填入正確的手機號碼";
    },
    // 建立訂單
    async createOrder() {
      useLoadingState().isProcessing = true;
      const order = this.form;
      try {
        const res = await this.$http.post(
          `${VITE_URL}/api/${VITE_PATH}/order`,
          {
            data: order,
          }
        );
        //解構賦值
        const { message, orderId } = res.data;
        this.$refs.form.resetForm(); //VeeValidate 重設表單 resetForm方法
        this.form.message = ""; // 清除textarea欄位
        useLoadingState().isProcessing = false;
        await this.getCartList();
        this.orderFinishInfo = res.data;
        this.goNextStep(3, `/checkout/${orderId}`);
      } catch (err) {
        toast.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
  },
  computed: {
    ...mapState(cartStore, ["cart", "currentStep", "couponState"]),
  },
  async mounted() {
    useLoadingState().isLoading = true;
    this.checkStep(2);
    this.coupon = localStorage.getItem("coupon");
    await this.getCartList();
    this.loadCouponCode();
  },
};
</script>
