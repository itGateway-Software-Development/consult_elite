<script setup>
    defineProps({
        customClass: {
            type: String,
            default: ""
        },
        isNav: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
    <section :class="`max-w-screen-xl 2xl:max-w-screen-2xl mx-auto ${isNav ? 'py-4' : 'py-8'} px-20 ${customClass}`">
        <slot />
    </section>
</template>