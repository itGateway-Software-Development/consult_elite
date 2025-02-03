<script setup>
    const props = defineProps({
        text: {
            type: String,
            default: "Button"
        }
    })
</script>

<template>
    <button type="button" class="text-white border border-default-500 bg-default-500 hover:bg-white hover:text-default-500 duration-200 focus:ring-4 focus:ring-default-500 font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 active:scale-95 transition-transform">{{props.text}}</button>
</template>