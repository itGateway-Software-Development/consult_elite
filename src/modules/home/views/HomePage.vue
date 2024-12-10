<script setup >
import Blog from '@/modules/home/components/Blog.vue';
import Carousel from '@/modules/home/components/Carousel.vue';
import ContactForm from '@/modules/home/components/ContactForm.vue';
import Faq from '@/modules/home/components/Faq.vue';
import Founder from '@/modules/home/components/Founder.vue';
import OurServices from '@/modules/home/components/OurServices.vue';
import ReadyToBegin from '@/modules/home/components/ReadyToBegin.vue';
import SocialProof from '@/modules/home/components/SocialProof.vue';
import StudyAbroadStep from '@/modules/home/components/StudyAbroadStep.vue';
import SuccessStory from '@/modules/home/components/SuccessStory.vue';
import TopRankPartner from '@/modules/home/components/TopRankPartner.vue';
import TrendingCourses from '@/modules/home/components/TrendingCourses.vue';
</script>

<template>
  <div class="home">
    <Carousel />
    <SocialProof />
    <ContactForm />
    <OurServices />
    <SuccessStory />
    <Founder />
    <TopRankPartner />
    <TrendingCourses />
    <StudyAbroadStep />
    <Blog />
    <Faq />
    <ReadyToBegin />
  </div>
</template>
