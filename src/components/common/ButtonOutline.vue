<script setup>
    const props = defineProps({
        text: {
            type: String,
            default: "Button"
        },
        className: {
            type: String,
            default: ""
        }
    })
</script>

<template>
    <button type="button" class="py-2 px-5 me-2 mb-2 text-sm font-medium text-default-500 focus:outline-none bg-white rounded-lg border border-default-500 hover:bg-default-500 duration-200 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-default-500 dark:hover:text-white dark:hover:bg-gray-700" :class="props.className">{{props.text}}</button>
</template>