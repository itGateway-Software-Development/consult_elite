<script setup>
    import { onMounted } from 'vue';

    onMounted(() => {
        window.scrollTo(0, 0);
    })
</script>
<template>
    <Container>
        <div class="mt-10 flex justify-between">
            <div class="w-[35%] 2xl:w-[30%]">
                <div class="w-[340px] h-[340px] bg-yellow-300 rounded-full flex justify-center items-center">
                    <img class="w-[300px] h-[300px] rounded-full object-cover border-4 border-white" src="@/assets/images/whatWeDo/founder.jpg" alt="">
                </div>

                <div class="mt-10">
                    <h3 class="font-bold text-lg text-slate-800">Business Consultant</h3>
                    <h3 class="font-bold text-lg text-slate-800">Head of Supply Chain</h3>
                    <h3 class="font-bold text-lg text-slate-800">Lecturer and Regional Consultant</h3>
                </div>

                <div class="mt-16">
                    <div class="w-[50%] h-[10px] bg-yellow-300 mb-4"></div>
                    <div class="w-[50%] h-[10px] bg-yellow-300 mb-4"></div>
                    <div class="w-[50%] h-[10px] bg-yellow-300"></div>
                </div>
            </div>
            <div class="w-[65%] 2xl:w-[70%]">
                <h1 class="text-2xl font-bold text-slate-700 mb-5">Founder & President Ms. Yin Yin Cho</h1>
                <p class="text-slate-800 text-justify mb-4">
                    <span class="text-secondary-500 font-bold">Ms. Yin Yin Cho</span> is the Founder and President of Consult Elite Company Limited, bringing over 15 years of expertise in supply chain management, logistics, and business operations within international FMCG sectors. Her extensive background includes leading supply chain processes, procurement, and distribution, where she has successfully optimized operations and improved efficiency for numerous organizations in dynamic environments.
                </p>
                <p class="text-slate-800 text-justify mb-4">
                    In addition to her business accomplishments, Ms. Cho actively assists students aiming to pursue higher education in the United States, Malay, and Asia countries. Through Consult Elite, she provides comprehensive guidance on academic applications, visa processes, and strategic planning for international education, helping students successfully navigate the complexities of studying abroad.
                </p>
                <p class="text-slate-800 text-justify mb-4">
                    With an IEMBA in Supply Chain Management from the Paris Graduate School of Management and a Bachelor of Science in Physics (Q) from Mandalay University, she also holds an Advanced Diploma in Business Administration from the Association of Business Executives, UK. These credentials underpin her strong foundation in business management and supply chain expertise.
                </p>
                <p class="text-slate-800 text-justify mb-4">
                    Ms. Cho has built a strong consulting portfolio, including her role as a Business Consultant at UFlex Ltd. from May 2023 to January 2024, where she focused on market research, client relationships, and strategic advice on product demand and market suitability. She also managed service agreements and collaborations, driving sales and increasing brand awareness.
                    Additionally, from June 2018 to January 2020, Ms. Cho served as a Lecturer and Regional Consultant at Business Institute Yangon, PASAS Education Singapore, and Nanyang International College, teaching modules on business strategy and management, achieving exceptional exam results with a 93% outcome
                </p>
                <p class="text-slate-800 text-justify mb-4">
                    Beyond her current work, Ms. Cho has also coached businesses, specializing in supply chain management, e-commerce, and e-trading. She leverages her vast experience to offer tailored solutions that help companies enhance operational efficiency, streamline supply chain processes, and thrive in the digital marketplace.
                </p>
                <p class="text-slate-800 text-justify mb-4">
                    Her vision is to continue leveraging her expertise to support both students and businesses in achieving their goals, providing practical advice and strategies that drive sustainable growth and success.
                </p>
            </div>
        </div>
    </Container>
</template>