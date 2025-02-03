<script setup>
import { ArrowUpRight } from 'lucide-vue-next';

    const props = defineProps({
        title: {
            type: String,
            default: "Section Header"
        },
        link_name: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        }
    })
</script>
<template>
    <div class="flex justify-between">
        <div class="relative">
            <h2 class="text-3xl font-bold mb-3">{{props.title}}</h2>
            <div class="absolute w-12 h-2 bg-secondary-500 rounded-lg -mt-2"></div>
        </div>
        <div class="flex gap-1 me-5 underline underline-offset-4 text-secondary-500 font-bold hover:text-default-500" v-if="link_name">
            <RouterLink class=""  :to="link">{{link_name}}</RouterLink>
            <ArrowUpRight class="" />
        </div>
    </div>
</template>