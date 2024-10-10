<script setup>

</script>

<template>
    <section class="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-8 px-20 mb-20">
        <SectionHeader title="Top Ranking Partner" />
        <p class="mt-6 text-slate-600">
            Here are the top universities according to the QS World Rankings. Consult Elite is proud to partner with these esteemed institutions
        </p>

        <div class="mt-10 px-20">
            <div class="grid grid-cols-4">
                <div class="col-span-1 flex justify-center items-center mb-8" v-for="i in 8" :key="i">
                    <img class="w-56" :src="require(`@/assets/images/mainPage/p${i}.png`)" alt="">
                </div>
            </div>
        </div>
    </section>
</template>