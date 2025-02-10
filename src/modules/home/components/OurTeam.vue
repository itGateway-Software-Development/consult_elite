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

const team_members = [
        {
            img: require('@/assets/images/whatWeDo/aboutus/team-ceo.jpg'),
            name: 'Mrs. Yin Yin Cho',
            position: 'Founder & President',
            department: 'CEO',
            education: 'Paris Graduate School of Management and a Bachelor of Science in Physics (Q) from Mandalay University'
        }, 
        {
            img: require('@/assets/images/whatWeDo/aboutus/staff1.jpg'),
            name: 'Ms. May Han Chi',
            position: 'Sales & Marketing Director',
            department: 'Management Team',
            education: '2nd Semester -Psychology, Green River College, Auburn Campus, Washington State, United States of America.'
        },
        {
            img: require('@/assets/images/whatWeDo/aboutus/staff2.jpg'),
            name: 'Mrs. Thin Thin Hlaing',
            position: 'Human Resource and Operations Director',
            department: 'Management Team',
            education: 'Bachelor of Arts in English, Mandalay University.'
        }
    ]

</script>

<template>
  <Container customClass="mb-20">
    <SectionHeader title="Our Team" link_name="About Us" link="/what-we-do/about-us"/>

    <div class="flex justify-between items-center">
     

      <!-- <NavigateButtons :next="next" :prev="prev" /> -->
    </div>

    <div class="mt-10 rounded-2xl overflow-hidden">
      <Swiper
        ref="swiperRef"
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :autoplay="true"
        :speed="300"
        :loop="true"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(member, i) in team_members" :key="i">
          <div class="flex items-center gap-10 bg-slate-300 p-10 px-20 rounded-2xl overflow-hidden">
            <img
                :src="member.img"
                alt="Slide 1"
                class="w-72 h-72 object-cover object-top rounded-full"
            />
            <div class="flex flex-col gap-1">
                <h2 class="text-2xl font-bold">{{ member.name }}</h2>
                <h3 class="text-lg text-slate-600 font-bold">{{ member.position }}</h3>
                <h3 class="text-lg text-slate-700 font-bold">({{ member.department }})</h3>
                <p class="pe-20 mt-5">{{ member.education }}</p>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
  </Container>
</template>
