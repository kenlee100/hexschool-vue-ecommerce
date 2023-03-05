<template>
  <div class="layout-content">
    <PageHeader />
    <div class="container">
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
          <div
            class="steps-list__item"
            :class="{ '-active': currentStep === 3 }"
          >
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
      <div class="flex space-x-8" v-if="currentStep === 1">
        <div class="w-[66.666%]">
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
                <div class="flex items-center justify-between w-full">
                  <div class="flex-1">
                    <h3 class="font-bold ch-heading-3">
                      <a href="">{{ item.product.title }}</a>
                    </h3>
                  </div>
                  <div
                    class="flex flex-1 items-center justify-end flex-shrink-0 space-x-6"
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
                      class="flex items-center justify-end flex-shrink-0 min-w-[120px] space-x-4"
                    >
                      <div
                        class="flex items-center p-2 rounded en-caption-02 bg-netural-netural-400 text-netural-netural-100 text-center"
                      >
                        -95%
                      </div>
                      <div
                        class="flex flex-col items-end min-w-[50px] space-y-1"
                      >
                        <div
                          class="en-caption-02 line-through text-right"
                          v-if="cart.final_total !== cart.total"
                        >
                          ${{ cart.final_total }}
                        </div>
                        <div class="en-body text-right">
                          ${{ item.final_total }}
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex items-center justify-center w-10 h-10 cursor-pointer"
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
            <!-- 購物車列表 -->
            <!-- 單純使用 v-if cart.carts.length 會報錯。產生原因：未判斷陣列是否為undefined 。解決方法：加個判斷，注意這裡判斷undefined要寫在判斷length前面，否則無效-->
            <div class="flex items-center justify-between">
              <div v-if="cart.carts && cart.carts.length > 0">
                <button
                  class="btn border border-netural-netural-300 text-netural-netural-300 hover:bg-netural-netural-300 hover:text-netural-netural-100"
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
            <!-- <table class="table align-middle">
              <thead>
                <tr>
                  <th></th>
                  <th>品名</th>
                  <th style="width: 150px">數量/單位</th>
                  <th class="text-end">單價</th>
                  <th class="text-end">總價</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.carts">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="deleteCartItem(item)"
                        :disabled="loadingStatus.loadingItem === item.id"
                      >
                        <i
                          v-if="loadingStatus.loadingItem === item.id"
                          class="fas fa-spinner fa-pulse"
                        ></i>
                        x
                      </button>
                    </td>
                    <td>
                      {{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                      </div>
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <div class="input-group my-3">
                          <input
                            min="1"
                            type="number"
                            class="form-control"
                            v-model.number="item.qty"
                            @blur="updateCart(item)"
                            :disabled="loadingStatus.loadingItem === item.id"
                          />
                          <span class="input-group-text" id="basic-addon2">{{
                            item.product.unit
                          }}</span>
                        </div>
                      </div>
                    </td>
                    <td class="text-end">
                      <span>${{ item.product.price }}</span>
                      <small
                        class="text-success"
                        v-if="cart.final_total !== cart.total"
                        >折扣價：</small
                      >
                    </td>
                    <td class="text-end">
                      <span>${{ item.final_total }}</span>
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="text-end">總計</td>
                  <td class="text-end">${{ cart.total }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end text-success">${{ cart.final_total }}</td>
                </tr>
              </tfoot>
            </table> -->
          </div>
        </div>
        <div class="flex flex-col flex-1 w-[33.333%]">
          <div class="sticky top-[72px] inset-x-0 space-y-8">
            <div class="flex flex-col p-6 space-y-4 bg-netural-netural-200">
              <h2 class="font-bold ch-heading-2">購物車</h2>
              <div
                class="flex flex-col space-y-2 pb-3 [&:not(:last-child)]:mb-3 [&:not(:last-child)]:border-b border-netural-netural-400"
              >
                <div class="flex justify-between">
                  <p class="font-bold ch-body">合計：</p>
                  <p class="flex-shrink-0 en-caption-01 line-through">
                    ${{ cart.total }}
                  </p>
                </div>
                <div class="flex justify-between">
                  <p class="font-bold ch-body">折扣後：</p>
                  <p class="flex-shrink-0 en-caption-01">-$822.63</p>
                </div>
                <div class="flex items-center space-x-2">
                  <div
                    class="flex items-center justify-center rounded-full w-6 h-6 bg-netural-netural-300 cursor-pointer"
                    title="移除優惠券"
                  >
                    <span
                      class="material-symbols-outlined ch-heading-4 text-netural-netural-100"
                    >
                      close
                    </span>
                  </div>
                  <p class="font-bold ch-body text-netural-netural-300">
                    HELLO2023
                  </p>
                </div>
              </div>
              <div class="flex justify-between">
                <p class="font-bold ch-heading-4">總計:</p>
                <p class="flex-shrink-0 en-body text-secondary-secondary-200">
                  ${{ cart.final_total }}
                </p>
              </div>
              <button
                type="button"
                class="btn-base w-full bg-secondary-secondary-200 text-netural-netural-100"
                @click="goNextStep((currentStep += 1))"
              >
                前往結帳
              </button>
            </div>
            <div class="p-6 bg-netural-netural-200">
              <div class="flex items-center">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-input"
                    placeholder="輸入優惠券代碼"
                  />
                  <button
                    type="button"
                    class="flex-shrink-0 p-4 whitespace-nowrap bg-netural-netural-400 text-netural-netural-100"
                  >
                    套用
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex space-x-8" v-if="currentStep === 2">
        <div class="w-1/2 space-y-6">
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
                <div class="flex items-center justify-between w-full">
                  <div class="flex-1">
                    <h3 class="font-bold ch-heading-3">
                      <a href="">{{ item.product.title }}</a>
                    </h3>
                  </div>
                  <div
                    class="flex flex-1 items-center justify-end flex-shrink-0 space-x-6"
                  >
                    <div class="en-caption-01">x {{ item.qty }}</div>
                    <div
                      class="flex items-center justify-end flex-shrink-0 min-w-[120px] space-x-4"
                    >
                      <div
                        class="flex flex-col items-end min-w-[50px] space-y-1"
                      >
                        <div
                          class="en-caption-02 line-through text-right"
                          v-if="cart.final_total !== cart.total"
                        >
                          ${{ cart.final_total }}
                        </div>
                        <div class="en-body text-right">
                          ${{ item.final_total }}
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
            <div class="flex flex-col p-6 space-y-4 bg-netural-netural-200">
              <div
                class="flex flex-col space-y-2 pb-3 [&:not(:last-child)]:border-b border-netural-netural-400"
              >
                <div class="flex justify-between">
                  <p class="font-bold ch-body">合計：</p>
                  <p class="flex-shrink-0 en-caption-01 line-through">
                    ${{ cart.total }}
                  </p>
                </div>
                <div class="flex justify-between">
                  <p class="font-bold ch-body">折扣後：</p>
                  <p class="flex-shrink-0 en-caption-01">-$822.63</p>
                </div>
                <div class="flex justify-between">
                  <p class="font-bold ch-body">優惠券：</p>
                  <!-- <p class="flex-shrink-0 en-caption-01 line-through">
                    ${{ cart.total }}
                  </p> -->
                  <p class="font-bold ch-body text-netural-netural-300">
                    HELLO2023
                  </p>
                </div>
                <!-- <div class="flex items-center space-x-2">
                  <div
                    class="flex items-center justify-center rounded-full w-6 h-6 bg-netural-netural-300 cursor-pointer"
                    title="移除優惠券"
                  ></div>
                </div> -->
              </div>
              <div class="flex justify-between">
                <p class="font-bold ch-heading-4">總計:</p>
                <p class="flex-shrink-0 en-body text-secondary-secondary-200">
                  ${{ cart.final_total }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-1/2">
          <Form
            ref="form"
            class="flex flex-col p-6 bg-netural-netural-200 space-y-6"
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
                :class="{ 'is-invalid': errors['Email'] }"
                v-model="form.user.email"
                placeholder="請輸入 Email"
                rules="required|email"
              ></Field>
              <error-message name="Email" class="text-red-700"></error-message>
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
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <error-message name="姓名" class="text-red-700"></error-message>
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
                :class="{ 'is-invalid': errors['手機'] }"
                placeholder="請輸入手機"
                :rules="isPhone"
                v-model="form.user.tel"
              ></Field>
              <error-message name="手機" class="text-red-700"></error-message>
            </div>
            <div class="space-y-2">
              <label for="city" class="text-heading-4 font-bold">地區</label>
              <div class="form-select">
                <Field
                  id="city"
                  name="地區"
                  :class="{ 'is-invalid': errors['地區'] }"
                  rules="required"
                  as="select"
                  v-model="form.user.city"
                >
                  <option value="" selected disabled>請選擇地區</option>
                  <option value="台北市">台北市</option>
                  <option value="高雄市">高雄市</option>
                </Field>
              </div>
              <error-message name="地區" class="text-red-700"></error-message>
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
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <error-message name="地址" class="text-red-700"></error-message>
            </div>
            <div class="space-y-2">
              <label for="paid" class="text-heading-4 font-bold"
                >付款方式</label
              >
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
      <div
        class="overflow-hidden flex flex-col items-center max-w-[400px] mx-auto p-6 bg-netural-netural-200"
        v-if="currentStep === 3"
      >
        <div class="flex flex-col w-full space-y-3">
          <h3 class="ch-heading-2 font-bold">{{ orderFinishInfo.message }}</h3>
          <div
            class="flex justify-between items-start flex-wrap [&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b border-netural-netural-300 [&:not(:last-child)]:border-opacity-30"
          >
            <p class="font-bold ch-heading-4">訂單編號：</p>
            <p class="flex-shrink-0 pt-1 en-caption-01">
              {{ orderFinishInfo.orderId }}
            </p>
          </div>
          <div
            class="flex justify-between items-start flex-wrap [&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b border-netural-netural-300"
          >
            <p class="font-bold ch-heading-4">訂單建立時間：</p>
            <p class="flex-shrink-0 pt-1 en-caption-01">
              {{ orderFinishInfo.create_at }}
            </p>
          </div>
          <div
            class="flex justify-between items-start flex-wrap [&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b border-netural-netural-300"
          >
            <p class="font-bold ch-heading-4">金額：</p>
            <p class="flex-shrink-0 pt-1 en-body text-secondary-secondary-200">
              $ {{ orderFinishInfo.total }}
            </p>
          </div>
          <div class="py-4">
            已將您的訂單內容，寄送至信箱
            <span class="font-bold text-secondary-secondary-100">{{ orderFinishInfo.email }}</span>
            請盡快前往信箱查看
          </div>
          <a href="" class="btn-base bg-secondary-secondary-200 text-netural-netural-100">繼續購物</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import PageHeader from "@/components/PageHeader.vue";
import { useLoadingState } from "@/stores/common.js";
export default {
  data() {
    return {
      // 讀取狀態，使用id 判斷 讀取狀態效果顯示與隱藏
      loadingStatus: {
        loadingItem: "",
      },
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      productId: "",
      cart: {},
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          city: "",
          paidMethod: "",
        },
        message: "",
      },
      currentStep: 3,
      orderFinishInfo: {
        success: true,
        message: "已建立訂單",
        total: 668,
        orderId: "-NPmHjm9vdc_f4fpNpLR",
        create_at: 1678028504,
        email: "oooooo@gmail.com",
      },
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    // 取得購物車
    getCartList() {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          console.log(res);
          this.cart = res.data.data;
          useLoadingState().isLoading = false;
        })
        .catch((err) => {
          alert(`${err.response.data.message}`);
          useLoadingState().isLoading = false;
        });
    },
    // 刪除單筆購物車
    async deleteCartItem(content) {
      // 賦予讀取狀態id
      this.loadingStatus.loadingItem = content.id;
      try {
        const res = await this.$http.delete(
          `${VITE_URL}/api/${VITE_PATH}/cart/${content.id}`
        );
        // 將讀取狀態清空
        this.loadingStatus.loadingItem = "";
        await this.getCartList();
        const {
          // 取出內層的資料
          product: { title },
        } = content;
        const { message } = res.data;
        alert(`${title} ${message}`);
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
    // 清除購物車
    async clearCartItem() {
      const dialog = confirm("確定清除購物車嗎？");
      if (dialog) {
        try {
          const res = await this.$http.delete(
            `${VITE_URL}/api/${VITE_PATH}/carts`
          );
          await this.getCartList();
          const { message } = res.data;
          setTimeout(() => {
            alert(`${message} 購物車`);
          }, 500);
        } catch (err) {
          alert(`${err.response.data.message}`);
        }
      }
    },
    // 修改購物車數量
    async updateCart(content) {
      // 賦予讀取狀態id
      this.loadingStatus.loadingItem = content.id;
      try {
        await this.$http.put(
          `${VITE_URL}/api/${VITE_PATH}/cart/${content.id}`,
          {
            data: {
              product_id: content.product_id,
              qty: content.qty,
            },
          }
        );
        // 將讀取狀態清空
        this.loadingStatus.loadingItem = "";
        await this.getCartList();
        const {
          // 取出內層的資料
          product: { title },
        } = content;
        alert(`已更新 品名：${title} 數量`);
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請填入正確的手機號碼";
    },
    // 建立訂單
    async createOrder() {
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
        console.log(res);
        alert(` ${message} ，訂單編號 ${orderId}`);
        this.$refs.form.resetForm(); //VeeValidate 重設表單 resetForm方法
        this.form.message = ""; // 清除textarea欄位
        await this.getCartList();
        this.currentStep = 3;
        this.orderFinishInfo = res.data;
      } catch (err) {
        alert(`${err.response.data.message}`);
      }
    },
    goNextStep(num) {
      this.currentStep = num;
    },
  },
  mounted() {
    useLoadingState().isLoading = true;
    this.getCartList();
  },
};
</script>
