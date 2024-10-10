<script setup>
import { useMainPageStore } from '@/store/useMainPageStore';
import { storeToRefs } from 'pinia';
import CourseCard from '../common/CourseCard.vue'

    const {courses} = storeToRefs(useMainPageStore())
</script>

<template>
    <section class="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-8 px-20 mb-20">
        <SectionHeader title="Discover Trending Courses in US" />

        <div class="grid grid-cols-3 gap-14 mt-14">
            <CourseCard v-for="(course, i) in courses" :key="i" :course="course"/>
        </div>
    </section>
</template>