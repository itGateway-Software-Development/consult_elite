<script setup>
    import { useMainPageStore } from '@/store/useMainPageStore';
    import { storeToRefs } from 'pinia';

    const {services} = storeToRefs(useMainPageStore()) 
</script>

<template>
    <section class="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-8 px-20 mb-20">
        <SectionHeader title="Our Services" />
        <div class="mt-10">
            <div class="grid grid-cols-3 gap-5">
                <div class="col-span-1" v-for="(service, i) in services" :key="i">
                    <div class="card shadow-lg border border-slate-200 rounded-lg py-7 px-10 flex flex-col gap-5 cursor-pointer hover:translate-y-[-0.5rem] transition hover:border-default-400 duration-300">
                        <div v-html="service.icon"></div>
                            <h3 class="font-semibold text-xl">{{service.title}}</h3>     
                            <p class="text-slate-600 line-clamp-3">
                                {{ service.text }}
                            </p>            
                            
                            <div class="flex items-center gap-3 text-default-900 font-semibold">
                                <RouterLink :to="service.to" class="btn-primary">Learn more </RouterLink>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>