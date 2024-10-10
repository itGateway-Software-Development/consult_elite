<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: "Section Header"
        }
    })
</script>
<template>
    <div class="relative">
        <h2 class="text-3xl font-bold mb-3">{{props.title}}</h2>
        <div class="absolute w-12 h-2 bg-secondary-500 rounded-lg -mt-2"></div>
    </div>
</template>