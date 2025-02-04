<script setup>
import Mission from '../components/Mission.vue';
import HeadSection from '../components/HeadSection.vue';
import OurTeam from '../components/OurTeam.vue';
import EduBanner from '../components/EduBanner.vue';
import Vision from '../components/Vision.vue';
import { onMounted } from 'vue';

onMounted(() => {
       window.scrollTo(0, 0);
})

</script>

<template>
       <HeadSection />
       <OurTeam />
       <Mission />
       <EduBanner />
       <Vision />
</template>