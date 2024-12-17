import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore('blogStore', () => {
    const blogs = ref([]);

    function uploadBlogs (data) {
        blogs.value = data;
    }

    function getBlogDetail (id) {
        return blogs.value.find(blog => blog.id === Number(id));
    }

    return {uploadBlogs , getBlogDetail}
})