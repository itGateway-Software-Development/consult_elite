<script setup>
    import StudentPic from '@/assets/images/mainPage/header-img.png'
    import Plane from '@/assets/images/mainPage/plane.png'
</script>

<template>
    <section class="z-0 mb-20">
        <div class="grid max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-8 px-20 lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
            <div class="place-self-center lg:col-span-7 pe-32">
                <h1 class="text-5xl leading-relaxed text-slate-800">
                    Dream, Discover & Conquer with <span class="font-bold text-[#ee4723]">Consult Elite</span> Your Study Abroad Partner
                </h1>
                <p class="mt-5 text-slate-700">
                    Ready to start your overseas education journey? Reach out to our <span class="font-semibold">Consult Elite's</span> expert country counselors today!
                </p>
                <div class="flex mt-10">
                    <Button text="Book Free Consultation" />
                    <ButtonOutline text="Contact Us" />
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <div class="relative">
                    <img :src="StudentPic" class="z-20 " alt="student">
                    <img class="absolute top-0 right-0" :src="Plane" alt="">
                </div>
            </div>                
        </div>
    </section>
</template>