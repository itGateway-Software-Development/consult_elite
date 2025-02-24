<script setup>
import { useBlogStore } from "@/store/useBlogStore";
import { Clock, ArrowLeft } from "lucide-vue-next";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import {useLocaleStore} from "@/store/useLocaleStore";

const route = useRoute();
const id = route.params.id;
const blogStore = useBlogStore();
const localeStore = useLocaleStore();
const locale = computed(() => localeStore.locale);

const blog = computed(() => blogStore.getBlogDetail(Number(id)));

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <Container>
    <div class="w-[700px] mx-auto">
      <RouterLink
        to="/blogs"
        class="bg-slate-200 hover:bg-[#ee4723] duration-150 w-10 h-10 flex items-center justify-center rounded-full"
        ><ArrowLeft class="w-5 h-5 text-slate-700 hover:text-white"
      /></RouterLink>
      <div class="mt-3" v-if="blog">
        <div class="w-full mx-auto">
          <img class="w-full h-full object-cover" :src="blog.image" alt="" />
        </div>
        <div class="mt-7">
          <p class="text-sm text-slate-600 mb-3 flex items-center gap-2">
            <Clock class="w-5 h-5" /> {{ blog.date }}
          </p>
          <h1 class="text-xl font-bold text-slate-700 mb-3">
            {{ locale == 'EN' ? blog.title_eng : blog.title_mm }}
          </h1>
          <div>
            <span v-html="locale == 'EN' ? blog.content_eng : blog.content_mm" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
