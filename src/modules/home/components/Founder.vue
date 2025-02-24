<script setup>
    import Founder from "@/assets/images/mainPage/founder.jpg"
</script>

<template>
    <section  class=" bg-slate-200 py-5 mb-20 rounded-[4rem]">
        <Container customClass="relative">
            <div class="grid grid-cols-2 gap-7 2xl:gap-5 items-center">
                <div class="col-span-1 flex justify-center items-center">
                    <img class="w-[500px] h-[500px] object-cover object-center rounded-lg" :src="Founder" alt="">
                </div>
                <div class="col-span-1">
                    <div class="flex flex-col gap-5">
                        <h1 class="text-4xl font-italic font-bold">Welcome to Consult Elite</h1>
                        <h3 class="font-italic text-xl">Ms. Yin Yin Cho, Founder & CEO of Consult Elite</h3>
                        <div class="flex flex-col gap-5">
                            <p class="text-md text-slate-900">Welcome to Consult Elite, your trusted partner for expert solutions. We provide tailored advice to help you achieve your goals efficiently.</p>
    
                            <p class="text-md text-slate-900">At Consult Elite, we believe in empowering businesses with actionable insights. Our team is committed to delivering top-tier consulting services to guide you.</p>
    
                            <p class="text-md text-slate-900">Welcome to Consult Elite, where innovation meets strategy. We help you navigate complex challenges with personalized, expert-driven guidance.</p>
    
                            <p class="text-md text-slate-900">Consult Elite is here to transform your vision into reality with practical advice. Our expertise ensures your business thrives in today's competitive landscape.</p>
    
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>