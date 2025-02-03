<script setup>
import { CircleCheck } from 'lucide-vue-next';

</script>

<template>
    <div class="flex items-center gap-10 ">
        <img class="w-[30%]" src="@/assets/images/whatWeDo/highfive.svg" alt="">
        <div>
            <h3 class="mb-7 text-2xl font-bold text-slate-700">Why Partner With Us?</h3>
            <div class="flex gap-5 mb-3">
                <CircleCheck class="text-green-500" :size="18" />
                <p>
                    <span class="font-bold">Shared Vision:</span> We believe in building long-term relationships that align with mutual growth and success.
                </p>
            </div>
            <div class="flex gap-5 mb-3">
                <CircleCheck class="text-green-500" :size="18" />
                <p>
                    <span class="font-bold">Collaborative Culture:</span> Our team thrives on collaboration, innovation, and mutual respect.
                </p>
            </div>
            <div class="flex gap-5 mb-3">
                <CircleCheck class="text-green-500" :size="18" />
                <p>
                    <span class="font-bold">Endless Opportunities:</span> Grow your network, expand your horizons, and achieve your professional goals with us.
                </p>
            </div>
        </div>
    </div>
</template>