import { api } from "@/modules/utils/utils";
import axios from "axios";
import { ref } from "vue"

import {useBlogStore} from "@/store/useBlogStore";

let getBlogs = () => {
    const blogs = ref([]);
    const errors = ref();
    const blogStore = useBlogStore();

    const load = async() => {
        try {
            let response = await axios.get(api + "blogs");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            blogs.value = response.data.blogs;
            blogStore.uploadBlogs(response.data.blogs);
        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {blogs, errors, load}
}

export default getBlogs;