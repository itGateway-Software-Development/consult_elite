<script setup>

</script>

<template>
    <Container customClass="mb-20">
        <SectionHeader title="Currently Applied Colleges" />
        <p class="mt-6 text-slate-600">
            Here are the currently applied colleges.
        </p>

        <div class="mt-10 px-20">
            <div class="grid grid-cols-4 gap-3">
                <div class="col-span-1 flex justify-center items-center bg-slate-200 p-2 rounded-2xl h-28" v-for="i in 12" :key="i">
                    <img class="w-48" :src="require(`@/assets/images/mainPage/partners/p${i}.png`)" alt="">
                </div>
            </div>
        </div>
    </Container>
</template>