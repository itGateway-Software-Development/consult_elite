<script setup>

</script>

<template>
    <Container customClass="mb-20">
        <SectionHeader title="Top Ranking Partners" />
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
    </Container>
</template>