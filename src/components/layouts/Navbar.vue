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
      class="flex justify-between items-center max-w-screen-xl 2xl:max-w-screen-2xl mx-auto p-4 px-20"
    >
      <div class="logo">
        <RouterLink to="/">
          <img class="w-40 2xl:w-48" :src="Logo" alt="logo" />
        </RouterLink>
      </div>

      <div class="menus -mt-2">
        <ul class="flex gap-5 2xl:gap-7 text-[14px] 2xl:text-[16px]">
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

      <div class="flex items-center gap-1">
        <div class="-mt-2 group">
          <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer  dark:hover:bg-gray-700 dark:hover:text-white">
            <svg class="w-5 h-5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>
            English
          </button>
          <ul class="absolute top-14 bg-[#fff]/30 border border-t-default-400 backdrop-blur-lg shadow-lg p-2 rounded-lg -ml-10 w-40 cursor-pointer flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
            <li class="font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200 flex gap-1">
              <svg class="w-5 h-5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
                <rect width="900" height="200" fill="#FECB00"/>
                <rect y="200" width="900" height="200" fill="#34B233"/>
                <rect y="400" width="900" height="200" fill="#EA2839"/>
                <polygon fill="#FFFFFF" points="450,100 496.44,267.32 675,267.32 527.78,355.36 574.22,522.68 450,434.64 325.78,522.68 372.22,355.36 225,267.32 403.56,267.32"/>
              </svg>
              Myanmar              
            </li>
            <li class="font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200 flex gap-1">
              <svg class="w-5 h-5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>
            English
            </li>
          </ul>
        </div>
        <Button text="Get Started" />
      </div>
    </div>
  </nav>
</template>
