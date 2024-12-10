<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay} from 'swiper/modules'
import { ref } from "vue";
import 'swiper/css/autoplay'
import NavigateButtons from "@/components/common/NavigateButtons.vue";


const swiperRef = ref(null);
const modules = [Autoplay]
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
const prev = () => {
  swiperRef.value.slidePrev();
};
const next = () => {
  swiperRef.value.slideNext();
};

const images = [
    require("@/assets/images/mainPage/stu1.png"),
    require("@/assets/images/mainPage/stu2.png"),
    require("@/assets/images/mainPage/stu3.png"),
    require("@/assets/images/mainPage/stu1.png"),
    require("@/assets/images/mainPage/stu2.png"),
    require("@/assets/images/mainPage/stu3.png"),
]

</script>

<template>
  <Container customClass="mb-20">
    <div class="flex justify-between items-center">
      <div class="header">
        <p class="font-bold text-lg text-slate-600">50+ Success Stories</p>
        <h1 class="text-3xl font-bold">
          From Dreamer <span class="text-secondary-500">to Achievers</span>
        </h1>
      </div>

      <NavigateButtons :next="next" :prev="prev" />
    </div>

    <div class="mt-10">
      <Swiper
        ref="swiperRef"
        :modules="modules"
        :slides-per-view="4"
        :space-between="30"
        :autoplay="true"
        :speed="300"
        :loop="true"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(image, i) in images" :i>
          <div class="shadow-lg">
            <img
            :src="image"
            alt="Slide 1"
          />
            <div class="bg-white p-3 flex items-center gap-2 rounded-lg text-slate-600">
               <img class="w-12 h-12" src="@/assets/images/mainPage/pallaviProfile.png" alt="">
               <h2 class="text-xs 2xl:text-sm">
                    <span class="font-bold">John Doe,</span> studing at <br> Standford University
                    <img class="w-5 inline-block ms-2" src="@/assets/images/mainPage/usFlag.png" alt="">
                </h2>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
  </Container>
</template>
