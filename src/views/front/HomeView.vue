<template>
  <div class="flex h-[720px] img-overlay">
    <div class="container">
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full"
      >
        <div
          class="flex flex-col items-center mx-auto [&:not(:last-child)]:mb-10 text-center text-netural-netural-100"
        >
          <h2 class="[&:not(:last-child)]:mb-10 en-display">JAPAN TRIP</h2>
          <p class="ch-display font-black">
            <span>讓我們為你的日本之旅</span><br /><span>安排精彩的行程</span>
          </p>
        </div>

        <router-link
          to="/"
          class="flex items-center py-4 px-8 rounded-full font-bold ch-heading-3 bg-netural-netural-100 text-netural-netural-400 text-center cursor-pointer group"
        >
          <p>立即前往</p>
          <div
            class="w-4 h-4 -ml-4 opacity-0 transition-all ease-in-out duration-100 group-hover:ml-4 group-hover:opacity-100 group-hover:bg-netural-netural-400 icon-arrow"
          ></div>
        </router-link>
      </div>
      <div
        class="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center"
        style="background-image: url('/src/assets/images/img/image/banner.jpg')"
      ></div>
    </div>
  </div>
  <section class="relative z-10 -mt-[60px]">
    <div class="container">
      <div class="flex w-full px-12 bg-primary-primary-200">
        <input
          class="w-full py-[42px] bg-primary-primary-200 font-bold ch-heading-4 text-netural-netural-100"
          type="text"
          placeholder="搜尋地區 / 景點"
          name=""
          id=""
        />
        <button type="button">
          <div
            class="flex-shrink-0 w-14 h-14 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-100 icon-search"
          ></div>
        </button>
      </div>
    </div>
  </section>
  <section class="pt-20 pb-[180px] bg-netural-netural-100">
    <div class="container">
      <div
        class="px-8 py-2 [&:not(:last-child)]:mb-20 border-l border-netural-netural-400"
      >
        <h2 class="[&:not(:last-child)]:mb-3 en-title">RECOMMEND</h2>
        <p class="font-bold ch-heading-3">推薦行程</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <template v-for="(item, index) in 2" :key="index">
          <div v-if="index % 2 === 0" class="mb-20">
            <div class="flex w-full img-overlay">
              <div
                class="absolute right-10 top-10 z-10 flex-shrink-0 w-[30px] h-[30px] bg-netural-netural-100 cursor-pointer icon-favorite hover:icon-favorite-solid"
              ></div>
              <img
                src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
                class="w-full h-[480px] object-cover"
                alt=""
              />
            </div>
            <div
              class="relative z-10 -mt-[84px] ml-[110px] py-6 px-9 bg-secondary-secondary-100"
            >
              <div class="[&:not(:last-child)]:mb-8">
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-4 h-4 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-100 icon-pin"
                  ></div>
                  <p class="font-bold ch-body text-netural-netural-100">
                    東京迪士尼陸地
                  </p>
                </div>
                <h3>
                  <p
                    class="font-bold ch-heading-3 text-netural-netural-100 line-clamp-2"
                  >
                    東京迪士尼海洋3日遊
                  </p>
                </h3>
              </div>
              <div class="flex justify-between items-center">
                <p
                  class="[&:not(:last-child)]:mr-4 en-body text-netural-netural-100"
                >
                  NT$.9000
                </p>
                <button
                  class="flex-shrink-0 bg-secondary-secondary-200 text-netural-netural-100 btn-base"
                  type="button"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <div v-if="index % 2 === 1" class="mb-20">
            <div class="flex w-full img-overlay">
              <div
                class="absolute right-10 top-10 z-10 flex-shrink-0 w-[30px] h-[30px] bg-netural-netural-100 cursor-pointer icon-favorite hover:icon-favorite-solid"
              ></div>
              <img
                src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
                class="w-full h-[480px] object-cover"
                alt=""
              />
            </div>
            <div
              class="relative z-10 -mt-[84px] ml-[110px] py-6 px-9 bg-netural-netural-100"
            >
              <div class="[&:not(:last-child)]:mb-8">
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-4 h-4 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-400"
                    style="
                      -webkit-mask-image: url('/src/assets/images/img/icon/location_on@2x.png');
                      mask-image: url('/src/assets/images/img/icon/location_on@2x.png');
                      -webkit-mask-position: center;
                      mask-position: center;
                      -webkit-mask-size: contain;
                      mask-size: contain;
                      mask-repeat: no-repeat;
                      -webkit-mask-repeat: no-repeat;
                    "
                  ></div>
                  <p class="font-bold ch-body">東京迪士尼陸地</p>
                </div>
                <h3>
                  <p class="font-bold ch-heading-3 line-clamp-2">
                    東京迪士尼海洋3日遊
                  </p>
                </h3>
              </div>
              <div class="flex justify-between items-center">
                <p class="[&:not(:last-child)]:mr-4 en-body">NT$.9000</p>
                <button
                  class="flex-shrink-0 bg-secondary-secondary-200 text-netural-netural-100 btn-base"
                  type="button"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
      <!-- <div class="flex flex-wrap justify-between">
        <template v-for="(item, index) in 2" :key="index">
          <div
            v-if="index % 2 === 0"
            class="w-[calc((theme(spacing.full)/2)-(theme(spacing.6)-theme(spacing.6)/2))] [&:nth-child(2n)]:mr-0 mb-20 mr-6"
          >
            <div class="flex w-full img-overlay">
              <div
                class="absolute right-10 top-10 z-10 flex-shrink-0 w-[30px] h-[30px] bg-netural-netural-100 cursor-pointer icon-favorite hover:icon-favorite-solid"
              ></div>
              <img
                src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
                class="w-full h-[480px] object-cover"
                alt=""
              />
            </div>
            <div
              class="relative z-10 -mt-[84px] ml-[110px] py-6 px-9 bg-secondary-secondary-100"
            >
              <div class="[&:not(:last-child)]:mb-8">
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-4 h-4 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-100 icon-pin"
                  ></div>
                  <p class="font-bold ch-body text-netural-netural-100">
                    東京迪士尼陸地
                  </p>
                </div>
                <h3>
                  <p
                    class="font-bold ch-heading-3 text-netural-netural-100 line-clamp-2"
                  >
                    東京迪士尼海洋3日遊
                  </p>
                </h3>
              </div>
              <div class="flex justify-between items-center">
                <p
                  class="[&:not(:last-child)]:mr-4 en-body text-netural-netural-100"
                >
                  NT$.9000
                </p>
                <button
                  class="flex-shrink-0 bg-secondary-secondary-200 text-netural-netural-100 btn-base"
                  type="button"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <div
            v-if="index % 2 === 1"
            class="w-[calc((theme(spacing.full)/2)-(theme(spacing.6)-theme(spacing.6)/2))] [&:nth-child(2n)]:mr-0 mb-20 mr-6"
          >
            <div class="flex w-full img-overlay">
              <div
                class="absolute right-10 top-10 z-10 flex-shrink-0 w-[30px] h-[30px] bg-netural-netural-100 cursor-pointer icon-favorite hover:icon-favorite-solid"
              ></div>
              <img
                src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
                class="w-full h-[480px] object-cover"
                alt=""
              />
            </div>
            <div
              class="relative z-10 -mt-[84px] ml-[110px] py-6 px-9 bg-netural-netural-100"
            >
              <div class="[&:not(:last-child)]:mb-8">
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-4 h-4 mt-1 [&:not(:last-child)]:mr-3 bg-netural-netural-400"
                    style="
                      -webkit-mask-image: url('/src/assets/images/img/icon/location_on@2x.png');
                      mask-image: url('/src/assets/images/img/icon/location_on@2x.png');
                      -webkit-mask-position: center;
                      mask-position: center;
                      -webkit-mask-size: contain;
                      mask-size: contain;
                      mask-repeat: no-repeat;
                      -webkit-mask-repeat: no-repeat;
                    "
                  ></div>
                  <p class="font-bold ch-body">東京迪士尼陸地</p>
                </div>
                <h3>
                  <p class="font-bold ch-heading-3 line-clamp-2">
                    東京迪士尼海洋3日遊
                  </p>
                </h3>
              </div>
              <div class="flex justify-between items-center">
                <p class="[&:not(:last-child)]:mr-4 en-body">NT$.9000</p>
                <button
                  class="flex-shrink-0 bg-secondary-secondary-200 text-netural-netural-100 btn-base"
                  type="button"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </template>
      </div> -->
      <div class="flex justify-end">
        <div
          class="flex items-center w-60 py-4 px-8 border-b-4 border-netural-netural-400 group transition-all ease-in-out duration-500 hover:bg-netural-netural-400 cursor-pointer"
        >
          <p
            class="en-body text-netural-netural-400 transition-all ease-in-out duration-500 group-hover:text-netural-netural-100"
          >
            KNOW MORE
          </p>
          <div
            class="w-8 h-8 opacity-0 transition-all ease-in-out duration-500 group-hover:ml-8 group-hover:opacity-100 group-hover:bg-netural-netural-100 icon-arrow"
          ></div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-20 pb-[180px] bg-netural-netural-200">
    <div class="container [&:not(:last-child)]:mb-20">
      <div class="px-8 py-2 border-l border-netural-netural-400">
        <h2 class="[&:not(:last-child)]:mb-3 en-title">HOT SPOT</h2>
        <p class="font-bold ch-heading-3">熱門景點</p>
      </div>
    </div>
    <div class="overflow-x-auto grid grid-cols-2 md:grid-cols-5 gap-1">
      <div
        v-for="(item, index) in 10"
        :key="index"
        class="relative aspect-square bg-netural-netural-400"
      >
        <div
          class="absolute inset-0 h-full w-full pb-[50%] bg-cover bg-no-repeat bg-center img-overlay"
          style="
            background-image: url('https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800');
          "
        ></div>
        <div
          class="relative z-10 flex flex-col items-center justify-center h-full"
        >
          <h3
            class="[&:not(:last-child)]:mb-2 font-bold ch-heading-2 text-netural-netural-100"
          >
            金閣寺
          </h3>
          <p class="font-bold ch-heading-3 text-netural-netural-100">
            とうきょうタワー
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-20 pb-[180px] bg-netural-netural-100">
    <div class="container">
      <div
        class="px-8 py-2 [&:not(:last-child)]:mb-20 border-l border-netural-netural-400"
      >
        <h2 class="[&:not(:last-child)]:mb-3 en-title">LATEST ARTICLE</h2>
        <p class="font-bold ch-heading-3">最新文章</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-for="(item, index) in 6" :key="index">
          <div class="mb-20">
            <div class="flex w-full">
              <img
                src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
                class="w-full h-[280px] object-cover"
                alt=""
              />
            </div>
            <div
              class="relative z-10 -mt-[84px] ml-[110px] py-6 px-[32px] bg-netural-netural-100"
            >
              <div class="[&:not(:last-child)]:mb-5">
                <h3 class="flex items-start [&:not(:last-child)]:mb-2">
                  <p
                    class="font-bold ch-heading-4 text-secondary-secondary-100"
                  >
                    東京行程規劃 帶你看日本 東京五天四夜花費
                  </p>
                </h3>
                <div>
                  <p
                    class="font-normal ch-body text-netural-netural-300 line-clamp-5"
                  >
                    東京行程怎麼規劃？東京五天四夜還是七日遊、八日遊好？想要把東京晴空塔、淺草寺、上野動物園等特色景點逛好逛滿，又想在東京迪士尼樂園玩上一整天，亦或是計畫前往東京近郊泡溫泉、滑雪嗎？從成田機場抵達東京市區的選擇相當多，其中最舒適便捷的方式就是搭乘京成電鐵Skyliner，抵達京成上野站只要40分鐘左右，單程票價約2,570日元（台幣560元），全程不需要換車，相當划算，計畫東京行程時一定得安排進去！
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <img
                  class="flex-shrink-0 w-8 h-8 [&:not(:last-child)]:mt-1 [&:not(:last-child)]:mr-4 object-cover rounded-full"
                  src="https://images.pexels.com/photos/9833110/pexels-photo-9833110.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <div class="flex flex-col">
                  <p class="ch-caption-1 font-bold text-netural-netural-400">
                    行程規劃小編
                  </p>
                  <p class="ch-caption-1 font-normal text-netural-netural-300">
                    12,Dec 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <!-- <div class="flex flex-wrap justify-between">
        <template v-for="(item, index) in 6" :key="index">
          <div
            class="w-[calc((theme(spacing.full)/3)-(theme(spacing.6)-theme(spacing.6)/3))] [&:nth-child(3n)]:mr-0 mb-20 mr-6"
          >
            <div class="flex w-full">
              <img
                src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800"
                class="w-full h-[280px] object-cover"
                alt=""
              />
            </div>
            <div
              class="relative z-10 -mt-[84px] ml-[110px] py-6 px-[32px] bg-netural-netural-100"
            >
              <div class="[&:not(:last-child)]:mb-5">
                <h3 class="flex items-start [&:not(:last-child)]:mb-2">
                  <p
                    class="font-bold ch-heading-4 text-secondary-secondary-100"
                  >
                    東京行程規劃 帶你看日本 東京五天四夜花費
                  </p>
                </h3>
                <div>
                  <p
                    class="font-normal ch-body text-netural-netural-300 line-clamp-5"
                  >
                    東京行程怎麼規劃？東京五天四夜還是七日遊、八日遊好？想要把東京晴空塔、淺草寺、上野動物園等特色景點逛好逛滿，又想在東京迪士尼樂園玩上一整天，亦或是計畫前往東京近郊泡溫泉、滑雪嗎？從成田機場抵達東京市區的選擇相當多，其中最舒適便捷的方式就是搭乘京成電鐵Skyliner，抵達京成上野站只要40分鐘左右，單程票價約2,570日元（台幣560元），全程不需要換車，相當划算，計畫東京行程時一定得安排進去！
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <img
                  class="flex-shrink-0 w-8 h-8 [&:not(:last-child)]:mt-1 [&:not(:last-child)]:mr-4 object-cover rounded-full"
                  src="https://images.pexels.com/photos/9833110/pexels-photo-9833110.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <div class="flex flex-col">
                  <p class="ch-caption-1 font-bold text-netural-netural-400">
                    行程規劃小編
                  </p>
                  <p class="ch-caption-1 font-normal text-netural-netural-300">
                    12,Dec 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div> -->
      <div class="flex justify-end">
        <div
          class="flex items-center w-60 py-4 px-8 border-b-4 border-netural-netural-400 group transition-all ease-in-out duration-500 hover:bg-netural-netural-400 cursor-pointer"
        >
          <p
            class="en-body text-netural-netural-400 transition-all ease-in-out duration-500 group-hover:text-netural-netural-100"
          >
            KNOW MORE
          </p>
          <div
            class="w-8 h-8 opacity-0 transition-all ease-in-out duration-500 group-hover:ml-8 group-hover:opacity-100 group-hover:bg-netural-netural-100 icon-arrow"
          ></div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-20 bg-primary-primary-100">
    <div class="container [&:not(:last-child)]:mb-20">
      <div class="px-8 py-2 border-l border-netural-netural-400">
        <h2 class="[&:not(:last-child)]:mb-3 en-title">WHAT TO DO IN JAPAN</h2>
        <p class="font-bold ch-heading-3">在日本可以做什麼</p>
      </div>
    </div>
    <!-- <div class="relative flex gap-6 h-[746px]">
      <div class="w-[35%] h-[80%]">
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div class="left-[calc(35%+24px)] w-[20%] h-[60%]">
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div
        class="relative left-[calc(35%+24px)] top-[calc(60%+24px)] w-[20%] h-[40%]"
      >
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div class="relative left-[calc(55%+24px*2)] top-0 w-[35%] h-[40%]">
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div
        class="relative left-[calc(55%+24px*2)] top-[calc(40%+24px)] w-[42.8%] h-[40%]"
      >
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
    </div> -->
    <div class="grid grid-rows-4 grid-cols-9 grid-flow-col gap-6">
      <div class="col-span-3 row-span-3">
        <div class="overflow-hidden relative flex h-[636px]">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_hotel.jpg"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-hotel"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              住宿
            </h3>
          </div>
        </div>
      </div>
      <div class="col-span-2 row-span-2">
        <div class="overflow-hidden relative flex h-[420px]">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_food.jpg"
            alt=""
          />
          <div
            class="absolute left-0 top-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-100"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-secondary-secondary-200 icon-icecream"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-secondary-secondary-200"
            >
              美食
            </h3>
          </div>
        </div>
      </div>
      <div class="col-span-2 row-span-2">
        <div class="overflow-hidden relative flex h-[306px]">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_experience.jpg"
            alt=""
          />
          <div
            class="absolute left-0 top-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-200"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-skateboarding"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              玩 / 體驗
            </h3>
          </div>
        </div>
      </div>
      <div class="col-span-3 row-span-2">
        <div class="overflow-hidden relative flex h-[306px] -mr-[55px]">
          <img
            class="w-full h-full ml-[110px] object-cover"
            src="@/assets/images/img/image/thing_mall.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-secondary-secondary-200"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-netural-netural-100 icon-mall"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-netural-netural-100"
            >
              購物
            </h3>
          </div>
        </div>
      </div>
      <div class="col-span-4 row-span-2 h-[416px] -mt-[114px]">
        <div class="overflow-hidden relative flex h-full">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/img/image/thing_temple.jpg"
            alt=""
          />
          <div
            class="absolute left-0 bottom-0 flex flex-col items-center justify-center w-[196px] h-[196px] bg-primary-primary-100"
          >
            <div
              class="w-12 h-12 [&:not(:last-child)]:mb-2 transition-all ease-in-out duration-300 bg-secondary-secondary-200 icon-temple"
            ></div>
            <h3
              class="overflow-hidden ch-heading-3 font-bold text-secondary-secondary-200"
            >
              自然 / 古蹟
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
