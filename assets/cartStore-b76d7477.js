import{d as u,I as o,J as l}from"./index-8dc51b0a.js";import{a as s}from"./common-0df46e94.js";import{t as a,S as p}from"./toast-7bff71d1.js";const{VITE_URL:i,VITE_PATH:c}={VITE_PATH:"ken100",VITE_URL:"https://vue3-course-api.hexschool.io/v2",BASE_URL:"/hexschool-vue-ecommerce",MODE:"production",DEV:!1,PROD:!0,SSR:!1},f=u("cartStore",{state:()=>({cart:{},currentStep:1,couponState:{codeName:"",couponText:""}}),actions:{async getCartList(){try{await o.get(`${i}/api/${c}/cart`).then(t=>{this.cart=t.data.data,s().isLoading=!1})}catch(t){s().isLoading=!1,a.fire({icon:"error",title:`${t.response.data.message}`})}},async updateCart(t){s().isProcessing=!0;try{await o.put(`${i}/api/${c}/cart/${t.id}`,{data:{product_id:t.product_id,qty:t.qty}}),await this.getCartList(),s().isProcessing=!1;const{product:{title:e}}=t;a.fire({icon:"success",title:`已更新 品名：${e} 數量`})}catch(e){s().isLoading=!1,a.fire({icon:"error",title:`${e.response.data.message}`})}},async deleteCartItem(t){s().isProcessing=!0;try{const e=await o.delete(`${i}/api/${c}/cart/${t.id}`);this.removeCoupon(),await this.getCartList(),s().isProcessing=!1;const{product:{title:r}}=t,{message:n}=e.data;a.fire({icon:"success",title:`${r} ${n}`})}catch(e){s().isLoading=!1,a.fire({icon:"error",title:`${e.response.data.message}`})}},async clearCartItem(){p.mixin({customClass:{confirmButton:"!btn !btn-base !text-netural-netural-100 !bg-secondary-secondary-200",cancelButton:"!btn-outline"},buttonsStyling:!1}).fire({title:"確定清除購物車嗎？",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確定"}).then(e=>{e.isConfirmed&&(s().isProcessing=!0,o.delete(`${i}/api/${c}/carts`).then(r=>{const{message:n}=r.data;this.getCartList(),s().isProcessing=!1,this.removeCoupon(),a.fire({icon:"success",title:`${n} 購物車`})}).catch(r=>{s().isLoading=!1,a.fire({icon:"error",title:`${r.response.data.message}`})}))})},goBackStep(t,e){this.currentStep=JSON.parse(localStorage.getItem("currentStep")),t<this.currentStep&&(localStorage.setItem("currentStep",JSON.stringify(t)),l.push(e))},goNextStep(t,e){this.currentStep=JSON.parse(localStorage.getItem("currentStep")),t>this.currentStep&&(localStorage.setItem("currentStep",JSON.stringify(t)),l.push(e))},checkStep(t){this.currentStep=t,localStorage.setItem("currentStep",JSON.stringify(this.currentStep))},couponPercent(t){return`-${100-t.final_total/t.total*100}%`},loadCouponCode(){this.cart.carts!==void 0&&this.cart.carts.length<0||this.cart.total===this.cart.final_total?localStorage.setItem("coupon",JSON.stringify({codeName:"",couponText:""})):this.couponState=JSON.parse(localStorage.getItem("coupon"))||{codeName:"",couponText:""}},removeCoupon(){localStorage.removeItem("coupon"),this.couponState.codeName="",this.couponState.couponText=""}},getters:{}});export{f as c};
