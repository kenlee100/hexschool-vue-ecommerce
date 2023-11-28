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
                        class="en-caption-02 text-right"
                        :class="{
                          'line-through': cartCoupon.code,
                        }"
                        v-if="item.final_total !== item.total"
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
            <div class="flex flex-col space-y-2 pb-3">
              <div class="flex justify-between">
                <p class="font-bold ch-body">小計：</p>
                <p
                  class="flex-shrink-0 en-caption-01"
                  :class="{
                    'line-through': cartCoupon.code,
                  }"
                >
                  ${{ $filters.currency(cart.total) }}
                </p>
              </div>
              <div
                v-if="cart.final_total !== cart.total"
                class="flex justify-between"
              >
                <p class="font-bold ch-body">折扣後：</p>
                <p class="flex-shrink-0 en-caption-01">
                  ${{ $filters.currency(Math.round(cart.final_total)) }}
                </p>
              </div>
              <div v-if="cartCoupon.code" class="flex justify-between">
                <p class="font-bold ch-body">優惠券：</p>
                <p class="font-bold ch-body text-netural-netural-300">
                  {{ cartCoupon.code }}
                </p>
              </div>
            </div>
            <div class="flex justify-between">
              <p class="font-bold ch-heading-4">總計:</p>
              <p class="flex-shrink-0 en-body text-secondary-secondary-200">
                ${{ $filters.currency(Math.round(cart.final_total)) }}
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
        <VForm
          ref="form"
          class="flex flex-col p-4 md:p-6 bg-netural-netural-200 space-y-6"
          v-slot="{ errors }"
          @submit="createOrder"
        >
          <div class="space-y-2">
            <label
              for="email"
              class="flex items-center text-heading-4 font-bold"
            >
              <span class="text-red-700 mr-1 mt-2">*</span>Email</label
            >
            <VField
              id="email"
              name="Email"
              type="email"
              class="form-input"
              :class="{ 'border-2 border-red-700': errors['Email'] }"
              v-model="form.user.email"
              placeholder="請輸入 Email"
              rules="required|email"
            ></VField>
            <ErrorMessage
              name="Email"
              class="block ch-body font-bold text-red-700"
            />
          </div>
          <div class="space-y-2">
            <label for="name" class="flex items-center text-heading-4 font-bold"
              ><span class="text-red-700 mr-1 mt-2">*</span>收件人姓名</label
            >
            <VField
              id="name"
              name="name"
              label="姓名"
              type="text"
              class="form-input"
              :class="{ 'border-2 border-red-700': errors['name'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></VField>
            <ErrorMessage
              name="name"
              class="block ch-body font-bold text-red-700"
            />
          </div>

          <div class="space-y-2">
            <label
              for="phone"
              class="flex items-center text-heading-4 font-bold"
              ><span class="text-red-700 mr-1 mt-2">*</span>收件人手機</label
            >
            <VField
              id="tel"
              name="tel"
              label="手機"
              type="tel"
              class="form-input"
              :class="{ 'border-2 border-red-700': errors['tel'] }"
              placeholder="請輸入手機"
              :rules="isPhone"
              v-model="form.user.tel"
            ></VField>
            <ErrorMessage
              name="tel"
              class="block ch-body font-bold text-red-700"
            />
          </div>
          <div class="space-y-2">
            <label
              for="county"
              class="flex items-center text-heading-4 font-bold"
              ><span class="text-red-700 mr-1 mt-2">*</span>縣市</label
            >
            <div class="form-select">
              <VField
                id="county"
                name="county"
                label="縣市"
                :class="{ 'border-2 border-red-700': errors['county'] }"
                rules="required"
                as="select"
                v-model="form.user.county"
              >
                <option value="" selected disabled>請選擇縣市</option>
                <option
                  :value="county"
                  v-for="(item, county) in twzipcode"
                  :key="county"
                >
                  {{ county }}
                </option>
              </VField>
            </div>
            <ErrorMessage
              name="county"
              class="block ch-body font-bold text-red-700"
            />
          </div>
          <div class="space-y-2">
            <label
              for="district"
              class="flex items-center text-heading-4 font-bold"
              ><span class="text-red-700 mr-1 mt-2">*</span>地區</label
            >
            <div class="form-select">
              <VField
                id="district"
                name="district"
                label="地區"
                :class="{ 'border-2 border-red-700': errors['district'] }"
                rules="required"
                as="select"
                v-model="form.user.district"
              >
                <option value="" selected disabled>請選擇地區</option>
                <option
                  :value="item"
                  v-for="item in filterDistrict"
                  :key="item"
                >
                  {{ item }}
                </option>
              </VField>
            </div>

            <ErrorMessage
              name="district"
              class="block ch-body font-bold text-red-700"
            />
          </div>
          <div class="space-y-2">
            <label
              for="address"
              class="flex items-center text-heading-4 font-bold"
              ><span class="text-red-700 mr-1 mt-2">*</span>地址</label
            >
            <VField
              id="address"
              name="address"
              label="地址"
              type="text"
              class="form-input"
              :class="{ 'border-2 border-red-700': errors['address'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></VField>
            <ErrorMessage
              name="address"
              class="block ch-body font-bold text-red-700"
            />
          </div>
          <div class="space-y-2">
            <label for="paid" class="text-heading-4 font-bold">付款方式</label>
            <div class="form-select">
              <VField
                id="paid"
                name="paid"
                label="付款"
                as="select"
                v-model="form.user.paidMethod"
              >
                <option value="線上刷卡">線上刷卡</option>
                <option value="ATM轉帳">ATM轉帳</option>
              </VField>
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
        </VForm>
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
import pageImage from "@/assets/images/img/image/page_order.jpg";
import twzipcode from "@/utils/twzipcode.js";
import { createOrder } from "@/apis/order.js";
export default {
  data() {
    return {
      selectCounty: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          county: "",
          district: "",
          paidMethod: "線上刷卡",
        },
        message: "",
      },
      pageImage,
      twzipcode,
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
    ]),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請填入正確的手機號碼";
    },
    // 建立訂單
    async createOrder() {
      useLoadingState().isProcessing = true;
      const order = this.form;
      const res = await createOrder({
        data: order,
      });
      const { orderId } = res;

      await toast
        .fire({
          icon: "success",
          title: `訂單已送出`,
        })
        .then(() => {
          useLoadingState().isProcessing = false;
          //解構賦值

          this.$refs.form.resetForm(); //VeeValidate 重設表單 resetForm方法
          this.form.message = ""; // 清除textarea欄位
          useLoadingState().isLoading = true;

          setTimeout(async () => {
            await this.getCartList();
            this.goNextStep(3, `/checkout/${orderId}`);
          }, 2000);
        });
    },
  },
  computed: {
    ...mapState(cartStore, ["cart", "currentStep", "cartCoupon"]),
    filterDistrict() {
      const districtData = this.twzipcode[this.form.user.county] || {};
      return Object.keys(districtData);
    },
  },
  watch: {
    // 選取縣市時預設選第一個
    "form.user.county": {
      handler() {
        this.form.user.district = this.filterDistrict[0];
      },
      deep: true,
    },
  },
  created() {
    this.getCartList();
    useLoadingState().isLoading = true;
    this.checkStep(2);
  },
};
</script>
