<script setup>
import CourseCard from '@/components/common/CourseCard.vue';
import { useMainPageStore } from '@/store/useMainPageStore';
import { storeToRefs } from 'pinia';

const {courses} = storeToRefs(useMainPageStore())

</script>

<template>
    <Container customClass="mb-20">
        <SectionHeader title="Discover Trending Courses in US" />

        <div class="grid grid-cols-3 gap-14 mt-14">
            <CourseCard v-for="(course, i) in courses" :key="i" :course="course"/>
        </div>
    </Container>
</template>