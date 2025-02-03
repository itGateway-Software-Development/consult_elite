<script setup>
    defineProps({
        scrollToForm: {
            type: Function,
            required: true
        }
    })
</script>

<template>
    <div class="flex justify-between items-center mb-32">
        <div>
            <h2 class="text-4xl font-bold text-slate-700 mb-10">Work With Us</h2>
            <p class="pe-0 xl:pe-48 mb-5">
                At <span class="text-[#ee4723] font-bold">Consult Elite</span>, we’re always looking for talented individuals and visionary partners to join us. Whether you’re an innovator, a collaborator, or simply someone who shares our passion for learning and growth, there’s a place for you here.
            </p>
            <Button @click="scrollToForm" text="Submit Your Profile" />
        </div>
        <img class="w-[50%]" src="@/assets/images/whatWeDo/aggrement.svg" alt="">
    </div>
</template>