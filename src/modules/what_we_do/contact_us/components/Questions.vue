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
    <div class="bg-slate-200 py-10">
        <Container>
            <p class="text-default-500 font-semibold">FAQ</p>
            <h1 class="text-3xl font-semibold text-slate-700">Frequently Asked Questions</h1>

            <div class="mt-10 grid grid-cols-2 gap-10">
                <div class="col-span-1">
                    <div>
                        <div 
                            v-for="(item) in questions" 
                            :key="item.id" 
                            @click="toggle(item.id)" 
                            class="bg-[#f7f7ef] rounded-2xl p-4 cursor-pointer group mb-3"
                            >
                            <div :class="`flex justify-between ${item.isOpen ? 'mb-4' : 'mb-0'}`">
                                <h3 class="text-md font-normal">{{ item.id }}. {{ item.question }}</h3>
                                <div>
                                <!-- Plus icon -->
                                <svg 
                                    v-if="!item.isOpen"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="3" 
                                    stroke="currentColor" 
                                    class="size-5 text-default-500">
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
                                    class="size-5 text-default-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                </div>
                            </div>
    
                            <!-- Answer paragraph -->
                            <p :class="`text-slate-600 duration-300 text-sm ${item.isOpen ? 'h-14' : 'h-0 opacity-0'}`">
                                {{ item.answer }}
                            </p>
                            </div>
                    </div>
                </div>

                <div class="col-span-1 mx-[100px]">
                    <h2 class="text-2xl font-semibold text-slate-700">Ask a different question</h2>
                    <form action="" class="mt-10">
                        <div class="relative z-0 w-full mb-8 group">
                            <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-slate-700 bg-transparent border-0 border-b-2 border-default-500 appearance-none focus:outline-none focus:ring-0 focus:border-default-500 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-default-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-default-500 peer-focus:dark:text-default-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-slate-700 bg-transparent border-0 border-b-2 border-default-500 appearance-none focus:outline-none focus:ring-0 focus:border-default-500 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-default-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-default-500 peer-focus:dark:text-default-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div class="relative z-0 w-full mb-8 group">
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-slate-700 bg-transparent rounded-lg border-0 border-b-2 border-default-500 focus:ring-default-500 focus:border-default-500 appearance-none focus:outline-none focus:ring-0 peer " placeholder=""></textarea>
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-default-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-default-500 peer-focus:dark:text-default-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>
                        <div class="flex justify-end">
                            <Button text="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    </div>
</template>
