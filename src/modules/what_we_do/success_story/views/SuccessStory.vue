<script setup>
import getSuccessStory from '@/modules/home/composables/getSuccessStory';


const {success_stories, error, load} = getSuccessStory();

load();

</script>

<template>
    <Container>
        <div class="mt-5">
            <h2 class="text-3xl font-bold text-center text-slate-700">Our Success Story</h2>
        </div>

        <div class="my-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                <div class="col-span-1 shadow-xl rounded-lg overflow-hidden" v-for="(story, i) in success_stories" :key="i">
                    <img :src="story.image" alt="">
                    <div class="p-3">
                        <h2 class="font-bold">{{story.stu_name}}</h2>
                        <p>studing at <span class="text-secondary-500 font-bold">{{story.college_name}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>