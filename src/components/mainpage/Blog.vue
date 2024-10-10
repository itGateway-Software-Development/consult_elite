<script setup>

</script>

<template>
    <section class="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-8 px-20 mb-20">
        <SectionHeader title="Top Blogs" />
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            <div class="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="i in 6" :key="i">
                <img class="rounded-t-lg h-64 object-cover w-full" :src="require(`@/assets/images/mainPage/b${i}.jpg`)" alt="" />
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-lg 2xl:text-xl font-bold tracking-tight text-slate-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-sm 2xl:text-base text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-default-500 rounded-lg hover:bg-default-500 focus:ring-4 focus:outline-none focus:ring-default-300 dark:bg-default-600 dark:hover:bg-default-700 dark:focus:ring-default-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>