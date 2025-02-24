<script setup>
    import { computed, watch } from 'vue';
    import getSocialProof from '../composables/getSocialProof'
    import { useLocaleStore } from '@/store/useLocaleStore';


    const {data, error, load} = getSocialProof();
    const localeStore = useLocaleStore(); 
    const locale = computed(() => localeStore.locale);

    load();

</script>

<template>
    <section class="my-20">
        <Container>
            <dl class="grid sm:grid-cols-4 gap-5 ps-5">
                <div class="flex flex-col items-start pe-10" v-for="item in data" :key="item.id">
                    <dt class="mb-2 text-3xl text-default-500 md:text-5xl font-extrabold"> {{locale == 'EN' ? item.rate_count_eng : item.rate_count_mm}} </dt>
                    <dd v-html="locale == 'EN' ? item.description_eng : item.description_mm" class="text-slate-500 mt-2"/>
                </div>   
            </dl>
        </Container>
      </section>
</template>