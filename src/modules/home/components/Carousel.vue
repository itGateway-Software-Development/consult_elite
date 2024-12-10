<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { ref } from "vue";
import CarouselNavigationBtn from "./CarouselNavigationBtn.vue";

const modules = [Scrollbar, Autoplay];
const swiperRef = ref(null);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
const prev = () => {
  swiperRef.value.slidePrev();
};
const next = () => {
  swiperRef.value.slideNext();
};

const carousels = [
  require("@/assets/images/mainPage/carousel/c1.jpg"),
  require("@/assets/images/mainPage/carousel/c2.jpg"),
  require("@/assets/images/mainPage/carousel/c3.jpg"),
  require("@/assets/images/mainPage/carousel/c4.jpeg"),
  require("@/assets/images/mainPage/carousel/c5.jpeg"),
];
</script>

<template>
  <div class="relative">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :speed="300"
      :autoplay="true"
      :scrollbar="{ draggable: true }"
      :loop="true"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(image, index) in carousels" :key="index">
        <img class="w-full h-[650px] object-cover" :src="image" alt="" />
      </swiper-slide>
    </swiper>
    <div class="absolute top-16 2xl:top-32 z-50 left-56">
      <h1 class="text-5xl leading-relaxed text-slate-100 font-bold">
        Dream, Discover & Conquer <br />
        with <span class="font-bold text-[#ee4723]">Consult Elite</span> Your
        <br />
        Study Abroad Partner
      </h1>
      <p class="mt-5 text-slate-100">
        Ready to start your overseas education journey? Reach out <br />
        to our <span class="font-semibold">Consult Elite's</span> expert country
        counselors today!
      </p>
      <div class="flex mt-10">
        <Button text="Book Free Consultation" />
        <ButtonOutline text="Contact Us" />
      </div>
    </div>
   <CarouselNavigationBtn :prev="prev" :next="next" />
  </div>
</template>
