<script setup>
import { useRouter } from "vue-router";
import { useLocaleStore } from "@/store/useLocaleStore";

import Logo from "@/assets/images/consult.png";
import StudyAbroad from "../navbarDropdown/StudyAbroad.vue";
import StudentsService from "../navbarDropdown/StudentsService.vue";
import WhatWeDo from "../navbarDropdown/WhatWeDo.vue";
import Business from "../navbarDropdown/Business.vue";
import { ref } from "vue";

const isScroll = ref(false)
const router = useRouter();
const locale = ref("EN"); 
const localeStore = useLocaleStore();

const switchLocale = (newLocale) => {
    localeStore.updateLocale(newLocale);
    locale.value = newLocale;
};

const getParentRoute = () => {
  let route_segments = router.currentRoute.value.path.split('/').filter(Boolean)
  return route_segments[0] || '/';
}

const goContact = () => router.push('/what-we-do/contact-us')

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { 
      isScroll.value = true;
    } else {
      isScroll.value = false
    }
  });
</script>

<template>
  <nav :class="`fixed top-0 left-0 w-full z-[999] bg-[#f7f7ef] ${isScroll ? 'shadow' : ''}`">
    <Container isNav customClass="flex justify-between items-center py-4">
      <div class="logo">
        <RouterLink to="/">
          <img class="w-40 2xl:w-48" :src="Logo" alt="logo" />
        </RouterLink>
      </div>

      <div class="menus -mt-2">
        <ul class="flex gap-5 2xl:gap-7 text-[14px] 2xl:text-[16px]">
          <li class="cursor-pointer hover:text-[#ee4723] duration-150">
            <RouterLink to="/">
              <span :class="`font-semibold ${getParentRoute() === '/' ? 'text-[#ee4723]' : ''}`">{{$t("home")}}</span>
            </RouterLink>
          </li>
          <li
            class="flex items-center gap-1 group cursor-pointer duration-150 relative"
          >
            <span class="font-semibold group-hover:text-[#ee4723]"
              >{{$t('study_abroad')}}</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-4 transition-transform duration-300 group-hover:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <StudyAbroad />
          </li>
          <li
            class="flex items-center gap-1 group cursor-pointer duration-150 relative"
          >
            <span class="font-semibold group-hover:text-[#ee4723]"
              >{{$t('business')}}</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-4 transition-transform duration-300 group-hover:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <Business />
          </li>
          <li
            class="flex items-center gap-1 group cursor-pointer hover:text-[#ee4723] duration-150 relative"
          >
            <span class="font-semibold">{{$t('our_services')}}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-4 transition-transform duration-300 group-hover:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <StudentsService />
          </li>
          <li
            :class="`flex items-center gap-1 group cursor-pointer hover:text-[#ee4723] duration-150 relative ${getParentRoute() === 'what-we-do' ? 'text-[#ee4723]' : ''}`"
          >
            <span :class="`font-semibold`">{{$t('what_we_do')}}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              :class="`size-4 transition-transform duration-300 group-hover:rotate-180`"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <WhatWeDo />
          </li>
          <RouterLink to="/blogs">
              <li :class="`cursor-pointer hover:text-[#ee4723] duration-150 ${getParentRoute() == 'blogs' ? 'text-[#ee4723]' : ''}`">
                <span class="font-semibold">{{$t('blog')}}</span>
              </li>
          </RouterLink>
        </ul>
      </div>

      <div class="flex items-center gap-2">
        <li
            class="flex items-center gap-1 group cursor-pointer hover:text-[#ee4723] duration-150 relative -mt-2 me-2"
          >
            <span class="font-semibold text-sm flex items-center gap-2">
              <img v-if="locale == 'EN'" class="w-6 h-6" src="@/assets/images/lang/us.png" alt="">
              <img v-else class="w-6 h-6" src="@/assets/images/lang/mm.png" alt="">
              {{ locale == 'EN' ? 'ENG' : 'MM' }}
            </span>

            <ul class="absolute top-8 bg-[#fff]/30 border border-t-default-400 backdrop-blur-lg shadow-lg p-2 rounded-lg -ml-10 w-30 flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
              <li class="font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200 flex items-center gap-2" @click="switchLocale('EN')"> 
                <img class="w-6 h-6" src="@/assets/images/lang/us.png" alt=""> ENG
              </li>
              <li class="font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200 flex items-center gap-2" @click="switchLocale('MM')">
                <img class="w-6 h-6" src="@/assets/images/lang/mm.png" alt=""> MM
              </li>
            </ul>
          </li>
        <Button @click="goContact" :text="$t('contact_us')" />
      </div>
    </Container>
  </nav>
</template>
