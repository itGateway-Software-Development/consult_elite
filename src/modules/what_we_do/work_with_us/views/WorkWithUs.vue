<script setup>
import { onMounted } from 'vue';
import WhyPartnerWithUs from '../components/WhyPartnerWithUs.vue';
import ContactForm from '../components/ContactForm.vue';
import HeroSection from '../components/HeroSection.vue';

const scrollToForm = () => {
    const formEl = document.querySelector('#partner-submit-from');
    const offset = 120; 
    const top = formEl.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
}

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <Container>
        <HeroSection :scrollToForm="scrollToForm" />

        <WhyPartnerWithUs />

        <ContactForm />
    </Container>
</template>