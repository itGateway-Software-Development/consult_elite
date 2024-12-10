<script setup>
    const props = defineProps({
        course: {
            type: Object
        }
    })
</script>

<template>
    <div class="col-span-1">
        <div class="bg-white h-80 rounded-3xl overflow-hidden shadow group transition-all relative cursor-pointer">
            <img class="w-full h-60 group-hover:h-full group-hover:brightness-50 duration-300 object-cover rounded-3xl" :src="props.course.image" alt="Computer Science">
            <div class="flex flex-col gap-5 justify-center items-center h-20 group-hover:absolute group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:bg-white/30 backdrop-blur-sm duration-300">
                <h1 class="font-bold text-2xl text-center text-slate-800 z-10 group-hover:text-3xl group-hover:text-white">{{ props.course.title }}</h1>
                <div class="hidden group-hover:flex group-hover:items-center gap-2">
                    <span class="text-default-500">Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-default-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                      
                </div>
            </div>
        </div>
    </div>
</template>