<script setup>
import getBlogs from '@/modules/blog/composables/getBlogs';
import {useLocaleStore} from '@/store/useLocaleStore';
import { computed } from 'vue';

const {blogs, errors, load} = getBlogs();
load();

const localeStore = useLocaleStore();
const locale = computed(() => localeStore.locale);

</script>

<template>
    <Container customClass="mb-20">
        <SectionHeader title="Top Blogs" />
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            <div class="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="(blog, i) in blogs.slice(0, 6)" :key="i">
                <img class="rounded-t-lg h-64 object-cover w-full" :src="blog.image" alt="" />
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-lg 2xl:text-xl font-bold tracking-tight text-slate-900 dark:text-white">{{ locale == 'EN' ? blog.title_eng : blog.title_mm }}</h5>
                    </a>
                    <p class="mb-3 font-normal text-sm 2xl:text-base text-gray-700 dark:text-gray-400 line-clamp-4" v-html="locale == 'EN' ? blog.content_eng : blog.content_mm"></p>
                    <RouterLink :to="`/blogs/${blog.id}`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-default-500 rounded-lg hover:bg-default-500 focus:ring-4 focus:outline-none focus:ring-default-300 dark:bg-default-600 dark:hover:bg-default-700 dark:focus:ring-default-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </RouterLink>
                </div>
            </div>
        </div>
    </Container>
</template>