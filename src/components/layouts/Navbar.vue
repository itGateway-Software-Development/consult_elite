<script setup>
import Logo from "@/assets/images/logo.png";
import StudyAbroad from "../navbarDropdown/StudyAbroad.vue";
import StudentsService from "../navbarDropdown/StudentsService.vue";
import WhatWeDo from "../navbarDropdown/WhatWeDo.vue";
import Business from "../navbarDropdown/Business.vue";import { ref } from "vue";

const isScroll = ref(false)

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { 
      isScroll.value = true;
    } else {
      isScroll.value = false
    }
  });
</script>

<template>
  <nav :class="`fixed top-0 left-0 w-full z-50 bg-[#f7f7ef] ${isScroll ? 'shadow' : ''}`">
    <div
      class="flex justify-between items-center max-w-screen-xl 2xl:max-w-screen-2xl mx-auto p-4"
    >
      <div class="logo">
        <img class="w-48" :src="Logo" alt="logo" />
      </div>

      <div class="menus">
        <ul class="flex gap-7">
          <li class="cursor-pointer hover:text-[#ee4723] duration-150">
            <span class="font-semibold text-[#ee4723]">Home</span>
          </li>
          <li
            class="flex items-center gap-1 group cursor-pointer duration-150 relative"
          >
            <span class="font-semibold group-hover:text-[#ee4723]"
              >Study Abroad</span
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
              >Business</span
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
            <span class="font-semibold">Student Services</span>
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
            class="flex items-center gap-1 group cursor-pointer hover:text-[#ee4723] duration-150 relative"
          >
            <span class="font-semibold">What We Do</span>
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
            <WhatWeDo />
          </li>
          <li class="cursor-pointer hover:text-[#ee4723] duration-150">
            <span class="font-semibold">Blog</span>
          </li>
        </ul>
      </div>

      <div>
        <Button text="Get Started" />
      </div>
    </div>
  </nav>
</template>
