<script setup>
import { onMounted } from 'vue';

    onMounted(() => {
        window.scrollTo(0, 0);
    })
</script>
<template>
    <Container class="mt-20">
        <div class="grid grid-cols-2 gap-10">
            <div class="col-span-1">
                <h3 class="text-3xl text-slate-700 font-bold mb-3">What We Do</h3>
                <p class="text-gray-700 text-justify mb-3">
                    Where dreams take flight and futures are shaped. We are dedicated to guiding students on their journey to international education, providing expert support in university admissions, scholarships, and visa applications.
                </p>
                <p class="text-gray-700 text-justify mb-3">
                    At Consult Elite, we believe that every student deserves the opportunity to explore the world through education. Our team offers personalized guidance, helping you navigate the complexities of studying abroad with confidence and ease. Whether you aspire to study in the United States, Malaysia, or other top destinations in Asia, we ensure a smooth and successful transition.
                </p>
                <p class="text-gray-700 text-justify mb-3">
                    Your future begins with the right choices, and we are here to illuminate the path. Let us help you turn your aspirations into reality with expert advice, unwavering support, and a commitment to your success.
                </p>
            </div>
            <div class="col-span-1">
                <img src="@/assets/images/whatWeDo/what_we_do.svg" alt="">
            </div>
        </div>

        <div class="grid grid-cols-2 gap-10 mt-40 align-center">
            <div class="col-span-1">
                <img src="@/assets/images/whatWeDo/what_we_will_do.svg" alt="">
            </div>
            <div class="col-span-1">
                <h3 class="text-3xl text-slate-700 font-bold mb-3">What We Will Do</h3>
                <p class="text-gray-700 text-justify mb-3">
                    Consult Elite is a premier educational consultancy offering a wide range of services to help students navigate their academic journeys and achieve their dreams of studying abroad. Our team of expert counselors specializes in matching students to the best universities, colleges, and schools based on their unique skills, interests, and career goals.
                </p>
                <p class="text-gray-700 text-justify mb-3">
                    With a wealth of experience and in-depth knowledge of the global education sector, we partner with highly reputable and accredited institutions worldwide, ensuring that our students gain access to top-tier academic opportunities. We also provide valuable support to help students improve their language proficiency and meet the entry requirements of their chosen institutions, whether through direct admission or pathway programs.
                </p>
                <p class="text-gray-700 text-justify mb-3">
                    Our services extend beyond university applications. We assist students with all aspects of their study abroad experience, including visa assistance, travel arrangements, securing affordable accommodation, and organizing airport pick-ups. As students transition into a new cultural and academic environment, we guide them through the adjustment process and provide continuous support throughout their academic journey, ensuring they thrive in their new surroundings.
                </p>
                <p class="text-gray-700 text-justify mb-3">
                    At Consult Elite, we are committed to providing comprehensive, personalized services that empower students to succeed in their studies and beyond.
                </p>
            </div>
        </div>
    </Container>
</template>