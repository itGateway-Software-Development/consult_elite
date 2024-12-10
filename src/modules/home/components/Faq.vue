<script setup>
    import { ref } from 'vue';

    const questions = ref([
        {
            id: 1,
            question: "How to get admission in abroad universities?",
            answer: "Norway, USA, UK, Germany & Italy are among the safest countries for Bangladeshi students for higher studies.",
            isOpen: false, // Controls if the answer is visible
        },
        {
            id: 2,
            question: "What are the admission requirements?",
            answer: "The admission requirements typically include academic transcripts, letters of recommendation, English proficiency, and standardized test scores.",
            isOpen: false,
        },
        {
            id: 3,
            question: "How to apply for a student visa?",
            answer: "You need an acceptance letter from a university, proof of financial ability, and other supporting documents to apply for a student visa.",
            isOpen: false,
        },
        {
            id: 4,
            question: "What are the popular countries for higher education?",
            answer: "Some of the most popular countries for higher education include the USA, UK, Canada, Australia, and Germany.",
            isOpen: false,
        },
        {
            id: 5,
            question: "How much does it cost to study abroad?",
            answer: "The cost of studying abroad varies by country and university, but it typically includes tuition fees, living expenses, and other costs like health insurance.",
            isOpen: false,
        },
        {
            id: 6,
            question: "Are there scholarships available for international students?",
            answer: "Yes, many universities and organizations offer scholarships for international students. Research is key to finding the right one for your qualifications.",
            isOpen: false,
        }
    ]);


    const toggle = (index) => {
        questions.value.forEach((item) => {
            if (item.id === index) {
                item.isOpen = !item.isOpen;
            } else {
                item.isOpen = false;
            }
        });
    };
</script>

<template>
    <section class=" bg-slate-200 py-20 mb-20 rounded-[4rem]">
        <Container customClass="pt-8">
            <div class="grid grid-cols-2 gap-10">
                <div class="flex flex-col justify-center h-[400px]">
                    <h3 class="mb-4 text-secondary-700 font-bold">FAQ</h3>
                    <SectionHeader title="Frequently Asked Questions" />
                    <h3 class="my-14 text-xl font-semibold text-slate-700">
                        Still do you have any questions to know? <br>
                        Feel free to ask our experts here.
                    </h3>
                    <div>
                        <ButtonOutline text="Contact Us" />
                    </div>
                </div>
                <div>
                    <div 
                        v-for="(item) in questions" 
                        :key="item.id" 
                        @click="toggle(item.id)" 
                        class="bg-[#f7f7ef] rounded-2xl p-5 cursor-pointer group mb-3"
                        >
                        <div :class="`flex justify-between ${item.isOpen ? 'mb-4' : 'mb-0'}`">
                            <h3 class="text-lg font-normal">{{ item.id }}. {{ item.question }}</h3>
                            <div>
                            <!-- Plus icon -->
                            <svg 
                                v-if="!item.isOpen"
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="3" 
                                stroke="currentColor" 
                                class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            <!-- Minus icon -->
                            <svg 
                                v-else
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="3" 
                                stroke="currentColor" 
                                class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                            </svg>
                            </div>
                        </div>

                        <!-- Answer paragraph -->
                        <p :class="`text-slate-600 duration-300 ${item.isOpen ? 'h-14' : 'h-0 opacity-0'}`">
                            {{ item.answer }}
                        </p>
                        </div>
                </div>
            </div>
        </Container>
    </section>
</template>