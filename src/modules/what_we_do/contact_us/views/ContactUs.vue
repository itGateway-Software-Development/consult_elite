<script setup>
import { onMounted } from 'vue';
import ContactInfo from '../components/ContactInfo.vue';
import HeadForm from '../components/HeadForm.vue';
import OfficeTime from '../components/OfficeTime.vue';
import Questions from '../components/Questions.vue';

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <div>
        <HeadForm />
        <ContactInfo />
        <OfficeTime />
        <Questions />
    </div>
</template>