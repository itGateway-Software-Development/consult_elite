<script setup>
import {Clock, ArrowRight} from 'lucide-vue-next'
    defineProps({
        blog: {
            type: Object
        }
    })
</script>

<template>
    <div class="bg-slate-200 rounded-lg pb-5 shadow-lg">
        <img class="w-full h-[250px] object-cover object-top rounded-lg" :src="blog.image" alt="">
        <div class="p-3">
            <div class="flex items-center text-sm gap-2 my-3 text-[#ee4723] font-bold">
                <Clock class="w-4 h-4 font-bold" />
                {{ blog.date }}
            </div>
            <h2 class="text-lg font-bold text-slate-700 line-clamp-2 mb-3 h-[55px]">{{ blog.title }}</h2>
            <p class="text-sm text-slate-600 line-clamp-4 mb-5">
                {{ blog.content }}
            </p>
            <RouterLink :to="`/blogs/${blog.id}`" class="flex items-center gap-2 text-[#ee4723]">Read More <ArrowRight class="w-5 h-5" /></RouterLink>
        </div>
    </div>
</template>