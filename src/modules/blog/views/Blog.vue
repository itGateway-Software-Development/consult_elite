<script setup>
import { onMounted } from 'vue';
import BlogCard from '../components/BlogCard.vue';
import BlogLoading from '../components/BlogLoading.vue';
import getBlogs from '../composables/getBlogs';

const {blogs, errors, load} = getBlogs();
load();

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <Container isNav>
        <div v-if="blogs.length > 0">
            <div class="rounded-lg overflow-hidden w-full h-[300px] relative mb-7">
                <img class="w-full brightness-75" src="@/assets/images/blogs/banner.jpg" alt="">
                <h1 class="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-500 italic text-5xl font-bold">Explore Our Blogs</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div class="col-span-1" v-for="(blog, i) in blogs" :key="i">
                    <BlogCard :blog="blog" />
                </div>
            </div>
        </div>
        <BlogLoading v-else />
    </Container>
</template>