<script setup >
import Blog from '@/components/mainpage/Blog.vue';
import Carousel from '@/components/mainpage/Carousel.vue';
import ContactForm from '@/components/mainpage/ContactForm.vue';
import Faq from '@/components/mainpage/Faq.vue';
import Founder from '@/components/mainpage/Founder.vue';
import OurServices from '@/components/mainpage/OurServices.vue';
import ReadyToBegin from '@/components/mainpage/ReadyToBegin.vue';
import SocialProof from '@/components/mainpage/SocialProof.vue';
import StudyAbroadStep from '@/components/mainpage/StudyAbroadStep.vue';
import SuccessStory from '@/components/mainpage/SuccessStory.vue';
import TopRankPartner from '@/components/mainpage/TopRankPartner.vue';
import TrendingCourses from '@/components/mainpage/TrendingCourses.vue';
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
